import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import bakerHands from '@/assets/baker-hands.jpg';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="nosotros" className="section-padding bg-secondary">
      <div className="container-wide">
        <div ref={ref} className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image - Offset on larger screens */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative md:-ml-12 lg:-ml-20"
          >
            <div className="aspect-editorial overflow-hidden">
              <img
                src={bakerHands}
                alt="Manos de panadero amasando"
                className="w-full h-full object-cover image-warm"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-24 h-24 md:w-32 md:h-32 border border-gold/30" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:py-12"
          >
            <span className="text-label text-gold block mb-6">Nuestra Historia</span>
            
            <h2 className="heading-section text-foreground mb-8">
              Tradición que se<br />
              <span className="italic">siente en cada bocado</span>
            </h2>

            <div className="space-y-6 text-body text-muted-foreground">
              <p>
                Nativo nace de la unión de tres culturas pasteleras: 
                la calidez uruguaya, la elegancia argentina y la 
                maestría italiana. Cada receta cuenta una historia 
                de abuelas que amasaban con amor.
              </p>
              <p>
                Trabajamos únicamente con ingredientes naturales, 
                sin conservantes ni atajos. Porque el verdadero 
                sabor requiere tiempo, paciencia y dedicación.
              </p>
            </div>

            <div className="divider-subtle my-10" />

            <div className="grid grid-cols-3 gap-6 text-center">
              {[
                { number: '15+', label: 'Años de tradición' },
                { number: '100%', label: 'Ingredientes naturales' },
                { number: '∞', label: 'Amor en cada pieza' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <span className="block font-serif text-2xl md:text-3xl text-gold mb-2">
                    {stat.number}
                  </span>
                  <span className="text-label text-muted-foreground">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
