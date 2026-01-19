'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ClientAnimations from '@/components/ClientAnimations';
import { useState } from 'react';

export default function Contacto() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Error al enviar el mensaje');
      }

      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 3000);
    } catch (err) {
      setError('Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center pt-28 lg:pt-20 pb-20 bg-white">
        <div className="px-[40px] w-full">
          {/* Title */}
          <div className="text-center mb-12">
            <h1
              className="text-[40px] lg:text-[64px] font-bold mb-4"
              style={{ fontFamily: 'din-2014, sans-serif', color: '#2B4C7E', lineHeight: '0.95' }}
            >
              <ClientAnimations
                text={"Consultá con expertos".replace(' | ', ' ')}
                mobileText={"Consultá | con expertos".replace(' | ', '\n')}
                delay={0}
              />
            </h1>
            <p
              className="text-lg lg:text-xl"
              style={{ fontFamily: 'helvetica-neue, Helvetica Neue, Helvetica, Arial, sans-serif', color: '#364B72' }}
            >
              +32 años de experiencia en comercio exterior nos respaldan.
            </p>
          </div>

          {/* Form + Contact Info (12 cols: form 6, info 6) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 lg:items-start">
            {/* Contact Form - 6 columnas */}
            <div className="lg:col-span-6">
            {isSubmitted ? (
              <div className="text-center py-12">
                <svg
                  className="w-16 h-16 text-green-400 mx-auto mb-4"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <h3
                  className="text-2xl font-bold mb-2"
                  style={{ fontFamily: 'din-2014, sans-serif', color: '#2B4C7E' }}
                >
                  ¡Mensaje enviado!
                </h3>
                <p
                  style={{ fontFamily: 'helvetica-neue, Helvetica Neue, Helvetica, Arial, sans-serif', color: '#364B72' }}
                >
                  Nos pondremos en contacto con vos pronto.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Error Message */}
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                    <p style={{ fontFamily: 'helvetica-neue, Helvetica Neue, Helvetica, Arial, sans-serif' }}>
                      {error}
                    </p>
                  </div>
                )}

                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block font-bold mb-2 text-sm"
                    style={{ fontFamily: 'din-2014, sans-serif', color: '#2B4C7E' }}
                  >
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#E8E8E8] text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#2B4C7E] transition-all rounded"
                    style={{ fontFamily: 'helvetica-neue, Helvetica Neue, Helvetica, Arial, sans-serif' }}
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block font-bold mb-2 text-sm"
                    style={{ fontFamily: 'din-2014, sans-serif', color: '#2B4C7E' }}
                  >
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#E8E8E8] text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#2B4C7E] transition-all rounded"
                    style={{ fontFamily: 'helvetica-neue, Helvetica Neue, Helvetica, Arial, sans-serif' }}
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block font-bold mb-2 text-sm"
                    style={{ fontFamily: 'din-2014, sans-serif', color: '#2B4C7E' }}
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-[#E8E8E8] text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#2B4C7E] transition-all resize-none rounded"
                    style={{ fontFamily: 'helvetica-neue, Helvetica Neue, Helvetica, Arial, sans-serif' }}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#2B4C7E] text-white px-8 py-3.5 font-bold hover:bg-white hover:text-[#2B4C7E] border-2 border-[#2B4C7E] transition-all rounded disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ fontFamily: 'din-2014, sans-serif' }}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                </button>
              </form>
            )}
            </div>

            {/* Contact Info - 6 columnas */}
            <div className="lg:col-span-6">
              <div
                className="rounded-2xl p-8"
                style={{
                  backgroundColor: '#F0F0F0',
                  fontFamily: 'helvetica-neue, Helvetica Neue, Helvetica, Arial, sans-serif',
                }}
              >
                <h3
                  className="text-lg font-bold mb-6"
                  style={{ fontFamily: 'din-2014, sans-serif', color: '#2B4C7E' }}
                >
                  Datos de contacto
                </h3>

                {/* Dirección */}
                <div className="mb-6">
                  <p
                    className="text-sm font-bold mb-2"
                    style={{ fontFamily: 'din-2014, sans-serif', color: '#2B4C7E' }}
                  >
                    Dirección
                  </p>
                  <p className="text-[15px] leading-relaxed" style={{ color: '#364B72' }}>
                    Avenida 59 Nro 2151<br />
                    Necochea, Buenos Aires<br />
                    Argentina
                  </p>
                </div>

                {/* Tel */}
                <div className="mb-6">
                  <p
                    className="text-sm font-bold mb-2"
                    style={{ fontFamily: 'din-2014, sans-serif', color: '#2B4C7E' }}
                  >
                    Tel
                  </p>
                  <a
                    href="tel:+542262433336"
                    className="text-[15px] hover:underline transition"
                    style={{ color: '#364B72' }}
                  >
                    +54 2262 433336/7/8
                  </a>
                </div>

                {/* Email */}
                <div>
                  <p
                    className="text-sm font-bold mb-2"
                    style={{ fontFamily: 'din-2014, sans-serif', color: '#2B4C7E' }}
                  >
                    Email
                  </p>
                  <a
                    href="mailto:operaciones@pleamar.com.ar"
                    className="text-[15px] hover:underline transition"
                    style={{ color: '#364B72' }}
                  >
                    operaciones@pleamar.com.ar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
