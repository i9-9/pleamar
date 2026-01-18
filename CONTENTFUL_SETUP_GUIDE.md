# Guía Completa de Configuración de Contentful

Esta guía te llevará paso a paso para configurar Contentful con ISR (Incremental Static Regeneration) para tu sitio web Pleamar.

---

## 📋 Tabla de Contenidos

1. [Crear cuenta y configurar Space](#1-crear-cuenta-y-configurar-space)
2. [Crear los Content Types](#2-crear-los-content-types)
3. [Subir las imágenes](#3-subir-las-imágenes)
4. [Crear el contenido](#4-crear-el-contenido)
5. [Obtener las API Keys](#5-obtener-las-api-keys)
6. [Configurar variables de entorno](#6-configurar-variables-de-entorno)
7. [Probar la integración](#7-probar-la-integración)
8. [Opcional: Configurar Webhooks para revalidación automática](#8-opcional-configurar-webhooks)

---

## 1. Crear cuenta y configurar Space

1. Ve a [contentful.com](https://www.contentful.com/)
2. Crea una cuenta gratuita (si no tienes una)
3. Una vez dentro, haz click en **"Create space"**
4. Selecciona **"Create an empty space"**
5. Nombra tu space: **"Pleamar Website"**
6. Selecciona **"Free"** plan
7. Click en **"Create space"**

---

## 2. Crear los Content Types

### 2.1 Landing Page

1. En el menú lateral, ve a **"Content model"**
2. Click en **"Add content type"**
3. Configura:
   - **Name:** Landing Page
   - **API Identifier:** `landingPage`
4. Click en **"Create"**
5. Ahora agrega los siguientes campos uno por uno (click en **"Add field"**):

#### Hero Section
- **Text (Short text)**: Name: `heroTitle1`, Validations: Required
- **Text (Short text)**: Name: `heroTitle2`, Validations: Required
- **Text (Short text)**: Name: `heroSubtitle`, Validations: Required
- **Media (Single file)**: Name: `heroImage`, Validations: Required, Accept only: Images
- **Text (Short text)**: Name: `heroCtaText`
- **Text (Short text)**: Name: `heroSecondaryText`

#### Stats Section
- **Number (Integer)**: Name: `stat1Value`, Validations: Required
- **Text (Short text)**: Name: `stat1Suffix`, Validations: Required
- **Text (Short text)**: Name: `stat1Label`, Validations: Required
- **Number (Integer)**: Name: `stat2Value`, Validations: Required
- **Text (Short text)**: Name: `stat2Suffix`, Validations: Required
- **Text (Short text)**: Name: `stat2Label`, Validations: Required
- **Number (Integer)**: Name: `stat3Value`, Validations: Required
- **Text (Short text)**: Name: `stat3Suffix`, Validations: Required
- **Text (Short text)**: Name: `stat3Label`, Validations: Required
- **Number (Integer)**: Name: `stat4Value`, Validations: Required
- **Text (Short text)**: Name: `stat4Suffix`, Validations: Required
- **Text (Short text)**: Name: `stat4Label`, Validations: Required

#### Features Section
- **Text (Short text)**: Name: `featuresTitle1`, Validations: Required
- **Text (Short text)**: Name: `featuresSubtitle`, Validations: Required

#### Feature Cards
- **Text (Short text)**: Name: `feature1Title`, Validations: Required
- **Text (Long text)**: Name: `feature1Description`, Validations: Required
- **Media (Single file)**: Name: `feature1Image`, Validations: Required, Accept only: Images
- **Text (Short text)**: Name: `feature2Title`, Validations: Required
- **Text (Long text)**: Name: `feature2Description`, Validations: Required
- **Media (Single file)**: Name: `feature2Image`, Validations: Required, Accept only: Images
- **Text (Short text)**: Name: `feature3Title`, Validations: Required
- **Text (Long text)**: Name: `feature3Description`, Validations: Required
- **Media (Single file)**: Name: `feature3Image`, Validations: Required, Accept only: Images

#### Services Section
- **Text (Short text)**: Name: `servicesTitle`, Validations: Required
- **Text (Short text)**: Name: `service1Title`, Validations: Required
- **Text (Short text)**: Name: `service1Subtitle`, Validations: Required
- **Media (Single file)**: Name: `service1Image`, Validations: Required, Accept only: Images
- **Text (Short text)**: Name: `service2Title`, Validations: Required
- **Text (Short text)**: Name: `service2Subtitle`, Validations: Required
- **Media (Single file)**: Name: `service2Image`, Validations: Required, Accept only: Images
- **Text (Short text)**: Name: `service3Title`, Validations: Required
- **Text (Short text)**: Name: `service3Subtitle`, Validations: Required
- **Media (Single file)**: Name: `service3Image`, Validations: Required, Accept only: Images

6. Click en **"Save"** arriba a la derecha

---

### 2.2 Nosotros Page

1. En **"Content model"**, click en **"Add content type"**
2. Configura:
   - **Name:** Nosotros Page
   - **API Identifier:** `nosotrosPage`
3. Agrega estos campos:

- **Media (Single file)**: Name: `mainImage`, Validations: Required, Accept only: Images
- **Text (Short text)**: Name: `title`, Validations: Required
- **Text (Long text)**: Name: `paragraph1`, Validations: Required
- **Text (Long text)**: Name: `paragraph2`, Validations: Required
- **Text (Short text)**: Name: `bullet1Title`, Validations: Required
- **Text (Short text)**: Name: `bullet1Description`, Validations: Required
- **Text (Short text)**: Name: `bullet2Text`, Validations: Required
- **Text (Short text)**: Name: `bullet3Text`, Validations: Required

4. Click en **"Save"**

---

### 2.3 Servicios Page

1. En **"Content model"**, click en **"Add content type"**
2. Configura:
   - **Name:** Servicios Page
   - **API Identifier:** `serviciosPage`
3. Agrega estos campos:

- **Media (Single file)**: Name: `mainImage`, Validations: Required, Accept only: Images
- **Text (Short text)**: Name: `title`, Validations: Required
- **Text (Short text)**: Name: `transportLabel`, Validations: Required
- **Text (Short text)**: Name: `category1Title`, Validations: Required
- **Text (Short text, List)**: Name: `category1Items`, Validations: Required
  - IMPORTANTE: En "Appearance" selecciona **"List"**
- **Text (Short text)**: Name: `category2Title`, Validations: Required
- **Text (Short text, List)**: Name: `category2Items`, Validations: Required
- **Text (Short text)**: Name: `category3Title`, Validations: Required
- **Text (Short text, List)**: Name: `category3Items`, Validations: Required
- **Text (Short text)**: Name: `category4Title`, Validations: Required
- **Text (Short text, List)**: Name: `category4Items`, Validations: Required

4. Click en **"Save"**

---

## 3. Subir las imágenes

1. En el menú lateral, ve a **"Media"**
2. Click en **"Add asset"** → **"Single asset"**
3. Sube las imágenes desde la carpeta `contentful-images/`:

### Imágenes preparadas:
```
✓ landing-hero.jpg (516 KB)
✓ landing-feature-experience.jpg (237 KB)
✓ landing-feature-locations.png (713 KB)
✓ landing-feature-integral.jpg (369 KB)
✓ landing-service-agencia.jpg (113 KB)
✓ landing-service-despacho.jpg (319 KB)
✓ landing-service-estibaje.jpg (936 KB)
✓ nosotros-hero.jpg (374 KB)
✓ servicios-hero.jpg (424 KB)
```

**IMPORTANTE:** Al subir cada imagen:
- Pon el **Title** exactamente como está arriba (sin la extensión)
- Ejemplo: para `landing-hero.jpg` → Title: `landing-hero`
- Esto facilita encontrarlas después

4. Una vez todas subidas, haz click en **"Publish"** en cada una

---

## 4. Crear el contenido

### 4.1 Landing Page

1. Ve a **"Content"** en el menú lateral
2. Click en **"Add entry"** → **"Landing Page"**
3. Completa todos los campos con este contenido:

#### Hero Section
- **heroTitle1:** `Soluciones marítimas`
- **heroTitle2:** `y portuarias integrales`
- **heroSubtitle:** `Especialistas en Comercio Exterior`
- **heroImage:** Selecciona `landing-hero`
- **heroCtaText:** `Contáctanos`
- **heroSecondaryText:** `Respuesta rápida · Atención personalizada`

#### Stats
- **stat1Value:** `32`
- **stat1Suffix:** `+`
- **stat1Label:** `Años de experiencia`
- **stat2Value:** `95`
- **stat2Suffix:** `%`
- **stat2Label:** `Operaciones sin demora`
- **stat3Value:** `600`
- **stat3Suffix:** `+`
- **stat3Label:** `Buques anuales`
- **stat4Value:** `24`
- **stat4Suffix:** `/7`
- **stat4Label:** `Respuesta inmediata`

#### Features
- **featuresTitle1:** `Una forma más simple de operar`
- **featuresSubtitle:** `Simplificamos tus operaciones de importación y exportación`

#### Feature Cards
- **feature1Title:** `32 años de experiencia`
- **feature1Description:** `Operando desde 1993, tres décadas gestionando operaciones exitosas`
- **feature1Image:** Selecciona `landing-feature-experience`
- **feature2Title:** `Presencia diversas localidades`
- **feature2Description:** `Necochea, Quequén, Buenos Aires, Bahía Blanca, Mar del Plata, Paso de los Libres, Rosario, San Lorenzo, Tres Arroyos. Red Nacional para tu comodidad`
- **feature2Image:** Selecciona `landing-feature-locations`
- **feature3Title:** `Servicio integral`
- **feature3Description:** `De la agencia marítima al despacho final. Coordinamos toda tu operación.`
- **feature3Image:** Selecciona `landing-feature-integral`

#### Services
- **servicesTitle:** `Nuestros Servicios Principales`
- **service1Title:** `Agencia marítima`
- **service1Subtitle:** `ESPECIALISTAS EN`
- **service1Image:** Selecciona `landing-service-agencia`
- **service2Title:** `Despacho de aduana`
- **service2Subtitle:** `ESPECIALISTAS EN`
- **service2Image:** Selecciona `landing-service-despacho`
- **service3Title:** `Estibaje`
- **service3Subtitle:** `ESPECIALISTAS EN`
- **service3Image:** Selecciona `landing-service-estibaje`

4. Click en **"Publish"** arriba a la derecha

---

### 4.2 Nosotros Page

1. En **"Content"**, click en **"Add entry"** → **"Nosotros Page"**
2. Completa:

- **mainImage:** Selecciona `nosotros-hero`
- **title:** `Desde 1993 facilitamos el comercio exterior en Necochea`
- **paragraph1:** `Somos una agencia marítima integral que gestiona cada etapa de tu operación: desde el arribo del buque hasta la entrega final de la mercadería.`
- **paragraph2:** `Con más de 32 años de experiencia, trabajamos con pequeñas, medianas y grandes empresas que buscan agilidad, confianza y soluciones personalizadas.`
- **bullet1Title:** `Presencia nacional:`
- **bullet1Description:** `Necochea, Buenos Aires, Bahía Blanca, Mar del Plata, Rosario, San Lorenzo y Paso de los Libres`
- **bullet2Text:** `Equipo de profesionales especializados`
- **bullet3Text:** `Atención personalizada para cada operación`

3. Click en **"Publish"**

---

### 4.3 Servicios Page

1. En **"Content"**, click en **"Add entry"** → **"Servicios Page"**
2. Completa:

- **mainImage:** Selecciona `servicios-hero`
- **title:** `Acompañamos su operación de punta a punta`
- **transportLabel:** `Transporte marítimo y terrestre`

#### Categories (para cada una, haz click en "+ Add item" para agregar elementos a la lista):

- **category1Title:** `Gestión Aduanera`
- **category1Items:** (agregar 3 items)
  - `Despacho de Aduana`
  - `Agente de Transporte Aduanero`
  - `Representación ante organismos`

- **category2Title:** `Operaciones Logísticas`
- **category2Items:** (agregar 3 items)
  - `Transporte marítimo y terrestre`
  - `Logística y coordinación`
  - `Coordinación de embarque`

- **category3Title:** `Gestión Documental`
- **category3Items:** (agregar 2 items)
  - `Tramitación de documentos comerciales`
  - `Asesoramiento en comercio exterior`

- **category4Title:** `Manejo de Mercaderías`
- **category4Items:** (agregar 3 items)
  - `Estibaje`
  - `Recepción`
  - `Entrega`

3. Click en **"Publish"**

---

## 5. Obtener las API Keys

1. En el menú superior, click en **"Settings"** → **"API keys"**
2. Click en **"Add API key"**
3. Dale un nombre: **"Production Website"**
4. Click en **"Save"**

**Ahora verás dos tokens importantes:**
- **Space ID** (lo necesitas)
- **Content Delivery API - access token** (lo necesitas)

**Guarda estos valores en un lugar seguro - los necesitarás en el siguiente paso**

---

## 6. Configurar variables de entorno

1. En tu proyecto, crea un archivo `.env.local` (si no existe)
2. Copia el contenido de `.env.local.example`
3. Reemplaza los valores:

```env
# Contentful Configuration
CONTENTFUL_SPACE_ID=tu_space_id_aqui
CONTENTFUL_ACCESS_TOKEN=tu_access_token_aqui
CONTENTFUL_PREVIEW_ACCESS_TOKEN=tu_preview_token_aqui
CONTENTFUL_REVALIDATE_SECRET=genera_un_secret_random_aqui

# Next.js
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

**Dónde encontrar cada valor:**
- `CONTENTFUL_SPACE_ID`: En Settings → API keys → Space ID
- `CONTENTFUL_ACCESS_TOKEN`: En Settings → API keys → Content Delivery API access token
- `CONTENTFUL_PREVIEW_ACCESS_TOKEN`: (opcional) En Settings → API keys → Content Preview API access token
- `CONTENTFUL_REVALIDATE_SECRET`: Genera uno aleatorio (ejemplo: `mi-secret-super-seguro-123`)

---

## 7. Probar la integración

1. Reinicia tu servidor de desarrollo:
```bash
npm run dev
```

2. Abre tu navegador en `http://localhost:3000`

3. Deberías ver tu sitio web cargando el contenido desde Contentful

**Si ves errores:**
- Verifica que las variables de entorno estén correctas
- Asegúrate de que todo el contenido esté **publicado** en Contentful
- Revisa la consola del navegador y la terminal para mensajes de error

---

## 8. Opcional: Configurar Webhooks

Los webhooks permiten que tu sitio se actualice automáticamente cuando cambias contenido en Contentful.

### 8.1 Crear endpoint de revalidación

Ya tienes el endpoint preparado. Solo necesitas crear el archivo de API:

```bash
# Crear el archivo API route
mkdir -p src/app/api/revalidate
```

Crea `src/app/api/revalidate/route.ts`:

```typescript
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
```

### 8.2 Configurar webhook en Contentful

1. Ve a **Settings** → **Webhooks**
2. Click en **"Add Webhook"**
3. Configura:
   - **Name:** Production Revalidate
   - **URL:** `https://tu-dominio.com/api/revalidate?secret=tu_secret`
   - **Triggers:** Selecciona:
     - Entry: publish, unpublish, delete
     - Asset: publish, unpublish, delete
4. Click en **"Save"**

**Para desarrollo local:**
- Usa una herramienta como [ngrok](https://ngrok.com/) para exponer tu localhost
- URL de ejemplo: `https://abc123.ngrok.io/api/revalidate?secret=tu_secret`

---

## 🎉 ¡Listo!

Tu sitio ahora está completamente integrado con Contentful usando ISR.

### Ventajas de esta implementación:

✅ **Contenido editable** - Todos los textos e imágenes son editables desde Contentful
✅ **ISR activado** - Las páginas se regeneran cada hora automáticamente
✅ **Performance óptimo** - Las páginas son estáticas pero se actualizan incrementalmente
✅ **Sin downtime** - Los cambios se propagan sin necesidad de rebuild completo
✅ **Webhooks opcionales** - Actualización instantánea cuando cambias contenido

### Para editar contenido:

1. Entra a [app.contentful.com](https://app.contentful.com)
2. Ve a **"Content"**
3. Selecciona la entrada que quieres editar
4. Haz los cambios
5. Click en **"Publish"**
6. Los cambios se verán reflejados en máximo 1 hora (o instantáneamente con webhooks)

---

## 📚 Recursos adicionales

- [Documentación de Contentful](https://www.contentful.com/developers/docs/)
- [Next.js ISR Documentation](https://nextjs.org/docs/app/building-your-application/data-fetching/incremental-static-regeneration)
- [Contentful SDK](https://contentful.github.io/contentful.js/)

---

## 🆘 Troubleshooting

### Error: "Cannot find module 'contentful'"
```bash
npm install contentful
```

### Error: "CONTENTFUL_SPACE_ID is not defined"
- Verifica que el archivo `.env.local` existe
- Asegúrate de reiniciar el servidor después de crear/modificar `.env.local`

### Las imágenes no cargan
- Verifica que las imágenes estén publicadas en Contentful
- Revisa que los nombres en los campos coincidan con los nombres de las imágenes subidas

### El contenido no se actualiza
- Espera hasta 1 hora (tiempo de revalidación ISR)
- O fuerza un rebuild: `npm run build && npm start`
- O configura webhooks para actualización inmediata
