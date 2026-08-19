import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-media" aria-hidden="true">
        <Image src="/assets/grafschafter-hero.png" alt="" fill priority sizes="100vw" />
      </div>
      <div className="hero-copy">
        <p className="eyebrow"><span /> Persönlich für Moers &amp; den Kreis Wesel</p>
        <h1 id="hero-title">Unterstützung mit <i>Herz, Erfahrung</i> und Qualifikation.</h1>
        <p className="lead">Zertifizierte Unterstützung im Alltag für Senioren, Familien sowie Kinder und Jugendliche ab Pflegegrad&nbsp;1. Persönlich, zuverlässig und direkt bei Ihnen zu Hause.</p>
        <div className="hero-actions">
          <a className="button" href="#kontakt">Kostenloses Erstgespräch vereinbaren <span>↗</span></a>
          <a className="text-link" href="#leistungen">Leistungen ansehen <span>↓</span></a>
        </div>
      </div>
    </section>
  );
}
