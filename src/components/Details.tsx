import { motion } from 'framer-motion';
import { EyeOff, DownloadCloud, Search, RefreshCw, Palette, Shield } from 'lucide-react';
import { useRef, useEffect } from 'react';
import '../Details.css';

const detailsData = [
  {
    icon: <EyeOff size={20} />,
    title: 'Privacy First',
    description: 'No registration, no login, no tracking. Just open and explore thousands of premium wallpapers.',
  },
  {
    icon: <DownloadCloud size={20} />,
    title: 'Offline Ready',
    description: 'Browse wallpapers you\'ve already viewed even without an internet connection.',
  },
  {
    icon: <Search size={20} />,
    title: 'Smart Search',
    description: 'Find the perfect wallpaper using powerful subreddit search and real-time filtering.',
  },
  {
    icon: <RefreshCw size={20} />,
    title: 'Daily Fresh',
    description: 'New wallpapers added every day from the most active communities on Reddit.',
  },
  {
    icon: <Palette size={20} />,
    title: 'Curated Collections',
    description: 'Hand-picked categories from anime to nature, minimal to abstract — always expanding.',
  },
  {
    icon: <Shield size={20} />,
    title: 'Lightweight & Fast',
    description: 'Under 5MB install size. No bloatware, no battery drain. Designed to be incredibly efficient.',
  }
];

const Details = () => {
  return (
    <section className="details-section" id="details">
      <div className="container">
        <motion.div
          className="details-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="pill-badge">
            <span className="dot" />
            Everything You Need
          </div>
          <h2 className="text-gradient">Built with care, designed for you.</h2>
          <p>A complete wallpaper experience with every detail considered.</p>
        </motion.div>

        <div className="details-grid">
          {detailsData.map((detail, idx) => (
            <DetailCard key={idx} detail={detail} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

const DetailCard = ({ detail, index }: { detail: typeof detailsData[0]; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    };
    card.addEventListener('mousemove', handleMouseMove);
    return () => card.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      ref={cardRef}
      className="detail-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <div className="detail-icon-wrapper">{detail.icon}</div>
      <h3>{detail.title}</h3>
      <p>{detail.description}</p>
    </motion.div>
  );
};

export default Details;
