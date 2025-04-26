import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const TeachersSection = () => {
  const stats = [
    {
      id: 1,
      value: 27,
      suffix: '+',
      label: 'Années d\'expérience',
      icon: '⏳'
    },
    {
      id: 2,
      value: 100,
      suffix: '%',
      label: 'Taux de réussite',
      icon: '🎯'
    },
    {
      id: 3,
      value: 1000,
      suffix: '+',
      label: 'Élèves formés',
      icon: '👥'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Titre avec emoji */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <span className="text-5xl mb-4 block text-blue-600">👩‍🏫</span>
            <h2 className="text-4xl font-bold text-gray-700 mb-6">Nos Formateurs</h2>
          </motion.div>

          {/* Paragraphe d'introduction */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-700 mb-8 leading-relaxed"
          >
            Nos formateurs cumulent plus de 27 ans d'expérience dans l'enseignement.
            <br />
            Ils maîtrisent parfaitement les programmes du bac marocain et international, et accompagnent les élèves avec rigueur et bienveillance.
          </motion.p>

          {/* Phrase mise en évidence */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12"
          >
            <p className="text-xl font-semibold text-blue-700 inline-flex items-center gap-3">
              <span>"Avec eux, apprendre devient un plaisir, progresser devient une fierté."</span>
              <span className="text-3xl">🧠💡</span>
            </p>
          </motion.div>

          {/* Statistiques */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-center space-y-4">
                  <span className="text-5xl text-blue-600">{stat.icon}</span>
                  <h3 className="text-4xl font-bold text-blue-600">
                    <CountUp
                      end={stat.value}
                      duration={2.5}
                      separator=","
                    />
                    {stat.suffix}
                  </h3>
                  <p className="text-gray-700 font-medium">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeachersSection; 