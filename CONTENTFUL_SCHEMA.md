# Esquema de Contenido para Contentful

## Content Types (Modelos)

### 1. **Landing Page** (ID: `landingPage`)
Content type para la página principal

**Campos:**
- **heroTitle1** (Short text) - "Soluciones marítimas"
- **heroTitle2** (Short text) - "y portuarias integrales"
- **heroSubtitle** (Short text) - "Especialistas en Comercio Exterior"
- **heroImage** (Media - Single file) - Imagen del hero principal
- **heroCtaText** (Short text) - Texto del botón CTA
- **heroSecondaryText** (Short text) - "Respuesta rápida · Atención personalizada"

**Stats (contadores):**
- **stat1Value** (Integer) - 32
- **stat1Suffix** (Short text) - "+"
- **stat1Label** (Short text) - "Años de experiencia"
- **stat2Value** (Integer) - 95
- **stat2Suffix** (Short text) - "%"
- **stat2Label** (Short text) - "Operaciones sin demora"
- **stat3Value** (Integer) - 600
- **stat3Suffix** (Short text) - "+"
- **stat3Label** (Short text) - "Buques anuales"
- **stat4Value** (Integer) - 24
- **stat4Suffix** (Short text) - "/7"
- **stat4Label** (Short text) - "Respuesta inmediata"

**Features Section:**
- **featuresTitle1** (Short text) - "Una forma más simple de operar"
- **featuresSubtitle** (Short text) - "Simplificamos tus operaciones de importación y exportación"

**Feature Cards (3 cards):**
- **feature1Title** (Short text)
- **feature1Description** (Long text)
- **feature1Image** (Media - Single file)
- **feature2Title** (Short text)
- **feature2Description** (Long text)
- **feature2Image** (Media - Single file)
- **feature3Title** (Short text)
- **feature3Description** (Long text)
- **feature3Image** (Media - Single file)

**Services Section:**
- **servicesTitle** (Short text) - "Nuestros Servicios Principales"
- **service1Title** (Short text) - "Agencia marítima"
- **service1Subtitle** (Short text) - "ESPECIALISTAS EN"
- **service1Image** (Media - Single file)
- **service2Title** (Short text) - "Despacho de aduana"
- **service2Subtitle** (Short text) - "ESPECIALISTAS EN"
- **service2Image** (Media - Single file)
- **service3Title** (Short text) - "Estibaje"
- **service3Subtitle** (Short text) - "ESPECIALISTAS EN"
- **service3Image** (Media - Single file)

---

### 2. **Nosotros Page** (ID: `nosotrosPage`)
Content type para la página "Nosotros"

**Campos:**
- **mainImage** (Media - Single file) - Imagen principal
- **title** (Short text) - "Desde 1993 facilitamos el comercio exterior en Necochea"
- **paragraph1** (Long text)
- **paragraph2** (Long text)
- **bullet1Title** (Short text) - "Presencia nacional:"
- **bullet1Description** (Short text)
- **bullet2Text** (Short text)
- **bullet3Text** (Short text)

---

### 3. **Servicios Page** (ID: `serviciosPage`)
Content type para la página "Servicios"

**Campos:**
- **mainImage** (Media - Single file) - Imagen principal
- **title** (Short text) - "Acompañamos su operación de punta a punta"
- **transportLabel** (Short text) - "Transporte marítimo y terrestre"

**Categorías de servicios (4 secciones):**
- **category1Title** (Short text) - "Gestión Aduanera"
- **category1Items** (Short text, list) - Lista de servicios
- **category2Title** (Short text) - "Operaciones Logísticas"
- **category2Items** (Short text, list)
- **category3Title** (Short text) - "Gestión Documental"
- **category3Items** (Short text, list)
- **category4Title** (Short text) - "Manejo de Mercaderías"
- **category4Items** (Short text, list)

---

### 4. **Site Settings** (ID: `siteSettings`)
Configuración global del sitio

**Campos:**
- **siteName** (Short text) - "Pleamar"
- **siteDescription** (Long text)
- **contactEmail** (Short text)
- **contactPhone** (Short text)
- **contactWhatsapp** (Short text)
- **logo** (Media - Single file)
- **favicon** (Media - Single file)

---

## Estructura de Contentful

### Spaces
Crear un Space llamado "Pleamar Website"

### Environments
- **master** (producción)

### Locales
- **es-AR** (Español Argentina) - default

---

## Pasos para crear el esquema en Contentful

1. **Crear Content Type: Landing Page**
   - Name: Landing Page
   - API Identifier: `landingPage`
   - Agregar todos los campos listados arriba

2. **Crear Content Type: Nosotros Page**
   - Name: Nosotros Page
   - API Identifier: `nosotrosPage`
   - Agregar todos los campos listados arriba

3. **Crear Content Type: Servicios Page**
   - Name: Servicios Page
   - API Identifier: `serviciosPage`
   - Agregar todos los campos listados arriba

4. **Crear Content Type: Site Settings**
   - Name: Site Settings
   - API Identifier: `siteSettings`
   - Agregar todos los campos listados arriba

---

## Assets (Imágenes a subir)

Todas las imágenes deben ser renombradas con nomenclatura clara y subidas a Contentful:

### Landing Page
1. `landing-hero.jpg` - Hero principal
2. `landing-feature-experience.jpg` - Card experiencia
3. `landing-feature-locations.png` - Card ubicaciones
4. `landing-feature-integral.jpg` - Card servicio integral
5. `landing-service-agencia.jpg` - Agencia marítima
6. `landing-service-despacho.jpg` - Despacho de aduana
7. `landing-service-estibaje.jpg` - Estibaje

### Nosotros
8. `nosotros-hero.jpg` - Imagen principal

### Servicios
9. `servicios-hero.jpg` - Imagen principal

---

## Variables de Entorno Requeridas

```env
CONTENTFUL_SPACE_ID=tu_space_id
CONTENTFUL_ACCESS_TOKEN=tu_content_delivery_api_token
CONTENTFUL_PREVIEW_ACCESS_TOKEN=tu_preview_api_token
CONTENTFUL_REVALIDATE_SECRET=tu_secret_para_revalidacion
```
