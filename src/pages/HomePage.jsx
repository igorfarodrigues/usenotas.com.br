import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Benefits from '@/components/Benefits';
import Pricing from '@/components/Pricing';
import { Toaster } from '@/ui/toaster';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Usenotas - App de Anotações Inteligentes | WhatsApp e Anotação por Voz</title>
        <meta name="description" content="Revolucione seus estudos com Usenotas - o app de anotações inteligentes com anotação por voz, resumos, flashcards e integração com WhatsApp." />
      </Helmet>
  <div className="min-h-screen bg-off-white text-dark-text">
        <Navbar />
        <main>
          <Hero />
          <Features />
          <Benefits />
          <Pricing />
        </main>
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default HomePage;