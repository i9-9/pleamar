const contentful = require('contentful-management');

const token = process.env.CONTENTFUL_MANAGEMENT_TOKEN;
if (!token) {
  console.error('CONTENTFUL_MANAGEMENT_TOKEN must be set');
  process.exit(1);
}
const client = contentful.createClient({ accessToken: token });

async function updateTexts() {
  try {
    const space = await client.getSpace('c8cfy6de3z5f');
    const environment = await space.getEnvironment('master');

    // Actualizar Landing Page
    console.log('Actualizando Landing Page...');
    const landingEntries = await environment.getEntries({ content_type: 'landingPage' });
    if (landingEntries.items.length > 0) {
      const landingPage = landingEntries.items[0];

      // Combinar heroTitle1 y heroTitle2 con salto de línea semántico
      landingPage.fields.heroTitle1 = {
        'en-US': 'Soluciones marítimas\ny portuarias integrales'
      };
      // Dejar heroTitle2 vacío o eliminarlo (lo usaremos combinado en heroTitle1)
      landingPage.fields.heroTitle2 = {
        'en-US': '' // Vacío porque ahora está en heroTitle1
      };

      // Actualizar featuresTitle1 con salto de línea semántico
      landingPage.fields.featuresTitle1 = {
        'en-US': 'Una forma más simple\nde operar'
      };

      // Actualizar servicesTitle con salto de línea semántico
      landingPage.fields.servicesTitle = {
        'en-US': 'Nuestros Servicios\nPrincipales'
      };

      const updated = await landingPage.update();
      await updated.publish();
      console.log('✓ Landing Page actualizada y publicada');
    }

    // Actualizar Nosotros Page
    console.log('Actualizando Nosotros Page...');
    const nosotrosEntries = await environment.getEntries({ content_type: 'nosotrosPage' });
    if (nosotrosEntries.items.length > 0) {
      const nosotrosPage = nosotrosEntries.items[0];

      nosotrosPage.fields.title = {
        'en-US': 'Desde 1993 facilitamos\nel comercio exterior\nen Necochea'
      };

      const updated = await nosotrosPage.update();
      await updated.publish();
      console.log('✓ Nosotros Page actualizada y publicada');
    }

    // Actualizar Servicios Page
    console.log('Actualizando Servicios Page...');
    const serviciosEntries = await environment.getEntries({ content_type: 'serviciosPage' });
    if (serviciosEntries.items.length > 0) {
      const serviciosPage = serviciosEntries.items[0];

      serviciosPage.fields.title = {
        'en-US': 'Acompañamos su operación\nde punta a punta'
      };

      const updated = await serviciosPage.update();
      await updated.publish();
      console.log('✓ Servicios Page actualizada y publicada');
    }

    console.log('\n✅ Todas las actualizaciones completadas exitosamente');
  } catch (error) {
    console.error('Error:', error);
  }
}

updateTexts();
