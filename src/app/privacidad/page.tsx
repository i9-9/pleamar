import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Política de Privacidad | Pleamar',
  description: 'Política de privacidad y protección de datos personales de Pleamar',
};

export default function PoliticaPrivacidad() {
  return (
    <>
      <Header />

      <main style={{
        padding: '120px 40px 80px',
        maxWidth: '900px',
        margin: '0 auto',
        fontFamily: 'helvetica-neue, Helvetica Neue, Helvetica, Arial, sans-serif'
      }}>
        <h1 style={{
          fontFamily: 'din-2014, sans-serif',
          fontSize: 'clamp(32px, 6vw, 48px)',
          fontWeight: 700,
          marginBottom: '20px',
          color: '#1a1a1a'
        }}>
          Política de Privacidad
        </h1>

        <p style={{
          fontSize: '14px',
          color: '#666',
          marginBottom: '40px'
        }}>
          Última actualización: Enero 2025
        </p>

        <div style={{
          fontSize: '16px',
          lineHeight: '1.8',
          color: '#333'
        }}>
          <section style={{ marginBottom: '32px' }}>
            <h2 style={{
              fontSize: '20px',
              fontWeight: 700,
              marginBottom: '12px',
              color: '#1a1a1a'
            }}>
              Datos que recopilamos
            </h2>
            <p>
              En el formulario de contacto recopilamos nombre, email y mensaje. Solo usamos esta información para responder su consulta.
            </p>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{
              fontSize: '20px',
              fontWeight: 700,
              marginBottom: '12px',
              color: '#1a1a1a'
            }}>
              Uso de la información
            </h2>
            <p>
              No vendemos ni compartimos sus datos con terceros. Los datos se utilizan únicamente para gestionar y responder las consultas enviadas a través de nuestro sitio.
            </p>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{
              fontSize: '20px',
              fontWeight: 700,
              marginBottom: '12px',
              color: '#1a1a1a'
            }}>
              Cookies
            </h2>
            <p>
              Este sitio puede usar cookies técnicas para su correcto funcionamiento. Puede configurar su navegador para rechazarlas.
            </p>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{
              fontSize: '20px',
              fontWeight: 700,
              marginBottom: '12px',
              color: '#1a1a1a'
            }}>
              Sus derechos
            </h2>
            <p>
              Puede solicitar acceso, rectificación o eliminación de sus datos contactándonos por los canales indicados en la sección de contacto.
            </p>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{
              fontSize: '20px',
              fontWeight: 700,
              marginBottom: '12px',
              color: '#1a1a1a'
            }}>
              Contacto
            </h2>
            <p>
              Para consultas sobre esta política: <a href="mailto:operaciones@pleamar.com.ar" style={{ color: '#2B4C7E', textDecoration: 'underline' }}>operaciones@pleamar.com.ar</a>
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
