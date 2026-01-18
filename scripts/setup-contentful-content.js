#!/usr/bin/env node

/**
 * Script para crear el contenido inicial en Contentful
 * IMPORTANTE: Las imágenes deben estar subidas previamente en Contentful
 * Ejecutar con: node scripts/setup-contentful-content.js
 */

const contentfulManagement = require('contentful-management');

// Cargar variables de entorno
require('dotenv').config({ path: '.env.local' });

const SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
const MANAGEMENT_TOKEN = process.env.CONTENTFUL_MANAGEMENT_TOKEN;
const ENVIRONMENT_ID = 'master';

async function createContent() {
  console.log('🚀 Iniciando creación de contenido en Contentful...\n');

  try {
    const client = contentfulManagement.createClient({
      accessToken: MANAGEMENT_TOKEN,
    });

    const space = await client.getSpace(SPACE_ID);
    const environment = await space.getEnvironment(ENVIRONMENT_ID);

    console.log(`✅ Conectado al Space: ${space.name}`);
    console.log('⚠️  NOTA: Las imágenes deben ser vinculadas manualmente después\n');

    // Obtener assets (imágenes) para referencias
    console.log('📸 Buscando assets subidos...');
    const assets = await environment.getAssets();
    const assetMap = {};
    assets.items.forEach(asset => {
      if (asset.fields.title && asset.fields.title['en-US']) {
        assetMap[asset.fields.title['en-US']] = asset.sys.id;
      }
    });
    console.log(`✅ Encontrados ${assets.items.length} assets\n`);

    // Helper para crear referencia a asset
    const getAssetLink = (title) => {
      const assetId = assetMap[title];
      if (assetId) {
        return {
          'en-US': {
            sys: { type: 'Link', linkType: 'Asset', id: assetId }
          }
        };
      }
      return null; // Se vinculará manualmente
    };

    // 1. Crear Landing Page Entry
    console.log('📝 Creando entry: Landing Page...');
    try {
      const landingEntry = await environment.createEntry('landingPage', {
        fields: {
          // Hero Section
          heroTitle1: { 'en-US': 'Soluciones marítimas' },
          heroTitle2: { 'en-US': 'y portuarias integrales' },
          heroSubtitle: { 'en-US': 'Especialistas en Comercio Exterior' },
          heroImage: getAssetLink('landing-hero') || { 'en-US': null },
          heroCtaText: { 'en-US': 'Contáctanos' },
          heroSecondaryText: { 'en-US': 'Respuesta rápida · Atención personalizada' },

          // Stats
          stat1Value: { 'en-US': 32 },
          stat1Suffix: { 'en-US': '+' },
          stat1Label: { 'en-US': 'Años de experiencia' },
          stat2Value: { 'en-US': 95 },
          stat2Suffix: { 'en-US': '%' },
          stat2Label: { 'en-US': 'Operaciones sin demora' },
          stat3Value: { 'en-US': 600 },
          stat3Suffix: { 'en-US': '+' },
          stat3Label: { 'en-US': 'Buques anuales' },
          stat4Value: { 'en-US': 24 },
          stat4Suffix: { 'en-US': '/7' },
          stat4Label: { 'en-US': 'Respuesta inmediata' },

          // Features Section
          featuresTitle1: { 'en-US': 'Una forma más simple de operar' },
          featuresSubtitle: { 'en-US': 'Simplificamos tus operaciones de importación y exportación' },

          // Feature Cards
          feature1Title: { 'en-US': '32 años de experiencia' },
          feature1Description: { 'en-US': 'Operando desde 1993, tres décadas gestionando operaciones exitosas' },
          feature1Image: getAssetLink('landing-feature-experience') || { 'en-US': null },
          feature2Title: { 'en-US': 'Presencia diversas localidades' },
          feature2Description: { 'en-US': 'Necochea, Quequén, Buenos Aires, Bahía Blanca, Mar del Plata, Paso de los Libres, Rosario, San Lorenzo, Tres Arroyos. Red Nacional para tu comodidad' },
          feature2Image: getAssetLink('landing-feature-locations') || { 'en-US': null },
          feature3Title: { 'en-US': 'Servicio integral' },
          feature3Description: { 'en-US': 'De la agencia marítima al despacho final. Coordinamos toda tu operación.' },
          feature3Image: getAssetLink('landing-feature-integral') || { 'en-US': null },

          // Services Section
          servicesTitle: { 'en-US': 'Nuestros Servicios Principales' },
          service1Title: { 'en-US': 'Agencia marítima' },
          service1Subtitle: { 'en-US': 'ESPECIALISTAS EN' },
          service1Image: getAssetLink('landing-service-agencia') || { 'en-US': null },
          service2Title: { 'en-US': 'Despacho de aduana' },
          service2Subtitle: { 'en-US': 'ESPECIALISTAS EN' },
          service2Image: getAssetLink('landing-service-despacho') || { 'en-US': null },
          service3Title: { 'en-US': 'Estibaje' },
          service3Subtitle: { 'en-US': 'ESPECIALISTAS EN' },
          service3Image: getAssetLink('landing-service-estibaje') || { 'en-US': null },
        },
      });
      console.log(`✅ Landing Page creado (ID: ${landingEntry.sys.id})`);

      // Intentar publicar si las imágenes están vinculadas
      const hasAllImages = landingEntry.fields.heroImage && landingEntry.fields.heroImage['en-US'];
      if (hasAllImages) {
        await landingEntry.publish();
        console.log('   ✅ Entry publicado\n');
      } else {
        console.log('   ⚠️  Entry en draft - Vincula las imágenes y publica manualmente\n');
      }
    } catch (error) {
      if (error.message.includes('already exists')) {
        console.log('⚠️  Landing Page ya existe, saltando...\n');
      } else {
        throw error;
      }
    }

    // 2. Crear Nosotros Page Entry
    console.log('📝 Creando entry: Nosotros Page...');
    try {
      const nosotrosEntry = await environment.createEntry('nosotrosPage', {
        fields: {
          mainImage: getAssetLink('nosotros-hero') || { 'en-US': null },
          title: { 'en-US': 'Desde 1993 facilitamos el comercio exterior en Necochea' },
          paragraph1: { 'en-US': 'Somos una agencia marítima integral que gestiona cada etapa de tu operación: desde el arribo del buque hasta la entrega final de la mercadería.' },
          paragraph2: { 'en-US': 'Con más de 32 años de experiencia, trabajamos con pequeñas, medianas y grandes empresas que buscan agilidad, confianza y soluciones personalizadas.' },
          bullet1Title: { 'en-US': 'Presencia nacional:' },
          bullet1Description: { 'en-US': 'Necochea, Buenos Aires, Bahía Blanca, Mar del Plata, Rosario, San Lorenzo y Paso de los Libres' },
          bullet2Text: { 'en-US': 'Equipo de profesionales especializados' },
          bullet3Text: { 'en-US': 'Atención personalizada para cada operación' },
        },
      });
      console.log(`✅ Nosotros Page creado (ID: ${nosotrosEntry.sys.id})`);

      // Intentar publicar si la imagen está vinculada
      const hasImage = nosotrosEntry.fields.mainImage && nosotrosEntry.fields.mainImage['en-US'];
      if (hasImage) {
        await nosotrosEntry.publish();
        console.log('   ✅ Entry publicado\n');
      } else {
        console.log('   ⚠️  Entry en draft - Vincula la imagen y publica manualmente\n');
      }
    } catch (error) {
      if (error.message.includes('already exists')) {
        console.log('⚠️  Nosotros Page ya existe, saltando...\n');
      } else {
        throw error;
      }
    }

    // 3. Crear Servicios Page Entry
    console.log('📝 Creando entry: Servicios Page...');
    try {
      const serviciosEntry = await environment.createEntry('serviciosPage', {
        fields: {
          mainImage: getAssetLink('servicios-hero') || { 'en-US': null },
          title: { 'en-US': 'Acompañamos su operación de punta a punta' },
          transportLabel: { 'en-US': 'Transporte marítimo y terrestre' },

          // Category 1
          category1Title: { 'en-US': 'Gestión Aduanera' },
          category1Items: {
            'en-US': [
              'Despacho de Aduana',
              'Agente de Transporte Aduanero',
              'Representación ante organismos'
            ]
          },

          // Category 2
          category2Title: { 'en-US': 'Operaciones Logísticas' },
          category2Items: {
            'en-US': [
              'Transporte marítimo y terrestre',
              'Logística y coordinación',
              'Coordinación de embarque'
            ]
          },

          // Category 3
          category3Title: { 'en-US': 'Gestión Documental' },
          category3Items: {
            'en-US': [
              'Tramitación de documentos comerciales',
              'Asesoramiento en comercio exterior'
            ]
          },

          // Category 4
          category4Title: { 'en-US': 'Manejo de Mercaderías' },
          category4Items: {
            'en-US': [
              'Estibaje',
              'Recepción',
              'Entrega'
            ]
          },
        },
      });
      console.log(`✅ Servicios Page creado (ID: ${serviciosEntry.sys.id})`);

      // Intentar publicar si la imagen está vinculada
      const hasImage = serviciosEntry.fields.mainImage && serviciosEntry.fields.mainImage['en-US'];
      if (hasImage) {
        await serviciosEntry.publish();
        console.log('   ✅ Entry publicado\n');
      } else {
        console.log('   ⚠️  Entry en draft - Vincula la imagen y publica manualmente\n');
      }
    } catch (error) {
      if (error.message.includes('already exists')) {
        console.log('⚠️  Servicios Page ya existe, saltando...\n');
      } else {
        throw error;
      }
    }

    console.log('🎉 ¡Contenido creado exitosamente!\n');
    console.log('📋 Próximos pasos:');
    console.log('1. Ve a Contentful: https://app.contentful.com/spaces/' + SPACE_ID);
    console.log('2. Abre cada entry creado');
    console.log('3. Vincula las imágenes correspondientes:');
    console.log('   - Landing Page: 7 imágenes (hero, 3 features, 3 services)');
    console.log('   - Nosotros Page: 1 imagen (hero)');
    console.log('   - Servicios Page: 1 imagen (hero)');
    console.log('4. Haz click en "Publish" en cada entry');
    console.log('5. ¡Listo! Prueba tu sitio con: npm run dev\n');

  } catch (error) {
    console.error('❌ Error:', error.message);
    if (error.details) {
      console.error('Detalles:', JSON.stringify(error.details, null, 2));
    }
    process.exit(1);
  }
}

// Ejecutar
createContent();
