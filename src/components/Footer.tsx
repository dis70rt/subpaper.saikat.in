import { motion } from 'framer-motion';
import '../Footer.css';

const Footer = () => {
  const marqueeItems = ['SubPaper', 'Mobile Wallpapers', '4K Quality', 'Daily Updates', 'Offline Mode', 'Anime Wallpapers', 'SubPaper', 'Mobile Wallpapers', '4K Quality', 'Daily Updates', 'Offline Mode', 'Anime Wallpapers'];

  return (
    <footer className="footer-section" id="footer">
      {/* CTA Banner */}
      <div className="footer-cta-banner">
        <div className="footer-cta-glow" />
        <motion.div
          className="footer-cta-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2>
            <span className="text-gradient">Get the App.</span>
          </h2>
          <p>Explore a large collection of stunning wallpapers and give your device a fresh new look anytime.</p>

          <div className="footer-cta-buttons">
            <a
              href="https://play.google.com/store/apps/details?id=in.saikat.subpaper"
              target="_blank"
              rel="noopener noreferrer"
              className="play-store-btn"
            >
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92z" fill="#4285F4"/>
                <path d="M17.556 8.235l-3.764 3.764 3.764 3.765 4.244-2.394a1 1 0 000-1.74l-4.244-2.395z" fill="#FBBC04"/>
                <path d="M3.609 1.814L13.792 12l3.764-3.765L5.87.442a1.003 1.003 0 00-2.26 1.372z" fill="#34A853"/>
                <path d="M13.792 12L3.61 22.186A1.003 1.003 0 005.87 23.558l11.686-7.793L13.792 12z" fill="#EA4335"/>
              </svg>
              <div className="play-store-text">
                <span className="play-store-small">GET IT ON</span>
                <span className="play-store-large">Google Play</span>
              </div>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Marquee Band */}
      <div className="footer-marquee-band">
        <div className="marquee-container">
          <div className="marquee-track">
            {marqueeItems.map((item, idx) => (
              <span key={idx} className="marquee-item">
                <span className="dot" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom-wrapper">
        <div className="footer-bottom">
          <div className="footer-brand">
            <div className="footer-brand-name">
              <img src="/logo.png" alt="SubPaper" />
              SubPaper
            </div>
            <p>SubPaper combines "Sub" (community) and "Paper" (wallpaper), reflecting how wallpapers are organized and discovered inside the app.</p>
          </div>

          <div className="footer-links-group">
            <div className="footer-links-col">
              <h5>Links</h5>
              <a href="#hero">Home</a>
              <a href="#features">Features</a>
              <a href="#details">Details</a>
              <a href="#testimonials">Community</a>
            </div>
            <div className="footer-links-col">
              <h5>Legal</h5>
              <a href="https://sites.google.com/view/subpaper-privacy-policy/home" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        ⓒ {new Date().getFullYear()} SubPaper. All Rights Reserved.
      </div>
      <div className="footer-disclaimer">
        Disclaimer: This app is not affiliated with or endorsed by Reddit. Reddit is a trademark of Reddit, Inc.
      </div>
    </footer>
  );
};

export default Footer;
