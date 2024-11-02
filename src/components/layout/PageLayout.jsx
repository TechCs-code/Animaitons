// src/components/layout/PageLayout.jsx
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const PageLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      {/* Add padding-top to account for fixed navbar */}
      <main className="flex-grow pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;