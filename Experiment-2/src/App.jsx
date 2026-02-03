// src/App.jsx
import React from 'react';
import { Container } from '@mui/material';

import AppNavbar from './components/MuiNavbar';
import Hero from './components/Hero';
import ButtonsSection from './components/ButtonsSection';
import DropdownSection from './components/DropdownSection';
import AlertsSection from './components/AlertsSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      {/* Navbar */}
      <AppNavbar />

      {/* Hero Section */}
      <Hero />

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        {/* Buttons */}
        <ButtonsSection />

        {/* Dropdowns */}
        <DropdownSection />

        {/* Alerts */}
        <AlertsSection />
      </Container>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
