import { ref } from 'vue'
import { 
  doc, 
  setDoc, 
  collection, 
  query, 
  where, 
  updateDoc, 
  serverTimestamp,
  QueryConstraint,
  CollectionReference,
  writeBatch,
  onSnapshot,
  getDocs
} from 'firebase/firestore'
import { db } from '../firebase/config'
import { useToast } from 'vue-toastification'

declare module 'vue' {
  interface ComponentCustomProperties {
    $toast: ReturnType<typeof useToast>
  }
}

export interface ContentSection {
  id: string
  title: string
  content: string
  order: number
}

export interface Service {
  id: string
  title: string
  description: string
  price?: string
  featured: boolean
}

export interface AudioDemo {
  id: string
  title: string
  description: string
  audioUrl: string
  category: string
}

export const useContent = () => {
  const toast = useToast()
  const loading = ref(false)
  const error = ref<string | null>(null)

  // Contenido en tiempo real
  const getContent = (sectionId: string, callback: (data: any) => void) => {
    const docRef = doc(db, 'content', sectionId)
    
    return onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        callback({ id: docSnap.id, ...docSnap.data() })
      } else {
        callback(null)
      }
    }, (err) => {
      error.value = 'Error en tiempo real: ' + err.message
      toast.error(error.value)
    })
  }

  const updateContent = async (collectionName: string, data: any[]): Promise<boolean> => {
    if (!Array.isArray(data)) {
      error.value = 'Los datos deben ser un array'
      toast.error(error.value)
      return false
    }
    
    loading.value = true
    error.value = null
    
    try {
      if (collectionName === 'hero' || collectionName === 'contact') {
        // Para contenido simple (hero, contact)
        const docRef = doc(db, 'content', collectionName)
        await setDoc(docRef, {
          ...data,
          updatedAt: serverTimestamp()
        }, { merge: true })
        return true
        
      } else if (collectionName === 'services' || collectionName === 'portfolio') {
        // Para colecciones (services, portfolio)
        if (!data.every(item => item && typeof item === 'object')) {
          throw new Error('Todos los elementos deben ser objetos válidos')
        }
        
        const collectionRef = collection(db, collectionName)
        const batch = writeBatch(db)
        
        // Obtener documentos existentes
        const snapshot = await getDocs(collectionRef)
        const existingDocs = new Map()
        
        // Mapear documentos existentes por ID si existe el campo 'id'
        snapshot.forEach(docItem => {
          existingDocs.set(docItem.id, docItem.ref)
        })
        
        // Procesar cada ítem de los datos
        const processedIds = new Set()
        
        for (const item of data) {
          if (!item) continue
          
          const itemData = { ...item }
          const itemId = itemData.id
          delete itemData.id // Firestore no permite el campo 'id' en los datos
          
          // Actualizar documento existente o crear uno nuevo
          if (itemId && existingDocs.has(itemId)) {
            const docRef = existingDocs.get(itemId)
            batch.update(docRef, {
              ...itemData,
              updatedAt: serverTimestamp()
            })
            processedIds.add(itemId)
          } else {
            // Crear nuevo documento
            const docRef = doc(collectionRef)
            batch.set(docRef, {
              ...itemData,
              createdAt: serverTimestamp(),
              updatedAt: serverTimestamp()
            })
          }
        }
        
        // Eliminar documentos que ya no están en los datos
        for (const [docId, docRef] of existingDocs.entries()) {
          if (!processedIds.has(docId)) {
            batch.delete(docRef as any)
          }
        }
        
        await batch.commit()
      }
      
      toast.success('Datos actualizados exitosamente')
      return true
    } catch (err: any) {
      console.error('Error en updateContent:', err)
      error.value = `Error al actualizar ${collectionName}: ${err.message}`
      toast.error(error.value)
      return false
    } finally {
      loading.value = false
    }
  }

  // Servicios en tiempo real
  const getServices = (callback: (services: Service[]) => void) => {
    const q = query(collection(db, 'services'))
    
    return onSnapshot(q, (querySnapshot) => {
      const services = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as Service))
      callback(services)
    }, (err) => {
      error.value = 'Error en tiempo real (servicios): ' + err.message
      toast.error(error.value)
    })
  }

  const updateService = async (id: string, serviceData: any) => {
    try {
      const docRef = doc(db, 'services', id)
      await updateDoc(docRef, {
        ...serviceData,
        updatedAt: serverTimestamp()
      })
      toast.success('Servicio actualizado exitosamente')
      return true
    } catch (err: any) {
      error.value = 'Error al actualizar servicio: ' + err.message
      toast.error(error.value)
      return false
    }
  }

  // Demos de audio en tiempo real
  const getAudioDemos = (callback: (demos: AudioDemo[]) => void, category?: string) => {
    const constraints: QueryConstraint[] = []
    
    if (category && category !== 'Todos') {
      constraints.push(where('category', '==', category))
    }
    
    const q = query(collection(db, 'audioDemos') as CollectionReference, ...constraints)
    
    return onSnapshot(q, (querySnapshot) => {
      const demos = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as AudioDemo))
      callback(demos)
    }, (err) => {
      error.value = 'Error en tiempo real (demos): ' + err.message
      toast.error(error.value)
    })
  }

  const updateAudioDemo = async (id: string, demoData: any) => {
    try {
      const docRef = doc(db, 'audioDemos', id)
      await updateDoc(docRef, {
        ...demoData,
        updatedAt: serverTimestamp()
      })
      toast.success('Demo actualizada exitosamente')
      return true
    } catch (err: any) {
      error.value = 'Error al actualizar demo: ' + err.message
      toast.error(error.value)
      return false
    }
  }

  return {
    // Contenido
    getContent,
    updateContent,
    
    // Servicios
    getServices,
    updateService,
    
    // Demos de audio
    getAudioDemos,
    updateAudioDemo,
    
    // Estado
    loading,
    error
  }
}