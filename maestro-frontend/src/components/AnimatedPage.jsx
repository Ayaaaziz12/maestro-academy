import { motion } from 'framer-motion';
import { fadeIn } from '../utils/animations';

const AnimatedPage = ({ children, className = '' }) => {
  return (
    <motion.div
      {...fadeIn}
      className={`min-h-screen ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage; 