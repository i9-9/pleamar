#!/usr/bin/env node

/**
 * Script para listar todas las imágenes subidas en Contentful
 * Ejecutar con: node scripts/list-contentful-assets.js
 */

const contentfulManagement = require('contentful-management');

// Cargar variables de entorno
require('dotenv').config({ path: '.env.local' });

const SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
const MANAGEMENT_TOKEN = process.env.CONTENTFUL_MANAGEMENT_TOKEN;
const ENVIRONMENT_ID = 'master';

async function listAssets() {
  console.log('🔍 Listando imágenes en Contentful...\n');

  try {
    const client = contentfulManagement.createClient({
      accessToken: MANAGEMENT_TOKEN,
    });

    const space = await client.getSpace(SPACE_ID);
    const environment = await space.getEnvironment(ENVIRONMENT_ID);

    console.log(`✅ Conectado al Space: ${space.name}\n`);

    // Obtener todos los assets
    const assets = await environment.getAssets();

    console.log(`📸 Total de imágenes: ${assets.items.length}\n`);

    if (assets.items.length === 0) {
      console.log('❌ No hay imágenes subidas aún\n');
      return;
    }

    console.log('📋 LISTA DE IMÁGENES:\n');
    assets.items.forEach((asset, index) => {
      const title = asset.fields.title?.['en-US'] || 'Sin título';
      const fileName = asset.fields.file?.['en-US']?.fileName || 'Sin archivo';
      const published = asset.sys.publishedVersion ? '✅ Publicada' : '⚠️  Draft';

      console.log(`${index + 1}. Title: "${title}"`);
      console.log(`   Archivo: ${fileName}`);
      console.log(`   ID: ${asset.sys.id}`);
      console.log(`   Estado: ${published}`);
      console.log('');
    });

    console.log('\n📝 NOMBRES ESPERADOS (para que funcione el auto-linking):');
    const expectedNames = [
      'landing-hero',
      'landing-feature-experience',
      'landing-feature-locations',
      'landing-feature-integral',
      'landing-service-agencia',
      'landing-service-despacho',
      'landing-service-estibaje',
      'nosotros-hero',
      'servicios-hero'
    ];

    expectedNames.forEach((name, i) => {
      const found = assets.items.find(a => a.fields.title?.['en-US'] === name);
      console.log(`${i + 1}. ${name} ${found ? '✅' : '❌ NO ENCONTRADO'}`);
    });

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

// Ejecutar
listAssets();
