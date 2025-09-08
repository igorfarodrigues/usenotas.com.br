import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import { Button } from '@/ui/button';
import { toast } from '@/ui/use-toast';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Básico",
      description: "Perfeito para começar",
      monthlyPrice: 29,
      annualPrice: 290,
      features: [
        "Anotação por voz (até 10h/mês)",
        "Integração WhatsApp",
        "Até 50 documentos/mês",
        "Resumos e Flashcards básicos",
        "Suporte por email"
      ],
      popular: false
    },
    {
      name: "Pro",
      description: "Ideal para estudantes sérios",
      monthlyPrice: 59,
      annualPrice: 590,
      features: [
        "Anotação por voz ilimitada",
        "Tudo do Básico, e mais:",
        "Documentos ilimitados",
        "Resumos avançados com IA",
        "Integração Obsidian + Notion",
        "Geração de questões",
        "Suporte prioritário"
      ],
      popular: true
    },
    {
      name: "Premium",
      description: "Para instituições e grupos",
      monthlyPrice: 99,
      annualPrice: 990,
      features: [
        "Tudo do plano Pro",
        "Até 10 usuários",
        "Dashboard administrativo",
        "Relatórios de progresso",
        "Suporte 24/7"
      ],
      popular: false
    }
  ];

  const handleSelectPlan = (planName) => {
    toast({
      title: "🚧 Este recurso ainda não foi implementado—mas não se preocupe! Você pode solicitá-lo no seu próximo prompt! 🚀",
      duration: 4000,
    });
  };

  return (
    <section id="planos" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-dark-text mb-4">
            Escolha seu <span className="gradient-text">Plano</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Planos flexíveis para todos os tipos de estudantes e instituições.
          </p>

          <div className="inline-flex items-center justify-center space-x-4 bg-off-white p-2 rounded-full border border-gray-200">
            <span className={`font-bold transition-colors ${!isAnnual ? 'text-brand-purple' : 'text-gray-500'}`}>
              Mensal
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-14 h-8 rounded-full transition-colors ${
                isAnnual ? 'bg-brand-purple' : 'bg-gray-300'
              }`}
            >
              <motion.div
                layout
                transition={{ type: "spring", stiffness: 700, damping: 30 }}
                className={`absolute top-1 w-6 h-6 bg-white rounded-full ${
                  isAnnual ? 'left-7' : 'left-1'
                }`}
              />
            </button>
            <span className={`font-bold transition-colors ${isAnnual ? 'text-brand-purple' : 'text-gray-500'}`}>
              Anual
            </span>
            {isAnnual && (
              <span className="hidden sm:inline bg-brand-purple/10 text-brand-purple px-3 py-1 rounded-full text-sm font-medium ml-2">
                Economize 17%
              </span>
            )}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 rounded-2xl border-2 transition-all duration-300 ${
                plan.popular
                  ? 'border-brand-purple bg-white shadow-2xl shadow-brand-purple/10 scale-105'
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-brand-purple text-white px-4 py-1.5 rounded-full text-sm font-bold flex items-center space-x-1">
                    <Star size={16} />
                    <span>Mais Popular</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-dark-text mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6 h-10">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-5xl font-extrabold text-dark-text">
                    R$ {isAnnual ? Math.floor(plan.annualPrice / 12) : plan.monthlyPrice}
                  </span>
                  <span className="text-gray-500">/mês</span>
                  {isAnnual && (
                    <div className="text-sm text-gray-500 mt-1">
                      Cobrado R$ {plan.annualPrice} anualmente
                    </div>
                  )}
                </div>

                <Button
                  onClick={() => handleSelectPlan(plan.name)}
                  className={`w-full h-12 rounded-full font-bold text-base transition-all duration-300 ${
                    plan.popular
                      ? 'bg-brand-purple text-white hover:bg-opacity-90 pulse-glow'
                      : 'bg-gray-800 text-white hover:bg-gray-900 border'
                  }`}
                >
                  Escolher {plan.name}
                </Button>
              </div>

              <ul className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <Check className="text-brand-purple flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;