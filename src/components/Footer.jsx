import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Brain, Mic, Search, MessageSquare, BookOpen } from 'lucide-react';
import { toast } from '@/ui/use-toast';
const Features = () => {
  const features = [{
    icon: Mic,
    title: "Anotação e Resumo por Voz",
    description: "Grave suas aulas ou ideias e nossa IA transcreve e resume tudo para você. Nunca perca uma informação importante."
  }, {
    icon: MessageSquare,
    title: "Integração com WhatsApp",
    description: "Envie áudios e documentos diretamente pelo WhatsApp e receba resumos e anotações na hora. Estude de qualquer lugar."
  }, {
    icon: FileText,
    title: "Leitura de Documentos",
    description: "Carregue PDFs e outros formatos. Nossa IA analisa e processa qualquer tipo de documento acadêmico."
  }, {
    icon: Brain,
    title: "Resumos e Flashcards",
    description: "Crie resumos automáticos e gere flashcards para memorização. Destaque os pontos principais com IA."
  }, {
    icon: Search,
    title: "Busca e Criação de Questões",
    description: "Encontre questões relacionadas ou crie questões personalizadas para testar seu conhecimento."
  }, {
    icon: BookOpen,
    title: "Integração Obsidian/Notion",
    description: "Sincronize perfeitamente com Obsidian e Notion. Mantenha tudo organizado em um só lugar."
  }];
  const handleFeatureClick = () => {
    toast({
      title: "🚧 Este recurso ainda não foi implementado—mas não se preocupe! Você pode solicitá-lo no seu próximo prompt! 🚀",
      duration: 4000
    });
  };
  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };
  return <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        amount: 0.5
      }} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-dark-text mb-4">
            Funcionalidades <span className="gradient-text">Poderosas</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Descubra como o Usenotas pode transformar sua forma de estudar com tecnologia de ponta.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => <motion.div key={index} variants={cardVariants} initial="offscreen" whileInView="onscreen" viewport={{
          once: true,
          amount: 0.3
        }} transition={{
          delay: index * 0.1
        }} onClick={handleFeatureClick} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-brand-purple/10 transition-all duration-300 card-hover cursor-pointer border border-gray-200 flex flex-col">
              <div className="flex-shrink-0 mb-6">
                <div className="w-14 h-14 bg-off-white border border-gray-200 rounded-xl flex items-center justify-center">
                  <feature.icon className="text-brand-purple" size={32} />
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-dark-text mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
};
export default Features;