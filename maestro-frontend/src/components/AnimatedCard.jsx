import { motion } from 'framer-motion';
import { cardHover, textReveal } from '../utils/animations';

const AnimatedCard = ({
  children,
  className = '',
  onClick,
  ...props
}) => {
  return (
    <motion.div
      whileHover={cardHover}
      className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}
      onClick={onClick}
      {...props}
    >
      <motion.div
        {...textReveal}
        className="p-6"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default AnimatedCard; 