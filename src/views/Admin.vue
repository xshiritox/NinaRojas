<template>
  <div class="admin-panel">
    <!-- Admin Header -->
    <header class="admin-header">
      <div class="container">
        <div class="header-content">
          <div class="admin-brand">
            <h1>Panel Administrativo</h1>
            <span>Nina Rojas - Gestión de Contenido</span>
          </div>
          <div class="header-actions">
            <button @click="saveChanges" class="btn btn-primary" :disabled="saving">
              <Save class="btn-icon" />
              {{ saving ? 'Guardando...' : 'Guardar Cambios' }}
            </button>
            <button @click="logout" class="btn btn-secondary">
              <LogOut class="btn-icon" />
              Cerrar Sesión
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- Admin Content -->
    <main class="admin-content">
      <div class="container">
        <div class="admin-tabs">
          <button 
            v-for="tab in tabs" 
            :key="tab.id"
            @click="activeTab = tab.id"
            :class="{ active: activeTab === tab.id }"
            class="tab-button"
          >
            <component :is="tab.icon" class="tab-icon" />
            {{ tab.label }}
          </button>
        </div>

        <!-- Services Management -->
        <div v-if="activeTab === 'services'" class="admin-section">
          <div class="section-header">
            <h2 class="section-title">Gestión de Servicios</h2>
            <button @click="addService" class="btn btn-primary">
              <Plus class="btn-icon" />
              Agregar Servicio
            </button>
          </div>
          
          <div class="services-list">
            <div v-for="(service, index) in services" :key="service.id" class="service-item">
              <div class="service-editor">
                <div class="form-row">
                  <div class="form-group">
                    <label>Título</label>
                    <input v-model="service.title" type="text">
                  </div>
                  <div class="form-group">
                    <label>Precio</label>
                    <input v-model="service.price" type="text">
                  </div>
                </div>
                <div class="form-group">
                  <label>Descripción</label>
                  <textarea v-model="service.description" rows="3"></textarea> 
                </div>
                <div class="form-row">
                  <div class="checkbox-group">
                    <input type="checkbox" :id="'featured-' + service.id" v-model="service.featured">
                    <label :for="'featured-' + service.id">Servicio Destacado</label>
                  </div>
                  <button @click="removeService(index)" class="btn btn-danger">
                    <Trash2 class="btn-icon" />
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Portfolio Management -->
        <div v-if="activeTab === 'portfolio'" class="admin-section">
          <div class="section-header">
            <h2 class="section-title">Gestión de Portfolio</h2>
            <button @click="addDemo" class="btn btn-primary">
              <Plus class="btn-icon" />
              Agregar Demo
            </button>
          </div>
          
          <div class="demos-list">
            <div v-for="(demo, index) in audioDemos" :key="demo.id" class="demo-item">
              <div class="demo-editor">
                <div class="form-row">
                  <div class="form-group">
                    <label>Título</label>
                    <input v-model="demo.title" type="text">
                  </div>
                  <div class="form-group">
                    <label>Categoría</label>
                    <select v-model="demo.category">
                      <option value="Comerciales">Comerciales</option>
                      <option value="Documentales">Documentales</option>
                      <option value="E-learning">E-learning</option>
                      <option value="Audiolibros">Audiolibros</option>
                      <option value="Corporativo">Corporativo</option>
                    </select>
                  </div>
                </div>
                <div class="form-group">
                  <label>Descripción</label>
                  <textarea v-model="demo.description" rows="2"></textarea>
                </div>
                <div class="form-row">
                  <div class="form-group">
                    <label>URL del Audio</label>
                    <input v-model="demo.audioUrl" type="url" placeholder="https://ejemplo.com/audio.mp3">
                  </div>
                  <button @click="removeDemo(index)" class="btn btn-danger">
                    <Trash2 class="btn-icon" />
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { collection, onSnapshot, query, orderBy, doc, deleteDoc, writeBatch } from 'firebase/firestore'
import { db } from '../firebase/config'
import { 
  Save, 
  LogOut, 
  Plus, 
  Trash2, 
  Briefcase, 
  Music 
} from 'lucide-vue-next'
import { useAuth } from '../composables/useAuth'
import type { Service, AudioDemo } from '../composables/useContent'
import { useRouter } from 'vue-router'

