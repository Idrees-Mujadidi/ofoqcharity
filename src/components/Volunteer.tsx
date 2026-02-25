import { motion } from 'motion/react';
import { Users, HandHeart, Smile } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Volunteer() {
  return (
    <section id="volunteer" className="py-24 bg-brand-navy dark:bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="bg-brand-gold dark:bg-gold-dark rounded-3xl p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          {/* Decorative Circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-black/5 rounded-full translate-x-1/2 translate-y-1/2 blur-2xl"></div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-navy mb-6">
              Become a Volunteer
            </h2>
            <p className="text-brand-navy/80 text-lg max-w-2xl mx-auto mb-10 font-medium">
              Join us today and be the reason someone smiles! Together, we can build a better tomorrow. Your time and effort can bring hope to countless lives.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
              {[
                { icon: Users, text: "Make a real difference in your community" },
                { icon: HandHeart, text: "Be part of a mission that changes lives" },
                { icon: Smile, text: "Gain valuable experience and fulfillment" },
              ].map((item, i) => (
                <div key={i} className="bg-white/20 backdrop-blur-sm p-6 rounded-xl border border-brand-navy/10">
                  <item.icon className="w-8 h-8 text-brand-navy mx-auto mb-4" />
                  <p className="text-brand-navy font-semibold">{item.text}</p>
                </div>
              ))}
            </div>

            <Link
              to="/contact"
              className="inline-block bg-brand-navy text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-brand-blue hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Join Ofoq Charity
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
