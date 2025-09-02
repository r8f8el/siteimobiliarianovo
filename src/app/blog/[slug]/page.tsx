import { notFound } from "next/navigation";

const posts: Record<string, { title: string; content: string }> = {
  "como-fotografar-imoveis": {
    title: "Como fotografar imóveis que convertem",
    content: "Fotografe com luz natural, use ângulos abertos e destaque diferenciais. Evite contraluz e ambientes desorganizados.",
  },
  "roteiro-de-video": {
    title: "Roteiro de vídeo para tours rápidos",
    content: "Apresente fachada, sala, cozinha, suítes e área externa em até 60s. Use cortes dinâmicos.",
  },
  "seo-para-imoveis": {
    title: "SEO para imóveis",
    content: "Crie títulos claros, meta descrições atraentes e URLs limpas. Publique constantemente.",
  },
};

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = posts[params.slug];
  if (!post) return notFound();
  return (
    <div className="min-h-dvh px-6 md:px-8 py-16 max-w-3xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{post.title}</h1>
      <article className="prose prose-invert max-w-none mt-6">
        <p>{post.content}</p>
      </article>
    </div>
  );
}

