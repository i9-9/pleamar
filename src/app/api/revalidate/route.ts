import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // Verificar el token secreto desde el header (más seguro que query params)
    const token = request.headers.get('x-webhook-secret');

    if (token !== process.env.CONTENTFUL_REVALIDATE_SECRET) {
      return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
    }

    const body = await request.json();

    // Obtener headers de Contentful para más contexto
    const contentfulTopic = request.headers.get('x-contentful-topic');
    const webhookName = request.headers.get('x-contentful-webhook-name');

    // Obtener información del contenido actualizado
    const contentType = body.sys?.contentType?.sys?.id;
    const entryId = body.sys?.id;
    const entryType = body.sys?.type; // 'Entry', 'DeletedEntry', etc.

    console.log(`[Webhook] ${webhookName || 'Contentful'}`);
    console.log(`[Webhook] Topic: ${contentfulTopic}`);
    console.log(`[Webhook] Type: ${entryType}, ContentType: ${contentType}, ID: ${entryId}`);

    // Array para trackear qué paths se revalidaron
    const revalidatedPaths: string[] = [];

    // Revalidar según el tipo de contenido
    switch (contentType) {
      case 'landingPage':
        // Revalidar la página principal
        revalidatePath('/');
        revalidatedPaths.push('/');
        break;

      case 'nosotrosPage':
        // Revalidar la página de nosotros
        revalidatePath('/nosotros');
        revalidatedPaths.push('/nosotros');
        break;

      case 'serviciosPage':
        // Revalidar la página de servicios
        revalidatePath('/servicios');
        revalidatedPaths.push('/servicios');
        break;

      case 'siteSettings':
        // Los settings afectan todo el sitio (layout, navbar, footer)
        revalidatePath('/', 'layout');
        revalidatedPaths.push('/ (layout)');
        break;

      default:
        // Si no coincide con ningún tipo conocido, revalidar todo por seguridad
        console.log(`[Webhook] Unknown contentType: ${contentType}, revalidating all`);
        revalidatePath('/', 'layout');
        revalidatedPaths.push('/ (layout - unknown type)');
    }

    console.log(`[Webhook] Revalidated paths:`, revalidatedPaths);

    return NextResponse.json({
      revalidated: true,
      contentType,
      entryId,
      entryType,
      topic: contentfulTopic,
      paths: revalidatedPaths,
      timestamp: Date.now()
    });

  } catch (err) {
    console.error('[Webhook] Error:', err);
    return NextResponse.json({
      message: 'Error revalidating',
      error: err instanceof Error ? err.message : 'Unknown error'
    }, { status: 500 });
  }
}
