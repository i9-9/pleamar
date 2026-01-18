#!/usr/bin/env node

/**
 * Script para verificar el contenido creado en Contentful
 * Ejecutar con: node scripts/verify-contentful-content.js
 */

const contentfulManagement = require('contentful-management');

// Cargar variables de entorno
require('dotenv').config({ path: '.env.local' });

const SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
const MANAGEMENT_TOKEN = process.env.CONTENTFUL_MANAGEMENT_TOKEN;
const ENVIRONMENT_ID = 'master';

async function verifyContent() {
  console.log('🔍 Verificando contenido en Contentful...\n');

  try {
    const client = contentfulManagement.createClient({
      accessToken: MANAGEMENT_TOKEN,
    });

    const space = await client.getSpace(SPACE_ID);
    const environment = await space.getEnvironment(ENVIRONMENT_ID);

    console.log(`✅ Conectado al Space: ${space.name}\n`);

    // Verificar Landing Page
    console.log('📄 LANDING PAGE:');
    const landingEntries = await environment.getEntries({ content_type: 'landingPage' });
    if (landingEntries.items.length > 0) {
      const landing = landingEntries.items[0];
      console.log(`   ID: ${landing.sys.id}`);
      console.log(`   Estado: ${landing.sys.publishedVersion ? 'Publicado' : 'Draft'}`);
      console.log(`   Título Hero 1: ${landing.fields.heroTitle1?.['en-US'] || '❌ No configurado'}`);
      console.log(`   Título Hero 2: ${landing.fields.heroTitle2?.['en-US'] || '❌ No configurado'}`);
      console.log(`   Stats completados: ${landing.fields.stat1Value?.['en-US'] ? '✅' : '❌'}`);
      console.log(`   Features completadas: ${landing.fields.feature1Title?.['en-US'] ? '✅' : '❌'}`);
      console.log(`   Services completados: ${landing.fields.service1Title?.['en-US'] ? '✅' : '❌'}`);
    } else {
      console.log('   ❌ No existe');
    }

    // Verificar Nosotros Page
    console.log('\n📄 NOSOTROS PAGE:');
    const nosotrosEntries = await environment.getEntries({ content_type: 'nosotrosPage' });
    if (nosotrosEntries.items.length > 0) {
      const nosotros = nosotrosEntries.items[0];
      console.log(`   ID: ${nosotros.sys.id}`);
      console.log(`   Estado: ${nosotros.sys.publishedVersion ? 'Publicado' : 'Draft'}`);
      console.log(`   Título: ${nosotros.fields.title?.['en-US'] || '❌ No configurado'}`);
      console.log(`   Párrafo 1: ${nosotros.fields.paragraph1?.['en-US'] ? '✅' : '❌'}`);
      console.log(`   Párrafo 2: ${nosotros.fields.paragraph2?.['en-US'] ? '✅' : '❌'}`);
      console.log(`   Bullets completados: ${nosotros.fields.bullet1Title?.['en-US'] ? '✅' : '❌'}`);
    } else {
      console.log('   ❌ No existe');
    }

    // Verificar Servicios Page
    console.log('\n📄 SERVICIOS PAGE:');
    const serviciosEntries = await environment.getEntries({ content_type: 'serviciosPage' });
    if (serviciosEntries.items.length > 0) {
      const servicios = serviciosEntries.items[0];
      console.log(`   ID: ${servicios.sys.id}`);
      console.log(`   Estado: ${servicios.sys.publishedVersion ? 'Publicado' : 'Draft'}`);
      console.log(`   Título: ${servicios.fields.title?.['en-US'] || '❌ No configurado'}`);
      console.log(`   Categoría 1: ${servicios.fields.category1Title?.['en-US'] || '❌ No configurado'}`);
      console.log(`   Categoría 1 Items: ${servicios.fields.category1Items?.['en-US']?.length || 0} items`);
      console.log(`   Categoría 2: ${servicios.fields.category2Title?.['en-US'] || '❌ No configurado'}`);
      console.log(`   Categoría 3: ${servicios.fields.category3Title?.['en-US'] || '❌ No configurado'}`);
      console.log(`   Categoría 4: ${servicios.fields.category4Title?.['en-US'] || '❌ No configurado'}`);
    } else {
      console.log('   ❌ No existe');
    }

    console.log('\n📊 RESUMEN:');
    console.log(`   Landing Page entries: ${landingEntries.items.length}`);
    console.log(`   Nosotros Page entries: ${nosotrosEntries.items.length}`);
    console.log(`   Servicios Page entries: ${serviciosEntries.items.length}`);

    console.log('\n✅ Verificación completada\n');

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

// Ejecutar
verifyContent();
