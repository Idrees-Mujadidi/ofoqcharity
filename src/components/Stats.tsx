import { motion, useInView, animate } from 'motion/react';
import { useEffect, useRef } from 'react';

const stats = [
  {
    value: 20,
    suffix: "K",
    label: "Patient Treatment",
  },
  {
    value: 15,
    suffix: "K",
    label: "Eid Ul Adha | Sacrifices",
  },
  {
    value: 7,
    suffix: "K+",
    label: "Beneficiaries",
  },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView && ref.current) {
      const controls = animate(0, value, {
        duration: 2.5,
        ease: [0.22, 1, 0.36, 1], // Custom easeOut
        onUpdate(latest) {
          if (ref.current) {
            ref.current.textContent = Math.floor(latest) + suffix;
          }
        },
      });
      return () => controls.stop();
    }
  }, [inView, value, suffix]);

  return <span ref={ref} className="tabular-nums">0{suffix}</span>;
}

export default function Stats() {
  return (
    <section className="py-12 bg-brand-blue dark:bg-blue-dark text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4"
            >
              <motion.h3
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
                className="text-4xl md:text-5xl font-bold font-serif mb-2 text-brand-gold"
              >
                <Counter value={stat.value} suffix={stat.suffix} />
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (index * 0.2) + 0.3, duration: 0.8 }}
                className="text-lg md:text-xl font-medium text-white/90 uppercase tracking-wide"
              >
                {stat.label}
              </motion.p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-brand-gold rounded-full blur-3xl" />
      </div>
    </section>
  );
}
