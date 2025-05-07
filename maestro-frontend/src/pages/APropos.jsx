import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const APropos = () => {
  return (
    <div className="min-h-screen">
   {/* Hero Section */}
   <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            src="/videos/Apropos-maestro-hero.mp4"
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
          />  
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            À Propos de Le Maestro Academy
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Un centre d'excellence pour la réussite académique et professionnelle des étudiants marocains

            </p>
          </motion.div>
        </div>
      </section>

      {/* Notre Histoire Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Notre Histoire</h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  Le Maestro Academy est né de la passion pour l'enseignement et de la volonté d'offrir aux étudiants marocains un accompagnement de qualité dans leur parcours académique.
                </p>
                <p>
                  Fondé par une équipe de professeurs expérimentés, notre centre s'est rapidement imposé comme une référence dans le domaine du soutien scolaire et de la préparation aux concours des grandes écoles marocaines.
                </p>
                <p>
                  Situé à Rabat Agdal, notre centre offre un environnement d'apprentissage optimal, propice à la concentration et à l'épanouissement intellectuel.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative h-[400px] rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src="/images/academy-building.jpg"
                alt="Le Maestro Academy"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Notre Mission & Nos Valeurs Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Notre Mission & Nos Valeurs</h2>
            <p className="text-xl text-gray-600">Guidés par l'excellence et le dévouement envers nos étudiants</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Carte Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-md p-8"
            >
              <h3 className="text-2xl font-bold text-sky-600 mb-6">Notre Mission</h3>
              <p className="text-gray-700 mb-6">
                Notre mission est d'accompagner chaque étudiant vers l'excellence académique en lui offrant un soutien personnalisé et des méthodes d'apprentissage efficaces.
              </p>
              <ul className="space-y-4">
                {[
                  'Offrir un soutien scolaire de qualité',
                  'Préparer efficacement aux concours',
                  'Développer la confiance et l\'autonomie',
                  'Contribuer à l\'excellence académique au Maroc'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="text-sky-600 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Carte Valeurs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-md p-8"
            >
              <h3 className="text-2xl font-bold text-sky-600 mb-6">Nos Valeurs</h3>
              <p className="text-gray-700 mb-6">
                Nos valeurs fondamentales guident notre approche pédagogique et notre engagement envers chaque étudiant.
              </p>
              <ul className="space-y-4">
                {[
                  'Excellence : viser le plus haut niveau de qualité',
                  'Bienveillance : accompagner avec empathie et respect',
                  'Rigueur : transmettre des méthodes de travail efficaces',
                  'Innovation : adapter les méthodes aux évolutions pédagogiques',
                  'Engagement : se consacrer à la réussite de chaque étudiant'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="text-sky-600 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-sky-600">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Rejoignez Le Maestro Academy
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Faites le premier pas vers votre réussite académique et professionnelle en rejoignant notre centre d'excellence.
            </p>
            <Link
              to="/inscription"
              className="inline-block px-8 py-4 bg-white text-sky-600 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-50"
            >
              Inscrivez-vous
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default APropos;