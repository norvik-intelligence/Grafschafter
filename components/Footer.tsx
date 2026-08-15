import Link from "next/link"; import { Brand } from "./Topbar";
export default function Footer(){return <footer><Brand /><p>© {new Date().getFullYear()} Grafschafter Alltagsservice · Moers</p><div><Link href="/impressum">Impressum</Link><Link href="/datenschutz">Datenschutz</Link><a href="/#kontakt">Kontakt</a></div></footer>;}
