import { motion } from 'framer-motion';

const CoursesSection = () => {
  const courses = [
    {
      title: "Préparation aux Concours",
      description: "Préparation intensive aux concours des grandes écoles marocaines",
      icon: "🎯",
      color: "from-primary-500 to-primary-600",
    },
    {
      title: "Soutien Scolaire",
      description: "Accompagnement personnalisé pour tous les niveaux",
      icon: "📚",
      color: "from-secondary-500 to-secondary-600",
    },
    {
      title: "Langues",
      description: "Cours de français, anglais et arabe pour tous les niveaux",
      icon: "🌍",
      color: "from-primary-500 to-secondary-500",
    },
    {
      title: "Mathématiques",
      description: "Renforcement et perfectionnement en mathématiques",
      icon: "🔢",
      color: "from-secondary-500 to-primary-500",
    },
  ];

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
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="space-y-16"
        >
          <div className="text-center">
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Nos Formations
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Découvrez notre gamme complète de formations adaptées à vos besoins
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl"
                  style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }}
                />
                <div className="relative bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col items-center text-center">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${course.color} flex items-center justify-center text-3xl mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                      {course.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {course.description}
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-full text-sm font-medium hover:shadow-lg transition-all duration-300"
                    >
                      Voir plus
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoursesSection; 