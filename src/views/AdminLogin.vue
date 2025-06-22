<template>
  <div class="admin-login">
    <div class="login-container">
      <div class="login-card">
        <div class="login-header">
          <h1>Panel Administrativo</h1>
          <p>Nina Rojas - Administración del Sitio Web</p>
        </div>
        
        <form @submit.prevent="handleLogin" class="login-form">
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              v-model="email"
              required
              :disabled="loading"
              placeholder="Correo Electrónico"
            >
          </div>
          
          <div class="form-group">
            <label for="password">Contraseña</label>
            <input
              type="password"
              id="password"
              v-model="password"
              required
              :disabled="loading"
              placeholder="••••••••"
            >
          </div>
          
          <button 
            type="submit" 
            class="btn btn-primary login-btn"
            :disabled="loading"
          >
            <span v-if="loading">Iniciando sesión...</span>
            <span v-else>Iniciar Sesión</span>
          </button>
        </form>
        
        <div class="login-footer">
          <router-link to="/" class="back-link">← Volver al sitio web</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useAuth } from '../composables/useAuth'
import { useRouter, onBeforeRouteLeave } from 'vue-router'

const { login, isAuthenticated, initAuth } = useAuth()
const router = useRouter()

const email = ref('')
const password = ref('')
const loading = ref(false)
const loginError = ref('')

const handleLogin = async () => {
  if (!email.value || !password.value) {
    loginError.value = 'Por favor ingresa email y contraseña'
    return
  }
  
  loading.value = true
  loginError.value = ''
  
  try {
    const success = await login(email.value, password.value)
    if (success) {
      router.push('/admin')
    }
  } catch (error: any) {
    console.error('Login error:', error)
    loginError.value = 'Credenciales incorrectas. Por favor intenta de nuevo.'
  } finally {
    loading.value = false
  }
}

// Verificar autenticación al montar
onMounted(async () => {
  try {
    await initAuth()
    if (isAuthenticated.value) {
      router.push('/admin')
    }
  } catch (error) {
    console.error('Error al inicializar autenticación:', error)
  }
})

// Evitar que usuarios autenticados accedan a la página de login
const handleBeforeLeave = (to: any, _from: any, next: (route?: string | false) => void) => {
  if (to.path === '/admin' && isAuthenticated.value) {
    next()
  } else if (to.path === '/admin') {
    next(false)
  } else {
    next()
  }
}

onBeforeRouteLeave(handleBeforeLeave)
</script>

<style scoped>
.admin-login {
  min-height: 100vh;
  background: linear-gradient(135deg, #000 0%, #1a1a1a 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.login-container {
  width: 100%;
  max-width: 400px;
}

.login-card {
  background: linear-gradient(135deg, #1a1a1a, #0f0f0f);
  border: 1px solid rgba(255, 215, 0, 0.2);
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.login-header {
  text-align: center;
  margin-bottom: 40px;
}

.login-header h1 {
  color: #FFD700;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 10px;
}

.login-header p {
  color: #C0C0C0;
  font-size: 1rem;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  color: #C0C0C0;
  margin-bottom: 8px;
  font-weight: 500;
}

.form-group input {
  padding: 15px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 215, 0, 0.2);
  border-radius: 8px;
  color: #fff;
  font-size: 16px;
  transition: all 0.3s ease;
}

.form-group input:focus {
  outline: none;
  border-color: #FFD700;
  box-shadow: 0 0 0 3px rgba(255, 215, 0, 0.1);
}

.form-group input:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.login-btn {
  margin-top: 20px;
  width: 100%;
  padding: 15px;
  font-size: 16px;
  font-weight: 600;
}

.login-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
}

.login-footer {
  text-align: center;
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 215, 0, 0.1);
}

.back-link {
  color: #C0C0C0;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.back-link:hover {
  color: #FFD700;
}

@media (max-width: 480px) {
  .login-card {
    padding: 30px 20px;
  }
  
  .login-header h1 {
    font-size: 1.5rem;
  }
}
</style>