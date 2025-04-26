import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import FormationsSection from '../components/FormationsSection';
import TeachersSection from '../components/TeachersSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CommitmentsSection from '../components/CommitmentsSection';
import FAQSection from '../components/FAQSection';
import NewsletterSection from '../components/NewsletterSection';


const Accueil = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <FormationsSection />
      <TeachersSection />
      <TestimonialsSection />
      <CommitmentsSection />
      <FAQSection />
      <NewsletterSection />
    </div>
  );
};

export default Accueil; 