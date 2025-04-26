import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X, Mail, Lock, Eye, EyeOff, User } from 'lucide-react';

const AuthModals = ({ isOpen, onClose, type }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    onClose(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (name === 'password') {
      let strength = 0;
      if (value.length >= 8) strength += 1;
      if (/[A-Z]/.test(value)) strength += 1;
      if (/[0-9]/.test(value)) strength += 1;
      if (/[^A-Za-z0-9]/.test(value)) strength += 1;
      setPasswordStrength(strength);
    }
  };

  const handleClose = () => {
    onClose(null);
  };

  const handleSwitchForm = (newType) => {
    onClose(newType);
  };

  const pageVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.95
    },
    visible: { 
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
        staggerChildren: 0.1
      }
    },
    exit: { 
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 1, 1]
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={pageVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-purple-50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          {/* Fond avec effet de flou */}
          <div className="absolute inset-0 bg-black/20 backdrop-blur-md" onClick={handleClose} />

          {/* Container principal */}
          <motion.div 
            variants={itemVariants}
            className="relative w-[400px] bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20 p-8"
          >
            {/* Header */}
            <motion.div 
              variants={itemVariants}
              className="flex justify-between items-center mb-6"
            >
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {type === 'login' ? 'Connexion' : 'Inscription'}
              </h2>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleClose}
                className="text-gray-500 hover:text-gray-700 transition-colors p-2 rounded-full hover:bg-gray-100"
              >
                <X size={24} />
              </motion.button>
            </motion.div>

            {/* Form */}
            <motion.form 
              variants={itemVariants}
              onSubmit={handleSubmit} 
              className="space-y-6"
            >
              {type === 'register' && (
                <motion.div variants={itemVariants}>
                  <label className="block text-base font-medium text-gray-700 mb-2">
                    Nom complet
                  </label>
                  <div className="relative group">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 group-hover:border-blue-400 text-base"
                      placeholder="John Doe"
                      required
                    />
                    <User className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-blue-500 transition-colors" size={20} />
                  </div>
                </motion.div>
              )}

              <motion.div variants={itemVariants}>
                <label className="block text-base font-medium text-gray-700 mb-2">
                  Email
                </label>
                <div className="relative group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 group-hover:border-blue-400 text-base"
                    placeholder="votre@email.com"
                    required
                  />
                  <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-blue-500 transition-colors" size={20} />
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-base font-medium text-gray-700 mb-2">
                  Mot de passe
                </label>
                <div className="relative group">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 group-hover:border-blue-400 text-base"
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-500 transition-colors"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                {type === 'register' && (
                  <motion.div 
                    variants={itemVariants}
                    className="mt-2"
                  >
                    <div className="flex space-x-2">
                      {[...Array(4)].map((_, index) => (
                        <div
                          key={index}
                          className={`h-1.5 flex-1 rounded-full transition-colors duration-200 ${
                            index < passwordStrength ? 'bg-gradient-to-r from-blue-500 to-purple-500' : 'bg-gray-200'
                          }`}
                        />
                      ))}
                    </div>
                    <p className="mt-1 text-xs text-gray-500">
                      Le mot de passe doit contenir au moins 8 caractères, une majuscule, un chiffre et un caractère spécial
                    </p>
                  </motion.div>
                )}
              </motion.div>

              {type === 'register' && (
                <motion.div variants={itemVariants}>
                  <label className="block text-base font-medium text-gray-700 mb-2">
                    Confirmer le mot de passe
                  </label>
                  <div className="relative group">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 group-hover:border-blue-400 text-base"
                      placeholder="••••••••"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-500 transition-colors"
                    >
                      {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </motion.div>
              )}

              {type === 'register' && (
                <motion.div 
                  variants={itemVariants}
                  className="flex items-center space-x-2"
                >
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    required
                  />
                  <label className="text-sm text-gray-700">
                    J'accepte les conditions d'utilisation
                  </label>
                </motion.div>
              )}

              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium text-base shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group mt-6"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10">
                  {type === 'login' ? 'Se connecter' : 'Créer mon compte'}
                </span>
              </motion.button>
            </motion.form>

            <motion.div 
              variants={itemVariants}
              className="mt-6 text-center"
            >
              <p className="text-sm text-gray-600">
                {type === 'login' ? "Vous n'avez pas de compte ?" : "Vous avez déjà un compte ?"}{' '}
                <button
                  onClick={() => handleSwitchForm(type === 'login' ? 'register' : 'login')}
                  className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  {type === 'login' ? "S'inscrire" : 'Se connecter'}
                </button>
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AuthModals; 