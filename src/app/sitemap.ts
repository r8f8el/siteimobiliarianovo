import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://seusite.com.br";
  const routes = ["/", "/templates", "/pricing", "/blog", "/sobre", "/contato"].map((p) => ({
    url: base + p,
    lastModified: new Date(),
  }));
  return routes;
}

