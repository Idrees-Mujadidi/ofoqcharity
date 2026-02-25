import { motion } from 'motion/react';

export default function Projects() {
  return (
    <div className="pt-32 pb-20 md:pt-48 md:pb-32 bg-bg-light dark:bg-bg-dark min-h-screen transition-colors duration-300 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30 dark:opacity-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-brand-gold/20 blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-brand-blue/20 blur-[100px]" />
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Side (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-brand-blue/10 dark:bg-white/10 text-brand-blue dark:text-white text-xs font-bold tracking-wider uppercase mb-6">
              Our Work
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-brand-navy dark:text-white mb-8 leading-tight">
              Transforming Lives Through <span className="text-brand-gold italic">Action</span>
            </h1>
            <div className="space-y-6 text-text-secondary dark:text-text-dark-secondary text-lg md:text-xl font-light leading-relaxed">
              <p>
                At Ofoq Charity Foundation, we are dedicated to creating sustainable change in communities across Afghanistan.
              </p>
              <p>
                From building schools and clinics to providing emergency relief and healthcare, our projects are designed to uplift the most vulnerable.
              </p>
              <p>
                We believe in transparency and impact, ensuring that every initiative brings us closer to a future where everyone has the opportunity to thrive.
              </p>
            </div>
          </motion.div>

          {/* Image Side (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="order-1 lg:order-2 space-y-6"
          >
            {/* Top Large Image */}
            <div className="w-full h-64 md:h-80 lg:h-96 overflow-hidden rounded-tl-[3rem] md:rounded-tl-[4rem] rounded-br-[3rem] md:rounded-br-[4rem] shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
              <img 
                src="/static/images/propage1.jpg" 
                alt="Construction Project" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Bottom Two Images */}
            <div className="grid grid-cols-2 gap-6">
              <div className="w-full h-40 md:h-56 overflow-hidden rounded-tl-[2rem] md:rounded-tl-[3rem] rounded-br-[2rem] md:rounded-br-[3rem] shadow-xl transform hover:scale-[1.02] transition-transform duration-500">
                <img 
                  src="/static/images/propage2.jpg" 
                  alt="Community Building" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full h-40 md:h-56 overflow-hidden rounded-tl-[2rem] md:rounded-tl-[3rem] rounded-br-[2rem] md:rounded-br-[3rem] shadow-xl transform hover:scale-[1.02] transition-transform duration-500">
                <img 
                  src="/static/images/propage3.jpg" 
                  alt="Infrastructure Development" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Placeholder for future content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-32 relative z-10 text-center">
        <p className="text-text-secondary dark:text-text-dark-secondary italic">
          More project details coming soon...
        </p>
      </section>
    </div>
  );
}
