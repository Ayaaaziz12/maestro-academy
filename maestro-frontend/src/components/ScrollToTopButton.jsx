import { motion } from 'framer-motion';

const ScrollToTopButton = ({ 
  children, 
  onClick, 
  className = '', 
  type = 'button',
  ...props 
}) => {
  const handleClick = (e) => {
    if (onClick) onClick(e);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      type={type}
      onClick={handleClick}
      className={className}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default ScrollToTopButton; 