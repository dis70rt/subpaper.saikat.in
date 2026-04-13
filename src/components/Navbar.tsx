import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <motion.nav 
      className="navbar"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.5 }}
      style={{
        background: scrolled ? 'rgba(10, 10, 10, 0.85)' : 'rgba(10, 10, 10, 0.5)',
        borderColor: scrolled ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.06)',
      }}
    >
      <a className="navbar-logo" href="#hero">
        <img src="/logo.png" alt="SubPaper" />
        SubPaper
      </a>

      <ul className="navbar-links">
        <li><a href="#features">Features</a></li>
        <li><a href="#details">Details</a></li>
        <li><a href="#testimonials">Community</a></li>
      </ul>

      <a 
        href="https://play.google.com/store/apps/details?id=in.saikat.subpaper" 
        target="_blank" 
        rel="noopener noreferrer"
        className="navbar-cta"
      >
        Get App
      </a>
    </motion.nav>
  );
};

export default Navbar;