const { logout, isAuthenticated, initAuth } = useAuth()
const router = useRouter()

// Referencias a las colecciones de Firebase
const servicesRef = collection(db, 'services')
const portfolioRef = collection(db, 'portfolio')

// Detener la escucha de cambios
let unsubscribeServices: () => void
let unsubscribePortfolio: () => void

const activeTab = ref('hero')
const saving = ref(false)

const tabs = [
  { id: 'services', label: 'Servicios', icon: Briefcase },
  { id: 'portfolio', label: 'Portfolio', icon: Music }
]

const services = ref<Service[]>([])
const audioDemos = ref<AudioDemo[]>([])

const addService = () => {
  const newService: Service = {
    id: Date.now().toString(),
    title: '',
    description: '',
    price: '',
    featured: false
  }
  services.value.push(newService)
}

const removeService = async (index: number) => {
  const service = services.value[index]
  try {
    await deleteDoc(doc(servicesRef, service.id))
    services.value.splice(index, 1)
  } catch (error) {
    console.error('Error al eliminar el servicio:', error)
  }
}

const addDemo = () => {
  const newDemo: AudioDemo = {
    id: Date.now().toString(),
    title: '',
    description: '',
    audioUrl: '',
    category: ''
  }
  audioDemos.value.push(newDemo)
}

const removeDemo = async (index: number) => {
  const demo = audioDemos.value[index]
  try {
    await deleteDoc(doc(portfolioRef, demo.id))
    audioDemos.value.splice(index, 1)
  } catch (error) {
    console.error('Error al eliminar el demo:', error)
  }
}

// Guardar cambios en Firebase
const saveChanges = async () => {
  saving.value = true
  try {
    const batch = writeBatch(db)
    
    // Actualizar servicios
    services.value.forEach(service => {
      const serviceRef = doc(servicesRef, service.id)
      batch.set(serviceRef, {
        title: service.title,
        description: service.description,
        price: service.price,
        featured: service.featured || false
      }, { merge: true })
    })
    
    // Actualizar portfolio
    audioDemos.value.forEach(demo => {
      const demoRef = doc(portfolioRef, demo.id)
      batch.set(demoRef, {
        title: demo.title,
        description: demo.description,
        audioUrl: demo.audioUrl,
        category: demo.category
      }, { merge: true })
    })
    
    await batch.commit()
    console.log('Cambios guardados exitosamente')
  } catch (error) {
    console.error('Error al guardar cambios:', error)
  } finally {
    saving.value = false
  }
}

// Cargar datos en tiempo real
const loadRealtimeData = () => {
  // Cargar servicios
  const qServices = query(servicesRef, orderBy('title'))
  unsubscribeServices = onSnapshot(qServices, (snapshot) => {
    services.value = snapshot.docs.map(doc => ({
      id: doc.id,
      title: doc.data().title || '',
      description: doc.data().description || '',
      price: doc.data().price || '',
      featured: doc.data().featured || false
    }))
  })

  // Cargar portfolio
  const qPortfolio = query(portfolioRef, orderBy('title'))
  unsubscribePortfolio = onSnapshot(qPortfolio, (snapshot) => {
    audioDemos.value = snapshot.docs.map(doc => ({
      id: doc.id,
      title: doc.data().title || '',
      description: doc.data().description || '',
      audioUrl: doc.data().audioUrl || '',
      category: doc.data().category || ''
    }))
  })
}

// Limpiar suscripciones
const cleanup = () => {
  if (unsubscribeServices) unsubscribeServices()
  if (unsubscribePortfolio) unsubscribePortfolio()
}

onMounted(async () => {
  await initAuth()
  if (!isAuthenticated.value) {
    router.push('/admin/login')
  } else {
    loadRealtimeData()
  }
})

onUnmounted(() => {
  cleanup()
})
</script>

