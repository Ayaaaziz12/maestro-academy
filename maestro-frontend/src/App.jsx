// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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


function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Accueil />} />
              <Route path="/formations" element={<Formations />} />
              <Route path="/soutien-scolaire" element={<SoutienScolaire />} />
              <Route path="/preparation-concours" element={<PreparationConcours />} />
              <Route path="/formateurs" element={<Formateurs />} />
              <Route path="/a-propos" element={<APropos />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/connexion" element={<Login />} />
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
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;