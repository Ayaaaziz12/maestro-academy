import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false); // Met à false pour afficher directement les enfants

  // Simulated login function
  const login = async (email, password) => {
    try {
      // Simule une connexion réussie
      setCurrentUser({ email });
      return { success: true };
    } catch (error) {
      console.error("Login error:", error);
      return { success: false, error: "Échec de la connexion" };
    }
  };

  // Simulated logout function
  const logout = () => {
    setCurrentUser(null);
  };

  // Simulated register function
  const register = async (email, password) => {
    try {
      // Simule une inscription réussie
      setCurrentUser({ email });
      return { success: true };
    } catch (error) {
      console.error("Registration error:", error);
      return { success: false, error: "Échec de l'inscription" };
    }
  };

  const value = {
    currentUser,
    login,
    logout,
    register,
    loading,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
