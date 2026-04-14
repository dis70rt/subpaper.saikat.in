import { motion } from 'framer-motion';
import '../Testimonials.css';

const testimonialsData = [
  {
    name: 'Devansh Gupta',
    role: '19 July 2024',
    text: 'Great app for wallpapers, but the top and new filters show almost the same results.',
    initials: 'DG'
  },
  {
    name: 'Abhay',
    role: '28 June 2024',
    text: 'The collections here are pretty dope.',
    initials: 'A'
  },
  {
    name: 'jhulan sarkar',
    role: '1 July 2024',
    text: 'Best🔥👀',
    initials: 'JS'
  },
  {
    name: 'Anirudh',
    role: '12 August 2024',
    text: 'super fast and clean, the amoled walls are perfect.',
    initials: 'A'
  },
  {
    name: 'Sanchit',
    role: '5 September 2024',
    text: 'best app hands down for anime wallpapers zero lag.',
    initials: 'S'
  }
];

const StarRating = () => (
  <div className="testimonial-stars">
    {[...Array(5)].map((_, i) => (
      <span key={i}>★</span>
    ))}
  </div>
);

const Testimonials = () => {
  // Double the data for seamless marquee loop
  const duplicated = [...testimonialsData, ...testimonialsData];

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-glow" />
      
      <motion.div 
        className="testimonials-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="pill-badge">
          <span className="dot" />
          Community
        </div>
        <h2 className="text-gradient">Join the growing community.</h2>
        <p>Trusted for its reliability, quality, and beautiful simplicity.</p>
      </motion.div>

      {/* Auto-scrolling marquee row */}
      <div className="testimonials-marquee">
        <div className="testimonials-track">
          {duplicated.map((data, idx) => (
            <div key={idx} className="testimonial-card">
              <StarRating />
              <p className="testimonial-text">"{data.text}"</p>
              <div className="testimonial-author">
                <div className="author-avatar">{data.initials}</div>
                <div className="author-info">
                  <h4>{data.name}</h4>
                  <span>{data.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
