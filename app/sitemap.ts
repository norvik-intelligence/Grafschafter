import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
export default function sitemap():MetadataRoute.Sitemap{
  const pages=[
    ["",1,"weekly"],
    ["/alltagshilfe-moers",0.9,"monthly"],
    ["/haushaltshilfe-moers",0.9,"monthly"],
    ["/entlastungsbetrag-moers",0.85,"monthly"],
    ["/impressum",0.2,"yearly"],
    ["/datenschutz",0.2,"yearly"],
  ] as const;
  return pages.map(([path,priority,changeFrequency])=>({url:`${site.url}${path}`,lastModified:new Date(),changeFrequency,priority}));
}
