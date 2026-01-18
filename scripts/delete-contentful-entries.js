#!/usr/bin/env node

/**
 * Script para eliminar entries en Contentful
 * Ejecutar con: node scripts/delete-contentful-entries.js
 */

const contentfulManagement = require('contentful-management');

// Cargar variables de entorno
require('dotenv').config({ path: '.env.local' });

const SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
const MANAGEMENT_TOKEN = process.env.CONTENTFUL_MANAGEMENT_TOKEN;
const ENVIRONMENT_ID = 'master';

async function deleteEntries() {
  console.log('🗑️  Eliminando entries existentes...\n');

  try {
    const client = contentfulManagement.createClient({
      accessToken: MANAGEMENT_TOKEN,
    });

    const space = await client.getSpace(SPACE_ID);
    const environment = await space.getEnvironment(ENVIRONMENT_ID);

    const contentTypes = ['landingPage', 'nosotrosPage', 'serviciosPage'];

    for (const ctId of contentTypes) {
      const entries = await environment.getEntries({ content_type: ctId });

      for (const entry of entries.items) {
        try {
          if (entry.isPublished()) {
            await entry.unpublish();
          }
          await entry.delete();
          console.log(`✅ Entry eliminado: ${ctId} (${entry.sys.id})`);
        } catch (err) {
          console.log(`⚠️  Error: ${err.message}`);
        }
      }
    }

    console.log('\n✅ Entries eliminados. Ahora ejecuta: node scripts/setup-contentful-content.js\n');

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

// Ejecutar
deleteEntries();
