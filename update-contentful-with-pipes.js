require('dotenv').config({ path: '.env.local' });
const contentful = require('contentful-management');

const SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
const ACCESS_TOKEN = process.env.CONTENTFUL_MANAGEMENT_TOKEN;
const ENVIRONMENT = 'master';

async function updateContent() {
  const client = contentful.createClient({
    accessToken: ACCESS_TOKEN,
  });

  const space = await client.getSpace(SPACE_ID);
  const environment = await space.getEnvironment(ENVIRONMENT);

  // Get Landing Page
  console.log('Actualizando Landing Page...');
  const landingEntries = await environment.getEntries({
    content_type: 'landingPage',
    limit: 1,
  });

  if (landingEntries.items.length > 0) {
    const landingPage = landingEntries.items[0];

    // Agregar | para line breaks en mobile
    if (landingPage.fields.featuresTitle1) {
      landingPage.fields.featuresTitle1['en-US'] = 'Una forma mas | simple de operar';
    }

    if (landingPage.fields.featuresSubtitle) {
      landingPage.fields.featuresSubtitle['en-US'] = 'Desde 1993 facilitamos el | comercio exterior en Necochea';
    }

    if (landingPage.fields.servicesTitle) {
      landingPage.fields.servicesTitle['en-US'] = 'Nuestros | Servicios Principales';
    }

    const updatedLanding = await landingPage.update();
    await updatedLanding.publish();
    console.log('✓ Landing Page actualizada y publicada');
  }

  // Get Servicios Page
  console.log('Actualizando Servicios Page...');
  const serviciosEntries = await environment.getEntries({
    content_type: 'serviciosPage',
    limit: 1,
  });

  if (serviciosEntries.items.length > 0) {
    const serviciosPage = serviciosEntries.items[0];

    if (serviciosPage.fields.title) {
      serviciosPage.fields.title['en-US'] = 'Acompañamos su operación | de punta a punta';
    }

    const updatedServicios = await serviciosPage.update();
    await updatedServicios.publish();
    console.log('✓ Servicios Page actualizada y publicada');
  }

  console.log('\n✅ Todas las actualizaciones completadas exitosamente');
  console.log('\n📝 INSTRUCCIONES PARA TU CLIENTE:');
  console.log('Para agregar line breaks en mobile, usar el carácter | (pipe)');
  console.log('Ejemplo: "Una forma mas simple | de operar"');
  console.log('- Desktop: mostrará "Una forma mas simple de operar" (sin el |)');
  console.log('- Mobile: mostrará con line break donde estaba el |');
}

updateContent().catch(console.error);
