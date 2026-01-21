import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
  };

  const whatsappNumber = '59891234567'; // Replace with actual number
  const whatsappMessage = encodeURIComponent('Hola! Me gustaría hacer un pedido...');

  return (
    <section id="pedidos" className="section-padding bg-primary">
      <div className="container-wide">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-label text-gold block mb-6">Pedidos</span>
            
            <h2 className="heading-section text-primary-foreground mb-8">
              Hacé tu pedido<br />
              <span className="italic">con anticipación</span>
            </h2>
            
            <p className="text-body text-primary-foreground/70 mb-10 max-w-md">
              Trabajamos con pedidos anticipados para garantizar 
              la frescura de cada producto. Contanos qué necesitás 
              y te asesoramos.
            </p>

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 px-8 py-4 bg-primary-foreground text-primary text-label hover:bg-primary-foreground/90 transition-colors duration-300 mb-12"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>Escribinos por WhatsApp</span>
            </a>

            {/* Contact Info */}
            <div className="space-y-4 text-primary-foreground/60 text-body-small">
              <p>
                <span className="text-label text-primary-foreground/40 block mb-1">Horario de atención</span>
                Lunes a Sábado, 8:00 – 18:00
              </p>
              <p>
                <span className="text-label text-primary-foreground/40 block mb-1">Ubicación</span>
                Montevideo, Uruguay
              </p>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="text-label text-primary-foreground/60 block mb-3">
                  Tu nombre
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-0 py-4 bg-transparent border-0 border-b border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:border-gold transition-colors"
                  placeholder="María García"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="text-label text-primary-foreground/60 block mb-3">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-0 py-4 bg-transparent border-0 border-b border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:border-gold transition-colors"
                  placeholder="maria@ejemplo.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="text-label text-primary-foreground/60 block mb-3">
                  ¿Qué necesitás?
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-0 py-4 bg-transparent border-0 border-b border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:border-gold transition-colors resize-none"
                  placeholder="Contanos sobre tu pedido, cantidad, fecha de entrega..."
                  required
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center w-full sm:w-auto px-10 py-4 bg-gold text-gold-foreground text-label hover:bg-gold/90 transition-colors duration-300 mt-4"
              >
                Enviar consulta
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
