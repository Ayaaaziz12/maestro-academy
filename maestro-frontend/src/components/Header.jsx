// src/components/Header.jsx
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, UserPlus, LogIn } from "lucide-react"; // Icônes (npm i lucide-react)
import { AnimatePresence } from "framer-motion";
import AuthModals from './AuthModals';
import { motion } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [authModal, setAuthModal] = useState(null); // 'login' ou 'register'
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fermer le menu mobile lors du changement de route
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { to: "/", label: "Accueil" },
    { to: "/formations", label: "Formations" },
    { to: "/a-propos", label: "A propos" },
    { to: "/contact", label: "Contact" },
  ];

  const authLinks = [
    { label: "Connexion", type: "login" },
    { label: "Inscription", type: "register" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-sm shadow-lg" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo  */}
            <Link to="/" className="flex items-center space-x-5">
              <motion.img
                whileHover={{ scale: 1.05 }}
                src="/images/logo-maestro.jpg"
                alt="Logo Le Maestro Academy"
                className="h-60 w-auto object-contain p-2 mt-4 -ml-8 w-auto object-contain"
              />
            </Link>

            {/* Menu Desktop */}
            <nav className="hidden md:flex items-center justify-center flex-1">
              <div className="flex items-center space-x-8">
                {navLinks.map((link) => (
                  <motion.div
                    key={link.to}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to={link.to}
                      className={`text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium ${
                        location.pathname === link.to ? "text-primary-600" : ""
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </nav>

            {/* Boutons de connexion/inscription */}
            <div className="hidden md:flex items-center space-x-4">
              {authLinks.map((link) => (
                <motion.div
                  key={link.type}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button
                    onClick={() => setAuthModal(link.type)}
                    className={`group relative px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 overflow-hidden ${
                      link.type === "register"
                        ? "bg-gradient-to-r from-primary-600 to-secondary-600 text-white hover:shadow-lg"
                        : "border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white"
                    }`}
                  >
                    {/* Effet de brillance au survol */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    
                    {/* Texte */}
                    <div className="relative flex items-center space-x-2">
                      {link.type === "register" ? (
                        <UserPlus size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                      ) : (
                        <LogIn size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                      )}
                      <span>{link.label}</span>
                    </div>
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Hamburger pour mobile */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="md:hidden text-primary-600"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.button>
          </div>
        </div>

        {/* Menu Mobile */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-100"
            >
              <div className="px-4 py-4 space-y-4">
                {navLinks.map((link) => (
                  <motion.div
                    key={link.to}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                  >
                    <Link
                      to={link.to}
                      onClick={() => setIsOpen(false)}
                      className={`block text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium ${
                        location.pathname === link.to ? "text-primary-600" : ""
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <div className="pt-4 border-t border-gray-100">
                  {authLinks.map((link) => (
                    <motion.div
                      key={link.type}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -20, opacity: 0 }}
                    >
                      <button
                        onClick={() => {
                          setAuthModal(link.type);
                          setIsOpen(false);
                        }}
                        className={`block w-full text-left py-2 text-sm font-medium transition-colors duration-200 ${
                          link.type === "register"
                            ? "text-primary-600 hover:text-primary-700"
                            : "text-gray-700 hover:text-primary-600"
                        }`}
                      >
                        {link.label}
                      </button>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Modales d'authentification */}
      <AuthModals
        isOpen={authModal !== null}
        onClose={(type) => setAuthModal(type)}
        type={authModal}
      />
    </>
  );
};

export default Header;


