import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-dvh grid place-items-center px-6 md:px-8 py-24 text-center">
      <div>
        <div className="text-sm text-white/60">Erro 404</div>
        <h1 className="mt-2 text-3xl md:text-4xl font-bold">Página não encontrada</h1>
        <p className="mt-2 text-white/70">A página que você procura pode ter sido movida ou não existe.</p>
        <Link href="/" className="inline-block mt-6 px-4 py-2 rounded-md bg-white text-black hover:bg-white/90">Voltar para o início</Link>
      </div>
    </div>
  );
}
