import { motion } from 'framer-motion';
import { BookOpen, Clock, Users, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const matieres = [
  {
    title: "Mathématiques",
    description: "Algèbre, géométrie, analyse et statistiques pour tous les niveaux"
  },
  {
    title: "Physique-Chimie",
    description: "Mécanique, électricité, thermodynamique et réactions chimiques"
  },
  {
    title: "SVT",
    description: "Biologie, géologie et sciences de la vie et de la terre"
  },
  {
    title: "Français",
    description: "Grammaire, conjugaison, littérature et expression écrite"
  },
  {
    title: "Arabe",
    description: "Grammaire, conjugaison, littérature et expression écrite"
  },
  {
    title: "Autres Matières",
    description: "Histoire, géographie, philosophie et langues étrangères"
  }
];

const SoutienScolaire = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/soutien-scolaire-hero.jpg"
            alt="Soutien Scolaire"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/80 backdrop-blur-sm" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Soutien Scolaire
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Un accompagnement personnalisé pour les élèves du collège et du lycée
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
                Un Soutien Adapté à Chaque Élève
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Notre approche pédagogique est centrée sur les besoins spécifiques de chaque élève. 
                Nous adaptons nos méthodes d'enseignement pour garantir une progression optimale 
                et une compréhension approfondie des matières.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Programmes Adaptés</h3>
                    <p className="text-gray-600">Des cours sur mesure selon le niveau et les objectifs de chaque élève</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Horaires Flexibles</h3>
                    <p className="text-gray-600">Des créneaux adaptés à votre emploi du temps</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Petits Groupes</h3>
                    <p className="text-gray-600">Un suivi personnalisé dans un cadre convivial</p>
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
                src="/images/soutien-scolaire-overview.jpg"
                alt="Soutien Scolaire"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Matières Proposées */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Matières Proposées
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un large éventail de matières pour répondre à tous les besoins
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {matieres.map((matiere, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-sky-600 mb-3">
                  {matiere.title}
                </h3>
                <p className="text-gray-600">
                  {matiere.description}
                </p>
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
              Prêt à Améliorer vos Résultats Scolaires ?
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

export default SoutienScolaire; 