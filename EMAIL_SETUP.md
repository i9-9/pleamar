# Configuración de Email para Formulario de Contacto

Esta guía explica cómo configurar el envío de emails desde el formulario de contacto.

---

## 📧 Opciones de Configuración SMTP

### Opción 1: Gmail (Recomendado para desarrollo)

1. **Habilita la verificación en 2 pasos** en tu cuenta de Google
2. **Genera una App Password:**
   - Ve a https://myaccount.google.com/apppasswords
   - Selecciona "Correo" y "Otro (nombre personalizado)"
   - Nombra: "Pleamar Website"
   - Copia la contraseña generada (16 caracteres sin espacios)

3. **Configura en `.env.local`:**
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=tu-email@gmail.com
SMTP_PASS=tu-app-password-de-16-caracteres
SMTP_FROM=noreply@pleamar.com.ar
```

### Opción 2: Servidor SMTP Personalizado

Si tienes un servidor de email propio (ej: operaciones@pleamar.com.ar):

```env
SMTP_HOST=mail.pleamar.com.ar
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=operaciones@pleamar.com.ar
SMTP_PASS=tu_contraseña_de_email
SMTP_FROM=noreply@pleamar.com.ar
```

### Opción 3: Servicios de Email Transaccional

#### SendGrid
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=apikey
SMTP_PASS=tu_sendgrid_api_key
SMTP_FROM=noreply@pleamar.com.ar
```

#### Mailgun
```env
SMTP_HOST=smtp.mailgun.org
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=postmaster@tu-dominio.mailgun.org
SMTP_PASS=tu_mailgun_password
SMTP_FROM=noreply@pleamar.com.ar
```

#### AWS SES
```env
SMTP_HOST=email-smtp.us-east-1.amazonaws.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=tu_aws_smtp_username
SMTP_PASS=tu_aws_smtp_password
SMTP_FROM=noreply@pleamar.com.ar
```

---

## 🔧 Variables de Entorno

| Variable | Descripción | Ejemplo |
|----------|-------------|---------|
| `SMTP_HOST` | Servidor SMTP | `smtp.gmail.com` |
| `SMTP_PORT` | Puerto (587 para TLS, 465 para SSL) | `587` |
| `SMTP_SECURE` | `true` para puerto 465, `false` para otros | `false` |
| `SMTP_USER` | Usuario/email de autenticación | `tu-email@gmail.com` |
| `SMTP_PASS` | Contraseña o App Password | `abcd efgh ijkl mnop` |
| `SMTP_FROM` | Email del remitente (opcional) | `noreply@pleamar.com.ar` |

---

## 📬 Destinatario de los Emails

Los emails del formulario se envían a: **operaciones@pleamar.com.ar**

Para cambiar el destinatario, edita `src/app/api/contact/route.ts:30`:
```typescript
to: 'nuevo-email@pleamar.com.ar',
```

---

## 🧪 Probar el Envío de Emails

### 1. Desarrollo Local

```bash
# 1. Configura .env.local con credenciales SMTP
# 2. Reinicia el servidor
npm run dev

# 3. Abre http://localhost:3000/contacto
# 4. Completa el formulario y envía
# 5. Verifica que llegue el email a operaciones@pleamar.com.ar
```

### 2. En Producción (Vercel)

1. Ve a tu proyecto en Vercel
2. Settings → Environment Variables
3. Agrega las mismas variables:
   - `SMTP_HOST`
   - `SMTP_PORT`
   - `SMTP_SECURE`
   - `SMTP_USER`
   - `SMTP_PASS`
   - `SMTP_FROM`
4. Redeploy el proyecto

---

## ⚠️ Troubleshooting

### Error: "Invalid login"
- **Gmail**: Verifica que uses App Password, no tu contraseña normal
- **Otros**: Verifica usuario y contraseña

### Error: "Connection timeout"
- Verifica el SMTP_HOST y SMTP_PORT
- Algunos proveedores bloquean puerto 587, prueba 465 con SMTP_SECURE=true

### Error: "Self-signed certificate"
Si usas un servidor con certificado auto-firmado, agrega en el transporter:
```typescript
tls: {
  rejectUnauthorized: false
}
```

### Los emails van a spam
- Configura SPF, DKIM y DMARC en tu dominio
- Usa un servicio de email transaccional (SendGrid, Mailgun, etc.)

---

## 🚀 Recomendaciones para Producción

1. **No uses Gmail** para emails de producción (tiene límites de envío)
2. **Usa un servicio de email transaccional:**
   - SendGrid (100 emails/día gratis)
   - Mailgun (5000 emails/mes gratis)
   - AWS SES (muy económico, $0.10 por 1000 emails)
3. **Configura autenticación de dominio** (SPF, DKIM, DMARC)
4. **Monitorea entregas** y tasa de rebote

---

## 📋 Checklist

- [ ] Variables SMTP configuradas en `.env.local`
- [ ] Servidor de desarrollo reiniciado
- [ ] Formulario de contacto probado
- [ ] Email recibido en operaciones@pleamar.com.ar
- [ ] Variables configuradas en Vercel (para producción)
- [ ] Email testeado en producción

---

## 🎯 Próximos Pasos Opcionales

### 1. Email de Confirmación al Usuario
Agregar un segundo email que se envíe al usuario confirmando que recibimos su mensaje.

### 2. Notificaciones Slack/Discord
En lugar de (o además de) email, enviar notificaciones a Slack/Discord.

### 3. Guardar Mensajes en Base de Datos
Almacenar los mensajes en una DB para tener historial.

### 4. Protección contra Spam
Agregar reCAPTCHA o honeypot para prevenir spam.
