import React from 'react';
import { motion } from 'framer-motion';

const APropos = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-gradient-to-b from-white to-primary-50"
    >
      <div className="container mx-auto px-4 py-16">
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl font-display font-bold text-center text-primary-900 mb-12"
        >
          À Propos de Maestro Academy
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12"
        >
          <motion.section variants={itemVariants} className="mb-12">
            <h2 className="text-3xl font-display font-semibold text-primary-700 mb-6">
              Notre Mission
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Maestro Academy est née d'une vision simple mais ambitieuse : rendre l'apprentissage de la musique accessible à tous. 
              Notre plateforme combine l'expertise de professeurs passionnés avec la flexibilité de l'apprentissage en ligne pour 
              offrir une expérience éducative unique et personnalisée.
            </p>
          </motion.section>

          <motion.section variants={itemVariants} className="mb-12">
            <h2 className="text-3xl font-display font-semibold text-primary-700 mb-6">
              Notre Approche
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Nous croyons que chaque élève est unique et mérite un enseignement adapté à son rythme et à ses objectifs. 
              Notre plateforme permet une interaction directe entre élèves et professeurs, créant ainsi un environnement 
              d'apprentissage optimal et personnalisé.
            </p>
          </motion.section>

          <motion.section variants={itemVariants} className="mb-12">
            <h2 className="text-3xl font-display font-semibold text-primary-700 mb-6">
              Nos Valeurs
            </h2>
            <ul className="space-y-4">
              {[
                'Excellence pédagogique',
                'Innovation dans l\'enseignement',
                'Accessibilité pour tous',
                'Passion pour la musique',
                'Accompagnement personnalisé'
              ].map((value, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex items-center text-lg text-gray-700"
                >
                  <span className="w-2 h-2 bg-accent-500 rounded-full mr-3"></span>
                  {value}
                </motion.li>
              ))}
            </ul>
          </motion.section>

          <motion.section variants={itemVariants}>
            <h2 className="text-3xl font-display font-semibold text-primary-700 mb-6">
              Notre Engagement
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Nous nous engageons à fournir une expérience d'apprentissage de haute qualité, en constante évolution pour 
              répondre aux besoins de nos élèves et aux standards de l'enseignement musical moderne.
            </p>
          </motion.section>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default APropos; 