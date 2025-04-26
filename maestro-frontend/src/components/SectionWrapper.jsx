// src/components/SectionWrapper.jsx
import { motion as MOTION } from "framer-motion";

const SectionWrapper = ({ children }) => (
  <MOTION.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    {children}
  </MOTION.div>
);

export default SectionWrapper;
