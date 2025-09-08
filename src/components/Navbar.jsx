import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';
import { Button } from '@/ui/button';
import { toast } from '@/ui/use-toast';
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = sectionId => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };
  const handleBuyNow = () => {
    toast({
      title: "🚧 Este recurso ainda não foi implementado—mas não se preocupe! Você pode solicitá-lo no seu próximo prompt! 🚀",
      duration: 4000
    });
  };
  const navLinks = [{
    id: 'home',
    label: 'Home'
  }, {
    id: 'beneficios',
    label: 'Benefícios'
  }, {
    id: 'planos',
    label: 'Planos'
  }, {
    id: 'blog',
    label: 'Blog'
  }];
  return <motion.nav initial={{
    y: -100
  }} animate={{
    y: 0
  }} transition={{
    duration: 0.5
  }} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-off-white/80 backdrop-blur-lg border-b border-gray-200' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div whileHover={{
          scale: 1.05
        }} className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="w-9 h-9 bg-brand-purple rounded-lg flex items-center justify-center">
              <Zap className="text-white" size={20} />
            </div>
            <span className="text-2xl font-bold text-dark-text">Usenotas</span>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => <button key={link.id} onClick={() => scrollToSection(link.id)} className="text-gray-600 hover:text-brand-purple transition-colors font-medium">
                {link.label}
              </button>)}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button onClick={handleBuyNow} className="bg-brand-purple text-white hover:bg-opacity-90 px-6 py-2 rounded-full font-bold shadow-lg hover:shadow-brand-purple/20 transition-all duration-300">
              Compre Agora
            </Button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-600 hover:text-brand-purple transition-colors">
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && <motion.div initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: 'auto'
      }} exit={{
        opacity: 0,
        height: 0
      }} className="md:hidden bg-white rounded-b-lg shadow-lg overflow-hidden">
            <div className="flex flex-col space-y-1 p-4">
              {navLinks.map(link => <button key={link.id} onClick={() => scrollToSection(link.id)} className="text-gray-700 hover:bg-gray-100 hover:text-brand-purple transition-colors font-medium text-left px-4 py-3 rounded-md">
                  {link.label}
                </button>)}
              <div className="pt-4 px-4">
                <Button onClick={handleBuyNow} className="w-full bg-brand-purple text-white hover:bg-opacity-90 py-3 rounded-full font-bold">
                  Compre Agora
                </Button>
              </div>
            </div>
          </motion.div>}
      </div>
    </motion.nav>;
};
export default Navbar;