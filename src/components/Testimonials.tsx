import { motion } from 'framer-motion';
import '../Testimonials.css';

const testimonialsData = [
  {
    name: 'Mia Delaney',
    role: 'Freelance Designer',
    text: 'SubPaper has completely transformed how I personalize my phone. The 4K resolution images are breathtaking, and the speed is unmatched. No more clunky menus or slow loads.',
    initials: 'MD'
  },
  {
    name: 'Zara West',
    role: 'Content Creator',
    text: 'I\'ve tried countless wallpaper apps, but SubPaper truly stands out. The intuitive interface makes finding the perfect image effortless. The community-driven content is always fresh.',
    initials: 'ZW'
  },
  {
    name: 'Maverick Stone',
    role: 'Android Developer',
    text: 'As someone who appreciates fine details, I need a visual experience that is both inspiring and efficient. SubPaper exceeds expectations with its Reddit previews and rock-solid stability.',
    initials: 'MS'
  },
  {
    name: 'Luna Park',
    role: 'UI Designer',
    text: 'The curated subreddit collections are genius. I discover new aesthetic wallpapers daily that I\'d never find on my own. This is the wallpaper app Android deserved.',
    initials: 'LP'
  },
  {
    name: 'Ethan Cole',
    role: 'Photography Enthusiast',
    text: 'Finally a wallpaper app that doesn\'t compress images. Every wallpaper looks pixel-perfect on my AMOLED display. The dark UI is a nice touch too.',
    initials: 'EC'
  },
  {
    name: 'Sophie Tran',
    role: 'Student',
    text: 'Lightweight, fast, and perfectly designed. I change my wallpaper every day now. The offline mode is an absolute lifesaver on campus.',
    initials: 'ST'
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
