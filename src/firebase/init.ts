import { db } from './config'
import { collection, doc, setDoc, getDocs } from 'firebase/firestore'

export const initializeFirestore = async () => {
  // Crear colecciones iniciales si no existen
  const collections = ['content', 'services', 'audioDemos']
  
  for (const colName of collections) {
    const querySnapshot = await getDocs(collection(db, colName))
    if (querySnapshot.empty) {
      // La colección está vacía, agregamos un documento por defecto
      if (colName === 'content') {
        await setDoc(doc(db, 'content', 'hero'), {
          title: 'Nina Rojas',
          subtitle: 'Locutora Profesional',
          description: 'NR Max publicidad el arte de comunicar a un solo click.',
          stats: {
            projects: '500+',
            experience: '5',
            satisfaction: '100%'
          }
        })
      } else if (colName === 'services') {
        await setDoc(doc(db, 'services', 'default'), {
          title: 'Servicio de Ejemplo',
          description: 'Descripción del servicio',
          price: '$100',
          featured: true
        })
      }
    }
  }
}

export default initializeFirestore
