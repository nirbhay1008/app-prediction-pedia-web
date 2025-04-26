import React, { JSX } from "react";
import { Lock, User } from "lucide-react";
import { motion } from "framer-motion";
import "./LoginPageStyles.css";

export const LoginPage = ({
  setShowLogin,
  setShowHome,
}: {
  setShowLogin: (val: boolean) => void;
  setShowHome: (val: boolean) => void;
}): JSX.Element => {
  return (
    <div className="login-container">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="login-card">
          <h2 className="login-title">Login</h2>
          <div className="login-content">
            <div className="input-container">
              <User className="icon" />
              <input placeholder="Username" className="input-field" />
            </div>
            <div className="input-container">
              <Lock className="icon" />
              <input
                type="password"
                placeholder="Password"
                className="input-field"
              />
            </div>
            <button
              onClick={() => {
                setShowLogin(false);
                setShowHome(true);
              }}
              className="login-button"
            >
              Sign In
            </button>
            <p className="signup-text">
              Don't have an account?{" "}
              <button className="signup-link">Sign Up</button>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
