import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Términos y Condiciones | Pleamar',
  description: 'Términos y condiciones de uso de los servicios de Pleamar',
};

export default function TerminosCondiciones() {
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
          Términos y Condiciones
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
              Uso del sitio
            </h2>
            <p>
              Al utilizar este sitio web acepta estos términos. Pleamar ofrece servicios de agencia marítima, despacho de aduana, estibaje y logística conforme a la legislación argentina vigente.
            </p>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{
              fontSize: '20px',
              fontWeight: 700,
              marginBottom: '12px',
              color: '#1a1a1a'
            }}>
              Responsabilidades
            </h2>
            <p>
              Prestamos nuestros servicios con máxima diligencia profesional. No nos responsabilizamos por demoras causadas por terceros, información incorrecta del cliente, cambios en regulaciones o casos de fuerza mayor.
            </p>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{
              fontSize: '20px',
              fontWeight: 700,
              marginBottom: '12px',
              color: '#1a1a1a'
            }}>
              Confidencialidad
            </h2>
            <p>
              La información de nuestros clientes es tratada con estricta confidencialidad y no se comparte con terceros, excepto cuando sea requerido por ley.
            </p>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{
              fontSize: '20px',
              fontWeight: 700,
              marginBottom: '12px',
              color: '#1a1a1a'
            }}>
              Jurisdicción
            </h2>
            <p>
              Estos términos se rigen por las leyes de la República Argentina. Jurisdicción: tribunales ordinarios de Necochea, Provincia de Buenos Aires.
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
              Para consultas: <a href="mailto:operaciones@pleamar.com.ar" style={{ color: '#2B4C7E', textDecoration: 'underline' }}>operaciones@pleamar.com.ar</a>
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
