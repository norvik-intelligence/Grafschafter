import Image from "next/image";

export default function Hero() {
  return <section className="hero" aria-labelledby="hero-title">
    <div className="hero-media" aria-hidden="true"><Image src="/assets/grafschafter-hero.jpg" alt="" fill priority sizes="100vw" /></div>
    <div className="hero-copy"><p className="eyebrow"><span /> Persönlich für Moers &amp; den Kreis Wesel</p><h1 id="hero-title">Ihr verlässlicher Partner für <i>Alltagsbegleitung</i> und Betreuung.</h1><p className="lead">Zertifizierte Unterstützung im Alltag für Senioren, Familien sowie Kinder und Jugendliche ab Pflegegrad&nbsp;1. Wir bringen Entlastung direkt zu Ihnen nach Hause.</p><div className="hero-actions"><a className="button" href="#kontakt">Kostenloses Erstgespräch vereinbaren <span>↗</span></a><a className="text-link" href="#leistungen">Unsere Leistungen <span>↓</span></a></div><div className="trust-row"><div className="trust-avatars"><b>SM</b><b>BK</b></div><p><strong>Mit Zeit, Würde und Verlässlichkeit.</strong><br />Anerkannte Unterstützung im Alltag in NRW.</p></div></div>
  </section>;
}
