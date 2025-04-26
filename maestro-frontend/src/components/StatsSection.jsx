import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { Users, GraduationCap, Clock, Award } from 'lucide-react';

const stats = [
  {
    icon: <Users className="w-8 h-8" />,
    value: 1000,
    suffix: "+",
    label: "Étudiants formés"
  },
  {
    icon: <GraduationCap className="w-8 h-8" />,
    value: 50,
    suffix: "+",
    label: "Formations"
  },
  {
    icon: <Clock className="w-8 h-8" />,
    value: 25,
    suffix: "+",
    label: "Années d'expérience"
  },
  {
    icon: <Award className="w-8 h-8" />,
    value: 95,
    suffix: "%",
    label: "Taux de satisfaction"
  }
];

const StatsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                  <div className="text-primary-600">{stat.icon}</div>
                </div>
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  {inView ? (
                    <CountUp
                      end={stat.value}
                      suffix={stat.suffix}
                      duration={2.5}
                      enableScrollSpy
                      scrollSpyOnce
                    />
                  ) : (
                    "0"
                  )}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {stat.label}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection; 