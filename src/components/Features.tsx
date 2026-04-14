import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Zap, ImageIcon, Share2 } from 'lucide-react';
import { useRef } from 'react';
import '../Features.css';

const Features = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Global scroll tracker for the entire features section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Wrap the scroll progress in physics for buttery smooth momentum
  const smoothProgress = useSpring(scrollYProgress, { damping: 30, stiffness: 100 });

  // Crossfade timings (Gradual overlaps matching Payer aesthetics)
  const img1Opacity = useTransform(smoothProgress, [0, 0.4, 0.5], [1, 1, 0]);
  const img2Opacity = useTransform(smoothProgress, [0.35, 0.5, 0.7, 0.85], [0, 1, 1, 0]);
  const img3Opacity = useTransform(smoothProgress, [0.7, 0.85, 1], [0, 1, 1]);

  // Premium Inertia Parallax Motion for the Phone
  const phoneRotateX = useTransform(smoothProgress, [0, 1], [6, -6]);
  const phoneRotateY = useTransform(smoothProgress, [0, 0.5, 1], [-10, 0, 10]);

  return (
    <section className="features-section" id="features" ref={containerRef}>
      <div className="features-sticky-grid">
        
        {/* Left Column: Scrolling Content */}
        <div className="features-content">
          
          {/* Step 1 */}
          <div className="feature-step">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <div className="feature-label">
                <span className="icon"><Zap size={14} /></span>
                Lightning Fast
              </div>
              <h2>
                <span className="text-gradient">All major actions</span>
                <br />are just a tap away.
              </h2>
              <p>Drastically faster load times and snappier responses. Browse thousands of wallpapers with zero lag on any device.</p>
              <a href="https://play.google.com/store/apps/details?id=in.saikat.subpaper" target="_blank" rel="noopener noreferrer" className="inline-cta">
                Download Free &rarr;
              </a>
            </motion.div>
          </div>

          {/* Step 2 */}
          <div className="feature-step">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <div className="feature-label">
                <span className="icon"><ImageIcon size={14} /></span>
                Ultra HD
              </div>
              <h2>
                <span className="text-gradient">Premium 4K</span>
                <br />wallpapers, always.
              </h2>
              <p>Every image is served at the highest available resolution. Crystal clear wallpapers for every screen size and density.</p>
              <a href="https://play.google.com/store/apps/details?id=in.saikat.subpaper" target="_blank" rel="noopener noreferrer" className="inline-cta">
                Get the App &rarr;
              </a>
            </motion.div>
          </div>

          {/* Step 3 */}
          <div className="feature-step">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <div className="feature-label">
                <span className="icon"><Share2 size={14} /></span>
                Direct Share
              </div>
              <h2>
                <span className="text-gradient">Share from Reddit,</span>
                <br />preview instantly.
              </h2>
              <p>Share any Reddit post directly to SubPaper and preview it as your wallpaper. No downloading, no extra steps.</p>
              <a href="https://play.google.com/store/apps/details?id=in.saikat.subpaper" target="_blank" rel="noopener noreferrer" className="inline-cta">
                Try it Now &rarr;
              </a>
            </motion.div>
          </div>

        </div>

        {/* Right Column: Sticky iPhone 16 Pro */}
        <div className="features-visual">
          <div className="sticky-phone-container">
            <div className="phone-ambient-glow" />
            
            <motion.div 
              className="iphone-16-pro"
              style={{
                rotateX: phoneRotateX,
                rotateY: phoneRotateY
              }}
            >
              {/* Hardware Bezel */}
              <div className="iphone-frame">
                
                {/* Dynamic Island */}
                <div className="dynamic-island">
                  <div className="camera-lens" />
                </div>
                
                {/* Screen */}
                <div className="iphone-screen">
                  {/* Layered Screenshots */}
                  <motion.img 
                    src="/screenshots/2.jpeg" 
                    alt="Browsing UI" 
                    className="screen-img"
                    style={{ opacity: img1Opacity }}
                    loading="lazy"
                  />
                  <motion.img 
                    src="/screenshots/1.jpeg" 
                    alt="4K Quality UI" 
                    className="screen-img"
                    style={{ opacity: img2Opacity }}
                    loading="lazy"
                  />
                  <motion.img 
                    src="/screenshots/3.jpeg" 
                    alt="Share UI" 
                    className="screen-img"
                    style={{ opacity: img3Opacity }}
                    loading="lazy"
                  />
                </div>

                {/* Glare effect */}
                <div className="iphone-glare" />
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;
