import { SitemapStream } from 'sitemap';
import { createWriteStream } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { pipeline } from 'stream/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/#servicios', changefreq: 'weekly', priority: 0.8 },
  { url: '/#portfolio', changefreq: 'weekly', priority: 0.8 },
  { url: '/#contacto', changefreq: 'monthly', priority: 0.7 },
  { url: '/admin', changefreq: 'monthly', priority: 0.5 },
  { url: '/admin/login', changefreq: 'monthly', priority: 0.3 },
];

async function generateSitemap() {
  try {
    const sitemap = new SitemapStream({ 
      hostname: 'https://ninarojas.netlify.app',
      lastmodDateOnly: true
    });

    const writeStream = createWriteStream(join(__dirname, '../public/sitemap.xml'));
    
    // Usar pipeline para manejar correctamente el stream
    await pipeline(
      sitemap,
      writeStream
    );

    // Escribir los enlaces al stream
    for (const link of links) {
      sitemap.write(link);
    }
    
    sitemap.end();
    
    console.log('✅ Sitemap generado correctamente en /public/sitemap.xml');
  } catch (error) {
    console.error('❌ Error al generar el sitemap:', error);
    process.exit(1);
  }
}

generateSitemap();
