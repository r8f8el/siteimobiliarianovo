"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function TemplatesPage() {
  const templates = [
    { id: "modern", name: "Moderno", desc: "Visual clean com foco em imagens." },
    { id: "classic", name: "Clássico", desc: "Layout tradicional com tipografia elegante." },
    { id: "bold", name: "Negrito", desc: "Cores vibrantes e cards destacados." },
  ];
  return (
    <div className="min-h-dvh px-6 md:px-8 py-16 max-w-7xl mx-auto">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Templates</h1>
        <p className="mt-3 text-white/70">Escolha um visual para o seu site. Todos são personalizáveis.</p>
      </div>
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {templates.map((t, i) => (
          <motion.div key={t.id} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
            <div className="aspect-[4/3] bg-gradient-to-br from-white/10 to-transparent" />
            <div className="p-4 flex items-start justify-between gap-3">
              <div>
                <div className="font-medium">{t.name}</div>
                <div className="text-sm text-white/70">{t.desc}</div>
              </div>
              <button className="text-xs px-3 py-1.5 rounded-md border border-white/15 hover:bg-white/5">Usar</button>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link href="/" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white text-black hover:bg-white/90">Voltar</Link>
      </div>
    </div>
  );
}
