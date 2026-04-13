import { motion } from 'framer-motion';
import '../Trailer.css';

const Trailer = () => {
  return (
    <section className="trailer-section" id="trailer">
      <div className="container">
        <motion.div 
          className="trailer-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="pill-badge">
            <span className="dot" />
            See It In Action
          </div>
          <h2>
            <span className="text-gradient">Experience SubPaper.</span>
          </h2>
        </motion.div>

        <motion.div 
          className="trailer-wrapper"
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="trailer-glow" />
          <div className="trailer-frame">
            <iframe 
              src="https://www.youtube.com/embed/RbSOpzlgjjk?controls=1&rel=0&modestbranding=1" 
              title="SubPaper Trailer" 
              frameBorder="0" 
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Trailer;
