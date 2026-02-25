import { motion } from 'motion/react';
import { Copy, Check } from 'lucide-react';
import { useState } from 'react';

const BankAccount = ({ bankName, accountName, accountNo, swiftCode }: { bankName: string, accountName: string, accountNo: string, swiftCode: string }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(accountNo);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-6 border border-border-light dark:border-border-dark shadow-sm relative overflow-hidden group hover:border-brand-blue/30 dark:hover:border-blue-dark/30 transition-colors">
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity text-brand-navy dark:text-white">
        <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <line x1="2" y1="10" x2="22" y2="10" />
        </svg>
      </div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-4">
          <img src="/Azizibanklogo.jpg" alt="Azizi Bank Logo" className="w-12 h-12 object-contain rounded-lg bg-white p-1" />
          <div>
            <h4 className="text-sm font-semibold text-text-secondary dark:text-text-dark-secondary uppercase tracking-wider mb-0.5">Bank Transfer</h4>
            <h3 className="font-serif text-xl font-bold text-brand-navy dark:text-white">{bankName}</h3>
          </div>
        </div>
        
        <div className="space-y-3">
          <div>
            <p className="text-xs text-text-secondary dark:text-text-dark-secondary uppercase tracking-wide">Account Name</p>
            <p className="font-medium text-brand-navy dark:text-white">{accountName}</p>
          </div>
          
          <div>
            <p className="text-xs text-text-secondary dark:text-text-dark-secondary uppercase tracking-wide">Swift Code</p>
            <p className="font-mono text-text-secondary dark:text-text-dark-secondary">{swiftCode}</p>
          </div>

          <div className="pt-2">
            <p className="text-xs text-text-secondary dark:text-text-dark-secondary uppercase tracking-wide mb-1">Account Number</p>
            <div className="flex items-center gap-2">
              <code className="bg-bg-light dark:bg-bg-dark px-3 py-1.5 rounded text-lg font-mono text-brand-blue dark:text-blue-dark font-semibold tracking-wide">
                {accountNo}
              </code>
              <button 
                onClick={copyToClipboard}
                className="p-2 hover:bg-bg-light dark:hover:bg-bg-dark rounded-full transition-colors text-text-secondary dark:text-text-dark-secondary hover:text-brand-blue dark:hover:text-blue-dark"
                title="Copy Account Number"
              >
                {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Donate() {
  return (
    <section id="donate" className="py-24 bg-bg-light dark:bg-bg-dark relative overflow-hidden transition-colors duration-300">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div>
            <span className="text-brand-gold font-semibold tracking-wider uppercase text-sm mb-2 block">
              Make a Difference
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-navy dark:text-white mb-6 leading-tight">
              Your Kindness Can <br />
              <span className="italic text-text-secondary dark:text-text-dark-secondary">Change Lives</span>
            </h2>
            <p className="text-text-secondary dark:text-text-dark-secondary text-lg mb-8 leading-relaxed">
              At Ofoq Charity, we ensure your donations reach the most deserving—providing food, shelter, and education to those in need. Every contribution brings hope, every act of generosity builds a brighter future.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 shrink-0 mt-1">
                  <Check size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-navy dark:text-white">100% Transparency</h4>
                  <p className="text-text-secondary dark:text-text-dark-secondary text-sm">Your donation reaches those who truly need it.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-brand-blue dark:text-blue-dark shrink-0 mt-1">
                  <Check size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-navy dark:text-white">Immediate Impact</h4>
                  <p className="text-text-secondary dark:text-text-dark-secondary text-sm">Resources are deployed quickly to critical areas.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Donation Cards */}
          <div className="space-y-6">
            <BankAccount 
              bankName="Aziz Bank"
              accountName="Ofoq Charity Foundation"
              accountNo="000101214198633"
              swiftCode="AZBAAFKAXXX"
            />
            <BankAccount 
              bankName="Aziz Bank"
              accountName="Ofoq Charity Foundation"
              accountNo="000101114198578"
              swiftCode="AZBAAFKAXXX"
            />
            
            <div className="bg-brand-blue dark:bg-blue-dark text-white p-6 rounded-2xl text-center shadow-lg">
              <p className="text-sm opacity-80 mb-2">Prefer to contact us directly?</p>
              <a href="mailto:gm@ofoq.charity" className="font-semibold hover:text-brand-gold transition-colors">
                gm@ofoq.charity
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
