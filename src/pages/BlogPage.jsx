import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import BlogPostCard from '@/components/BlogPostCard';

const blogPosts = [
  {
    id: 1,
    title: 'Como a Inteligência Artificial Está Revolucionando os Estudos',
    excerpt: 'Descubra como ferramentas como o Usenotas podem otimizar seu tempo e melhorar seu aprendizado com resumos automáticos e flashcards inteligentes.',
    imageText: 'Cérebro digital com conexões de neurônios brilhantes',
    category: 'Produtividade',
    readTime: 5,
  },
  {
    id: 2,
    title: '5 Técnicas de Estudo Ativo para Memorizar Mais Rápido',
    excerpt: 'Saia da passividade! Aprenda técnicas que engajam seu cérebro e fazem a informação realmente grudar na memória. Spoiler: Usenotas ajuda!',
    imageText: 'Estudante focado escrevendo em um caderno com lâmpadas de ideias ao redor',
    category: 'Técnicas de Estudo',
    readTime: 7,
  },
  {
    id: 3,
    title: 'Anotações por Voz: A Ferramenta que Faltava na sua Rotina',
    excerpt: 'Cansado de digitar? Veja como a transcrição de áudio pode capturar ideias, aulas e reuniões sem que você perca o foco no que realmente importa.',
    imageText: 'Ondas sonoras se transformando em texto digital em uma tela de smartphone',
    category: 'Tecnologia',
    readTime: 4,
  },
    {
    id: 4,
    title: 'Organize Seus Estudos: Integração Usenotas com Notion e Obsidian',
    excerpt: 'Potencialize sua organização conectando o Usenotas às suas ferramentas de PKM favoritas. Centralize todo o seu conhecimento em um só lugar.',
    imageText: 'Logos do Notion e Obsidian conectados por linhas de dados a um cérebro central',
    category: 'Organização',
    readTime: 6,
  },
  {
    id: 5,
    title: 'Flashcards Inteligentes: Por Que a Repetição Espaçada Funciona?',
    excerpt: 'Entenda a ciência por trás dos flashcards e como nosso algoritmo de repetição espaçada garante que você nunca mais esqueça o que aprendeu.',
    imageText: 'Gráfico de curva de esquecimento sendo revertido com cartões de estudo',
    category: 'Técnicas de Estudo',
    readTime: 8,
  },
  {
    id: 6,
    title: 'Como Usar o WhatsApp para Potencializar seus Lembretes de Estudo',
    excerpt: 'Receba notificações e lembretes diretamente no seu WhatsApp. Uma forma simples e eficaz de manter a disciplina e não perder nenhum prazo.',
    imageText: 'Ícone de notificação do WhatsApp com um lembrete de estudo em um smartphone',
    category: 'Produtividade',
    readTime: 3,
  },
];

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
};

function BlogPage() {
  return (
    <>
      <Helmet>
        <title>Blog - Usenotas | Dicas de Estudo e Produtividade</title>
        <meta name="description" content="Explore artigos sobre técnicas de estudo, produtividade e como usar a tecnologia a seu favor com o Usenotas." />
      </Helmet>
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="bg-off-white"
      >
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-6 text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-dark-text mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Blog Usenotas
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-600 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Dicas, estratégias e novidades para turbinar seus estudos e sua produtividade.
            </motion.p>
            <motion.div 
              className="relative max-w-lg mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <input
                type="text"
                placeholder="Buscar artigos..."
                className="w-full py-3 pl-12 pr-4 text-gray-700 bg-white border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 transition-shadow"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            </motion.div>
          </div>
        </section>

        <section className="pb-20 md:pb-28">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                 <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
                  >
                    <BlogPostCard post={post} />
                 </motion.div>
              ))}
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
}

export default BlogPage;