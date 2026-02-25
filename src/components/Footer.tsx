import { Mail, MapPin, Phone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Projects', href: '/#projects' },
    { name: 'Volunteer', href: '/#volunteer' },
    { name: 'Donate', href: '/#donate' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-brand-navy dark:bg-black text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3 group">
              <img 
                src="/logo.png" 
                alt="Ofoq Charity Logo" 
                className="h-16 w-16 object-contain rounded-full bg-white"
              />
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                Ofoq Charity
              </span>
            </Link>
            <p className="text-white/60 leading-relaxed">
              Building a sustainable future through education, healthcare, and compassion. Be the light of hope for those in need.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold hover:text-brand-navy transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith('/#') ? (
                    <a href={link.href} className="text-white/60 hover:text-brand-gold transition-colors">
                      {link.name}
                    </a>
                  ) : (
                    <Link to={link.href} className="text-white/60 hover:text-brand-gold transition-colors">
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-6 text-white">Our Focus</h4>
            <ul className="space-y-4">
              {['Medical & Health', 'Education', 'Food & Shelter', 'Public Facilities', 'Scientific Research'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/60 hover:text-brand-gold transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/60">
                <MapPin className="w-5 h-5 text-brand-gold shrink-0 mt-1" />
                <span>Shahid Square, Airport Avenue, Kabul City, Afghanistan</span>
              </li>
              <li className="flex items-center gap-3 text-white/60">
                <Phone className="w-5 h-5 text-brand-gold shrink-0" />
                <span className="text-white/60">+123 456 789</span>
              </li>
              <li className="flex items-center gap-3 text-white/60">
                <Mail className="w-5 h-5 text-brand-gold shrink-0" />
                <a href="mailto:gm@ofoq.charity" className="hover:text-white transition-colors">gm@ofoq.charity</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <p>© 2012 - 2026 Ofoq Charity Afghanistan. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
