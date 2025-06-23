<template>
  <div class="home">
    <!-- Navigation -->
    <nav class="navbar">
      <div class="container">
        <div class="nav-content">
          <div class="logo">
            <div class="logo-image">
              <img :src="`${publicPath}logo.WebP`" alt="Nina Rojas Logo" class="logo-img" />
            </div>
            <div class="logo-text-container">
              <h1 class="logo-text">Nina Rojas - Locutora Profesional</h1>
              <p class="logo-subtitle">Voz Profesional para Publicidad y Medios</p>
            </div>
          </div>
          <div class="nav-links">
            <a href="#inicio" @click="scrollTo('inicio')">Inicio</a>
            <a href="#servicios" @click="scrollTo('servicios')">Servicios</a>
            <a href="#portfolio" @click="scrollTo('portfolio')">Portfolio</a>
            <a href="#contacto" @click="scrollTo('contacto')">Contacto</a>
          </div>
          <button class="menu-toggle" @click="toggleMobileMenu" aria-label="Menú de navegación" :aria-expanded="mobileMenuOpen">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <div class="mobile-menu" :class="{ active: mobileMenuOpen }" role="navigation" aria-label="Mobile Navigation">
      <div class="mobile-nav-links">
        <a href="#inicio" @click="scrollToMobile('inicio')">Inicio</a>
        <a href="#servicios" @click="scrollToMobile('servicios')">Servicios</a>
        <a href="#portfolio" @click="scrollToMobile('portfolio')">Portfolio</a>
        <a href="#contacto" @click="scrollToMobile('contacto')">Contacto</a>
      </div>
    </div>

    <!-- Hero Section -->
    <section id="inicio" class="hero" role="region" aria-label="Hero Section">
      <div class="hero-background"></div>
      <div class="container">
        <div class="hero-content">
          <div class="hero-logo" data-aos="fade-down" data-aos-duration="500" data-aos-delay="100">
            <img 
              :src="`${publicPath}logo.WebP`" 
              alt="Nina Rojas - Locutora Profesional" 
              class="hero-logo-img" 
              loading="eager"
              width="100"
              height="100"
              :style="{'--bg-color': '#FFD700'}"
            />
          </div>
          <div class="hero-title" data-aos="fade-up" data-aos-delay="200">
            <h2 class="highlight" data-aos="fade-up" data-aos-delay="300">Nina Rojas</h2>
            <p class="subtitle">Locución Profesional de Alto Impacto</p>
          </div>
          <p class="hero-description">
            NR Max publicidad el arte de comunicar a un solo click.
          </p>
          <div class="hero-stats">
            <div class="hero-stat">
              <span class="stat-number">+500</span>
              <span class="stat-label">Proyectos</span>
            </div>
            <div class="hero-stat">
              <span class="stat-number">10</span>
              <span class="stat-label">Años</span>
            </div>
            <div class="hero-stat">
              <span class="stat-number">100%</span>
              <span class="stat-label">Satisfacción</span>
            </div>
          </div>
          <div class="hero-actions">
            <a href="#portfolio" @click="scrollTo('portfolio')" class="btn btn-primary">
              <Mic class="btn-icon" />
              Escuchar
            </a>
            <a href="#contacto" @click="scrollTo('contacto')" class="btn btn-secondary">
              <Mail class="btn-icon" />
              Contactar
            </a>
          </div>
        </div>
        <div class="hero-visual">
          <div class="sound-wave">
            <div class="wave" v-for="i in 5" :key="i" :style="{ animationDelay: i * 0.1 + 's' }"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Servicios -->
    <section id="servicios" class="services section-padding">
      <div class="container">
        <div class="section-header" data-aos="fade-up">
          <h1 class="section-title">Servicios de Locución Profesional</h1>
          <div class="section-divider" data-aos="fade-up" data-aos-delay="100"></div>
          <p class="section-subtitle" data-aos="fade-up" data-aos-delay="150">Soluciones profesionales de voz para cada necesidad</p>
        </div>
        <div class="services-grid">
          <div 
            class="service-card" 
            v-for="(service, index) in services" 
            :key="service.id"
            data-aos="fade-up"
            :data-aos-delay="200 + (index * 100)"
          >
            <div class="service-icon" data-aos="zoom-in" :data-aos-delay="300 + (index * 100)">
              <img :src="`${publicPath}servicio.WebP`" :alt="service.title" class="service-icon-img" />
            </div>
            <h2 class="service-title">{{ service.title }}</h2>
            <p>{{ service.description }}</p>
            <div class="service-price" v-if="service.price">{{ service.price }}</div>
            <div class="service-badge" v-if="service.featured">Más Solicitado</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Portfolio -->
    <section id="portfolio" class="portfolio section-padding">
      <div class="container">
        <div class="section-header" data-aos="fade-up">
          <h1 class="section-title">Muestra de Trabajos de Locución</h1>
          <div class="section-divider" data-aos="fade-up" data-aos-delay="100"></div>
          <p class="section-subtitle" data-aos="fade-up" data-aos-delay="150">Escucha algunos de mis trabajos más destacados</p>
        </div>
        <div class="portfolio-tabs" data-aos="fade-up" data-aos-delay="200">
          <button 
            v-for="(category, index) in categories" 
            :key="category"
            @click="activeCategory = category"
            :class="{ active: activeCategory === category }"
            class="tab-button"
            :data-aos="'fade-up'"
            :data-aos-delay="200 + (index * 100)"
          >
            {{ category }}
          </button>
        </div>
        <div class="portfolio-grid">
          <div 
            v-for="(demo, index) in filteredDemos" 
            :key="demo.id"
            class="demo-card"
            data-aos="fade-up"
            :data-aos-delay="300 + (index * 100)"
          >
            <div class="demo-header">
              <h3>{{ demo.title }}</h3>
              <button @click="togglePlay(demo.id)" class="play-button" :aria-label="`${isPlaying(demo.id) ? 'Pausar' : 'Reproducir'} demo: ${demo.title}`">
                <Play v-if="!isPlaying(demo.id)" />
                <Pause v-else />
              </button>
            </div>
            <p>{{ demo.description }}</p>
            <div class="audio-progress">
              <div class="progress-bar" :style="{ width: getProgress(demo.id) + '%' }"></div>
            </div>
            <audio 
              :ref="'audio-' + demo.id" 
              :src="demo.audioUrl"
              @timeupdate="updateProgress($event)"
              @ended="stopPlay(demo.id)"
            ></audio>
          </div>
        </div>
      </div>
    </section>

    <!-- Contacto -->
    <section id="contacto" class="contact section-padding">
      <div class="container">
        <div class="section-header" data-aos="fade-up">
          <h1 class="section-title">Contrata una Locutora Profesional</h1>
          <div class="section-divider" data-aos="fade-up" data-aos-delay="100"></div>
          <p class="section-subtitle" data-aos="fade-up" data-aos-delay="150">¿Tienes un proyecto en mente? Hablemos</p>
        </div>
        <div class="contact-content">
          <div class="contact-info" data-aos="fade-right" data-aos-delay="200">
            <h2 class="contact-heading" data-aos="fade-right" data-aos-delay="250">Información de Contacto</h2>
            <div class="contact-item" data-aos="fade-right" data-aos-delay="250">
              <Mail class="contact-icon" />
              <div>
                <span class="contact-label">Email</span>
                <span class="contact-value">ninaymarco3@gmail.com</span>
              </div>
            </div>
            <div class="contact-item" data-aos="fade-right" data-aos-delay="300">
              <Phone class="contact-icon" />
              <div>
                <span class="contact-label">Teléfono</span>
                <span class="contact-value">+57 310 6035384</span>
              </div>
            </div>
            <div class="contact-item" data-aos="fade-right" data-aos-delay="350">
              <MapPin class="contact-icon" />
              <div>
                <span class="contact-label">Ubicación</span>
                <span class="contact-value">Colombia</span>
              </div>
            </div>
            <div class="contact-item" data-aos="fade-right" data-aos-delay="400">
              <Clock class="contact-icon" />
              <div>
                <span class="contact-label">Horario</span>
                <span class="contact-value">Lun - Vie: 9:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>
          <form @submit.prevent="submitForm" class="contact-form" data-aos="fade-left" data-aos-delay="200">
            <div class="form-group" data-aos="fade-left" data-aos-delay="250">
              <label for="name">Nombre *</label>
              <input type="text" id="name" v-model="form.name" required>
            </div>
            <div class="form-group" data-aos="fade-left" data-aos-delay="300">
              <label for="email">Email *</label>
              <input type="email" id="email" v-model="form.email" required>
            </div>
            <div class="form-group full-width" data-aos="fade-left" data-aos-delay="350">
              <label for="message">Mensaje *</label>
              <textarea id="message" v-model="form.message" rows="5" required></textarea>
            </div>
            <button 
              type="submit" 
              class="btn btn-primary" 
              :disabled="submitting" 
              aria-label="Enviar mensaje de contacto"
              data-aos="fade-up" 
              data-aos-delay="400"
            >
              <Send class="btn-icon" />
              {{ submitting ? 'Enviando...' : 'Enviar Mensaje' }}
            </button>
          </form>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-brand" data-aos="fade-up" data-aos-delay="100">
            <div class="logo" data-aos="fade-up" data-aos-delay="150">
              <div class="logo-image" data-aos="zoom-in" data-aos-delay="200">
                <img :src="`${publicPath}logo.WebP`" alt="Nina Rojas Logo" class="logo-img" />
              </div>
              <div class="logo-text-container" data-aos="fade-up" data-aos-delay="250">
                <span class="logo-text">Nina Rojas</span>
                <span class="logo-subtitle">Voz Profesional</span>
              </div>
            </div>
            <p data-aos="fade-up" data-aos-delay="300">NR Max publicidad el arte de comunicar a un solo click.</p>
          </div>
          <div class="footer-links">
            <div class="footer-section" data-aos="fade-up" data-aos-delay="200">
              <h4 data-aos="fade-up" data-aos-delay="250">Navegación</h4>
              <ul>
                <li data-aos="fade-up" data-aos-delay="300"><a href="#inicio" @click="scrollTo('inicio')">Inicio</a></li>
                <li data-aos="fade-up" data-aos-delay="350"><a href="#servicios" @click="scrollTo('servicios')">Servicios</a></li>
                <li data-aos="fade-up" data-aos-delay="400"><a href="#portfolio" @click="scrollTo('portfolio')">Portfolio</a></li>
                <li data-aos="fade-up" data-aos-delay="450"><a href="#contacto" @click="scrollTo('contacto')">Contacto</a></li>
              </ul>
            </div>
            <div class="footer-section" data-aos="fade-up" data-aos-delay="200">
              <h4 data-aos="fade-up" data-aos-delay="250">Contacto</h4>
              <ul>
                <li data-aos="fade-up" data-aos-delay="300">ninaymarco3@gmail.com</li>
                <li data-aos="fade-up" data-aos-delay="350">+57 310 6035384</li>
                <li data-aos="fade-up" data-aos-delay="400">Colombia</li>
              </ul>
            </div>

            <div class="footer-section" data-aos="fade-up" data-aos-delay="350">
              <h4 data-aos="fade-up" data-aos-delay="400">Síguenos en redes</h4>
              <ul class="social-links">
                <li data-aos="fade-up" data-aos-delay="450">
                  <a href="https://wa.me/573106035384" target="_blank" rel="noopener noreferrer" class="social-link whatsapp">
                    <MessageCircle class="social-icon" />
                    <span>WhatsApp</span>
                  </a>
                </li>
                <li data-aos="fade-up" data-aos-delay="500">
                  <a href="https://facebook.com/tupagina" target="_blank" rel="noopener noreferrer" class="social-link facebook">
                    <Facebook class="social-icon" />
                    <span>Facebook</span>
                  </a>
                </li>
                <li data-aos="fade-up" data-aos-delay="550">
                  <a href="https://instagram.com/tucuenta" target="_blank" rel="noopener noreferrer" class="social-link instagram">
                    <Instagram class="social-icon" />
                    <span>Instagram</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-bottom" data-aos="fade-up" data-aos-delay="300">
          <p data-aos="fade-up" data-aos-delay="350">&copy; 2025 Nina Rojas. Todos los derechos reservados.</p>
          <div class="admin-link" data-aos="fade-up" data-aos-delay="400">
            <router-link to="/admin/login" class="admin-link-text" @click="(e: Event) => { e.preventDefault(); $router.push('/admin/login'); }">Admin</router-link>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
