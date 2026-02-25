export default function Marquee() {
  const text = "Ofoq Charity aims to Nourish, Educate, Shelter";
  const subtext = "A Mission to End Poverty";
  
  return (
    <section className="py-4 bg-brand-gold text-brand-navy overflow-hidden relative border-y border-brand-navy/10">
      <div className="flex whitespace-nowrap">
        <div className="flex animate-marquee whitespace-nowrap font-serif text-lg md:text-xl font-medium uppercase tracking-[0.2em] items-center">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="flex items-center">
              <span className="mx-12">{text}</span>
              <span className="text-brand-navy/80 mx-4">•</span>
              <span className="mx-12">{subtext}</span>
              <span className="text-brand-navy/80 mx-4">•</span>
            </span>
          ))}
        </div>
        <div className="flex animate-marquee whitespace-nowrap font-serif text-lg md:text-xl font-medium uppercase tracking-[0.2em] items-center" aria-hidden="true">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="flex items-center">
              <span className="mx-12">{text}</span>
              <span className="text-brand-navy/80 mx-4">•</span>
              <span className="mx-12">{subtext}</span>
              <span className="text-brand-navy/80 mx-4">•</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
