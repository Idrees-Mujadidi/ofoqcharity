import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Clean Water Initiative",
    description: "Providing sustainable access to clean and safe drinking water for remote villages, reducing waterborne diseases and improving overall health.",
    image: "/static/images/Project1.png",
  },
  {
    id: 2,
    title: "Education for All",
    description: "Building schools and supplying essential learning materials to underprivileged children, empowering the next generation through knowledge.",
    image: "/static/images/Project2.png",
  },
  {
    id: 3,
    title: "Healthcare Outreach",
    description: "Mobile medical camps delivering essential healthcare services, checkups, and medicines to rural communities with limited access to hospitals.",
    image: "/static/images/Project3.png",
  },
];

export default function RecentProjects() {
  return (
    <section className="py-24 bg-brand-blue dark:bg-blue-dark text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-brand-gold text-xs font-bold tracking-wider uppercase mb-4">
            Our Impact
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Recent Projects
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            See how your contributions are making a tangible difference in communities around the world.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors duration-300 flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
              </div>
              
              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-serif text-xl font-bold mb-3 text-white group-hover:text-brand-gold transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex justify-center"
        >
          <a 
            href="/projects" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-gold text-brand-navy rounded-full font-semibold hover:bg-white hover:text-brand-blue transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Explore All Projects
            <ArrowRight size={18} />
          </a>
        </motion.div>

      </div>

      {/* Decorative background elements (consistent with Stats section) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-1/4 -right-24 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-24 w-64 h-64 bg-brand-gold rounded-full blur-3xl" />
      </div>
    </section>
  );
}