// Vue and external dependencies
import { ref, computed, onMounted, onUnmounted } from 'vue'

declare global {
  interface Window {
    AOS: any;
  }
}
import { useHead } from '@vueuse/head'
import { db } from '../firebase/config'
import { collection, query, onSnapshot, orderBy, doc } from 'firebase/firestore'
import { 
  Mail, Phone, MapPin, Clock, Play, Pause, Send,
  MessageCircle, Facebook, Instagram, Mic
} from 'lucide-vue-next'
import { useToast } from 'vue-toastification'

// Base path for public assets
const publicPath = import.meta.env.BASE_URL;

// Initialize toast
const toast = useToast()

// Interfaces
interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  featured?: boolean;
}

interface AudioDemo {
  id: string;
  title: string;
  description: string;
  audioUrl: string;
  category: string;
}

// Datos estructurados para SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Nina Rojas - Locutora Profesional",
  "description": "Servicios profesionales de locución para publicidad, radio, televisión y más. Voz profesional con amplia experiencia en el sector.",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "CO",
    "addressRegion": "Colombia"
  },
  "telephone": "+573106035384",
  "email": "ninaymarco3@gmail.com",
  "url": "https://ninarojas.netlify.app",
  "priceRange": "$$",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/tu-pagina",
    "https://www.instagram.com/tu-cuenta",
    "https://www.linkedin.com/in/tu-perfil"
  ]
};

