import React, { useState } from "react";
import { motion } from "framer-motion";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signOut = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email == "CAMU" && password == 7777) {
      localStorage.setItem("login", "true");
      signOut("/");
    } else {
      alert("Login yoki Parol notog'ri");
    }
  };

  return ReactDOM.createPortal(
    <motion.div className="login-container">
      <motion.div
        className="background-animation"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}>
        <motion.div
          className="circle"
          animate={{
            scale: [1, 1.5, 1],
            borderRadius: ["20%", "50%", "20%"],
            rotate: [0, 360, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
        />
        <motion.div
          className="circle small"
          animate={{
            scale: [1, 1.5, 1],
            borderRadius: ["20%", "50%", "20%"],
            rotate: [0, -360, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
        />
      </motion.div>
      <motion.form
        initial={{ y: -1000 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 50 }}
        onSubmit={handleSubmit}
        className="login-form">
        <h2 className="login-title">Tizimga kirish</h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="input-container">
          <label htmlFor="email">Login:</label>
          <input
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="input-container">
          <label htmlFor="password">Parol:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </motion.div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
          type="submit"
          className="login-button">
          Kirish
        </motion.button>
      </motion.form>
    </motion.div>,
    document.getElementById("login-form-root") // Yangi root element
  );
};

export default LoginForm;
