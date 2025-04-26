import { motion } from 'framer-motion';
import { 
  Users, 
  BookOpen, 
  Target, 
  Clock, 
  Award,
  Heart
} from 'lucide-react';

const CommitmentsSection = () => {
  const commitments = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Groupes Restreints",
      description: "Maximum 15 élèves par classe pour un suivi personnalisé et une meilleure interaction."
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Programmes Adaptés",
      description: "Des formations sur mesure selon votre niveau et vos objectifs."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Objectifs Clairs",
      description: "Une progression mesurable avec des objectifs définis pour chaque session."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Flexibilité",
      description: "Des horaires adaptés à votre emploi du temps et des stages intensifs pendant les vacances."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Excellence",
      description: "Une équipe de formateurs qualifiés et passionnés par l'enseignement."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Accompagnement",
      description: "Un suivi personnalisé et un soutien constant pour votre réussite."
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
    <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* En-tête */}
          <div className="text-center max-w-3xl mx-auto">
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Pourquoi choisir Maestro Academy ?
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-600"
            >
              Nous nous engageons à vous accompagner vers la réussite avec une approche personnalisée et des méthodes éprouvées.
            </motion.p>
          </div>

          {/* Contenu principal */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Liste des engagements */}
            <motion.div 
              variants={containerVariants}
              className="space-y-8"
            >
              {commitments.map((commitment, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start space-x-4 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center text-primary-600 group-hover:bg-primary-200 transition-colors duration-200">
                    {commitment.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {commitment.title}
                    </h3>
                    <p className="text-gray-600">
                      {commitment.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Image de l'étudiant */}
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <div className="relative w-full h-[600px]">
                <img
                  src="/images/student.png"
                  alt="Étudiant Maestro Academy"
                  className="w-full h-full object-contain"
                />
                {/* Effet de dégradé décoratif */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-100/20 to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div 
            variants={itemVariants}
            className="text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Rejoignez-nous
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommitmentsSection; 