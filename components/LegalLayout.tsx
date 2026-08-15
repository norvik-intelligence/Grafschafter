import { ReactNode } from "react";
export default function LegalLayout({title,children}:{title:string;children:ReactNode}){return <main className="legal-page section-pad"><p className="eyebrow"><span /> Rechtliches</p><h1>{title}</h1><div className="legal-copy">{children}</div></main>;}
