import { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import AuthModals from '../components/AuthModals';
import SectionTransition from '../components/SectionTransition';

const formations = [
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: "Soutien Scolaire",
    description: "Un accompagnement personnalisé pour renforcer les acquis et combler les lacunes.",
    image: "/images/soutien-scolaire.jpg",
    targets: [
      "Élèves du primaire",
      "Collégiens",
      "Lycéens"
    ],
    link: "/soutien-scolaire",
    bgColor: "bg-primary-600"
  },
  {
    icon: <GraduationCap className="w-8 h-8" />,
    title: "Préparation aux Concours",
    description: "Une préparation intensive et méthodique pour réussir vos concours.",
    image: "/images/preparation-concours.jpg",
    targets: [
      "Étudiants en médecine",
      "Candidats aux concours administratifs",
      "Préparation aux grandes écoles"
    ],
    link: "/preparation-concours",
    bgColor: "bg-primary-500"
  }
];

const Formations = () => {
  const [authModalOpen, setAuthModalOpen] = useState(false); 

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <SectionTransition>
        <section className="relative py-16 md:py-24 overflow-hidden">
          {/* Video Background */}
          <div className="absolute inset-0 w-full h-full">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/videos/hero-image.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 rounded-2xl" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Nos Formations
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Découvrez notre gamme complète de formations conçues pour vous accompagner vers la réussite. 
                Du soutien scolaire à la préparation aux concours, nous vous offrons un accompagnement personnalisé 
                et des méthodes pédagogiques innovantes.
              </p>
            </motion.div>
          </div>
        </section>
      </SectionTransition>

      {/* Formations Overview */}
      <SectionTransition delay={0.2}>
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                🎯 Notre Mission
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Nous nous engageons à offrir un accompagnement pédagogique de qualité, 
                adapté aux besoins de chaque apprenant, pour garantir leur réussite académique.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {formations.map((formation, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-48">
                    <img
                      src={formation.image}
                      alt={formation.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-6">
                    <div className={`w-16 h-16 ${formation.bgColor} rounded-full flex items-center justify-center mb-4`}>
                      <div className="text-white">{formation.icon}</div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {formation.title}
                    </h3>

                    <p className="text-gray-600 mb-4">
                      {formation.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">
                        Publics cibles :
                      </h4>
                      <ul className="space-y-1">
                        {formation.targets.map((target, i) => (
                          <li key={i} className="text-gray-600 flex items-center">
                            <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2" />
                            {target}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      to={formation.link}
                      className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-primary-600 hover:bg-primary-700 transition-colors duration-300"
                    >
                      Découvrir cette formation
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </SectionTransition>

      {/* CTA Section */}
      <SectionTransition delay={0.4}>
        <section className="py-20 bg-sky-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Formez-vous aujourd'hui, pour réussir demain !
              </h2>
              <p className="text-xl text-white/90 mb-8">
                🎯 Votre avenir commence ici.
              </p>
              <button
                onClick={() => setAuthModalOpen(true)}
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Inscrivez-vous maintenant
              </button>
            </motion.div>
          </div>
        </section>
      </SectionTransition>

      {/* 🔐 Auth Modal */}
      <AuthModals
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        type="register"
      />
    </div>
  );
};

export default Formations;
