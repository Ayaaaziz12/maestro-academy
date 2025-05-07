import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GraduationCap, Users, Target } from 'lucide-react';

const TeachersSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with gradient and wave effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-50">
        <div className="absolute inset-0 bg-[url('/images/wave-pattern.svg')] opacity-10"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Nos Formateurs
                <span className="block text-primary-600 mt-2">Experts & Passionnés</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Nos formateurs cumulent plus de 27 ans d'expérience dans l'enseignement.
                Ils maîtrisent parfaitement les programmes du bac marocain et international,
                et accompagnent les élèves avec rigueur et bienveillance.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-gray-100 shadow-lg">
              <p className="text-xl font-semibold text-primary-600 italic">
                "Avec eux, apprendre devient un plaisir, progresser devient une fierté."
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-primary-600 hover:bg-primary-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Contactez Nos Formateurs
            </Link>
          </motion.div>

          {/* Right Column - Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/teachers-team.jpg"
                alt="Notre équipe de formateurs"
                className="w-full h-[500px] object-cover"
              />
              
            </div>

            {/* Floating Stats Cards */}
            <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary-600">27+</p>
                  <p className="text-sm text-gray-600">Années d'expérience</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white/90 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary-600">100%</p>
                  <p className="text-sm text-gray-600">Taux de réussite</p>
                </div>
              </div>
            </div>

            <div className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-white/90 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary-600">1000+</p>
                  <p className="text-sm text-gray-600">Élèves formés</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeachersSection; 