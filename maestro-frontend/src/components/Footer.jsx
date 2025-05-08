// src/components/Footer.jsx
import { motion } from "framer-motion";
import { Facebook, Instagram, Mail, Phone, MapPin, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: "Accueil", href: "/" },
    { label: "Formations", href: "/formations" },
    { label: "A Propos", href: "/APropos" },
    { label: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    {
      label: "Facebook",
      href: "https://www.facebook.com/LeMaestroAcademy(Ettaki_khalid)",
      icon: <Facebook size={20} />,
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/lemaestroacademy",
      icon: <Instagram size={20} />,
    },
  ];

  const contactInfo = [
    {
      icon: <MapPin size={20} />,
      text: "Rabat Agdal Av.Fal Ould Oumeir, rue Jbal Bouyiblance, 7 RDC,N°2,Agdal-Rabat",
    },
    {
      icon: <Phone size={20} />,
      text: "06 06 99 29 29 / 06 08 06 29 29 / 05 30 03 35 60",
    },
    {
      icon: <Mail size={20} />,
      text: "academylemaestro@gmail.com",
    },
    {
      icon: <Clock size={20} />,
      text: "Lun–Ven : 11h45–21h30 | Sam : 11h45–17h30 | Dim : 11h–13h30",
    },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05),transparent_50%)]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* À propos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6"
          >
            <h4 className="text-2xl font-bold bg-gradient-to-r from-white via-primary-200 to-primary-300 bg-clip-text text-transparent">
              Le Maestro Academy
            </h4>
            <p className="text-gray-300 leading-relaxed text-sm">
              Centre de formation basé à Rabat Agdal. Nous proposons des cours de soutien scolaire et une préparation sérieuse aux concours des grandes écoles marocaines.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="space-y-6"
          >
            <h4 className="text-2xl font-bold bg-gradient-to-r from-white via-primary-200 to-primary-300 bg-clip-text text-transparent">
              Navigation
            </h4>
            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <motion.li
                  key={link.href}
                  whileHover={{ x: 5 }}
                  className="group"
                >
                  <a 
                    href={link.href} 
                    className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    <span className="w-1.5 h-1.5 bg-primary-400 rounded-full group-hover:bg-primary-300 transition-colors duration-300"></span>
                    <span className="text-sm">{link.label}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="space-y-4"
          >
            <div className="space-y-2">
              <h4 className="text-2xl font-bold bg-gradient-to-r from-white via-primary-200 to-primary-300 bg-clip-text text-transparent">
                Contact
              </h4>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start space-x-3 group"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-primary-300 mt-1 group-hover:text-primary-200 transition-colors duration-300">
                      {info.icon}
                    </div>
                    <p className="text-gray-300 text-sm">{info.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div className="space-y-6">
              <h4 className="text-2xl font-bold bg-gradient-to-r from-white via-primary-200 to-primary-300 bg-clip-text text-transparent">
                Suivez-nous
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-gray-300 hover:text-white transition-all duration-300 bg-primary-800/30 p-3 rounded-xl hover:bg-primary-700/50 hover:shadow-lg hover:shadow-primary-900/20"
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="text-center text-sm text-gray-400 mt-10 pt-4 border-t border-primary-800/30"
        >
          <p className="font-light tracking-wide">
            © {currentYear} Le Maestro Academy – Tous droits réservés.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;