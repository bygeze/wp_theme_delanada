import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import PastryCard from './PastryCard';
import medialunas from '@/assets/medialunas.jpg';
import sfogliatella from '@/assets/sfogliatella.jpg';
import alfajores from '@/assets/alfajores.jpg';

const pastries = [
  {
    image: medialunas,
    name: 'Medialunas de Manteca',
    description: 'Hojaldre artesanal, doradas a la perfección con un glaseado sutil de miel.',
    origin: 'Tradición Argentina',
  },
  {
    image: sfogliatella,
    name: 'Facturas Rellenas',
    description: 'Masa esponjosa con dulce de membrillo o crema pastelera casera.',
    origin: 'Herencia Uruguaya',
  },
  {
    image: alfajores,
    name: 'Alfajores de Maicena',
    description: 'Delicados bocados con dulce de leche y coco rallado, que se deshacen en la boca.',
    origin: 'Clásico Rioplatense',
  },
];

const PastrySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="pasteleria" className="section-padding">
      <div className="container-wide">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-xl mb-16 md:mb-24"
        >
          <span className="text-label text-gold block mb-6">Nuestra Pastelería</span>
          
          <h2 className="heading-section text-foreground mb-6">
            Elaborados con<br />
            <span className="italic">alma y tradición</span>
          </h2>
          
          <p className="text-body text-muted-foreground">
            Cada pieza es preparada en el día, con recetas que honran 
            generaciones de saber pastelero.
          </p>
        </motion.div>

        {/* Asymmetric Grid */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {pastries.map((pastry, index) => (
            <div 
              key={pastry.name} 
              className={index === 1 ? 'md:mt-16' : ''}
            >
              <PastryCard {...pastry} index={index} />
            </div>
          ))}
        </div>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 md:mt-24 text-center"
        >
          <a
            href="#pedidos"
            className="inline-flex items-center gap-3 text-label text-foreground hover:text-gold transition-colors duration-300 group"
          >
            <span>Ver catálogo completo</span>
            <span className="w-8 h-px bg-current transition-all duration-300 group-hover:w-12" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PastrySection;
