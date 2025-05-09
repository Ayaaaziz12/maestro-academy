import { motion } from 'framer-motion';
import { GraduationCap, Target, Award, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ecoles = [
  {
    title: "Écoles d'Ingénieurs",
    schools: [
      "ENSA",
      "ENSAM",
      "ENA",
      "APESA-IAV",
      "ENAM"
    ]
  },
  {
    title: "Écoles de Commerce et Gestion",
    schools: [
      "ENCG",
      "ISCAE",
      
    ]
  },
  {
    title: "Écoles de Médecine et Santé",
    schools: [
      "Médecine générale",
      "Médecine dentaire",
      "Pharmacie",
      
    
    ]
  }
];

const modules = [
  {
    title: "Mathématiques & Logique",
    topics: [
      "Algèbre",
      "Analyse",
      "Géométrie",
      "Probabilités",
      "Logique mathématique"
    ]
  },
  {
    title: "Physique - Chimie",
    topics: [
      "Mécanique",
      "Électricité",
      "Thermodynamique",
      "Chimie organique",
      "Chimie minérale"
    ]
  },
  {
    title: "Biologie / SVT",
    topics: [
      "Biologie cellulaire",
      "Génétique",
      "Physiologie",
      "Écologie",
      "Biologie moléculaire"
    ]
  },
  {
    title: "Culture Générale",
    topics: [
      "Actualité",
      "Histoire",
      "Géographie",
      "Philosophie",
      "Littérature"
    ]
  },
  {
    title: "Tests Psychotechniques",
    topics: [
      "Raisonnement logique",
      "Tests de personnalité",
      "Tests de concentration",
      "Tests de mémoire",
      "Tests de créativité"
    ]
  },
  {
    title: "Économie - Comptabilité",
    topics: [
      "Microéconomie",
      "Macroéconomie",
      "Comptabilité générale",
      "Finance",
      "Marketing"
    ]
  },
  {
    title: "Techniques d'Entretien",
    topics: [
      "Préparation aux oraux",
      "Techniques de communication",
      "Gestion du stress",
      "Présentation de soi",
      "Argumentation"
    ]
  },
  {
    title: "Préparation aux Oraux",
    topics: [
      "Simulations d'entretiens",
      "Techniques de présentation",
      "Gestion du temps",
      "Réponses aux questions",
      "Posture et communication"
    ]
  }
];

const PreparationConcours = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            src="/videos/preparation-concours-hero.mp4"
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
              Préparation aux Concours
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Une préparation intensive pour intégrer les grandes écoles marocaines
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vue d'ensemble */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Réussissez vos Concours avec Le Maestro Academy
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Notre programme de préparation aux concours est conçu pour vous donner 
                toutes les chances de réussite. Avec une approche méthodique et un suivi 
                personnalisé, nous vous accompagnons vers l'excellence.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Préparation Complète</h3>
                    <p className="text-gray-600">Un programme couvrant toutes les matières et compétences nécessaires</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Entraînement Intensif</h3>
                    <p className="text-gray-600">Des exercices pratiques et des simulations régulières</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Taux de Réussite Élevé</h3>
                    <p className="text-gray-600">Des résultats probants et une réputation d'excellence</p>
                  </div>
                </div>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-primary-600 hover:bg-primary-700 transition-colors duration-300"
              >
                Nous contacter pour plus d'informations
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="/images/preparation-concours-overview.jpg"
                alt="Préparation aux Concours"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Écoles et Concours */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Écoles et Concours Préparés
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nous préparons aux concours des plus grandes écoles marocaines
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ecoles.map((categorie, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-sky-600 mb-4">
                  {categorie.title}
                </h3>
                <ul className="space-y-2">
                  {categorie.schools.map((school, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <CheckCircle className="w-5 h-5 text-sky-600 mr-2" />
                      {school}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Modules Préparés
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une préparation complète couvrant toutes les matières et compétences nécessaires
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {modules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-sky-600 mb-4">
                  {module.title}
                </h3>
                <ul className="space-y-2">
                  {module.topics.map((topic, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <span className="w-1.5 h-1.5 bg-sky-600 rounded-full mr-2" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Prêt à Intégrer une Grande École ?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Rejoignez Le Maestro Academy et donnez-vous les moyens de réussir
            </p>
            <Link
              to="/inscription"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-primary-600 bg-white hover:bg-gray-50 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Nous contacter
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PreparationConcours; 