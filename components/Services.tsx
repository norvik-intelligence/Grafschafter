const services = [
  { n: "01", icon: "✦", title: "Alltagsbegleitung & Betreuung", copy: "Individuelle Betreuung, Spaziergänge, Gesellschaft, Gedächtnistraining und Struktur für den Tag." },
  { n: "02", icon: "⌂", title: "Hauswirtschaftliche Hilfen", copy: "Unterstützung im Haushalt, Reinigung, Einkäufe und Begleitung bei Erledigungen." },
  { n: "03", icon: "☼", title: "Entlastung für Angehörige", copy: "Zuverlässige stundenweise Betreuung und Entlastungsangebote, damit Sie durchatmen können." },
  { n: "04", icon: "♡", title: "Für Familien, Kinder & Jugendliche", copy: "Alltagshilfe und Betreuung im familiären Umfeld – zugewandt und altersgerecht." },
] as const;

export default function Services() {
  return (
    <section id="leistungen" className="services section-pad">
      <div className="section-heading">
        <p className="eyebrow"><span /> Unsere Leistungen</p>
        <h2>Unsere Leistungen <i>im Überblick.</i></h2>
        <p>Jeder Alltag ist anders. Deshalb richten wir unsere Unterstützung an Ihren Bedürfnissen und Ihrer gewohnten Umgebung aus.</p>
      </div>
      <div className="service-grid">
        {services.map(({ n, icon, title, copy }) => (
          <article className="service-item" key={n}>
            <div className="service-icon" aria-hidden="true">{icon}</div>
            <div className="service-content">
              <span className="card-number">{n}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
              <a href="#kontakt">Mehr erfahren <span>→</span></a>
            </div>
          </article>
        ))}
      </div>
      <p className="fineprint">Unsere Angebote orientieren sich an der Anerkennungs- und Förderungsverordnung NRW (AnFöVO NRW). Die konkrete Leistungserbringung und Abrechnung stimmen wir vorab transparent mit Ihnen ab.</p>
    </section>
  );
}
