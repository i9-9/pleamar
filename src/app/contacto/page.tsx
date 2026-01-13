'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function Contacto() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
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
      <section className="min-h-screen flex flex-col justify-center pt-20 pb-20 bg-white">
        <div className="px-[40px] w-full">
          {/* Title */}
          <div className="text-center mb-12">
            <h1
              className="text-[40px] lg:text-[64px] font-bold mb-4"
              style={{ fontFamily: 'din-2014, sans-serif', color: '#2B4C7E' }}
            >
              Consultá con expertos
            </h1>
            <p
              className="text-lg lg:text-xl"
              style={{ fontFamily: 'helvetica-neue, Helvetica Neue, Helvetica, Arial, sans-serif', color: '#364B72' }}
            >
              32 años de experiencia en comercio exterior nos respaldan.
            </p>
          </div>

          {/* Contact Form */}
          <div className="max-w-xl">
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
                  className="w-full bg-[#2B4C7E] text-white px-8 py-3.5 font-bold hover:bg-white hover:text-[#2B4C7E] border-2 border-[#2B4C7E] transition-all rounded"
                  style={{ fontFamily: 'din-2014, sans-serif' }}
                >
                  Enviar mensaje
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
