import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { pipeline } from 'stream/promises';
import { createGzip } from 'zlib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configuración del sitio
const SITE_URL = 'https://ninarojas.netlify.app';
const PUBLIC_DIR = join(__dirname, '../public');

// Asegurarse de que el directorio público existe
if (!existsSync(PUBLIC_DIR)) {
  mkdirSync(PUBLIC_DIR, { recursive: true });
}

// Lista de URLs para incluir en el sitemap
const links = [
  // Páginas principales
  { 
    url: '/', 
    changefreq: 'daily', 
    priority: 1.0, 
    lastmod: new Date().toISOString(),
    img: [
      { url: '/logo.WebP', title: 'Nina Rojas - Locutora Profesional' }
    ]
  },
  { 
    url: '/servicios', 
    changefreq: 'weekly', 
    priority: 0.9, 
    lastmod: '2025-06-15',
    img: [
      { url: '/images/servicios.jpg', title: 'Servicios de Locución' }
    ]
  },
  { 
    url: '/portafolio', 
    changefreq: 'weekly', 
    priority: 0.8, 
    lastmod: '2025-06-10',
    img: [
      { url: '/images/portafolio.jpg', title: 'Portafolio de Trabajos' }
    ]
  },
  { 
    url: '/acerca-de', 
    changefreq: 'monthly', 
    priority: 0.7, 
    lastmod: '2025-05-20',
    img: [
      { url: '/images/acerca-de.jpg', title: 'Acerca de Nina Rojas' }
    ]
  },
  { 
    url: '/contacto', 
    changefreq: 'monthly', 
    priority: 0.7, 
    lastmod: '2025-05-20',
    img: [
      { url: '/images/contacto.jpg', title: 'Contacta a Nina Rojas' }
    ]
  },
  // Páginas de administración (menor prioridad)
  { 
    url: '/admin', 
    changefreq: 'monthly', 
    priority: 0.3, 
    lastmod: '2025-01-01'
  },
  { 
    url: '/admin/login', 
    changefreq: 'monthly', 
    priority: 0.2, 
    lastmod: '2025-01-01'
  }
];

// Función para formatear la fecha en formato YYYY-MM-DD
function formatDate(date) {
  const d = new Date(date);
  let month = '' + (d.getMonth() + 1);
  let day = '' + d.getDate();
  const year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
}

// Función para generar el sitemap
async function generateSitemap() {
  try {
    console.log('🚀 Iniciando generación del sitemap...');
    
    // Ruta del archivo de salida
    const sitemapPath = join(PUBLIC_DIR, 'sitemap.xml');
    const writeStream = createWriteStream(sitemapPath);
    
    // Escribir encabezado XML
    writeStream.write('<?xml version="1.0" encoding="UTF-8"?>\n');
    writeStream.write('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n');
    writeStream.write('        xmlns:xhtml="http://www.w3.org/1999/xhtml"\n');
    writeStream.write('        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n');
    
    // Escribir cada URL en el sitemap
    for (const link of links) {
      // Asegurarse de que la URL empieza con /
      const url = link.url.startsWith('/') ? link.url : `/${link.url}`;
      const fullUrl = `${SITE_URL}${url}`;
      
      // Formatear fecha
      const lastmod = formatDate(link.lastmod || new Date());
      
      // Escribir URL
      writeStream.write('  <url>\n');
      writeStream.write(`    <loc>${fullUrl}</loc>\n`);
      writeStream.write(`    <lastmod>${lastmod}</lastmod>\n`);
      writeStream.write(`    <changefreq>${link.changefreq}</changefreq>\n`);
      writeStream.write(`    <priority>${link.priority}</priority>\n`);
      
      // Agregar imágenes si existen
      if (link.img && link.img.length > 0) {
        for (const img of link.img) {
          const imgUrl = img.url.startsWith('http') ? img.url : `${SITE_URL}${img.url.startsWith('/') ? '' : '/'}${img.url}`;
          writeStream.write('    <image:image>\n');
          writeStream.write(`      <image:loc>${imgUrl}</image:loc>\n`);
          writeStream.write(`      <image:title><![CDATA[${img.title || ''}]]></image:title>\n`);
          writeStream.write('    </image:image>\n');
        }
      }
      
      writeStream.write('  </url>\n');
    }
    
    // Cerrar el archivo
    writeStream.write('</urlset>\n');
    writeStream.end();
    
    console.log(`✅ Sitemap generado correctamente en: ${sitemapPath}`);
    console.log(`🌐 Total de URLs incluidas: ${links.length}`);
    
    return true;
  } catch (error) {
    console.error('❌ Error al generar el sitemap:', error);
    return false;
  }
}

// Ejecutar la generación del sitemap
generateSitemap()
  .then(success => {
    if (success) {
      console.log('✨ Proceso de generación completado con éxito');
    } else {
      console.error('⚠️ Hubo problemas al generar el sitemap');
      process.exit(1);
    }
  })
  .catch(error => {
    console.error('❌ Error inesperado:', error);
    process.exit(1);
  });
