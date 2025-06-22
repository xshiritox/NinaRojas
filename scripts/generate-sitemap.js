const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const { join } = require('path');

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/#servicios', changefreq: 'weekly', priority: 0.8 },
  { url: '/#portfolio', changefreq: 'weekly', priority: 0.8 },
  { url: '/#contacto', changefreq: 'monthly', priority: 0.7 },
  { url: '/admin', changefreq: 'monthly', priority: 0.5 },
  { url: '/admin/login', changefreq: 'monthly', priority: 0.3 },
];

const sitemap = new SitemapStream({ 
  hostname: 'https://ninarojas.netlify.app',
  lastmodDateOnly: true
});

const writeStream = createWriteStream(join(__dirname, '../public/sitemap.xml'));
sitemap.pipe(writeStream);

links.forEach(link => {
  sitemap.write(link);
});

sitemap.end();

console.log('Sitemap generado en /public/sitemap.xml');
