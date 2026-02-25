import { motion } from 'motion/react';
import { Heart, BookOpen, Stethoscope, Home, Sprout, Microscope, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: <Stethoscope className="w-6 h-6" />,
    title: "Medical & Health",
    description: "Providing essential healthcare services and treatment to those who cannot afford it."
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Academic & Education",
    description: "Empowering the next generation through access to quality education and learning resources."
  },
  {
    icon: <Home className="w-6 h-6" />,
    title: "Aid for Needy Families",
    description: "Delivering food, shelter, and basic necessities to families facing extreme hardship."
  },
  {
    icon: <Sprout className="w-6 h-6" />,
    title: "Public Facilities",
    description: "Building and maintaining community infrastructure for a better quality of life."
  },
  {
    icon: <Microscope className="w-6 h-6" />,
    title: "Scientific Research",
    description: "Supporting research initiatives that drive long-term solutions for societal challenges."
  },
];

export default function Mission() {
  return (
    <section id="about" className="py-24 bg-bg-light dark:bg-bg-dark transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Left Side - Text & Image */}
          <div className="w-full lg:w-[25%] flex flex-col gap-8 lg:sticky lg:top-32 h-fit text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6 flex justify-center lg:justify-start lg:pl-8">
                 <img 
                  src="/mission.png" 
                  alt="Our Mission" 
                  className="w-48 h-auto object-contain"
                />
              </div>

              <span className="inline-block py-1 px-3 rounded-full bg-brand-blue/10 dark:bg-blue-dark/10 text-brand-blue dark:text-blue-dark text-xs font-bold tracking-wider uppercase mb-4">
                Our Purpose
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-navy dark:text-white mb-4 leading-tight">
                A Vision of Hope and Impact
              </h2>
              <p className="text-text-secondary dark:text-text-dark-secondary text-base leading-relaxed mb-8">
                Our vision is to create a world where no one sleeps hungry, every child gets an education, and families have a safe shelter. Through compassion, transparency, and sustainable aid, Ofoq Charity Foundation strives to uplift lives.
              </p>
            </motion.div>
          </div>

          {/* Right Side - Cards Grid */}
          <div className="w-full lg:w-[75%]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-surface-light dark:bg-surface-dark p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-border-light dark:border-border-dark group flex flex-col min-h-[280px]"
                >
                  <div className="w-12 h-12 bg-brand-blue/5 dark:bg-blue-dark/10 rounded-xl flex items-center justify-center text-brand-blue dark:text-blue-dark mb-5 group-hover:bg-brand-blue group-hover:text-white dark:group-hover:bg-blue-dark dark:group-hover:text-white transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-brand-navy dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-text-secondary dark:text-text-dark-secondary text-sm leading-relaxed flex-grow">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
              
              {/* Call to Action Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: features.length * 0.1, duration: 0.5 }}
                className="bg-brand-blue dark:bg-blue-dark p-8 rounded-2xl shadow-md flex flex-col justify-center items-center text-center text-white h-full min-h-[280px]"
              >
                <Heart className="w-10 h-10 text-brand-gold mb-3 fill-current" />
                <h3 className="font-serif text-lg font-bold mb-2">
                  Join Our Mission
                </h3>
                <p className="text-white/80 mb-4 text-sm">
                  Your contribution can change a life today.
                </p>
                <a href="#donate" className="text-brand-gold font-semibold hover:text-white transition-colors flex items-center gap-2 text-sm">
                  Donate Now <ArrowRight size={16} />
                </a>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
