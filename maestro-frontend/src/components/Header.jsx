// src/components/Header.jsx
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icônes (npm i lucide-react)
// eslint-disable-next-line camelcase
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    setIsMenuOpen(false);
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
                className="h-[150px] sm:h-[100px] lg:h-[200px] w-auto object-contain mt-4"
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

            {/* Bouton Menu Mobile */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-primary-600 focus:outline-none"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Menu Mobile */}
        <motion.div
          initial={false}
          animate={{ height: isMenuOpen ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-white"
        >
          <div className="px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className={`block text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium ${
                  location.pathname === link.to ? "text-primary-600" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
            {/* Boutons d'authentification (mobile) */}
            <div className="pt-4 border-t border-gray-100 flex flex-col space-y-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => { setAuthModal('login'); setIsMenuOpen(false); }}
                className="w-full px-5 py-2 rounded-full border-2 border-primary-600 text-primary-600 text-sm font-semibold hover:bg-primary-600 hover:text-white transition-all duration-300"
              >
                Connexion
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => { setAuthModal('register'); setIsMenuOpen(false); }}
                className="w-full px-5 py-2 rounded-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                S'inscrire
              </motion.button>
            </div>
          </div>
        </motion.div>
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


