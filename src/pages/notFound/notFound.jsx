// NotFound.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './notFound.css';

const NotFound = () => {
  const [binaryStream, setBinaryStream] = useState([]);
  const [glitchEffect, setGlitchEffect] = useState(false);
  const [hackerText, setHackerText] = useState('');

  // Generate binary stream animation
  useEffect(() => {
    const interval = setInterval(() => {
      const newBinary = Array.from({ length: 20 }, () => 
        Math.random() > 0.5 ? '1' : '0'
      );
      setBinaryStream(prev => [...prev.slice(-50), ...newBinary]);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  // Glitch effect
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchEffect(true);
      setTimeout(() => setGlitchEffect(false), 200);
    }, 3000);

    return () => clearInterval(glitchInterval);
  }, []);

  // Hacker text effect
  useEffect(() => {
    const originalText = "ERROR 404: SYSTEM BREACH DETECTED";
    let currentText = "";
    let index = 0;

    const typeInterval = setInterval(() => {
      if (index < originalText.length) {
        currentText += originalText[index];
        setHackerText(currentText);
        index++;
      } else {
        clearInterval(typeInterval);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const binaryVariants = {
    animate: {
      y: [0, -20],
      opacity: [0, 1, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <div className="cyber-container">
      {/* Animated Binary Background */}
      <div className="binary-background">
        <AnimatePresence>
          {binaryStream.map((digit, index) => (
            <motion.span
              key={index}
              className="binary-digit"
              variants={binaryVariants}
              initial="animate"
              animate="animate"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`
              }}
            >
              {digit}
            </motion.span>
          ))}
        </AnimatePresence>
      </div>

      {/* Main Content */}
      <motion.div
        className="cyber-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Glitch Effect Overlay */}
        <motion.div
          className={`glitch-overlay ${glitchEffect ? 'active' : ''}`}
          animate={{
            opacity: glitchEffect ? [0, 0.1, 0] : 0,
            x: glitchEffect ? [-10, 10, -10] : 0
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Main 404 Display */}
        <motion.div
          className="error-display"
          animate={{
            textShadow: [
              "0 0 10px #00ff00",
              "0 0 20px #00ff00",
              "0 0 30px #00ff00",
              "0 0 10px #00ff00"
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <motion.h1
            className="error-code"
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, -1, 1, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            4
            <motion.span
              animate={{
                opacity: [1, 0, 1],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 1,
                repeat: Infinity
              }}
            >
              0
            </motion.span>
            4
          </motion.h1>
        </motion.div>

        {/* Hacker Text */}
        <motion.div className="hacker-text-container">
          <motion.h2
            className="hacker-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {hackerText}
            <motion.span
              className="cursor"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            >
              _
            </motion.span>
          </motion.h2>
        </motion.div>

        {/* Error Message */}
        <motion.div
          className="error-message"
          variants={itemVariants}
        >
          <motion.p
            animate={{
              color: ['#00ff00', '#00cc00', '#00ff00']
            }}
            transition={{
              duration: 3,
              repeat: Infinity
            }}
          >
            UNAUTHORIZED ACCESS ATTEMPT
          </motion.p>
          <motion.p className="sub-message">
            The requested digital asset has been encrypted or does not exist in our servers.
          </motion.p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="action-buttons"
          variants={itemVariants}
        >
          <motion.button
            className="cyber-button primary"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px #00ff00"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.history.back()}
          >
            <span>RETURN TO SAFETY</span>
            <div className="button-glow"></div>
          </motion.button>

          <motion.button
            className="cyber-button secondary"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px #ff0000"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = '/'}
          >
            <span>GO TO HOMEBASE</span>
            <div className="button-glow red"></div>
          </motion.button>
        </motion.div>

        {/* Security Status */}
        <motion.div
          className="security-status"
          variants={itemVariants}
        >
          <motion.div
            className="status-indicator"
            animate={{
              backgroundColor: ['#ff0000', '#ffff00', '#ff0000']
            }}
            transition={{
              duration: 2,
              repeat: Infinity
            }}
          />
          <span>SECURITY PROTOCOL: ACTIVE</span>
        </motion.div>
      </motion.div>

      {/* Scanning Line */}
      <motion.div
        className="scan-line"
        animate={{
          y: ['0%', '100%']
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
};

export default NotFound;