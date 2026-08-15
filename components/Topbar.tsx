"use client";

import { useState } from "react";
import Link from "next/link";

export function Brand() {
  return <Link className="brand" href="/#start" aria-label="Grafschafter Alltagsservice Startseite"><span className="brand-mark">g</span><span>Grafschafter<br /><em>Alltagsservice</em></span></Link>;
}

export default function Topbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return <header className={`topbar${open ? " open" : ""}`}>
    <Brand />
    <button className="menu-toggle" type="button" aria-label={open ? "Menü schließen" : "Menü öffnen"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? "Schließen" : "Menü"}</button>
    <nav aria-label="Hauptnavigation">
      <a href="/#leistungen" onClick={close}>Leistungen</a><a href="/#ueber-uns" onClick={close}>Über uns</a><a href="/#qualitaet" onClick={close}>Qualitätsmanagement</a><a href="/#kosten" onClick={close}>Kosten &amp; Abrechnung</a><a href="/#kontakt" onClick={close}>Kontakt</a>
    </nav>
    <a className="button button-small" href="/#kontakt">Erstgespräch anfragen <span>↗</span></a>
  </header>;
}
