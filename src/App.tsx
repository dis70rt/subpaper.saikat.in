import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Details from './components/Details';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Trailer from './components/Trailer';

function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  
  // Smooth progress for ambient effects
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 30,
    restDelta: 0.001
  });

  // Move the ambient light leaks based on scroll
  const glowY1 = useTransform(smoothProgress, [0, 1], ['0vh', '-60vh']);
  const glowY2 = useTransform(smoothProgress, [0, 1], ['20vh', '-40vh']);
  const glowOpacity = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [0.6, 1, 1, 0.6]);

  return (
    <div className="App" ref={containerRef}>
      {/* Fixed ambient light leaks – parallax on scroll */}
      <motion.div 
        className="ambient-glow ambient-glow-1" 
        style={{ y: glowY1, opacity: glowOpacity }}
      />
      <motion.div 
        className="ambient-glow ambient-glow-2" 
        style={{ y: glowY2, opacity: glowOpacity }}
      />
      <motion.div 
        className="ambient-glow ambient-glow-3" 
        style={{ y: glowY1 }}
      />

      <Navbar />
      <Hero />
      <Trailer />
      <Features />
      <Details />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
