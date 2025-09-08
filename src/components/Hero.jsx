import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/ui/button';
import { ArrowRight, Zap } from 'lucide-react';
import { toast } from '@/ui/use-toast';

const Hero = () => {
  const handleGetStarted = () => {
    toast({
      title: "🚧 Este recurso ainda não foi implementado—mas não se preocupe! Você pode solicitá-lo no seu próximo prompt! 🚀",
      duration: 4000,
    });
  };

  return (
    <section id="home" className="relative pt-40 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-off-white">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-purple/10 rounded-full blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl opacity-40 animate-pulse animation-delay-4000"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center space-x-2 bg-white border border-gray-200 text-brand-purple px-4 py-2 rounded-full text-sm font-medium mb-6"
        >
          <Zap size={16} className="text-brand-purple" />
          <span>Anotações Inteligentes com IA</span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight text-dark-text mb-6"
        >
          Revolucione seus estudos com a <span className="gradient-text">magia da IA</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10"
        >
          Transforme áudio e documentos em resumos, crie flashcards e interaja via WhatsApp. Tudo integrado perfeitamente.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            onClick={handleGetStarted}
            size="lg"
            className="bg-brand-purple text-white hover:bg-opacity-90 px-8 h-14 rounded-full font-bold text-lg shadow-lg hover:shadow-brand-purple/20 transition-all duration-300 transform hover:scale-105"
          >
            Começar Agora
            <ArrowRight className="ml-2" size={22} />
          </Button>
          <Button
            onClick={handleGetStarted}
            variant="outline"
            size="lg"
            className="border-2 border-gray-300 text-gray-700 hover:bg-white hover:text-dark-text px-8 h-14 rounded-full font-bold text-lg transition-all duration-300"
          >
            Ver Demo
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="relative mt-20 max-w-5xl mx-auto"
      >
        <div className="relative z-10 floating-animation p-2 bg-white/50 rounded-2xl border border-gray-200 shadow-2xl shadow-gray-900/10">
          <img class="w-full h-auto rounded-xl" alt="Interface do NotasIA mostrando integração com WhatsApp em um dashboard moderno e claro" src="https://images.unsplash.com/photo-1675023035272-3426884896f8" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;