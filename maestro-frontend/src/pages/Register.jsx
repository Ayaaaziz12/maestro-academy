import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { 
  FaEye, 
  FaEyeSlash, 
  FaGoogle, 
  FaFacebook, 
  FaInstagram, 
  FaWhatsapp, 
  FaUser,
  FaEnvelope,
  FaLock,
  FaTimesCircle,
  FaGraduationCap,
  FaRocket,
  FaGlobe,
  FaGlobeAmericas,
  FaChevronDown
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const translations = {
  fr: {
    title: "Créer un compte",
    subtitle: "Rejoignez-nous dès aujourd'hui !",
    fullName: "Nom complet",
    email: "Adresse email",
    password: "Mot de passe",
    confirmPassword: "Confirmer le mot de passe",
    passwordStrength: "Force du mot de passe",
    passwordStrengthLabels: ["Très faible", "Faible", "Moyen", "Fort", "Très fort"],
    terms: "J'accepte les",
    termsLink: "conditions d'utilisation",
    submit: "Créer mon compte",
    loading: "Création en cours...",
    orSignUp: "Ou s'inscrire avec",
    alreadyHaveAccount: "Vous avez déjà un compte ?",
    login: "Se connecter",
    errors: {
      fullName: "Le nom est requis",
      email: "L'email est requis",
      invalidEmail: "Format d'email invalide",
      password: "Le mot de passe est requis",
      weakPassword: "Le mot de passe est trop faible",
      passwordMismatch: "Les mots de passe ne correspondent pas",
      terms: "Vous devez accepter les conditions",
      submit: "Une erreur est survenue lors de l'inscription"
    }
  },
  en: {
    title: "Create an Account",
    subtitle: "Join us today!",
    fullName: "Full Name",
    email: "Email Address",
    password: "Password",
    confirmPassword: "Confirm Password",
    passwordStrength: "Password Strength",
    passwordStrengthLabels: ["Very Weak", "Weak", "Medium", "Strong", "Very Strong"],
    terms: "I accept the",
    termsLink: "terms of use",
    submit: "Create Account",
    loading: "Creating account...",
    orSignUp: "Or sign up with",
    alreadyHaveAccount: "Already have an account?",
    login: "Sign In",
    errors: {
      fullName: "Name is required",
      email: "Email is required",
      invalidEmail: "Invalid email format",
      password: "Password is required",
      weakPassword: "Password is too weak",
      passwordMismatch: "Passwords do not match",
      terms: "You must accept the terms",
      submit: "An error occurred during registration"
    }
  },
  ar: {
    title: "إنشاء حساب",
    subtitle: "انضم إلينا اليوم!",
    fullName: "الاسم الكامل",
    email: "البريد الإلكتروني",
    password: "كلمة المرور",
    confirmPassword: "تأكيد كلمة المرور",
    passwordStrength: "قوة كلمة المرور",
    passwordStrengthLabels: ["ضعيفة جداً", "ضعيفة", "متوسطة", "قوية", "قوية جداً"],
    terms: "أوافق على",
    termsLink: "شروط الاستخدام",
    submit: "إنشاء حساب",
    loading: "جاري إنشاء الحساب...",
    orSignUp: "أو سجل باستخدام",
    alreadyHaveAccount: "لديك حساب بالفعل؟",
    login: "تسجيل الدخول",
    errors: {
      fullName: "الاسم مطلوب",
      email: "البريد الإلكتروني مطلوب",
      invalidEmail: "صيغة البريد الإلكتروني غير صالحة",
      password: "كلمة المرور مطلوبة",
      weakPassword: "كلمة المرور ضعيفة جداً",
      passwordMismatch: "كلمات المرور غير متطابقة",
      terms: "يجب الموافقة على الشروط",
      submit: "حدث خطأ أثناء التسجيل"
    }
  }
};

const getPasswordStrength = (password) => {
  let strength = 0;
  if (password.length >= 8) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[^A-Za-z0-9]/.test(password)) strength++;
  return strength;
};

const getStrengthLabel = (s) => ['Très faible', 'Faible', 'Moyen', 'Fort', 'Très fort'][s];
const getStrengthColor = (s) => ['bg-red-400', 'bg-orange-400', 'bg-yellow-400', 'bg-blue-500', 'bg-green-500'][s];

const floatingAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const floatingAnimation2 = {
  initial: { y: 0 },
  animate: {
    y: [10, -10, 10],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const floatingAnimation3 = {
  initial: { y: 0 },
  animate: {
    y: [-8, 8, -8],
    transition: {
      duration: 4.5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const rotatingAnimation = {
  initial: { rotate: 0 },
  animate: {
    rotate: 360,
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    termsAccepted: false,
    language: 'fr'
  });
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [isFirstTimeUser, setIsFirstTimeUser] = useState(true);
  
  const navigate = useNavigate();
  const { register, currentUser } = useAuth();

  const t = translations[formData.language];

  useEffect(() => {
    setPasswordStrength(getPasswordStrength(formData.password));
  }, [formData.password]);

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà un compte
    const hasRegistered = localStorage.getItem('hasRegistered');
    setIsFirstTimeUser(!hasRegistered);
  }, []);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = t.errors.fullName;
    }
    
    if (!formData.email.trim()) {
      newErrors.email = t.errors.email;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t.errors.invalidEmail;
    }
    
    if (!formData.password) {
      newErrors.password = t.errors.password;
    } else if (passwordStrength < 3) {
      newErrors.password = t.errors.weakPassword;
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = t.errors.passwordMismatch;
    }
    
    if (!formData.termsAccepted) {
      newErrors.termsAccepted = t.errors.terms;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setLoading(true);
    try {
      const csrfResponse = await fetch('http://localhost:8000/csrf-token', {
        method: 'GET',
        credentials: 'include', 
      });
      
      const csrfData = await csrfResponse.json();
      const csrfToken = csrfData.csrfToken;
      
      if (!csrfToken) {
        setErrors({ submit: 'CSRF token not found' });
        setLoading(false);
        return;
      }
      
      const response = await fetch('http://localhost:8000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'X-CSRF-TOKEN': csrfToken, 
        },
        credentials: 'include', 
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          password: formData.password,
          password_confirmation: formData.confirmPassword,
        }),
      });
      
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('hasRegistered', 'true');
        setIsFirstTimeUser(false);
        navigate('/login');
      } else {
        setErrors({ submit: data.message || 'Une erreur est survenue lors de l\'inscription' });
      }
    } catch (error) {
      setErrors({ submit: 'Une erreur est survenue lors de l\'inscription' });
      console.error('Register error:', error);
    } finally {
      setLoading(false);
    }
  };
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-violet-100 via-blue-100 to-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row flex-wrap w-full max-w-5xl h-auto rounded-2xl shadow-2xl overflow-hidden mx-auto">
        {/* Colonne gauche visuelle */}
        <div className="w-full md:w-[40%] flex flex-col justify-between px-6 py-10 bg-gradient-to-br from-violet-600 to-blue-400 relative">
          {/* Logo et titre */}
          <div className="flex flex-col h-full justify-between items-center top-4 right-4">
            <div>
              <div className="flex top-4 right-4 items-center mb-8">
                <div className="text-white text-l leading-tight italic">
                  Le <span className="font-extrabold not-italic">Maestro</span><br />Academy
                </div>
              </div>
              <div className="space-y-6">
                <h1 className="text-white text-l font-bold leading-tight italic mt-4">
                  Apprenez avec les meilleurs Formateurs,
                  <img src="/images/globe.png" alt="Globe" className="inline-block w-9 h-9 mx-1 align-middle" />
                  partout dans le monde .
                </h1>
                <div className="text-white/90 text-lg space-y-4">
                  <p className="flex items-center gap-2">
                    <FaGraduationCap className="text-violet-300" />
                    <span>Formations certifiantes de qualité</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <FaRocket className="text-violet-300" />
                    <span>Progression rapide et efficace</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <FaGlobe className="text-violet-300" />
                    <span>Accès à une communauté mondiale</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-[300px] flex items-center justify-center">
              <motion.img 
                src="/images/3d-student.png" 
                alt="Étudiant" 
                className="z-10 relative"
                initial={{ y: 0 }}
                animate={{ y: [-10, 10, -10] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              {/* Éléments flottants */}
              <motion.img 
                src="/images/floating-books.png" 
                alt="Livres" 
                className="absolute -left-16 top-1/3 w-16 h-16"
                animate={{
                  y: [-15, 15, -15],
                  rotate: [-5, 5, -5],
                  x: [-5, 5, -5]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.img 
                src="/images/rocket.png" 
                alt="Fusée" 
                className="absolute -right-16 bottom-1/3 w-20 h-20"
                animate={{
                  y: [15, -15, 15],
                  rotate: [5, -5, 5],
                  x: [5, -5, 5]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.img 
                src="/images/paper-plane.png" 
                alt="Avion en papier" 
                className="absolute right-8 top-1/4 w-14 h-14"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.3, 1],
                  y: [-15, 15, -15],
                  x: [0, 10, 0]
                }}
                transition={{
                  rotate: {
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear"
                  },
                  scale: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  },
                  y: {
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  },
                  x: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              />
              <motion.div 
                className="absolute left-8 top-1/4 w-10 h-10"
                animate={{
                  scale: [0.8, 1.4, 1],
                  opacity: [0, 1, 0],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <img src="/images/star.png" alt="Étoile" className="w-full h-full" />
              </motion.div>
            </div>
          </div>
        </div>
        {/* Colonne droite formulaire */}
        <div className="w-full md:w-[60%] flex items-center justify-center px-6 py-10 bg-white">
          <div className="w-full max-w-lg bg-white/95 backdrop-blur-sm rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-8 md:p-12 flex flex-col relative">
            {/* Menu de langue */}
            <div className="absolute top-4 right-4">
              <button
                onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-violet-600 transition-colors"
              >
                <FaGlobeAmericas className="text-base" />
                <span className="capitalize">{formData.language === 'fr' ? 'Français' : formData.language === 'en' ? 'English (USA)' : 'العربية'}</span>
                <FaChevronDown className={`text-xs transition-transform duration-200 ${showLanguageMenu ? 'rotate-180' : ''}`} />
              </button>
              {showLanguageMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-10">
                  <button
                    onClick={() => {
                      setFormData(prev => ({ ...prev, language: 'fr' }));
                      setShowLanguageMenu(false);
                    }}
                    className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-50 transition-colors ${formData.language === 'fr' ? 'text-violet-600' : 'text-gray-600'}`}
                  >
                    Français
                  </button>
                  <button
                    onClick={() => {
                      setFormData(prev => ({ ...prev, language: 'en' }));
                      setShowLanguageMenu(false);
                    }}
                    className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-50 transition-colors ${formData.language === 'en' ? 'text-violet-600' : 'text-gray-600'}`}
                  >
                    English (USA)
                  </button>
                  <button
                    onClick={() => {
                      setFormData(prev => ({ ...prev, language: 'ar' }));
                      setShowLanguageMenu(false);
                    }}
                    className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-50 transition-colors ${formData.language === 'ar' ? 'text-violet-600' : 'text-gray-600'}`}
                  >
                    العربية
                  </button>
                </div>
              )}
            </div>
            <form onSubmit={handleSubmit} className="w-full max-w-lg">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold  text-center mb-6 bg-gradient-to-r from-violet-600 to-blue-500 bg-clip-text text-transparent capitalize">{t.title}</h2>
                <p className="text-gray-500 text-sm mt-2 normal-case">{t.subtitle}</p>
              </div>
              {errors.submit && (
                <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-xl border border-red-100 text-xs flex items-center">
                  <FaTimesCircle className="mr-2" />
                  <span className="normal-case">{errors.submit}</span>
                </div>
              )}
              <div className="space-y-4">
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-violet-500 transition-colors"><FaUser /></span>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    placeholder={t.fullName}
                    className={`w-full pl-10 pr-4 py-2 border-2 rounded-lg focus:border-violet-500 bg-gray-50/50 text-sm placeholder-gray-400 transition-all duration-200 normal-case ${errors.email ? 'border-red-500' : 'border-gray-200 hover:border-violet-200'}`}
                    disabled={loading}
                  />
                  {errors.fullName && <p className="mt-1 text-xs text-red-500 normal-case">{errors.fullName}</p>}
                </div>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-violet-500 transition-colors"><FaEnvelope /></span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder={t.email}
                    className={`w-full pl-10 pr-10 py-2 border-2 rounded-lg focus:border-violet-500 bg-gray-50/50 text-sm placeholder-gray-400 transition-all duration-200 normal-case ${errors.password ? 'border-red-500' : 'border-gray-200 hover:border-violet-200'}`}
                    disabled={loading}
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-500 normal-case">{errors.email}</p>}
                </div>
                <div className="relative group">
                  <span className="absolute w-full left-3 top-1/2 transform -translate-y-1/2 rounded-lg text-gray-400 group-focus-within:text-violet-500 transition-colors"><FaLock /></span>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    placeholder={t.password}
                    className={`w-full pl-10 pr-9 py-2 border-2 rounded-lg focus:border-violet-500 bg-gray-50/50 text-sm placeholder-gray-400 transition-all duration-200 normal-case ${errors.password ? 'border-red-500' : 'border-gray-200 hover:border-violet-200'}`}
                    disabled={loading}
                  />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-violet-600 transition-colors" tabIndex={-1}>
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                  {formData.password && (
                    <div className="mt-2">
                      <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                        <div className={`h-full transition-all duration-300 ${getStrengthColor(passwordStrength)}`}
                          style={{ width: `${(passwordStrength / 4) * 100}%` }}
                        />
                      </div>
                      <p className="mt-1 text-xs text-gray-500 normal-case">
                        {t.passwordStrength} : {t.passwordStrengthLabels[passwordStrength]}
                      </p>
                    </div>
                  )}
                  {errors.password && <p className="mt-1 text-xs text-red-500 normal-case">{errors.password}</p>}
                </div>
                <div className="relative group">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-violet-500 transition-colors"><FaLock /></span>
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    placeholder={t.confirmPassword}
                    className={`w-full pl-10 pr-9 py-2 border-2 rounded-xl focus:border-violet-500 bg-gray-50/50 text-sm placeholder-gray-400 transition-all duration-200 normal-case ${errors.confirmPassword ? 'border-red-500' : 'border-gray-200 hover:border-violet-200'}`}
                    disabled={loading}
                  />
                  <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-violet-600 transition-colors" tabIndex={-1}>
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                  {errors.confirmPassword && <p className="mt-1 text-xs text-red-500 normal-case">{errors.confirmPassword}</p>}
                </div>
                <div className="flex items-center mt-2">
                  <input
                    type="checkbox"
                    id="termsAccepted"
                    name="termsAccepted"
                    checked={formData.termsAccepted}
                    onChange={handleChange}
                    className={`h-4 w-4 text-violet-600 focus:ring-violet-500 border-2 rounded transition-colors ${errors.termsAccepted ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  <label htmlFor="termsAccepted" className="ml-2 text-xs text-gray-600 normal-case">
                    {t.terms} <Link to="/terms" className="text-violet-600 hover:text-violet-800 font-medium transition-colors capitalize">{t.termsLink}</Link>
                  </label>
                  {errors.termsAccepted && <p className="ml-3 text-xs text-red-500 normal-case">{errors.termsAccepted}</p>}
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full mt-4 py-2.5 bg-gradient-to-r from-violet-600 to-blue-500 hover:from-violet-700 hover:to-blue-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 text-sm disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-0.5 capitalize"
                >
                  {loading ? t.loading : t.submit}
                </button>
              </div>
              {/* Séparateur */}
              <div className="flex items-center my-4">
                <div className="flex-1 h-px bg-gray-200" />
                <span className="mx-3 text-gray-400 text-xs normal-case">{t.orSignUp}</span>
                <div className="flex-1 h-px bg-gray-200" />
              </div>
              {/* Réseaux sociaux */}
              <div className="flex justify-center gap-3 mb-3">
                <button type="button" className="rounded-xl bg-white border border-gray-200 shadow-sm p-2.5 hover:bg-gray-50 hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5"><FaGoogle className="text-base text-blue-500" /></button>
                <button type="button" className="rounded-xl bg-white border border-gray-200 shadow-sm p-2.5 hover:bg-gray-50 hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5"><FaFacebook className="text-base text-blue-600" /></button>
                <button type="button" className="rounded-xl bg-white border border-gray-200 shadow-sm p-2.5 hover:bg-gray-50 hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5"><FaInstagram className="text-base text-pink-500" /></button>
                <button type="button" className="rounded-xl bg-white border border-gray-200 shadow-sm p-2.5 hover:bg-gray-50 hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5"><FaWhatsapp className="text-base text-green-500" /></button>
              </div>
              <div className="text-center text-xs text-gray-500 normal-case">
                {isFirstTimeUser ? (
                  <>
                    {t.alreadyHaveAccount}{' '}
                    <Link to="/connexion" className="text-violet-600 hover:text-violet-800 font-medium transition-colors capitalize">
                      {t.login}
                    </Link>
                  </>
                ) : (
                  <Link to="/connexion" className="text-violet-600 hover:text-violet-800 font-medium transition-colors capitalize">
                    {t.login}
                  </Link>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register; 