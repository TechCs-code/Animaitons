// src/components/layout/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-card mt-auto">
      <div className="container mx-auto px-4 py-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <div className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2024 DSA Learning. All rights reserved.
          </div>
          <div className="flex gap-6">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              href="#" 
              className="text-muted-foreground hover:text-primary text-sm"
            >
              About
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              href="#" 
              className="text-muted-foreground hover:text-primary text-sm"
            >
              Contact
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              href="#" 
              className="text-muted-foreground hover:text-primary text-sm"
            >
              GitHub
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;