// Añadir al head
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(structuredData)
    }
  ]
});

// Datos reactivos
const services = ref<Service[]>([])
const audioDemos = ref<AudioDemo[]>([])
const heroContent = ref<any>({ title: 'Nina Rojas', subtitle: 'Voz Profesional' })
const contactInfo = ref<any>({
  email: '',
  phone: '',
  address: '',
  schedule: ''
})

// Inicializar el menú móvil como cerrado por defecto
const mobileMenuOpen = ref(false)
const activeCategory = ref('Todos')
const playingAudios = ref<Set<string>>(new Set())
const form = ref({
  name: '',
  email: '',
  message: ''
})
const submitting = ref(false)

const categories = computed(() => {
  const cats = ['Todos', ...new Set(audioDemos.value.map(demo => demo.category))]
  return cats
})

const filteredDemos = computed(() => {
  if (activeCategory.value === 'Todos') {
    return audioDemos.value
  }
  return audioDemos.value.filter(demo => demo.category === activeCategory.value)
})

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const scrollTo = (elementId: string) => {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const scrollToMobile = (elementId: string) => {
  scrollTo(elementId)
  mobileMenuOpen.value = false
}

const togglePlay = async (demoId: string) => {
  const audio = document.querySelector(`audio[src*="${demoId}"]`) as HTMLAudioElement
  if (!audio) return

  if (playingAudios.value.has(demoId)) {
    audio.pause()
    playingAudios.value.delete(demoId)
  } else {
    // Pause all other audios
    playingAudios.value.forEach(id => {
      const otherAudio = document.querySelector(`audio[src*="${id}"]`) as HTMLAudioElement
      if (otherAudio) otherAudio.pause()
    })
    playingAudios.value.clear()
    
    audio.play()
    playingAudios.value.add(demoId)
  }
}

const isPlaying = (demoId: string) => {
  return playingAudios.value.has(demoId)
}

const stopPlay = (demoId: string) => {
  playingAudios.value.delete(demoId)
}

const updateProgress = (_event: Event) => {
  // The progress bar is updated via getProgress
  // We still need the event handler for the timeupdate event
}

const getProgress = (demoId: string) => {
  const audio = document.querySelector(`audio[src*="${demoId}"]`) as HTMLAudioElement;
  if (!audio) return 0;
  return audio.duration ? (audio.currentTime / audio.duration) * 100 : 0;
}

const submitForm = async () => {
  submitting.value = true
  try {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    toast.success('Mensaje enviado exitosamente. Te contactaré pronto.')
    
    // Reset form
    form.value = {
      name: '',
      email: '',
      message: ''
    }
  } catch (error) {
    toast.error('Error al enviar el mensaje. Inténtalo de nuevo.')
  } finally {
    submitting.value = false
  }
}

// Variables para almacenar las funciones de limpieza
let servicesUnsubscribe: (() => void) | null = null;
let portfolioUnsubscribe: (() => void) | null = null;
let heroUnsubscribe: (() => void) | null = null;


let contactUnsubscribe: (() => void) | null = null;

// Función para cargar datos en tiempo real
const loadRealtimeData = () => {
  // Suscribirse a cambios en servicios
  const qServices = query(collection(db, 'services'), orderBy('title'));
  servicesUnsubscribe = onSnapshot(qServices, 
    (snapshot) => {
      services.value = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as Service));
    },
    (error) => {
      console.error('Error al cargar servicios:', error);
    }
  );

  // Suscribirse a cambios en el portfolio
  const qPortfolio = query(collection(db, 'portfolio'), orderBy('title'));
  portfolioUnsubscribe = onSnapshot(qPortfolio, 
    (snapshot) => {
      audioDemos.value = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as AudioDemo));
    },
    (error) => {
      console.error('Error al cargar el portfolio:', error);
    }
  );

  // Suscribirse a cambios en hero
  heroUnsubscribe = onSnapshot(
    doc(db, 'content', 'hero'),
    (doc) => {
      if (doc.exists()) {
        heroContent.value = { id: doc.id, ...doc.data() }
      }
    },
    (error) => {
      console.error('Error en suscripción a hero:', error)
    }
  );
  
  // Suscribirse a cambios en contacto
  contactUnsubscribe = onSnapshot(
    doc(db, 'content', 'contact'),
    (doc) => {
      if (doc.exists()) {
        contactInfo.value = { id: doc.id, ...doc.data() }
      }
    },
    (error) => {
      console.error('Error en suscripción a contacto:', error)
    }
  );
};

