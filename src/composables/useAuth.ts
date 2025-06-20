import { ref, computed } from 'vue'
import { signInWithEmailAndPassword, signOut, onAuthStateChanged, User } from 'firebase/auth'
import { auth } from '../firebase/config'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'

const user = ref<User | null>(null)
const loading = ref(true)

export const useAuth = () => {
  const router = useRouter()
  const toast = useToast()

  const isAuthenticated = computed(() => !!user.value)

  const login = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      user.value = userCredential.user
      toast.success('Inicio de sesión exitoso')
      router.push('/admin')
    } catch (error: any) {
      toast.error('Error al iniciar sesión: ' + error.message)
      throw error
    }
  }

  const logout = async () => {
    try {
      await signOut(auth)
      user.value = null
      toast.success('Sesión cerrada')
      router.push('/')
    } catch (error: any) {
      toast.error('Error al cerrar sesión: ' + error.message)
    }
  }

  const initAuth = () => {
    onAuthStateChanged(auth, (firebaseUser) => {
      user.value = firebaseUser
      loading.value = false
    })
  }

  return {
    user: user,
    loading,
    isAuthenticated,
    login,
    logout,
    initAuth
  }
}