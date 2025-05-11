// src/App.jsx
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Accueil from './pages/Accueil';
import Formations from './pages/Formations';
import SoutienScolaire from './pages/formations/SoutienScolaire';
import PreparationConcours from './pages/formations/PreparationConcours';
import Formateurs from './pages/Formateurs';
import APropos from './pages/APropos';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import MyCourses from './pages/MyCourses';
import ProtectedRoute from './components/ProtectedRoute';
import { AnimatePresence } from 'framer-motion';
import PageTransition from './components/PageTransition';
import AuthModals from './components/AuthModals';


const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <PageTransition>
            <Accueil />
          </PageTransition>
        } />
        <Route path="/formations" element={
          <PageTransition>
            <Formations />
          </PageTransition>
        } />
        <Route path="/soutien-scolaire" element={<SoutienScolaire />} />
        <Route path="/preparation-concours" element={<PreparationConcours />} />
        <Route path="/formateurs" element={<Formateurs />} />
        <Route path="/a-propos" element={
          <PageTransition>
            <APropos />
          </PageTransition>
        } />
        <Route path="/contact" element={
          <PageTransition>
            <Contact />
          </PageTransition>
        } />
        <Route path="/connexion" element={<AuthModals />} />
        <Route path='/register' element={<Register />} />
        
        {/* Routes protégées */}
        <Route
          path="/profil"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/mes-cours"
          element={
            <ProtectedRoute>
              <MyCourses />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;