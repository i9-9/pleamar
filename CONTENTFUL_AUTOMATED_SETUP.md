# Setup Automatizado de Contentful

Esta guía te permite configurar Contentful automáticamente usando scripts de Node.js que crearán el schema y el contenido por ti.

---

## 🎯 Proceso Simplificado

### Paso 1: Verificar Variables de Entorno

El archivo `.env.local` debe tener tus credenciales de Contentful:

```env
CONTENTFUL_SPACE_ID=your_space_id_here
CONTENTFUL_ACCESS_TOKEN=your_access_token_here
CONTENTFUL_PREVIEW_ACCESS_TOKEN=your_preview_token_here
CONTENTFUL_MANAGEMENT_TOKEN=your_management_token_here
CONTENTFUL_REVALIDATE_SECRET=your_random_secret_here
```

Copia `.env.local.example` a `.env.local` y completa con tus credenciales.

---

### Paso 2: Subir Imágenes a Contentful

Sube **MANUALMENTE** las 9 imágenes a Contentful siguiendo estos nombres exactos:

1. Ve a [app.contentful.com](https://app.contentful.com)
2. Selecciona tu Space: **Pleamar Website**
3. En el menú lateral, haz click en **"Media"**
4. Click en **"Add asset"** → **"Single asset"**

Sube cada imagen de la carpeta `contentful-images/` con estos **nombres exactos** (sin extensión):

| Archivo | Nombre en Contentful (Title) |
|---------|------------------------------|
| `landing-hero.jpg` | `landing-hero` |
| `landing-feature-experience.jpg` | `landing-feature-experience` |
| `landing-feature-locations.png` | `landing-feature-locations` |
| `landing-feature-integral.jpg` | `landing-feature-integral` |
| `landing-service-agencia.jpg` | `landing-service-agencia` |
| `landing-service-despacho.jpg` | `landing-service-despacho` |
| `landing-service-estibaje.jpg` | `landing-service-estibaje` |
| `nosotros-hero.jpg` | `nosotros-hero` |
| `servicios-hero.jpg` | `servicios-hero` |

**IMPORTANTE**:
- El campo **"Title"** debe ser exactamente como se indica arriba
- Después de subir cada imagen, haz click en **"Publish"**

---

### Paso 3: Ejecutar Script de Setup Completo

Una vez subidas las imágenes, ejecuta:

```bash
npm run contentful:setup
```

Este comando ejecutará **automáticamente**:
1. ✅ Creará los 3 Content Types (schema)
2. ✅ Creará las entradas con todos los textos
3. ✅ Vinculará las imágenes automáticamente (si los nombres coinciden)

**Salida esperada:**
```
🚀 Iniciando creación de Content Types en Contentful...
✅ Conectado al Space: Pleamar Website (c8cfy6de3z5f)
✅ Environment: master

📝 Creando Content Type: Landing Page...
✅ Landing Page creado y publicado

📝 Creando Content Type: Nosotros Page...
✅ Nosotros Page creado y publicado

📝 Creando Content Type: Servicios Page...
✅ Servicios Page creado y publicado

🎉 ¡Schema creado exitosamente en Contentful!

🚀 Iniciando creación de contenido en Contentful...
📸 Buscando assets subidos...
✅ Encontrados 9 assets

📝 Creando entry: Landing Page...
✅ Landing Page creado (ID: xxx)

📝 Creando entry: Nosotros Page...
✅ Nosotros Page creado (ID: xxx)

📝 Creando entry: Servicios Page...
✅ Servicios Page creado (ID: xxx)

🎉 ¡Contenido creado exitosamente!
```

---

### Paso 4: Publicar Entradas en Contentful

1. Ve a [app.contentful.com](https://app.contentful.com/spaces/c8cfy6de3z5f/entries)
2. Verás 3 entradas creadas:
   - Landing Page
   - Nosotros Page
   - Servicios Page
3. Abre cada una y haz click en **"Publish"** (botón verde arriba a la derecha)

---

### Paso 5: Probar tu Sitio

```bash
npm run dev
```

Abre http://localhost:3000 y verifica que todo funciona correctamente.

---

## 🛠️ Scripts Disponibles

### Script Completo (Recomendado)
```bash
npm run contentful:setup
```
Crea el schema Y el contenido en un solo comando.

### Scripts Individuales

Si necesitas ejecutarlos por separado:

#### Solo crear el Schema (Content Types)
```bash
npm run contentful:schema
```

#### Solo crear el Contenido (Entries)
```bash
npm run contentful:content
```

---

## 📋 Checklist de Setup

- [ ] Verificar que `.env.local` tiene todas las credenciales
- [ ] Subir las 9 imágenes a Contentful con los nombres correctos
- [ ] Publicar todas las imágenes en Contentful
- [ ] Ejecutar `npm run contentful:setup`
- [ ] Publicar las 3 entradas creadas en Contentful
- [ ] Probar el sitio con `npm run dev`

---

## ⚠️ Troubleshooting

### Error: "CONTENTFUL_MANAGEMENT_TOKEN is not defined"
Verifica que el archivo `.env.local` existe y tiene el token correcto.

### Error: "Content type already exists"
Es normal si ejecutas el script múltiples veces. El script saltará los Content Types que ya existen.

### Las imágenes no se vinculan automáticamente
Asegúrate de que:
1. Las imágenes estén publicadas en Contentful
2. El campo "Title" de cada imagen coincida EXACTAMENTE con los nombres listados arriba
3. Si no coinciden, vincúlalas manualmente en cada entry

### Error al ejecutar el script
```bash
# Verifica que dotenv está instalado
npm install --save-dev dotenv

# Verifica que contentful-management está instalado
npm install --save-dev contentful-management
```

---

## 🎉 ¡Todo Listo!

Una vez completados todos los pasos:
- ✅ Schema creado automáticamente
- ✅ Contenido subido automáticamente
- ✅ Imágenes vinculadas (si los nombres coinciden)
- ✅ Sitio funcionando con Contentful + ISR

---

## 📚 Documentación Adicional

- **Guía Manual**: `CONTENTFUL_SETUP_GUIDE.md` (si prefieres hacerlo manualmente)
- **Schema Técnico**: `CONTENTFUL_SCHEMA.md`
- **Información General**: `README_CONTENTFUL.md`

---

## 🔄 Actualizar Contenido

Después del setup inicial, puedes editar el contenido directamente desde Contentful:

1. Ve a [app.contentful.com](https://app.contentful.com)
2. Click en **"Content"**
3. Selecciona la entrada que quieres editar
4. Haz los cambios
5. Click en **"Publish"**
6. Los cambios se verán reflejados en tu sitio en máximo 1 hora (ISR)

---

## 🎯 Próximos Pasos Opcionales

### Configurar Webhook para Revalidación Instantánea

1. En Contentful, ve a **Settings** → **Webhooks**
2. Click en **"Add Webhook"**
3. Configura:
   - **Name**: Production Revalidate
   - **URL**: `https://tu-dominio.com/api/revalidate?secret=pleamar-2024-webhook-secret-abc123xyz`
   - **Triggers**:
     - Entry: publish, unpublish, delete
     - Asset: publish, unpublish, delete
4. Click en **"Save"**

Ahora cuando edites contenido en Contentful, tu sitio se actualizará instantáneamente.
