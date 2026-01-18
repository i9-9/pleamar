import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret');

  // Verificar el secret
  if (secret !== process.env.CONTENTFUL_REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
  }

  try {
    const body = await request.json();

    // Revalidar todas las páginas
    revalidatePath('/', 'layout');

    return NextResponse.json({
      revalidated: true,
      now: Date.now(),
      contentType: body.sys?.contentType?.sys?.id
    });
  } catch (err) {
    return NextResponse.json({
      message: 'Error revalidating',
      error: err instanceof Error ? err.message : 'Unknown error'
    }, { status: 500 });
  }
}
