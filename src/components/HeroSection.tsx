import { motion } from 'framer-motion';
import heroPastries from '@/assets/hero-pastries.jpg';

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-end pb-16 md:pb-24 pt-32">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroPastries}
          alt="Pastelería artesanal Nativo"
          className="w-full h-full object-cover image-warm"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="container-wide relative z-10">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-label text-gold block mb-6"
          >
            Pastelería Artesanal
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="heading-display text-foreground mb-8"
          >
            El sabor de lo<br />
            <span className="italic">auténtico</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-body text-muted-foreground max-w-md mb-10"
          >
            Recetas heredadas de generación en generación, 
            elaboradas con ingredientes naturales y el cuidado 
            de quien ama su oficio.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#pasteleria"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground text-label hover:bg-primary/90 transition-colors duration-300"
            >
              Ver productos
            </a>
            <a
              href="#nosotros"
              className="inline-flex items-center justify-center px-8 py-4 border border-foreground/20 text-foreground text-label hover:bg-foreground/5 transition-colors duration-300"
            >
              Nuestra historia
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 right-8 hidden md:block"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-label text-muted-foreground writing-mode-vertical rotate-180" style={{ writingMode: 'vertical-rl' }}>
            Descubrir
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="w-px h-12 bg-gradient-to-b from-muted-foreground/50 to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
