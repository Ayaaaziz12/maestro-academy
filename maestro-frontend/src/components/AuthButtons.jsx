import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { LogIn, UserPlus } from 'lucide-react';

const AuthButtons = ({ className = '' }) => {
  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      {/* Bouton Connexion */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link
          to="/login"
          className="group relative px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 overflow-hidden"
        >
          {/* Fond avec dégradé */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Bordure et texte */}
          <div className="relative flex items-center space-x-2 text-primary-600 group-hover:text-white transition-colors duration-300">
            <LogIn size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            <span>Connexion</span>
          </div>
          
          {/* Effet de brillance au survol */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        </Link>
      </motion.div>

      {/* Bouton Inscription */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link
          to="/register"
          className="group relative px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 overflow-hidden"
        >
          {/* Fond avec dégradé */}
          <div className="absolute inset-0 bg-gradient-to-r from-secondary-600 to-secondary-700" />
          
          {/* Texte */}
          <div className="relative flex items-center space-x-2 text-white">
            <UserPlus size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            <span>Inscription</span>
          </div>
          
          {/* Effet de brillance au survol */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          
          {/* Ombre au survol */}
          <div className="absolute inset-0 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Link>
      </motion.div>
    </div>
  );
};

export default AuthButtons; 