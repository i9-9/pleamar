# Orden de Imágenes para Contentful

## 📄 PÁGINA PRINCIPAL (Landing Page)
**Entry ID:** nBqIqYe1MM7YEuNP0ySea

### Sección Hero (1 imagen)
1. **Imagen Hero** → `landing-hero`

### Sección Características (3 imágenes)
2. **Característica 1 - Imagen** → `landing-feature-experience`
   - (Corresponde a "32 años de experiencia")
3. **Característica 2 - Imagen** → `landing-feature-locations`
   - (Corresponde a "Presencia diversas localidades")
4. **Característica 3 - Imagen** → `landing-feature-integral`
   - (Corresponde a "Servicio integral")

### Sección Servicios (3 imágenes)
5. **Servicio 1 - Imagen** → `landing-service-agencia`
   - (Corresponde a "Agencia marítima")
6. **Servicio 2 - Imagen** → `landing-service-despacho`
   - (Corresponde a "Despacho de aduana")
7. **Servicio 3 - Imagen** → `landing-service-estibaje`
   - (Corresponde a "Estibaje")

**Total: 7 imágenes**

---

## 📄 PÁGINA NOSOTROS
**Entry ID:** 5ytxiIsSE24QE90n5UXvrA

1. **Imagen Principal** → `nosotros-hero`

**Total: 1 imagen**

---

## 📄 PÁGINA SERVICIOS
**Entry ID:** 7yqDIaZjI2hzyAJGCktHht

1. **Imagen Principal** → `servicios-hero`

**Total: 1 imagen**

---

## 📋 RESUMEN - TODAS LAS IMÁGENES (9 total)

### Imágenes del Landing:
1. `landing-hero.jpg` → **Imagen Hero**
2. `landing-feature-experience.jpg` → **Característica 1 - Imagen**
3. `landing-feature-locations.png` → **Característica 2 - Imagen**
4. `landing-feature-integral.jpg` → **Característica 3 - Imagen**
5. `landing-service-agencia.jpg` → **Servicio 1 - Imagen**
6. `landing-service-despacho.jpg` → **Servicio 2 - Imagen**
7. `landing-service-estibaje.jpg` → **Servicio 3 - Imagen**

### Imágenes de Nosotros:
8. `nosotros-hero.jpg` → **Imagen Principal**

### Imágenes de Servicios:
9. `servicios-hero.jpg` → **Imagen Principal**

---

## 🎯 IMPORTANTE AL SUBIR A CONTENTFUL

1. **Ve a Media**: https://app.contentful.com/spaces/c8cfy6de3z5f/assets

2. **Para cada imagen:**
   - Click en "Add asset" → "Single asset"
   - Sube el archivo
   - En el campo **"Title"** pon el nombre EXACTO (sin .jpg ni .png):
     - Ejemplo: `landing-hero` (NO "landing-hero.jpg")
   - Click en **"Publish"**

3. **Después de subir las 9 imágenes**, ve a cada entry y vincúlalas según la tabla de arriba.

---

## 💡 TIP: Vincular imágenes rápidamente

Una vez subidas las imágenes con los nombres correctos, puedes ejecutar de nuevo:

```bash
node scripts/setup-contentful-content.js
```

El script detectará las imágenes automáticamente y las vinculará. Luego solo tienes que publicar los entries.
