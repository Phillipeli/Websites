import React from 'react';
import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import Results from '../components/Results';
import Testimonials from '../components/Testimonials';
import Process from '../components/Process';
import Contact from '../components/Contact';

const HomePage: React.FC = () => {
  return (
    <main>
      <Hero />
      <Benefits />
      <Results />
      <Testimonials />
      <Process />
      <Contact />
    </main>
  );
};

export default HomePage;