// src/components/Header.jsx
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icônes (npm i lucide-react)
import { AnimatePresence, motion } from "framer-motion";
import AuthModals from './AuthModals';

// Composant personnalisé pour le défilement vers le haut
const ScrollToTopLink = ({ to, children, className, onClick }) => {
  const handleClick = (e) => {
    if (onClick) onClick(e);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Link to={to} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [authModal, setAuthModal] = useState(null); // 'login' ou 'register'
  const location = useLocation();
  const navigate = useNavigate();

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

  const handleLogoClick = () => {
    navigate('/');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed w-full z-50 bg-white shadow-md"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLogoClick}
              className="flex-shrink-0 cursor-pointer"
            >
              <img
                className="h-[100px] sm:h-[150px] lg:h-[200px] w-auto object-contain mt-4"
                src="/images/logo-maestro.jpg"
                alt="Maestro Academy"
              />
            </motion.div>

            {/* Navigation Desktop */}
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

            {/* Boutons d'authentification (desktop) */}
            <div className="hidden md:flex items-center space-x-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setAuthModal('login')}
                className="px-5 py-2 rounded-full border-2 border-primary-600 text-primary-600 text-sm font-semibold hover:bg-primary-600 hover:text-white transition-all duration-300"
              >
                Connexion
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setAuthModal('register')}
                className="px-5 py-2 rounded-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                S'inscrire
              </motion.button>
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
                {/* Boutons d'authentification (mobile) */}
                <div className="pt-4 border-t border-gray-100 flex flex-col space-y-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => { setAuthModal('login'); setIsOpen(false); }}
                    className="w-full px-5 py-2 rounded-full border-2 border-primary-600 text-primary-600 text-sm font-semibold hover:bg-primary-600 hover:text-white transition-all duration-300"
                  >
                    Connexion
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => { setAuthModal('register'); setIsOpen(false); }}
                    className="w-full px-5 py-2 rounded-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    S'inscrire
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Modal d'authentification */}
      <AuthModals
        isOpen={authModal !== null}
        onClose={(type) => setAuthModal(type)}
        type={authModal}
      />
    </>
  );
};

export default Header;


