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
      auth.currentUser?.reload()
      
      const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
        user.value = firebaseUser
        authInitialized.value = true
        loading.value = false
        unsubscribe()
        resolve()
      }, (error) => {
        console.error('Error en autenticación:', error)
        authInitialized.value = true
        loading.value = false
        resolve()
      })

      // Timeout para asegurar que siempre se resuelva
      setTimeout(() => {
        if (!authInitialized.value) {
          authInitialized.value = true
          loading.value = false
          resolve()
        }
      }, 2000)
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