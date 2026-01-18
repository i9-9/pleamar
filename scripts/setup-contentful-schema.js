#!/usr/bin/env node

/**
 * Script para crear los Content Types en Contentful
 * Ejecutar con: node scripts/setup-contentful-schema.js
 */

const contentfulManagement = require('contentful-management');

// Cargar variables de entorno
require('dotenv').config({ path: '.env.local' });

const SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
const MANAGEMENT_TOKEN = process.env.CONTENTFUL_MANAGEMENT_TOKEN;
const ENVIRONMENT_ID = 'master'; // El environment por defecto

async function createContentTypes() {
  console.log('🚀 Iniciando creación de Content Types en Contentful...\n');

  try {
    // Crear cliente de management
    const client = contentfulManagement.createClient({
      accessToken: MANAGEMENT_TOKEN,
    });

    // Obtener el space y environment
    const space = await client.getSpace(SPACE_ID);
    const environment = await space.getEnvironment(ENVIRONMENT_ID);

    console.log(`✅ Conectado al Space: ${space.name} (${SPACE_ID})`);
    console.log(`✅ Environment: ${ENVIRONMENT_ID}\n`);

    // 1. Crear Content Type: Landing Page
    console.log('📝 Creando Content Type: Página Principal...');
    try {
      const landingPage = await environment.createContentTypeWithId('landingPage', {
        name: 'Página Principal',
        displayField: 'heroTitle1',
        fields: [
          // Hero Section
          { id: 'heroTitle1', name: 'Título Hero 1', type: 'Symbol', required: true },
          { id: 'heroTitle2', name: 'Título Hero 2', type: 'Symbol', required: true },
          { id: 'heroSubtitle', name: 'Subtítulo Hero', type: 'Symbol', required: true },
          { id: 'heroImage', name: 'Imagen Hero', type: 'Link', linkType: 'Asset', required: true },
          { id: 'heroCtaText', name: 'Texto Botón CTA', type: 'Symbol' },
          { id: 'heroSecondaryText', name: 'Texto Secundario Hero', type: 'Symbol' },

          // Stats
          { id: 'stat1Value', name: 'Estadística 1 - Valor', type: 'Integer', required: true },
          { id: 'stat1Suffix', name: 'Estadística 1 - Sufijo', type: 'Symbol', required: true },
          { id: 'stat1Label', name: 'Estadística 1 - Etiqueta', type: 'Symbol', required: true },
          { id: 'stat2Value', name: 'Estadística 2 - Valor', type: 'Integer', required: true },
          { id: 'stat2Suffix', name: 'Estadística 2 - Sufijo', type: 'Symbol', required: true },
          { id: 'stat2Label', name: 'Estadística 2 - Etiqueta', type: 'Symbol', required: true },
          { id: 'stat3Value', name: 'Estadística 3 - Valor', type: 'Integer', required: true },
          { id: 'stat3Suffix', name: 'Estadística 3 - Sufijo', type: 'Symbol', required: true },
          { id: 'stat3Label', name: 'Estadística 3 - Etiqueta', type: 'Symbol', required: true },
          { id: 'stat4Value', name: 'Estadística 4 - Valor', type: 'Integer', required: true },
          { id: 'stat4Suffix', name: 'Estadística 4 - Sufijo', type: 'Symbol', required: true },
          { id: 'stat4Label', name: 'Estadística 4 - Etiqueta', type: 'Symbol', required: true },

          // Features Section
          { id: 'featuresTitle1', name: 'Características - Título', type: 'Symbol', required: true },
          { id: 'featuresSubtitle', name: 'Características - Subtítulo', type: 'Symbol', required: true },

          // Feature Cards
          { id: 'feature1Title', name: 'Característica 1 - Título', type: 'Symbol', required: true },
          { id: 'feature1Description', name: 'Característica 1 - Descripción', type: 'Text', required: true },
          { id: 'feature1Image', name: 'Característica 1 - Imagen', type: 'Link', linkType: 'Asset', required: true },
          { id: 'feature2Title', name: 'Característica 2 - Título', type: 'Symbol', required: true },
          { id: 'feature2Description', name: 'Característica 2 - Descripción', type: 'Text', required: true },
          { id: 'feature2Image', name: 'Característica 2 - Imagen', type: 'Link', linkType: 'Asset', required: true },
          { id: 'feature3Title', name: 'Característica 3 - Título', type: 'Symbol', required: true },
          { id: 'feature3Description', name: 'Característica 3 - Descripción', type: 'Text', required: true },
          { id: 'feature3Image', name: 'Característica 3 - Imagen', type: 'Link', linkType: 'Asset', required: true },

          // Services Section
          { id: 'servicesTitle', name: 'Servicios - Título', type: 'Symbol', required: true },
          { id: 'service1Title', name: 'Servicio 1 - Título', type: 'Symbol', required: true },
          { id: 'service1Subtitle', name: 'Servicio 1 - Subtítulo', type: 'Symbol', required: true },
          { id: 'service1Image', name: 'Servicio 1 - Imagen', type: 'Link', linkType: 'Asset', required: true },
          { id: 'service2Title', name: 'Servicio 2 - Título', type: 'Symbol', required: true },
          { id: 'service2Subtitle', name: 'Servicio 2 - Subtítulo', type: 'Symbol', required: true },
          { id: 'service2Image', name: 'Servicio 2 - Imagen', type: 'Link', linkType: 'Asset', required: true },
          { id: 'service3Title', name: 'Servicio 3 - Título', type: 'Symbol', required: true },
          { id: 'service3Subtitle', name: 'Servicio 3 - Subtítulo', type: 'Symbol', required: true },
          { id: 'service3Image', name: 'Servicio 3 - Imagen', type: 'Link', linkType: 'Asset', required: true },
        ],
      });
      await landingPage.publish();
      console.log('✅ Página Principal creada y publicada\n');
    } catch (error) {
      if (error.message.includes('already exists')) {
        console.log('⚠️  Página Principal ya existe, saltando...\n');
      } else {
        throw error;
      }
    }

    // 2. Crear Content Type: Nosotros Page
    console.log('📝 Creando Content Type: Página Nosotros...');
    try {
      const nosotrosPage = await environment.createContentTypeWithId('nosotrosPage', {
        name: 'Página Nosotros',
        displayField: 'title',
        fields: [
          { id: 'mainImage', name: 'Imagen Principal', type: 'Link', linkType: 'Asset', required: true },
          { id: 'title', name: 'Título', type: 'Symbol', required: true },
          { id: 'paragraph1', name: 'Párrafo 1', type: 'Text', required: true },
          { id: 'paragraph2', name: 'Párrafo 2', type: 'Text', required: true },
          { id: 'bullet1Title', name: 'Viñeta 1 - Título', type: 'Symbol', required: true },
          { id: 'bullet1Description', name: 'Viñeta 1 - Descripción', type: 'Symbol', required: true },
          { id: 'bullet2Text', name: 'Viñeta 2 - Texto', type: 'Symbol', required: true },
          { id: 'bullet3Text', name: 'Viñeta 3 - Texto', type: 'Symbol', required: true },
        ],
      });
      await nosotrosPage.publish();
      console.log('✅ Página Nosotros creada y publicada\n');
    } catch (error) {
      if (error.message.includes('already exists')) {
        console.log('⚠️  Página Nosotros ya existe, saltando...\n');
      } else {
        throw error;
      }
    }

    // 3. Crear Content Type: Servicios Page
    console.log('📝 Creando Content Type: Página Servicios...');
    try {
      const serviciosPage = await environment.createContentTypeWithId('serviciosPage', {
        name: 'Página Servicios',
        displayField: 'title',
        fields: [
          { id: 'mainImage', name: 'Imagen Principal', type: 'Link', linkType: 'Asset', required: true },
          { id: 'title', name: 'Título', type: 'Symbol', required: true },
          { id: 'transportLabel', name: 'Etiqueta Transporte', type: 'Symbol', required: true },

          // Categories
          { id: 'category1Title', name: 'Categoría 1 - Título', type: 'Symbol', required: true },
          { id: 'category1Items', name: 'Categoría 1 - Items', type: 'Array', items: { type: 'Symbol' }, required: true },
          { id: 'category2Title', name: 'Categoría 2 - Título', type: 'Symbol', required: true },
          { id: 'category2Items', name: 'Categoría 2 - Items', type: 'Array', items: { type: 'Symbol' }, required: true },
          { id: 'category3Title', name: 'Categoría 3 - Título', type: 'Symbol', required: true },
          { id: 'category3Items', name: 'Categoría 3 - Items', type: 'Array', items: { type: 'Symbol' }, required: true },
          { id: 'category4Title', name: 'Categoría 4 - Título', type: 'Symbol', required: true },
          { id: 'category4Items', name: 'Categoría 4 - Items', type: 'Array', items: { type: 'Symbol' }, required: true },
        ],
      });
      await serviciosPage.publish();
      console.log('✅ Página Servicios creada y publicada\n');
    } catch (error) {
      if (error.message.includes('already exists')) {
        console.log('⚠️  Página Servicios ya existe, saltando...\n');
      } else {
        throw error;
      }
    }

    console.log('🎉 ¡Schema creado exitosamente en Contentful!');
    console.log('\n📋 Próximos pasos:');
    console.log('1. Sube las imágenes manualmente a Contentful (Media → Add asset)');
    console.log('2. Ejecuta: node scripts/setup-contentful-content.js');
    console.log('3. En Contentful, vincula las imágenes a cada entry');
    console.log('4. Publica todos los entries\n');

  } catch (error) {
    console.error('❌ Error:', error.message);
    if (error.details) {
      console.error('Detalles:', error.details);
    }
    process.exit(1);
  }
}

// Ejecutar
createContentTypes();
