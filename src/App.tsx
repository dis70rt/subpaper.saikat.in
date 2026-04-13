import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef, lazy, Suspense } from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

// Lazy loaded beneath-the-fold components
const Trailer = lazy(() => import('./components/Trailer'));
const Features = lazy(() => import('./components/Features'));
const Details = lazy(() => import('./components/Details'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Footer = lazy(() => import('./components/Footer'));
const AmbientBackground = lazy(() => import('./components/AmbientBackground'));

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
      <Suspense fallback={null}>
        <AmbientBackground />
      </Suspense>
      
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
      
      <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
        <Trailer />
        <Features />
        <Details />
        <Testimonials />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
