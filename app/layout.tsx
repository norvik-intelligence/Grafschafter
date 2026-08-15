import type { Metadata } from "next";
import type React from "react";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Topbar from "@/components/Topbar"; import Footer from "@/components/Footer"; import { site } from "@/lib/site";
const dmSans=DM_Sans({subsets:["latin"],weight:["400","500","600","700"],variable:"--font-dm-sans"});
const playfair=Playfair_Display({subsets:["latin"],weight:["500","600"],variable:"--font-playfair"});
export const metadata:Metadata={metadataBase:new URL(site.url),title:{default:`${site.name} | Moers`,template:`%s | ${site.name}`},description:site.description,alternates:{canonical:"/"},openGraph:{type:"website",locale:"de_DE",siteName:site.name,title:`${site.name} | Moers`,description:site.description},robots:{index:true,follow:true}};
export default function RootLayout({children}:{children:React.ReactNode}){const jsonLd={"@context":"https://schema.org","@type":"LocalBusiness",name:site.name,description:site.description,telephone:site.phone,email:site.email,address:{"@type":"PostalAddress",streetAddress:site.streetAddress,postalCode:site.postalCode,addressLocality:site.locality,addressCountry:"DE"},areaServed:site.areaServed,openingHours:site.openingHours,priceRange:site.priceRange};return <html lang="de" className={`${dmSans.variable} ${playfair.variable}`}><body><Topbar />{children}<Footer /><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}} /></body></html>;}
