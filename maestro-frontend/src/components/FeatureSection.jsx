import { motion } from 'framer-motion';

const FeatureSection = () => {
  const features = [
    {
      title: "Formation Interactive",
      description: "Apprenez à votre rythme avec nos cours interactifs et nos ressources pédagogiques innovantes",
      icon: "🎓",
      color: "from-primary-500 to-primary-600",
    },
    {
      title: "Experts Certifiés",
      description: "Des formateurs expérimentés et certifiés pour vous accompagner dans votre réussite",
      icon: "👨‍🏫",
      color: "from-secondary-500 to-secondary-600",
    },
    {
      title: "Support 24/7",
      description: "Une assistance personnalisée disponible à tout moment pour répondre à vos questions",
      icon: "💬",
      color: "from-primary-500 to-secondary-500",
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
    <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
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
              Nos Services
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Découvrez nos solutions d'apprentissage innovantes et personnalisées
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl"
                  style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }}
                />
                <div className="relative bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col items-center text-center">
                    <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center text-3xl sm:text-4xl mb-4 sm:mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            variants={itemVariants}
            className="text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg transition-all duration-300 shadow-md"
            >
              En savoir plus
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureSection;