// Cargar AOS cuando el componente se monte
onMounted(() => {
  loadRealtimeData();
  
  // Cargar AOS de forma diferida
  const loadAOS = () => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/aos@next/dist/aos.js';
    script.async = true;
    script.onload = () => {
      window.AOS.init({
        duration: 600,
        once: true,
        easing: 'ease-in-out',
        offset: 20,
        delay: 100
      });
    };
    document.head.appendChild(script);
  };

  // Cargar AOS cuando el usuario esté inactivo
  if (window.requestIdleCallback) {
    window.requestIdleCallback(loadAOS, { timeout: 2000 });
  } else {
    // Fallback para navegadores que no soportan requestIdleCallback
    setTimeout(loadAOS, 0);
  }
});

// Limpiar suscripciones al desmontar el componente
onUnmounted(() => {
  if (servicesUnsubscribe) servicesUnsubscribe();
  if (portfolioUnsubscribe) portfolioUnsubscribe();
  if (heroUnsubscribe) heroUnsubscribe();
  if (contactUnsubscribe) contactUnsubscribe();
});
</script>

<style scoped>
/* Navigation */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(19, 19, 19, 0.95);
  backdrop-filter: blur(10px);
  z-index: 1000;
  padding: 12px 0;
  transition: all 0.3s ease;
}

