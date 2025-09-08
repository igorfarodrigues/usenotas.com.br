import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Zap } from 'lucide-react';
import { toast } from '@/ui/use-toast';

const Footer = () => {
  const handleLinkClick = () => {
    toast({
      title: "🚧 Este recurso ainda não foi implementado—mas não se preocupe! Você pode solicitá-lo no seu próximo prompt! 🚀",
      duration: 4000,
    });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: Facebook, name: 'Facebook' },
    { icon: Twitter, name: 'Twitter' },
    { icon: Instagram, name: 'Instagram' },
    { icon: Linkedin, name: 'LinkedIn' },
  ];

  return (
    <footer id="blog" className="bg-white text-gray-700 py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2">
              <div className="w-9 h-9 bg-brand-purple rounded-lg flex items-center justify-center">
                <Zap className="text-white" size={20} />
              </div>
              <span className="text-xl font-bold text-dark-text">NotasIA</span>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Revolucionando a forma como estudantes aprendem com IA.
            </p>
            <div className="flex space-x-3 pt-2">
              {socialLinks.map((social, index) => (
                <button
                  key={index}
                  onClick={handleLinkClick}
                  aria-label={social.name}
                  className="w-10 h-10 bg-off-white hover:bg-brand-purple text-gray-600 hover:text-white rounded-full flex items-center justify-center transition-colors border border-gray-200"
                >
                  <social.icon size={20} />
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <p className="text-lg font-semibold text-dark-text">Links Rápidos</p>
            <ul className="space-y-2">
              <li><button onClick={() => scrollToSection('home')} className="text-gray-600 hover:text-brand-purple transition-colors">Home</button></li>
              <li><button onClick={() => scrollToSection('beneficios')} className="text-gray-600 hover:text-brand-purple transition-colors">Benefícios</button></li>
              <li><button onClick={() => scrollToSection('planos')} className="text-gray-600 hover:text-brand-purple transition-colors">Planos</button></li>
              <li><button onClick={handleLinkClick} className="text-gray-600 hover:text-brand-purple transition-colors">Blog</button></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <p className="text-lg font-semibold text-dark-text">Suporte</p>
            <ul className="space-y-2">
              <li><button onClick={handleLinkClick} className="text-gray-600 hover:text-brand-purple transition-colors">Central de Ajuda</button></li>
              <li><button onClick={handleLinkClick} className="text-gray-600 hover:text-brand-purple transition-colors">Documentação</button></li>
              <li><button onClick={handleLinkClick} className="text-gray-600 hover:text-brand-purple transition-colors">Contato</button></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <p className="text-lg font-semibold text-dark-text">Contato</p>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3"><Mail className="text-brand-purple" size={18} /><span className="text-gray-600">contato@notasia.com</span></li>
              <li className="flex items-center space-x-3"><Phone className="text-brand-purple" size={18} /><span className="text-gray-600">+55 (11) 9999-9999</span></li>
              <li className="flex items-center space-x-3"><MapPin className="text-brand-purple" size={18} /><span className="text-gray-600">São Paulo, SP - Brasil</span></li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} NotasIA. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 text-sm">
            <button onClick={handleLinkClick} className="text-gray-500 hover:text-brand-purple transition-colors">Política de Privacidade</button>
            <button onClick={handleLinkClick} className="text-gray-500 hover:text-brand-purple transition-colors">Termos de Uso</button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;