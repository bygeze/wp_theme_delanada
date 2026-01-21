import { motion } from 'framer-motion';

interface PastryCardProps {
  image: string;
  name: string;
  description: string;
  origin: string;
  index: number;
}

const PastryCard = ({ image, name, description, origin, index }: PastryCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="group"
    >
      <div className="relative aspect-editorial overflow-hidden mb-6 bg-muted">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover image-warm transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-500" />
      </div>
      
      <span className="text-label text-gold block mb-2">{origin}</span>
      
      <h3 className="heading-subsection text-foreground mb-3 group-hover:text-gold transition-colors duration-300">
        {name}
      </h3>
      
      <p className="text-body-small text-muted-foreground">
        {description}
      </p>
    </motion.article>
  );
};

export default PastryCard;
