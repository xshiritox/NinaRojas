import { ref, computed } from 'vue'
import { signInWithEmailAndPassword, signOut, onAuthStateChanged, type User } from 'firebase/auth'
import { auth } from '../firebase/config'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'

const user = ref<User | null>(null)
const loading = ref(true)
const authInitialized = ref(false)

export const useAuth = () => {
  const router = useRouter()
  const toast = useToast()

  const isAuthenticated = computed(() => {
    if (!authInitialized.value) return false
    return !!user.value
  })

  const login = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      user.value = userCredential.user
      authInitialized.value = true
      toast.success('Inicio de sesión exitoso')
      return true
    } catch (error: any) {
      toast.error('Error al iniciar sesión: ' + error.message)
      throw error
    }
  }

  const logout = async () => {
    try {
      await signOut(auth)
      user.value = null
      authInitialized.value = true
      toast.success('Sesión cerrada')
      router.push('/')
    } catch (error: any) {
      toast.error('Error al cerrar sesión: ' + error.message)
    }
  }

  const initAuth = () => {
    return new Promise<void>((resolve) => {
      // Forzar la limpieza de la caché de autenticación
      if (auth.currentUser) {
        auth.currentUser.reload().catch((error) => {
          console.warn('Error al recargar el usuario:', error)
        })
      }
      
      // Configurar el observador de autenticación
      const unsubscribe = onAuthStateChanged(
        auth,
        (firebaseUser) => {
          // Usuario autenticado
          user.value = firebaseUser
          authInitialized.value = true
          loading.value = false
          resolve()
          
          // Limpiar el listener después de la primera verificación
          unsubscribe()
        },
        (error) => {
          // Error en la autenticación
          console.error('Error en la autenticación:', error)
          user.value = null
          authInitialized.value = true
          loading.value = false
          resolve()
          
          // Limpiar el listener en caso de error
          unsubscribe()
        }
      )
      
      // Timeout de seguridad en caso de que la autenticación nunca se resuelva
      const timeoutId = setTimeout(() => {
        if (!authInitialized.value) {
          console.warn('Timeout en la inicialización de autenticación')
          user.value = null
          authInitialized.value = true
          loading.value = false
          resolve()
        }
      }, 5000) // 5 segundos de timeout
      
      // Limpiar el timeout cuando se resuelva la promesa
      return () => {
        clearTimeout(timeoutId)
        unsubscribe()
      }
    })
  }

  return {
    user: user,
    loading,
    isAuthenticated,
    login,
    logout,
    initAuth,
    authInitialized: computed(() => authInitialized.value)
  }
}