.nav-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo-image {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 10px;
  background: linear-gradient(135deg, #FFD700, #FFA500);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  box-shadow: 0 0 15px rgba(255, 215, 0, 0.7);
  animation: logoGlow 3s ease-in-out infinite alternate;
}

.logo-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.logo-text-container {
  display: flex;
  flex-direction: column;
}

.logo-text {
  color: #FFD700;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.1;
}

.logo-subtitle {
  color: #C0C0C0;
  font-size: 11px;
  font-weight: 300;
  margin-top: 2px;
}

.nav-links {
  display: flex;
  gap: 20px;
}

.nav-links a {
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;
}

.nav-links a:hover {
  color: #FFD700;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: #FFD700;
  transition: width 0.3s ease;
}

.nav-links a:hover::after {
  width: 100%;
}

.menu-toggle {
  display: none; /* Oculto por defecto */
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  z-index: 1001; /* Asegura que esté por encima de otros elementos */
}

.menu-toggle span {
  width: 25px;
  height: 3px;
  background: #FFD700;
  margin: 3px 0;
  transition: 0.3s;
}

.mobile-menu {
  position: fixed;
  top: 60px;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.98);
  padding: 12px;
  transform: translateY(-100%);
  transition: transform 0.3s ease;
  z-index: 999;
}

.mobile-menu.active {
  transform: translateY(0);
}

.mobile-nav-links {
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
}

.mobile-nav-links a {
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  padding: 10px;
  border-bottom: 1px solid rgba(255, 215, 0, 0.2);
}

/* Hero Section */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #000 0%, #1a1a1a 100%);
  overflow: hidden;
  padding-top: 80px;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('/fondo.WebP') center/cover;
  opacity: 0.1;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 700px;
  text-align: center;
}

.hero-logo {
  margin-bottom: 30px;
}

.hero-logo-img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 4px solid #FFD700;
  box-shadow: 0 0 30px rgba(255, 215, 0, 0.3);
  object-fit: cover;
}

.hero-title {
  margin-bottom: 10px;
}

