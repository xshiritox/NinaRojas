import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  // Nota: El usuario necesitará configurar estas credenciales con su proyecto Firebase
  apiKey: "AIzaSyDgxx86TgNTKdl7EwevQTK4IDTl20MEnGY",
  authDomain: "ninarojasmp.firebaseapp.com",
  projectId: "ninarojasmp",
  storageBucket: "ninarojasmp.appspot.com",
  messagingSenderId: "818909449234",
  appId: "1:818909449234:web:c38311031eb326e0c3dccb"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
export default app