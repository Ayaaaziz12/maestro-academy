// src/pages/Home.jsx
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-600 mb-6">
              Bienvenue au Le Maestro Academy
            </h1>
            <p className="text-xl text-gray-700 mb-6">
              Formez-vous aujourd'hui, pour réussir demain !
            </p>
            <p className="text-lg text-gray-600 italic">
              🎯 Votre avenir commence ici.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
  