import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const segments = [
  { text: "Be the Light of", className: "" },
  { text: "Hope", className: "text-brand-gold italic", newLine: true }
];

export default function Hero() {
  const [textState, setTextState] = useState(["", ""]);
  const [segIndex, setSegIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = segments[segIndex].text;
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      if (charIndex < currentText.length) {
        timeout = setTimeout(() => {
          setTextState(prev => {
            const newState = [...prev];
            newState[segIndex] = currentText.substring(0, charIndex + 1);
            return newState;
          });
          setCharIndex(prev => prev + 1);
        }, 100);
      } else {
        if (segIndex < segments.length - 1) {
          timeout = setTimeout(() => {
            setSegIndex(prev => prev + 1);
            setCharIndex(0);
          }, 100);
        } else {
          timeout = setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setTextState(prev => {
            const newState = [...prev];
            newState[segIndex] = currentText.substring(0, charIndex - 1);
            return newState;
          });
          setCharIndex(prev => prev - 1);
        }, 50);
      } else {
        if (segIndex > 0) {
           timeout = setTimeout(() => {
             setSegIndex(prev => prev - 1);
             setCharIndex(segments[segIndex - 1].text.length);
           }, 50);
        } else {
           timeout = setTimeout(() => setIsDeleting(false), 1000);
        }
      }
    }
    
    return () => clearTimeout(timeout);
  }, [charIndex, segIndex, isDeleting]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-bg-light dark:bg-bg-dark transition-colors duration-300 pt-20 lg:pt-0">
      <div className="max-w-7xl mx-auto px-6 w-full py-12 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1 relative z-10 text-center lg:text-left"
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-brand-blue/10 dark:bg-white/10 border border-brand-blue/20 dark:border-white/20 text-brand-blue dark:text-white text-xs font-semibold tracking-widest uppercase mb-6 backdrop-blur-md">
              Serving Humanity Since 2012
            </span>
            
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 tracking-tight text-brand-navy dark:text-white min-h-[2.4em]">
              {textState.map((text, i) => {
                const shouldRenderNewLine = segments[i].newLine && (text.length > 0 || (i === segIndex && !isDeleting));
                return (
                  <span key={i} className={segments[i].className}>
                    {shouldRenderNewLine && <br />}
                    {text}
                  </span>
                );
              })}
              <span className="animate-pulse text-brand-blue dark:text-white inline-block ml-1">|</span>
            </h1>
            
            <p className="text-lg text-text-secondary dark:text-text-dark-secondary max-w-xl mx-auto lg:mx-0 mb-8 font-light leading-relaxed">
              Ofoq Charity supports people through education, healthcare, agriculture, and research. 
              Your kindness can change lives and build a sustainable future.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="/#donate"
                className="w-full sm:w-auto px-8 py-4 bg-brand-blue text-white rounded-full font-semibold hover:bg-brand-navy dark:bg-blue-dark dark:hover:bg-brand-blue transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg hover:shadow-xl"
              >
                Donate Now
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-transparent border border-brand-navy/20 dark:border-white/20 text-brand-navy dark:text-white rounded-full font-semibold hover:bg-brand-navy/5 dark:hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
              >
                Get In Touch
              </Link>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="order-1 lg:order-2 relative py-8"
          >
            {/* Main Image Container - Hero.png */}
            <div className="relative z-10 ml-auto w-[85%] aspect-[3/4] md:aspect-[4/5] lg:aspect-[3/4] rounded-tl-[4rem] rounded-br-[4rem] rounded-tr-2xl rounded-bl-2xl overflow-hidden shadow-2xl">
              <img
                src="/static/images/Hero.png"
                alt="Hopeful child"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Secondary Image - Hero2.png - Overlapping */}
            <div className="absolute bottom-0 left-0 z-20 w-[55%] aspect-square rounded-tr-[3rem] rounded-bl-[3rem] rounded-tl-2xl rounded-br-2xl overflow-hidden shadow-2xl border-[6px] border-bg-light dark:border-bg-dark">
               <img 
                  src="/static/images/Hero2.png" 
                  alt="Charity work" 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
            </div>

            {/* Decorative Outline */}
            <div className="absolute top-4 right-[-10px] w-[85%] h-full border-2 border-brand-gold/30 rounded-tl-[4rem] rounded-br-[4rem] rounded-tr-2xl rounded-bl-2xl -z-10" />

            {/* Decorative Blobs */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-gold/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-blue/20 rounded-full blur-3xl -z-10" />
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-brand-navy/30 dark:text-white/30"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-navy/30 dark:from-white/30 to-transparent" />
      </motion.div>
    </section>
  );
}
