import { motion, useScroll, useTransform } from 'framer-motion';
import { Zap, ImageIcon, Share2, Sparkles } from 'lucide-react';
import { useRef } from 'react';
import '../Features.css';

const Features = () => {
  return (
    <section className="features-section" id="features">
      {/* Feature Block 1: Fast Browsing */}
      <FeatureBlock
        direction="normal"
        label="Lightning Fast"
        labelIcon={<Zap size={14} />}
        title={<>
          <span className="text-gradient">All major actions</span>
          <br />are just a tap away.
        </>}
        description="Drastically faster load times and snappier responses. Browse thousands of wallpapers with zero lag on any device."
        screenshotSrc="/screenshots/2.jpeg"
        screenshotAlt="SubPaper browsing interface"
        cards={[
          {
            icon: <Zap size={16} />,
            title: 'Quick Actions',
            desc: 'Set wallpapers, save favorites, and share — all from the main screen.'
          },
          {
            icon: <Sparkles size={16} />,
            title: 'Smart Caching',
            desc: 'Intelligent prefetching ensures images are ready before you scroll to them.'
          }
        ]}
      />

      <div className="feature-divider"><div className="line" /></div>

      {/* Feature Block 2: 4K Quality */}
      <FeatureBlock
        direction="reversed"
        label="Ultra HD"
        labelIcon={<ImageIcon size={14} />}
        title={<>
          <span className="text-gradient">Premium 4K</span>
          <br />wallpapers, always.
        </>}
        description="Every image is served at the highest available resolution. Crystal clear wallpapers for every screen size and density."
        screenshotSrc="/screenshots/1.jpeg"
        screenshotAlt="4K wallpaper detail view"
        cards={[
          {
            icon: <ImageIcon size={16} />,
            title: 'Resolution Upscaling',
            desc: 'Automatic resolution optimization ensures the best quality for your device.'
          }
        ]}
      />

      <div className="feature-divider"><div className="line" /></div>

      {/* Feature Block 3: Reddit Integration */}
      <FeatureBlock
        direction="normal"
        label="Direct Share"
        labelIcon={<Share2 size={14} />}
        title={<>
          <span className="text-gradient">Share from Reddit,</span>
          <br />preview instantly.
        </>}
        description="Share any Reddit post directly to SubPaper and preview it as your wallpaper. No downloading, no extra steps."
        screenshotSrc="/screenshots/3.jpeg"
        screenshotAlt="Reddit share integration"
        cards={[]}
      />
    </section>
  );
};

interface FeatureBlockProps {
  direction: 'normal' | 'reversed';
  label: string;
  labelIcon: React.ReactNode;
  title: React.ReactNode;
  description: string;
  screenshotSrc: string;
  screenshotAlt: string;
  cards: { icon: React.ReactNode; title: string; desc: string }[];
}

const FeatureBlock = ({ direction, label, labelIcon, title, description, screenshotSrc, screenshotAlt, cards }: FeatureBlockProps) => {
  const blockRef = useRef<HTMLDivElement>(null);

  // Scroll-linked 3D phone transforms
  const { scrollYProgress } = useScroll({
    target: blockRef,
    offset: ["start end", "end start"]
  });

  const phoneRotateY = useTransform(scrollYProgress, [0, 0.5, 1], 
    direction === 'normal' ? [12, 0, -8] : [-12, 0, 8]
  );
  const phoneRotateX = useTransform(scrollYProgress, [0, 0.5, 1], [8, 0, -5]);
  const phoneY = useTransform(scrollYProgress, [0, 0.5, 1], [60, 0, -40]);
  const phoneScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 0.96]);

  const isReversed = direction === 'reversed';
  const textX = isReversed ? 40 : -40;
  const visualX = isReversed ? -40 : 40;

  return (
    <div className={`feature-block ${isReversed ? 'reversed' : ''}`} ref={blockRef}>
      <motion.div 
        className="feature-text"
        initial={{ opacity: 0, x: textX }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="feature-label">
          <span className="icon">{labelIcon}</span>
          {label}
        </div>
        <h2>{title}</h2>
        <p>{description}</p>
        
        {cards.length > 0 && (
          <div className="feature-cards">
            {cards.map((card, i) => (
              <motion.div 
                key={i}
                className="feature-mini-card"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              >
                <div className="card-icon">{card.icon}</div>
                <div>
                  <h4>{card.title}</h4>
                  <p>{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>

      <motion.div 
        className="feature-visual"
        initial={{ opacity: 0, x: visualX }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="feature-phone-wrapper">
          <div className="feature-phone-glow" />
          <motion.div 
            className="feature-phone-frame"
            style={{ 
              rotateY: phoneRotateY, 
              rotateX: phoneRotateX,
              y: phoneY,
              scale: phoneScale,
            }}
          >
            <div className="feature-phone-screen">
              <img src={screenshotSrc} alt={screenshotAlt} loading="lazy" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Features;
