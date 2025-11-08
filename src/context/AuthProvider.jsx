// src/context/AuthProvider.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const navigate = useNavigate();

  // Fetch user profile if token exists
  useEffect(() => {
    if (token) {
      api
        .get("/auth/profile", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => setUser(res.data.user))
        .catch(() => setUser(null));
    }
  }, [token]);

  // ✅ REGISTER
  const register = async (name, email, password) => {
    try {
      const res = await api.post("/auth/register", { name, email, password });
      const token = res.data.accessToken; // ✅ correct field name

      setToken(token);
      localStorage.setItem("token", token);

      // Fetch user profile right after registration
      const profileRes = await api.get("/auth/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(profileRes.data.user);

      navigate("/portal");
    } catch (error) {
      console.error("Registration error:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Registration failed");
    }
  };

  // ✅ LOGIN
  const login = async (email, password) => {
    try {
      const res = await api.post("/auth/login", { email, password });
      const token = res.data.accessToken; // ✅ correct field name

      setToken(token);
      localStorage.setItem("token", token);

      // Fetch profile after login
      const profileRes = await api.get("/auth/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(profileRes.data.user);

      navigate("/portal");
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Login failed");
    }
  };

  // ✅ LOGOUT
  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ user, token, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
