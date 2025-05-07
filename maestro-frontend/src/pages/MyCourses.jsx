import { motion } from 'framer-motion';

const MyCourses = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Mes Cours
          </h1>
          <p className="text-xl text-gray-600">
            Gérez vos cours et suivez votre progression
          </p>
        </motion.div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <p className="text-gray-600 text-center">
            Contenu en cours de développement...
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyCourses; 