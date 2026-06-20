export default function SectionTitle({ icon, title, subtitle, className = '' }) {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <span className="text-4xl mb-4 block">{icon}</span>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">{title}</h2>
      {subtitle && <p className="text-white/50 text-lg max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
}