<style scoped>
.admin-panel {
  min-height: 100vh;
  background: #000;
  color: #fff;
}

/* Estilos para el selector de categorías */
select {
  background-color: #1a1a1a;
  color: #fff;
  border: 1px solid #333;
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 14px;
  width: 100%;
  transition: border-color 0.3s;
}

select:focus {
  outline: none;
  border-color: #FFD700;
  box-shadow: 0 0 0 2px rgba(255, 215, 0, 0.2);
}

select option {
  background-color: #1a1a1a;
  color: #fff;
  padding: 10px;
}

/* Estilo para cuando se abre el dropdown */
select option:checked {
  background-color: #FFD700;
  color: #000;
}

.admin-header {
  background: linear-gradient(135deg, #1a1a1a, #0f0f0f);
  border-bottom: 1px solid rgba(255, 215, 0, 0.2);
  padding: 20px 0;
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.admin-brand h1 {
  color: #FFD700;
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 5px;
}

.admin-brand span {
  color: #C0C0C0;
  font-size: 0.9rem;
}

.header-actions {
  display: flex;
  gap: 15px;
}

.btn-icon {
  width: 18px;
  height: 18px;
  margin-right: 8px;
}

.admin-content {
  padding: 40px 0;
}

.admin-tabs {
  display: flex;
  gap: 10px;
  margin-bottom: 40px;
  border-bottom: 1px solid rgba(255, 215, 0, 0.2);
  padding-bottom: 20px;
}

.tab-button {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  background: transparent;
  border: 1px solid rgba(255, 215, 0, 0.2);
  color: #C0C0C0;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
}

.tab-button.active,
.tab-button:hover {
  background: linear-gradient(135deg, #FFD700, #FFA500);
  color: #000;
  border-color: #FFD700;
}

.tab-icon {
  width: 18px;
  height: 18px;
}

.admin-section {
  background: linear-gradient(135deg, #1a1a1a, #0f0f0f);
  border: 1px solid rgba(255, 215, 0, 0.2);
  border-radius: 15px;
  padding: 30px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.section-title {
  color: #FFD700;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 20px;
}

.content-editor {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
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
  font-size: 0.9rem;
}

.form-group small {
  color: #888;
  font-size: 0.8rem;
  margin-top: 5px;
}

.form-group input,
.form-group textarea,
.form-group select {
  padding: 12px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 215, 0, 0.2);
  border-radius: 8px;
  color: #fff;
  font-size: 14px;
  transition: all 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus,
.form-group select:focus {
  outline: none;
  border-color: #FFD700;
  box-shadow: 0 0 0 3px rgba(255, 215, 0, 0.1);
}

.stats-editor h3 {
  color: #FFD700;
  margin-bottom: 15px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
}

.stat-item {
  display: flex;
  flex-direction: column;
}

.services-list,
.demos-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.service-item,
.demo-item {
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 215, 0, 0.1);
  border-radius: 10px;
  padding: 20px;
}

.service-editor,
.demo-editor {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.checkbox-group {
  display: flex;
  align-items: center;
  gap: 8px;
}

.checkbox-group input[type="checkbox"] {
  width: auto;
  margin: 0;
}

.checkbox-group label {
  margin: 0;
  color: #C0C0C0;
  cursor: pointer;
}

.btn-danger {
  background: linear-gradient(135deg, #ff4757, #ff3742);
  color: #fff;
  border: none;
}

.btn-danger:hover {
  background: linear-gradient(135deg, #ff3742, #ff2636);
}

@media (max-width: 1024px) {
  .header-actions {
    flex-direction: column;
    gap: 10px;
  }
  
  .form-row {
    grid-template-columns: 1fr;
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .admin-tabs {
    flex-wrap: wrap;
  }
  
  .tab-button {
    font-size: 0.9rem;
    padding: 10px 15px;
  }
  
  .admin-section {
    padding: 20px;
  }
  
  .section-header {
    flex-direction: column;
    gap: 15px;
    align-items: flex-start;
  }
}
</style>