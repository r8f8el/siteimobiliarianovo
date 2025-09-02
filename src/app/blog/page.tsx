import Link from "next/link";

const posts = [
  { slug: "como-fotografar-imoveis", title: "Como fotografar imóveis que convertem", excerpt: "Dicas práticas para valorizar seus anúncios." },
  { slug: "roteiro-de-video", title: "Roteiro de vídeo para tours rápidos", excerpt: "Passo a passo para vídeos curtos eficientes." },
  { slug: "seo-para-imoveis", title: "SEO para imóveis", excerpt: "Como aparecer no Google com constância." },
];

export default function BlogPage() {
  return (
    <div className="min-h-dvh px-6 md:px-8 py-16 max-w-5xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Blog</h1>
      <div className="mt-8 grid gap-6">
        {posts.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="block rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
            <div className="text-lg font-medium">{p.title}</div>
            <div className="text-white/70 text-sm mt-1">{p.excerpt}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

