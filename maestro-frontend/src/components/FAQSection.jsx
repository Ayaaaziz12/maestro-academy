import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Quelles sont les formations proposées par Le Maestro Academy ?",
      answer: "Nous proposons des cours de soutien scolaire pour les collégiens et lycéens, ainsi que des préparations aux concours d'accès aux grandes écoles marocaines. Nos formations sont exclusivement en présentiel pour garantir un suivi personnalisé."
    },
    {
      question: "Quels sont les horaires des cours ?",
      answer: "Les cours sont dispensés du lundi au vendredi de 11h45 à 21h30, le samedi de 11h45 à 17h30, et le dimanche de 11h à 13h30. Les horaires peuvent varier selon les niveaux et les formations."
    },
    {
      question: "Comment s'inscrire aux formations ?",
      answer: "Vous pouvez vous inscrire directement au centre, par téléphone ou par email. Nous vous invitons à prendre rendez-vous pour une évaluation de votre niveau et un entretien personnalisé."
    },
    {
      question: "Quelle est la taille des groupes de cours ?",
      answer: "Nous privilégions des groupes restreints (maximum 15 élèves) pour assurer un suivi personnalisé et une meilleure interaction entre les formateurs et les élèves."
    },
    {
      question: "Proposez-vous des stages intensifs ?",
      answer: "Oui, nous organisons des stages intensifs pendant les vacances scolaires pour permettre aux élèves de renforcer leurs connaissances et de se préparer efficacement aux examens."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      {/* Fond décoratif */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.1),transparent_70%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-16"
        >
          <div className="text-center">
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Questions Fréquentes
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Retrouvez les réponses aux questions les plus courantes sur nos formations
            </motion.p>
          </div>

          <motion.div 
            variants={containerVariants}
            className="max-w-3xl mx-auto space-y-6"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <div className="relative">
                  {/* Effet de bordure animée */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-xl opacity-0 group-hover:opacity-100 transition duration-500 blur"></div>
                  
                  {/* Carte principale */}
                  <div className="relative bg-white rounded-xl shadow-md">
                    <button
                      onClick={() => setOpenIndex(openIndex === index ? null : index)}
                      className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center">
                          <HelpCircle className="w-5 h-5 text-primary-600" />
                        </div>
                        <span className="text-lg font-medium text-gray-900">
                          {faq.question}
                        </span>
                      </div>
                      <motion.div
                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0"
                      >
                        <ChevronDown className="w-6 h-6 text-primary-600" />
                      </motion.div>
                    </button>
                    
                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 py-5 text-gray-600 bg-gray-50 border-t border-gray-100">
                            <p className="leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="text-center"
          >
            <p className="text-gray-600 mb-8">
              Vous n'avez pas trouvé la réponse à votre question ?
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-xl font-medium shadow-md hover:shadow-lg transition-all duration-300"
            >
              Contactez-nous
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection; 