.highlight {
  display: block;
  font-size: 4rem;
  font-weight: 700;
  background: linear-gradient(45deg, #ffd700, #ff8c00);
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  color: transparent;
  line-height: 1.1;
}

.subtitle {
  display: block;
  font-size: 1.8rem;
  background: linear-gradient(135deg, #f8f8f8, #c0c0c0, #f8f8f8);
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  color: transparent;
  font-weight: 300;
  margin: 0;
  text-shadow: 0 0 8px rgba(255, 255, 255, 0.2);
  position: relative;
  display: inline-block;
  padding: 0 10px;
  line-height: 1;
}

.subtitle::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  background-size: 200% 100%;
  animation: shine 3s infinite;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  opacity: 0.7;
}

.hero-description {
  font-size: 1.2rem;
  background: linear-gradient(135deg, #e0e0e0, #b0b0b0, #e0e0e0);
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  color: transparent;
  line-height: 1;
  margin: 0 auto 20px;
  max-width: 600px;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.1);
  position: relative;
  padding: 0 20px;
  font-style: italic;
  font-weight: 300;
}

/* Comillas decorativas eliminadas */

@keyframes shine {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

@keyframes logoGlow {
  0% {
    box-shadow: 0 0 10px rgba(255, 215, 0, 0.7);
    transform: scale(1);
  }
  100% {
    box-shadow: 0 0 25px rgba(255, 215, 0, 0.9), 0 0 40px rgba(255, 215, 0, 0.5);
    transform: scale(1.03);
  }
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.hero-stat {
  text-align: center;
  padding: 20px;
  background: rgba(255, 215, 0, 0.1);
  border-radius: 10px;
  border: 1px solid rgba(255, 215, 0, 0.2);
  min-width: 120px;
}

.stat-number {
  display: block;
  font-size: 2rem;
  font-weight: 700;
  color: #FFD700;
  line-height: 1;
}

.stat-label {
  color: #C0C0C0;
  font-size: 0.9rem;
  margin-top: 5px;
}

.hero-actions {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}

.btn-icon {
  width: 20px;
  height: 20px;
  margin-right: 8px;
}

.hero-visual {
  position: absolute;
  right: 100px;
  top: 50%;
  transform: translateY(-50%);
}

.sound-wave {
  display: flex;
  align-items: center;
  gap: 4px;
}

.wave {
  width: 6px;
  background: linear-gradient(135deg, #FFD700, #FFA500);
  border-radius: 3px;
  animation: wave 1.5s ease-in-out infinite;
}

.wave:nth-child(1) { height: 30px; }
.wave:nth-child(2) { height: 50px; }
.wave:nth-child(3) { height: 40px; }
.wave:nth-child(4) { height: 60px; }
.wave:nth-child(5) { height: 35px; }

@keyframes wave {
  0%, 100% { transform: scaleY(0.5); }
  50% { transform: scaleY(1); }
}

/* Section Styles */
.section-padding {
  background: #161616;
  color: #fff;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-title {
  font-size: 3rem;
  font-weight: 700;
  color: #FFD700;
  margin-bottom: 20px;
}

.section-divider {
  width: 80px;
  height: 3px;
  background: linear-gradient(135deg, #FFD700, #FFA500);
  margin: 0 auto 20px;
}

.section-subtitle {
  font-size: 1.2rem;
  color: #C0C0C0;
  max-width: 600px;
  margin: 0 auto;
}

/* Services Section */
.services {
  background: linear-gradient(135deg, #1a1a1a 0%, #000 100%);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
}

.service-card {
  background: linear-gradient(135deg, #1a1a1a, #0f0f0f);
  padding: 40px 30px;
  border-radius: 15px;
  border: 1px solid rgba(255, 215, 0, 0.2);
  text-align: center;
  position: relative;
  transition: all 0.3s ease;
}

.service-card:hover {
  transform: translateY(-10px);
  border-color: #FFD700;
  box-shadow: 0 20px 40px rgba(255, 215, 0, 0.1);
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes pulse {
  0%, 100% {
    box-shadow: 0 0 15px rgba(255, 215, 0, 0.5);
  }
  50% {
    box-shadow: 0 0 25px rgba(255, 215, 0, 0.8);
  }
}

.service-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 20%;
  background: linear-gradient(135deg, #FFD700, #FFA500);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  padding: 0px;
  box-sizing: border-box;
  transition: all 0.5s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 15px rgba(255, 215, 0, 0.5);
  animation: float 3s ease-in-out infinite, pulse 3s ease-in-out infinite;
}

@media (max-width: 768px) {
  .service-icon {
    margin: 0 auto 10%;
  }
}

.service-icon::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  transform: translateX(-100%) rotate(45deg);
  transition: 0.6s;
}

.service-icon:hover {
  animation: none;
  transform: rotate(360deg) scale(1.1) translateY(-5px);
  box-shadow: 0 0 30px rgba(255, 215, 0, 1);
}

.service-icon:hover::before {
  transform: translateX(100%) rotate(45deg);
}

.service-icon-img {
  width: 80%;
  height: 80%;
  object-fit: contain;
  filter: brightness(0) invert(1);
  border-radius: 50%;
  transition: all 0.5s ease;
}

.service-card:hover .service-icon-img {
  transform: scale(1.2);
  filter: brightness(0) invert(1) drop-shadow(0 0 5px rgba(255, 255, 255, 0.8));
}

.service-card h3 {
  font-size: 1.5rem;
  color: #FFD700;
  margin-bottom: 15px;
}

.service-card p {
  color: #C0C0C0;
  line-height: 1.6;
  margin-bottom: 20px;
}

.service-price {
  font-size: 1.2rem;
  font-weight: 600;
  color: #fff;
  margin-top: 20px;
}

.service-badge {
  position: absolute;
  top: -10px;
  right: -10px;
  background: linear-gradient(135deg, #FFD700, #FFA500);
  color: #000;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}

/* Portfolio Section */
.portfolio {
  background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%);
}

.portfolio-tabs {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 50px;
  flex-wrap: wrap;
}

.tab-button {
  padding: 12px 24px;
  background: transparent;
  border: 2px solid rgba(255, 215, 0, 0.3);
  color: #C0C0C0;
  border-radius: 25px;
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

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
}

.demo-card {
  background: linear-gradient(135deg, #1a1a1a, #0f0f0f);
  padding: 30px;
  border-radius: 15px;
  border: 1px solid rgba(255, 215, 0, 0.2);
  transition: all 0.3s ease;
}

.demo-card:hover {
  border-color: #FFD700;
  box-shadow: 0 15px 30px rgba(255, 215, 0, 0.1);
}

.demo-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.demo-header h4 {
  color: #FFD700;
  font-size: 1.3rem;
  margin: 0;
}

.play-button {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #FFD700, #FFA500);
  border: none;
  color: #000;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.play-button:hover {
  transform: scale(1.1);
}

.demo-card p {
  color: #C0C0C0;
  margin-bottom: 20px;
  line-height: 1.6;
}

.audio-progress {
  width: 100%;
  height: 4px;
  background: rgba(255, 215, 0, 0.2);
  border-radius: 2px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background: linear-gradient(135deg, #FFD700, #FFA500);
  transition: width 0.1s ease;
}

/* Contact Section */
.contact-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 60px;
}

.contact-info h3 {
  color: #FFD700;
  font-size: 1.8rem;
  margin-bottom: 30px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 25px;
}

.contact-icon {
  width: 24px;
  height: 24px;
  color: #FFD700;
}

.contact-item div {
  display: flex;
  flex-direction: column;
}

.contact-label {
  color: #C0C0C0;
  font-size: 0.9rem;
  margin-bottom: 2px;
}

.contact-value {
  color: #fff;
  font-weight: 500;
}

.contact-form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group.full-width {
  grid-column: 1 / -1;
}

.form-group label {
  color: #C0C0C0;
  margin-bottom: 8px;
  font-weight: 500;
}

.form-group input,
.form-group select,
.form-group textarea {
  padding: 15px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 215, 0, 0.2);
  border-radius: 8px;
  color: #fff;
  font-size: 16px;
  transition: all 0.3s ease;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #FFD700;
  box-shadow: 0 0 0 3px rgba(255, 215, 0, 0.1);
}

.contact-form .btn {
  grid-column: 1 / -1;
  justify-self: start;
  margin-top: 10px;
}

/* Footer */
.footer {
  background: linear-gradient(135deg, #0f0f0f 0%, #000 100%);
  padding: 60px 0 20px;
  border-top: 1px solid rgba(255, 215, 0, 0.2);
}

.footer-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 60px;
  margin-bottom: 40px;
}

.footer-brand p {
  color: #FFFFFF;
  margin-top: 15px;
  line-height: 1.6;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

@media (max-width: 768px) {
  .footer-links {
    grid-template-columns: 1fr;
  }
}

.social-links {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #fff;
  text-decoration: none;
  padding: 8px 12px;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.social-link:hover {
  transform: translateX(5px);
}

.social-icon {
  width: 20px;
  height: 20px;
}

.whatsapp { background: rgba(37, 211, 102, 0.1); color: #25D366; }
.whatsapp:hover { background: rgba(37, 211, 102, 0.2); }

.facebook { background: rgba(24, 119, 242, 0.1); color: #1877F2; }
.facebook:hover { background: rgba(24, 119, 242, 0.2); }

.instagram { 
  background: linear-gradient(45deg, rgba(131, 58, 180, 0.1), rgba(253, 29, 29, 0.1), rgba(252, 176, 69, 0.1)); 
  color: #E1306C; 
}
.instagram:hover { 
  background: linear-gradient(45deg, rgba(131, 58, 180, 0.2), rgba(253, 29, 29, 0.2), rgba(252, 176, 69, 0.2));
}

.footer-section h4 {
  color: #FFD700;
  margin-bottom: 20px;
  font-size: 1.2rem;
}

.footer-section ul {
  list-style: none;
}

.footer-section ul li {
  margin-bottom: 10px;
  color: #FFFFFF;
}

.footer-section ul li a {
  color: #FFFFFF;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-section ul li a:hover {
  color: #FFD700;
}

.footer-bottom {
  padding-top: 20px;
  border-top: 1px solid rgba(255, 215, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #C0C0C0;
}

.admin-link-text {
  color: #C0C0C0;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.admin-link-text:hover {
  color: #FFD700;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .hero-visual {
    display: none;
  }
  
  .hero-stats {
    gap: 20px;
  }
  
  .hero-stat {
    min-width: 100px;
    padding: 15px;
  }
  
  .contact-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .footer-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .footer-links {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
  
  .menu-toggle {
    display: flex; /* Solo visible en móviles */
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 1001;
    background: rgba(0, 0, 0, 0.7);
    border-radius: 4px;
    padding: 10px;
  }
  
  .menu-toggle span {
    background: #FFD700;
  }
  
  .logo-image {
    width: 40px;
    height: 40px;
  }
  
  .logo-text {
    font-size: 18px;
    line-height: 1;
    margin-bottom: 0;
  }
  
  .logo-subtitle {
    font-size: 14px;
    line-height: 1.2;
  }
  
  .logo-text-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  .mobile-menu {
    position: fixed;
    top: 0;
    right: -100%;
    width: 80%;
    max-width: 300px;
    height: 100vh;
    background: #1a1a1a;
    z-index: 1000;
    transition: right 0.3s ease-in-out;
    padding: 80px 20px 40px;
    box-shadow: -2px 0 10px rgba(0, 0, 0, 0.3);
  }
  
  .mobile-menu.active {
    right: 0;
  }
  
  .mobile-nav-links {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  .mobile-nav-links a {
    color: #fff;
    text-decoration: none;
    font-size: 18px;
    padding: 10px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    transition: color 0.3s ease;
  }
  
  .mobile-nav-links a:hover {
    color: #FFD700;
  }
  
  .hero-logo-img {
    width: 100px;
    height: 100px;
    margin-top: 20px;
    background-color: var(--bg-color, #FFD700);
    border-radius: 50%;
    padding: 5px;
    box-shadow: 0 0 15px rgba(255, 215, 0, 0.7);
    transition: transform 0.3s ease;
  }
  
  .hero-logo-img:hover {
    transform: scale(1.05);
  }
  
  .highlight {
    font-size: 2.5rem;
  }
  
  .subtitle {
    font-size: 1.4rem;
  }
  
  .hero-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .hero-stats {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
  }
  
  .portfolio-grid {
    grid-template-columns: 1fr;
  }
  
  .contact-form {
    grid-template-columns: 1fr;
  }
  
  .footer-links {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .footer-bottom {
    flex-direction: column;
    gap: 15px;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 10px;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .service-card,
  .demo-card {
    padding: 20px;
  }
  
  .portfolio-tabs {
    gap: 10px;
  }
  
  .tab-button {
    padding: 8px 16px;
    font-size: 0.9rem;
  }
  
  .hero-logo-img {
    width: 80px;
    height: 80px;
  }
  
  .highlight {
    font-size: 2rem;
  }
}
</style>