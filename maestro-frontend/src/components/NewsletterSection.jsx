import { motion as Motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NewsletterSection = () => {

  return (
    <section className="py-24 bg-gradient-to-br from-primary-900 to-primary-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Restez informé !
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Inscrivez-vous à notre newsletter pour recevoir nos actualités et offres spéciales
          </p>

          <Motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto"
          >
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200"
            />
            <Motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-white text-primary-900 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              S'abonner
            </Motion.button>
          </Motion.form>

          <Motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-sm text-gray-400 mt-4"
          >
            En vous inscrivant, vous acceptez notre{' '}
            <Link to="/politique-confidentialite" className="text-white hover:text-primary-200 transition-colors">
              politique de confidentialité
            </Link>
          </Motion.p>
        </Motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection; 