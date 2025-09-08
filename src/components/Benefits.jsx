import React from 'react';
import { motion } from 'framer-motion';
import { Clock, TrendingUp, Users, Shield } from 'lucide-react';
const Benefits = () => {
  const benefits = [{
    icon: Clock,
    title: "Economize 70% do Tempo",
    description: "Reduza o tempo gasto em anotações manuais e criação de resumos."
  }, {
    icon: TrendingUp,
    title: "Melhore suas Notas",
    description: "Estudantes relatam melhoria média de 40% nas notas após usar o NotasIA."
  }, {
    icon: Users,
    title: "Usado por 50k+ Estudantes",
    description: "Junte-se à comunidade que já revolucionou seus estudos."
  }, {
    icon: Shield,
    title: "100% Seguro e Privado",
    description: "Seus dados são criptografados e protegidos com os mais altos padrões."
  }];
  return <section id="beneficios" className="py-24 px-4 sm:px-6 lg:px-8 bg-off-white">
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
            Por que Escolher o <span className="gradient-text">NotasIA</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Resultados comprovados que transformam a experiência de aprendizado.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          amount: 0.3
        }} transition={{
          delay: index * 0.1
        }} className="bg-white p-8 rounded-2xl border border-gray-200 text-center card-hover">
              <div className="w-16 h-16 bg-off-white border border-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <benefit.icon className="text-brand-purple" size={32} />
              </div>
              <h3 className="text-xl font-bold text-dark-text mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </motion.div>)}
        </div>

        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        amount: 0.5
      }} transition={{
        delay: 0.4
      }} className="mt-20">
          <div className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-dark-text mb-4">"O Usenotas mudou completamente minha forma de estudar"</h3>
            <p className="text-gray-700 text-lg mb-6">
              "Consegui aumentar minha produtividade e minhas notas melhoraram significativamente. A integração com Notion é perfeita!"
            </p>
            <div className="flex items-center justify-center space-x-4">
              <img class="w-12 h-12 rounded-full object-cover" alt="Foto de perfil de Maria Silva, estudante de medicina" src="https://images.unsplash.com/photo-1601058914933-f12ba9d76300" />
              <div>
                <div className="text-dark-text font-semibold">Maria Silva</div>
                <div className="text-brand-purple text-sm">Estudante de Medicina, USP</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default Benefits;