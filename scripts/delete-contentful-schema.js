#!/usr/bin/env node

/**
 * Script para ELIMINAR los Content Types existentes en Contentful
 * CUIDADO: Este script eliminará PERMANENTEMENTE los Content Types
 * Ejecutar con: node scripts/delete-contentful-schema.js
 */

const contentfulManagement = require('contentful-management');

// Cargar variables de entorno
require('dotenv').config({ path: '.env.local' });

const SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
const MANAGEMENT_TOKEN = process.env.CONTENTFUL_MANAGEMENT_TOKEN;
const ENVIRONMENT_ID = 'master';

async function deleteContentTypes() {
  console.log('🗑️  Iniciando eliminación de Content Types en Contentful...\n');
  console.log('⚠️  ADVERTENCIA: Esto eliminará permanentemente los Content Types y sus entries\n');

  try {
    const client = contentfulManagement.createClient({
      accessToken: MANAGEMENT_TOKEN,
    });

    const space = await client.getSpace(SPACE_ID);
    const environment = await space.getEnvironment(ENVIRONMENT_ID);

    console.log(`✅ Conectado al Space: ${space.name} (${SPACE_ID})`);
    console.log(`✅ Environment: ${ENVIRONMENT_ID}\n`);

    const contentTypeIds = ['landingPage', 'nosotrosPage', 'serviciosPage'];

    for (const ctId of contentTypeIds) {
      try {
        console.log(`🗑️  Eliminando Content Type: ${ctId}...`);

        // Primero, obtener y eliminar todas las entries de este Content Type
        const entries = await environment.getEntries({ content_type: ctId });
        for (const entry of entries.items) {
          try {
            // Despublicar si está publicado
            if (entry.isPublished()) {
              await entry.unpublish();
            }
            // Eliminar entry
            await entry.delete();
            console.log(`   ✅ Entry eliminada: ${entry.sys.id}`);
          } catch (err) {
            console.log(`   ⚠️  Error eliminando entry ${entry.sys.id}: ${err.message}`);
          }
        }

        // Ahora eliminar el Content Type
        const contentType = await environment.getContentType(ctId);

        // Despublicar si está publicado
        if (contentType.isPublished()) {
          await contentType.unpublish();
        }

        // Eliminar
        await contentType.delete();
        console.log(`✅ Content Type ${ctId} eliminado\n`);
      } catch (error) {
        if (error.message.includes('not found')) {
          console.log(`⚠️  Content Type ${ctId} no existe, saltando...\n`);
        } else {
          console.log(`⚠️  Error eliminando ${ctId}: ${error.message}\n`);
        }
      }
    }

    console.log('🎉 ¡Proceso de eliminación completado!');
    console.log('\n📋 Próximo paso:');
    console.log('Ejecuta: node scripts/setup-contentful-schema.js\n');

  } catch (error) {
    console.error('❌ Error:', error.message);
    if (error.details) {
      console.error('Detalles:', JSON.stringify(error.details, null, 2));
    }
    process.exit(1);
  }
}

// Ejecutar
deleteContentTypes();
