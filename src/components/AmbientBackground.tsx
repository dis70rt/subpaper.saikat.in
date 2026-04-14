import { motion, useSpring, useTransform, useMotionValue } from 'framer-motion';
import { useEffect } from 'react';
import '../AmbientBackground.css';

const AmbientBackground = () => {
  // Use framer-motion values to track mouse position smoothly
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Apply spring physics for that buttery smooth "Framer" follow effect
  const springConfig = { damping: 50, stiffness: 400, mass: 1 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse coordinates to range [-1, 1] with 0 being the center
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      mouseX.set(x);
      mouseY.set(y);
      
      // Globals removed to prevent thrashing. Details.tsx handles its own mouse tracker.
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Create 4 movement intensity layers to simulate deep 3D space.
  // Layer 4 (Furthest Back - moves strongly opposite)
  const layer4X = useTransform(smoothX, [-1, 1], [-80, 80]);
  const layer4Y = useTransform(smoothY, [-1, 1], [-80, 80]);

  // Layer 3 (Mid-Back - moves moderately opposite)
  const layer3X = useTransform(smoothX, [-1, 1], [-45, 45]);
  const layer3Y = useTransform(smoothY, [-1, 1], [-45, 45]);

  // Layer 2 (Mid-Front - moves slightly opposite)
  const layer2X = useTransform(smoothX, [-1, 1], [-20, 20]);
  const layer2Y = useTransform(smoothY, [-1, 1], [-20, 20]);

  // Layer 1 (Closest - moves slowly towards mouse)
  const layer1X = useTransform(smoothX, [-1, 1], [15, -15]);
  const layer1Y = useTransform(smoothY, [-1, 1], [15, -15]);

  return (
    <div className="ambient-background-container">
      {/* LAYER 4: Furthest */}
      <motion.img src="/background/bg-1.webp" alt="" loading="lazy" fetchPriority="low" className="floating-bg-image img-a l4" style={{ x: layer4X, y: layer4Y }} />
      <motion.img src="/background/bg-2.webp" alt="" loading="lazy" fetchPriority="low" className="floating-bg-image img-b l4" style={{ x: layer4X, y: layer4Y }} />
      <motion.img src="/background/bg-3.webp" alt="" loading="lazy" fetchPriority="low" className="floating-bg-image img-i l4" style={{ x: layer4X, y: layer4Y }} />
      <motion.img src="/background/bg-4.webp" alt="" loading="lazy" fetchPriority="low" className="floating-bg-image img-j l4" style={{ x: layer4X, y: layer4Y }} />
      
      {/* LAYER 3: Mid-Back */}
      <motion.img src="/background/bg-5.webp" alt="" loading="lazy" fetchPriority="low" className="floating-bg-image img-c l3" style={{ x: layer3X, y: layer3Y }} />
      <motion.img src="/background/bg-6.webp" alt="" loading="lazy" fetchPriority="low" className="floating-bg-image img-d l3" style={{ x: layer3X, y: layer3Y }} />
      <motion.img src="/background/bg-7.webp" alt="" loading="lazy" fetchPriority="low" className="floating-bg-image img-k l3" style={{ x: layer3X, y: layer3Y }} />
      <motion.img src="/background/bg-8.webp" alt="" loading="lazy" fetchPriority="low" className="floating-bg-image img-l l3" style={{ x: layer3X, y: layer3Y }} />

      {/* LAYER 2: Mid-Front */}
      <motion.img src="/background/bg-9.webp" alt="" loading="lazy" fetchPriority="low" className="floating-bg-image img-e l2" style={{ x: layer2X, y: layer2Y }} />
      <motion.img src="/background/bg-10.webp" alt="" loading="lazy" fetchPriority="low" className="floating-bg-image img-f l2" style={{ x: layer2X, y: layer2Y }} />
      <motion.img src="/background/bg-11.webp" alt="" loading="lazy" fetchPriority="low" className="floating-bg-image img-m l2" style={{ x: layer2X, y: layer2Y }} />
      <motion.img src="/background/bg-12.webp" alt="" loading="lazy" fetchPriority="low" className="floating-bg-image img-n l2" style={{ x: layer2X, y: layer2Y }} />

      {/* LAYER 1: Closest */}
      <motion.img src="/background/bg-13.webp" alt="" loading="lazy" fetchPriority="low" className="floating-bg-image img-g l1" style={{ x: layer1X, y: layer1Y }} />
      <motion.img src="/background/bg-14.webp" alt="" loading="lazy" fetchPriority="low" className="floating-bg-image img-h l1" style={{ x: layer1X, y: layer1Y }} />
      <motion.img src="/background/bg-15.webp" alt="" loading="lazy" fetchPriority="low" className="floating-bg-image img-o l1" style={{ x: layer1X, y: layer1Y }} />
      <motion.img src="/background/bg-1.webp" alt="" loading="lazy" fetchPriority="low" className="floating-bg-image img-p l1" style={{ x: layer1X, y: layer1Y }} />
      
      {/* Heavy vignette overlay to ensure text readability */}
      <div className="bg-vignette" />
    </div>
  );
};

export default AmbientBackground;
