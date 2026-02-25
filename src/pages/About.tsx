import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Heart, BookOpen, Activity, Users, Building, Microscope, Target, Eye } from 'lucide-react';

const focusSentences = [
  "Aid For Needy Families",
  "Public Facilities & Social Projects",
  "Academic & Education",
  "Medical & Health",
  "Scientific Research"
];

export default function About() {
  const [displayText, setDisplayText] = useState("");
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentSentence = focusSentences[sentenceIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      if (charIndex < currentSentence.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentSentence.substring(0, charIndex + 1));
          setCharIndex(prev => prev + 1);
        }, 100);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentSentence.substring(0, charIndex - 1));
          setCharIndex(prev => prev - 1);
        }, 50);
      } else {
        setIsDeleting(false);
        setSentenceIndex((prev) => (prev + 1) % focusSentences.length);
        setCharIndex(0);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, sentenceIndex, isDeleting]);

  return (
    <div className="pt-32 pb-20 md:pt-48 md:pb-32 bg-bg-light dark:bg-bg-dark min-h-screen transition-colors duration-300 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30 dark:opacity-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-brand-gold/20 blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-brand-blue/20 blur-[100px]" />
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-20 md:mb-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Logo Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-brand-gold/20 rounded-full blur-3xl group-hover:bg-brand-gold/30 transition-all duration-700"></div>
              <img 
                src="/logo.png" 
                alt="Ofoq Charity Logo" 
                className="relative z-10 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 object-contain rounded-full bg-white p-4 shadow-2xl transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

          {/* Typing Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-navy dark:text-white mb-4 md:mb-6 leading-tight">
              Ofoq Charity Afghanistan <br />
              <span className="text-brand-blue dark:text-blue-dark">Focuses On</span>
            </h2>
            <div className="min-h-[60px] md:min-h-[80px] flex items-center justify-center lg:justify-start">
              <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-gold italic">
                {displayText}
                <span className="animate-pulse text-brand-navy dark:text-white not-italic ml-2">|</span>
              </h3>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 mb-20 md:mb-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-brand-gold/10 text-brand-gold text-xs font-bold tracking-wider uppercase mb-6 md:mb-8">
            Who We Are
          </span>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif leading-tight text-brand-navy dark:text-white mb-8 md:mb-10">
            The <span className="font-bold text-brand-blue dark:text-blue-400">Ofoq Charity Foundation</span> is an independent, non-political, and non-profit charitable organization registered in Afghanistan.
          </h3>
          
          <div className="max-w-3xl mx-auto space-y-6 md:space-y-8 text-base sm:text-lg md:text-xl text-text-secondary dark:text-text-dark-secondary font-light leading-relaxed">
            <p>
              Ofoq Charity supports people, education, healthcare, agriculture, and research. At Ofoq Charity, we ensure your donations reach the most deserving—providing food, shelter, and education to those in need.
            </p>
            <p className="font-serif text-xl sm:text-2xl md:text-3xl text-brand-gold italic">
              Every contribution brings hope, every act of generosity builds a brighter future.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 md:py-24 bg-brand-blue dark:bg-blue-dark relative overflow-hidden mb-20 md:mb-32">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-brand-gold rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/20">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="px-6 md:px-16 py-8 flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/10 flex items-center justify-center text-brand-gold mb-8 backdrop-blur-sm border border-white/10">
                <Target className="w-10 h-10 md:w-12 md:h-12" />
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-white/80 text-lg leading-relaxed font-light max-w-md">
                To empower vulnerable communities in Afghanistan by providing access to essential services, 
                fostering sustainable development, and nurturing hope through education, healthcare, 
                and scientific research. We strive to be the bridge between compassion and action.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="px-6 md:px-16 py-8 flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/10 flex items-center justify-center text-brand-gold mb-8 backdrop-blur-sm border border-white/10">
                <Eye className="w-10 h-10 md:w-12 md:h-12" />
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">Our Vision</h2>
              <p className="text-white/80 text-lg leading-relaxed font-light max-w-md">
                A prosperous and self-reliant Afghanistan where every individual has the opportunity 
                to thrive, every child has access to quality education, and healthcare is a right, 
                not a privilege. We envision a society built on the foundations of knowledge and humanity.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Focus Areas Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-20 md:mb-32 relative z-10">
        {/* Background Animation Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-brand-gold/5 rounded-full blur-3xl"
            />
            <motion.div
                animate={{
                    scale: [1, 1.5, 1],
                    x: [0, 100, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute bottom-0 left-0 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-brand-blue/5 rounded-full blur-3xl"
            />
        </div>

        <div className="text-center mb-16 md:mb-24">
          <span className="inline-block py-1 px-3 rounded-full bg-brand-blue/10 dark:bg-white/10 text-brand-blue dark:text-white text-xs font-bold tracking-wider uppercase mb-4 md:mb-6">
            What We Do
          </span>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-brand-navy dark:text-white mb-6">
            Our Core <span className="text-brand-gold italic">Focus Areas</span>
          </h2>
          <p className="text-text-secondary dark:text-text-dark-secondary text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed">
            We take a holistic approach to charity, addressing the most critical needs of our society through dedicated programs and sustainable initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 lg:gap-y-16">
          {[
            { icon: Users, title: "Aid For Needy Families", desc: "Providing food, shelter, and financial support to those struggling to make ends meet.", color: "gold" },
            { icon: Building, title: "Public Facilities", desc: "Building and renovating essential infrastructure like schools, clinics, and community centers.", color: "blue" },
            { icon: BookOpen, title: "Academic & Education", desc: "Supporting students with scholarships, supplies, and modern learning environments.", color: "gold" },
            { icon: Activity, title: "Medical & Health", desc: "Ensuring access to quality medical care, medicines, and health education for all.", color: "blue" },
            { icon: Microscope, title: "Scientific Research", desc: "Investing in research that addresses local challenges and promotes innovation.", color: "gold" },
            { icon: Heart, title: "Social Projects", desc: "Initiatives aimed at social cohesion, women's empowerment, and youth development.", color: "blue" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative pl-6 md:pl-0"
            >
              {/* Mobile Hover Line Effect */}
              <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-full transform scale-y-100 md:scale-y-0 transition-transform duration-500 origin-top ${
                  item.color === 'gold' ? 'bg-brand-gold/30 group-hover:bg-brand-gold' : 'bg-brand-blue/30 dark:bg-blue-400/30 group-hover:bg-brand-blue dark:group-hover:bg-blue-400'
              } md:hidden`} />
              
              <div className="flex flex-col md:items-center md:text-center">
                <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl mb-6 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg ${
                    item.color === 'gold' 
                        ? 'bg-brand-gold/10 text-brand-gold group-hover:bg-brand-gold group-hover:text-white' 
                        : 'bg-brand-blue/10 text-brand-blue dark:text-blue-dark group-hover:bg-brand-blue group-hover:text-white'
                }`}>
                    <item.icon className="w-8 h-8 md:w-10 md:h-10" />
                </div>
                
                <h3 className="font-serif text-2xl font-bold text-brand-navy dark:text-white mb-3 group-hover:text-brand-gold transition-colors duration-300">
                    {item.title}
                </h3>
                
                <p className="text-text-secondary dark:text-text-dark-secondary font-light leading-relaxed text-base md:text-lg">
                    {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Impact Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="bg-brand-navy dark:bg-brand-navy/50 rounded-[2.5rem] md:rounded-[4rem] p-8 sm:p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-[-20%] right-[-10%] w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full bg-brand-gold blur-[60px] md:blur-[80px]" />
            <div className="absolute bottom-[-20%] left-[-10%] w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full bg-brand-blue blur-[60px] md:blur-[80px]" />
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6 md:mb-8 relative z-10">
            Join Us in Our <span className="text-brand-gold italic">Journey</span>
          </h2>
          <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto mb-8 md:mb-12 font-light leading-relaxed relative z-10">
            Ofoq Charity Foundation has been serving the people of Afghanistan since 2012. 
            Together, we can build a future where no one is left behind.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 relative z-10">
            <a href="/#donate" className="px-8 py-4 md:px-10 md:py-5 bg-brand-gold text-brand-navy rounded-full font-bold text-base md:text-lg hover:bg-white transition-all duration-300 shadow-xl">
              Support Our Mission
            </a>
            <a href="/contact" className="px-8 py-4 md:px-10 md:py-5 bg-white/10 text-white border border-white/20 rounded-full font-bold text-base md:text-lg hover:bg-white/20 transition-all duration-300 backdrop-blur-md">
              Get Involved
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
