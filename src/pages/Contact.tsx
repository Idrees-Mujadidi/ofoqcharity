import { motion } from 'motion/react';
import { MapPin, Phone, Send, ArrowRight } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon
// @ts-ignore
import icon from 'leaflet/dist/images/marker-icon.png';
// @ts-ignore
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

export default function Contact() {
  const position: [number, number] = [34.564553, 69.163785];

  return (
    <div className="pt-32 pb-20 md:pt-48 md:pb-32 bg-bg-light dark:bg-bg-dark min-h-screen transition-colors duration-300 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30 dark:opacity-10">
        <div className="absolute top-[-10%] right-[-5%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-brand-gold/20 blur-[60px] md:blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full bg-brand-blue/20 blur-[60px] md:blur-[100px]" />
      </div>

      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-6 mb-20 md:mb-40 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-brand-blue/10 dark:bg-white/10 text-brand-blue dark:text-white text-xs font-bold tracking-wider uppercase mb-6">
              Contact Us
            </span>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-brand-navy dark:text-white mb-6 md:mb-8 leading-tight">
              Get In <span className="text-brand-gold italic">Touch</span>
            </h1>
            <p className="text-text-secondary dark:text-text-dark-secondary text-lg md:text-xl max-w-lg leading-relaxed font-light">
              We'd love to hear from you! Whether you have questions, need support, or want to learn more about our services, our team is here to help.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          >
            {/* Address */}
            <div className="group p-6 md:p-8 rounded-[2rem] bg-white dark:bg-white/5 border border-brand-navy/5 dark:border-white/10 hover:border-brand-gold/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-brand-gold/10 flex items-center justify-center text-brand-gold mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-500">
                <MapPin size={28} className="md:w-8 md:h-8" />
              </div>
              <div>
                <h3 className="font-serif text-lg md:text-xl font-bold text-brand-navy dark:text-white mb-2 md:mb-3">Our Address</h3>
                <p className="text-text-secondary dark:text-text-dark-secondary leading-relaxed text-base md:text-lg">
                  Shahid Square, Airport Avenue<br />
                  Kabul City, Afghanistan
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="group p-6 md:p-8 rounded-[2rem] bg-white dark:bg-white/5 border border-brand-navy/5 dark:border-white/10 hover:border-brand-blue/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue dark:text-blue-dark mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-500">
                <Phone size={28} className="md:w-8 md:h-8" />
              </div>
              <div>
                <h3 className="font-serif text-lg md:text-xl font-bold text-brand-navy dark:text-white mb-2 md:mb-3">Contact Info</h3>
                <p className="text-text-secondary dark:text-text-dark-secondary leading-relaxed text-base md:text-lg">
                  +123 456 789<br />
                  <a href="mailto:help@ofoq.charity" className="hover:text-brand-blue transition-colors">help@ofoq.charity</a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full h-[400px] md:h-[600px] relative mb-24 md:mb-40 group overflow-hidden rounded-[2rem] md:rounded-[3rem] shadow-2xl mx-auto max-w-[95%] border border-white/20 dark:border-white/5">
        <MapContainer center={position} zoom={15} scrollWheelZoom={false} className="w-full h-full z-0">
          <TileLayer
            attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          />
          <Marker position={position}>
            <Popup>
              Ofoq Charity Foundation <br /> Kabul, Afghanistan
            </Popup>
          </Marker>
        </MapContainer>
        
        <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-[400]">
          <a 
            href="https://www.google.com/maps/search/?api=1&query=34.564553,69.163785"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:bg-brand-navy text-brand-navy dark:text-white px-6 py-3 md:px-10 md:py-5 rounded-full font-bold shadow-2xl flex items-center gap-3 md:gap-4 hover:scale-105 transition-transform duration-300 border border-brand-navy/10 dark:border-white/10 group/btn text-sm md:text-base"
          >
            <span>Get Directions</span>
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-brand-gold flex items-center justify-center text-brand-navy group-hover/btn:rotate-45 transition-transform duration-300">
              <ArrowRight size={16} className="md:w-5 md:h-5" />
            </div>
          </a>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="max-w-7xl mx-auto px-6 relative z-10 mb-20 md:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center"
        >
          {/* Image Side (Left) */}
          <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative z-10 w-full max-w-md md:max-w-lg">
               <div className="absolute inset-0 bg-brand-gold/20 rounded-full blur-3xl -z-10 transform scale-90 translate-y-4"></div>
               <img
                src="/static/images/contact.png"
                alt="Contact Us"
                className="w-full h-auto object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Form Side (Right) */}
          <div className="w-full order-1 lg:order-2">
            <div className="mb-8 md:mb-12">
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-brand-navy dark:text-white mb-4 md:mb-6">Send us a Message</h2>
              <p className="text-text-secondary dark:text-text-dark-secondary text-base md:text-lg font-light leading-relaxed">
                Have a question or want to get involved? Fill out the form below and we'll get back to you shortly.
              </p>
            </div>

            <form className="space-y-8 md:space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                <div className="group relative">
                  <input
                    type="text"
                    id="name"
                    placeholder=" "
                    className="peer w-full bg-transparent border-b border-brand-navy/20 dark:border-white/20 py-3 md:py-4 text-brand-navy dark:text-white text-base md:text-lg focus:outline-none focus:border-brand-gold dark:focus:border-brand-gold transition-all placeholder-transparent"
                  />
                  <label 
                    htmlFor="name"
                    className="absolute left-0 -top-3.5 text-xs md:text-sm text-brand-navy/50 dark:text-white/50 transition-all peer-placeholder-shown:text-base md:peer-placeholder-shown:text-lg peer-placeholder-shown:text-brand-navy/40 dark:peer-placeholder-shown:text-white/40 peer-placeholder-shown:top-3 md:peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-xs md:peer-focus:text-sm peer-focus:text-brand-gold dark:peer-focus:text-brand-gold"
                  >
                    Full Name
                  </label>
                </div>
                <div className="group relative">
                  <input
                    type="email"
                    id="email"
                    placeholder=" "
                    className="peer w-full bg-transparent border-b border-brand-navy/20 dark:border-white/20 py-3 md:py-4 text-brand-navy dark:text-white text-base md:text-lg focus:outline-none focus:border-brand-gold dark:focus:border-brand-gold transition-all placeholder-transparent"
                  />
                  <label 
                    htmlFor="email"
                    className="absolute left-0 -top-3.5 text-xs md:text-sm text-brand-navy/50 dark:text-white/50 transition-all peer-placeholder-shown:text-base md:peer-placeholder-shown:text-lg peer-placeholder-shown:text-brand-navy/40 dark:peer-placeholder-shown:text-white/40 peer-placeholder-shown:top-3 md:peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-xs md:peer-focus:text-sm peer-focus:text-brand-gold dark:peer-focus:text-brand-gold"
                  >
                    Email Address
                  </label>
                </div>
              </div>

              <div className="group relative">
                <input
                  type="text"
                  id="subject"
                  placeholder=" "
                  className="peer w-full bg-transparent border-b border-brand-navy/20 dark:border-white/20 py-3 md:py-4 text-brand-navy dark:text-white text-base md:text-lg focus:outline-none focus:border-brand-gold dark:focus:border-brand-gold transition-all placeholder-transparent"
                />
                <label 
                  htmlFor="subject"
                  className="absolute left-0 -top-3.5 text-xs md:text-sm text-brand-navy/50 dark:text-white/50 transition-all peer-placeholder-shown:text-base md:peer-placeholder-shown:text-lg peer-placeholder-shown:text-brand-navy/40 dark:peer-placeholder-shown:text-white/40 peer-placeholder-shown:top-3 md:peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-xs md:peer-focus:text-sm peer-focus:text-brand-gold dark:peer-focus:text-brand-gold"
                >
                  Subject
                </label>
              </div>

              <div className="group relative">
                <textarea
                  id="message"
                  rows={4}
                  placeholder=" "
                  className="peer w-full bg-transparent border-b border-brand-navy/20 dark:border-white/20 py-3 md:py-4 text-brand-navy dark:text-white text-base md:text-lg focus:outline-none focus:border-brand-gold dark:focus:border-brand-gold transition-all placeholder-transparent resize-none"
                ></textarea>
                <label 
                  htmlFor="message"
                  className="absolute left-0 -top-3.5 text-xs md:text-sm text-brand-navy/50 dark:text-white/50 transition-all peer-placeholder-shown:text-base md:peer-placeholder-shown:text-lg peer-placeholder-shown:text-brand-navy/40 dark:peer-placeholder-shown:text-white/40 peer-placeholder-shown:top-3 md:peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-xs md:peer-focus:text-sm peer-focus:text-brand-gold dark:peer-focus:text-brand-gold"
                >
                  Message
                </label>
              </div>

              <div className="pt-4 md:pt-6">
                <button
                  type="submit"
                  className="inline-flex items-center gap-3 px-8 py-4 md:px-12 md:py-5 bg-brand-navy dark:bg-white dark:text-brand-navy text-white rounded-full font-bold text-base md:text-lg shadow-xl hover:shadow-2xl hover:bg-brand-blue dark:hover:bg-brand-gold transition-all duration-300 transform hover:-translate-y-1 w-full md:w-auto justify-center"
                >
                  <span>Send Message</span>
                  <Send size={20} />
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
