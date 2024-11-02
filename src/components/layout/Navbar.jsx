// src/components/layout/Navbar.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Book, Menu, Home } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 w-full bg-card shadow-sm z-50">
      <div className="container mx-auto px-8 h-24 flex items-center justify-between" style={{ maxWidth: "1800px" }}>
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4"
        >
          <Book className="h-10 w-10 text-primary" />
          <Link to="/" className="text-4xl font-bold text-primary">
            DSA Learning
          </Link>
        </motion.div>
        
        <Button
          variant="ghost"
          size="lg"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-primary"
        >
          <Menu className="h-10 w-10" />
        </Button>

        <div className="hidden lg:flex items-center gap-12">
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link 
              to="/"
              className="flex items-center gap-3 text-2xl text-muted-foreground hover:text-primary"
            >
              <Home className="h-8 w-8" />
              Home
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link 
              to="/chapters"
              className="text-2xl text-muted-foreground hover:text-primary"
            >
              Chapters
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-card border-t"
        >
          <div className="container mx-auto px-8 py-6 flex flex-col gap-6">
            <Link 
              to="/"
              className="flex items-center gap-3 text-2xl text-muted-foreground hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              <Home className="h-8 w-8" />
              Home
            </Link>
            <Link 
              to="/chapters"
              className="text-2xl text-muted-foreground hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Chapters
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;