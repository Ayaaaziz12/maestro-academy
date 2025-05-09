import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import AnimatedSection from './animations/AnimatedSection';

const ContactSection = () => {
  const mapRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: <MapPin size={24} />,
      title: "Adresse",
      content: "Rabat Agdal Av.Fal Ould Oumeir, rue Jbal Bouyiblance, 7 RDC,N°2,Agdal-Rabat",
    },
    {
      icon: <Phone size={24} />,
      title: "Téléphone",
      content: "06 06 99 29 29 / 06 08 06 29 29 / 05 30 03 35 60",
    },
    {
      icon: <Mail size={24} />,
      title: "Email",
      content: "academylemaestro@gmail.com",
    },
    {
      icon: <Clock size={24} />,
      title: "Horaires",
      content: "Lun–Ven : 11h45–21h30 | Sam : 11h45–17h30 | Dim : 11h–13h30",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique d'envoi du formulaire à implémenter
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Initialize map when component mounts
  useEffect(() => {
    // Add OpenStreetMap script if not already loaded
    if (!window.L) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.css';
      document.head.appendChild(link);

      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.js';
      script.async = true;
      script.onload = initializeMap;
      document.body.appendChild(script);
    } else {
      initializeMap();
    }

    function initializeMap() {
      if (mapRef.current && !mapRef.current._leaflet_id) {
        const map = window.L.map(mapRef.current).setView([33.99524, -6.84839], 15);
        
        window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        
        window.L.marker([33.99524, -6.84839]).addTo(map)
          .bindPopup('Le Maestro Academy')
          .openPopup();
      }
    }

    return () => {
      // Cleanup if needed
      if (mapRef.current && mapRef.current._leaflet_id) {
        mapRef.current._leaflet_id = null;
      }
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeInUp" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-6">
            Contactez-nous
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Nous sommes à votre disposition pour répondre à toutes vos questions
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          <AnimatedSection animation="slideInLeft" className="space-y-6 sm:space-y-8 backdrop-blur-lg bg-white/80 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-white/20">
            <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-4 sm:mb-6">Nos coordonnées</h2>
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start space-x-3 sm:space-x-4 group hover:bg-white/50 p-3 sm:p-4 rounded-xl transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="text-primary-600 text-lg sm:text-xl">{info.icon}</div>
                  </div>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">
                    {info.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">{info.content}</p>
                </div>
              </motion.div>
            ))}
          </AnimatedSection>

          <AnimatedSection animation="slideInRight" className="backdrop-blur-lg bg-white/80 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-white/20">
            <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-4 sm:mb-6">Envoyez-nous un message</h2>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm sm:text-base font-medium text-gray-700 mb-1 sm:mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 text-sm sm:text-base"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm sm:text-base font-medium text-gray-700 mb-1 sm:mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 text-sm sm:text-base"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm sm:text-base font-medium text-gray-700 mb-1 sm:mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 text-sm sm:text-base"
                  required
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 text-sm sm:text-base"
              >
                Envoyer le message
              </motion.button>
            </form>
          </AnimatedSection>
        </div>

        <AnimatedSection animation="fadeInUp" className="mt-16 rounded-2xl overflow-hidden shadow-xl backdrop-blur-lg bg-white/80 border border-white/20 relative z-0">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent px-6 py-4">Notre localisation</h2>
          <div 
            ref={mapRef} 
            className="w-full h-[450px] relative z-0"
            style={{ width: '100%', height: '450px' }}
          ></div>
        </AnimatedSection>

        {/* Fallback iframe in case JS loading fails */}
        <div className="hidden">
          <iframe 
            src="https://www.openstreetmap.org/export/embed.html?bbox=-6.8558979034423835%2C33.9902348647811%2C-6.840879917144776%2C33.9998476977463&amp;layer=mapnik&amp;marker=33.99504134480769%2C-6.848888905197144" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
