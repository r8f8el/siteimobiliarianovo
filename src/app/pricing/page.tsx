"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PricingPage() {
  const plans = [
    { name: "Básico", price: 49, perks: ["Subdomínio incluso", "10 imóveis ativos", "IA (limite)"] },
    { name: "Pro", price: 99, perks: ["Tudo do Básico", "50 imóveis", "IA priorizada", "Blog"] },
    { name: "Business", price: 199, perks: ["Ilimitado", "Equipe", "IA ilimitada", "SLA"] },
  ];
  return (
    <div className="min-h-dvh px-6 md:px-8 py-16 max-w-7xl mx-auto">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Planos</h1>
        <p className="mt-3 text-white/70">Escolha o plano ideal para seu momento. Cancele quando quiser.</p>
      </div>
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {plans.map((p, i) => (
          <motion.div key={p.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className={`rounded-2xl border p-6 bg-white/5 border-white/10 ${i === 1 ? "ring-2 ring-white/40" : ""}`}>
            <div className="text-sm text-white/80">{p.name}</div>
            <div className="mt-2 text-3xl font-bold">R$ {p.price}<span className="text-base font-normal text-white/60">/mês</span></div>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              {p.perks.map((perk) => (<li key={perk}>{perk}</li>))}
            </ul>
            <button className="mt-6 w-full px-4 py-2 rounded-md bg-white text-black hover:bg-white/90">Assinar</button>
          </motion.div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link href="/" className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-white/15 hover:bg-white/5">Voltar</Link>
      </div>
    </div>
  );
}
