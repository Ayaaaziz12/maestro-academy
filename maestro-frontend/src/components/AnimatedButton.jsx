import { motion } from 'framer-motion';
import { buttonHover, buttonTap } from '../utils/animations';

const AnimatedButton = ({
  children,
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  ...props
}) => {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={buttonHover}
      whileTap={buttonTap}
      className={`relative overflow-hidden group ${className}`}
      {...props}
    >
      {/* Effet de brillance au survol */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
      
      {/* Contenu du bouton */}
      <div className="relative">
        {children}
      </div>
    </motion.button>
  );
};

export default AnimatedButton; 