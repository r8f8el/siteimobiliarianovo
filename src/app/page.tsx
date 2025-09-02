"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, Building2, Wand2, LineChart, Eye, Users, BarChart3 } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Features />
      <DashboardPreview />
      <TemplatesPreview />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-7xl px-6 md:px-8">{children}</div>;
}

function Navbar() {
  return (
    <div className="sticky top-0 z-50 backdrop-blur-md bg-background/60 border-b border-border">
      <Container>
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-blue-500 to-pink-500 text-white font-bold">S</span>
            <span className="font-semibold tracking-tight text-foreground">Seusite</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a className="hover:opacity-80 text-foreground/80" href="#features">Recursos</a>
            <Link className="hover:opacity-80 text-foreground/80" href="/templates">Templates</Link>
            <Link className="hover:opacity-80 text-foreground/80" href="/ads">Anúncios</Link>
            <Link className="hover:opacity-80 text-foreground/80" href="/pricing">Planos</Link>
            <Link className="hover:opacity-80 text-foreground/80" href="/blog">Blog</Link>
            <Link className="hover:opacity-80 text-foreground/80" href="/sobre">Sobre</Link>
            <Link className="hover:opacity-80 text-foreground/80" href="/contato">Contato</Link>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link href="/login" className="px-3 py-2 rounded-md text-sm border border-border hover:bg-accent text-foreground">Entrar</Link>
            <Link href="/cadastro" className="px-3 py-2 rounded-md text-sm bg-primary text-primary-foreground hover:bg-primary/90">Começar</Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

function Hero() {
  return (
    <Container>
      <div className="py-20 md:py-28 grid md:grid-cols-2 items-center gap-10">
        <motion.div variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs text-muted-foreground bg-muted">
            <Sparkles className="h-3.5 w-3.5" /> Geração por IA com visão
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight text-foreground">
            Sites modernos para corretores, com conteúdo gerado por IA
          </h1>
          <p className="text-muted-foreground text-base md:text-lg max-w-prose">
            Crie seu site em minutos, gerencie imóveis, leads e blog. A IA analisa suas fotos e dados para
            criar descrições e textos para redes sociais que convertem.
          </p>
          <div className="flex items-center gap-3">
            <Link href="/cadastro" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90">
              Começar agora <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/templates" className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-border hover:bg-accent text-foreground">
              Ver templates
            </Link>
          </div>
        </motion.div>
                <motion.div variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }} className="relative">
          <div className="aspect-[4/3] rounded-2xl border border-border bg-card overflow-hidden">
            <div className="absolute inset-0 opacity-30 bg-[radial-gradient(600px_400px_at_30%_10%,_rgba(59,130,246,0.35),_transparent_40%),radial-gradient(500px_500px_at_80%_20%,_rgba(236,72,153,0.35),_transparent_45%)]" />
            <div className="relative z-10 p-6 md:p-8 grid gap-3">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-400" />
                <span className="text-xs text-muted-foreground">app.nomedocorretor.seusite.com.br</span>
              </div>
              <div className="rounded-xl bg-card/80 border border-border p-4 grid gap-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-foreground"><Building2 className="h-4 w-4" /> Novo imóvel</div>
                  <button className="text-xs px-2 py-1 rounded-md bg-primary text-primary-foreground">Gerar com IA</button>
                </div>
                <div className="h-28 rounded-lg bg-muted relative overflow-hidden">
                  <Image 
                    src="/images/properties/apartment.svg" 
                    alt="Apartamento de exemplo"
                    fill
                    className="object-cover opacity-80"
                  />
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="h-14 rounded-md bg-muted relative overflow-hidden">
                    <Image 
                      src="/images/properties/house.svg" 
                      alt="Casa"
                      fill
                      className="object-cover opacity-60"
                    />
                  </div>
                  <div className="h-14 rounded-md bg-muted relative overflow-hidden">
        <Image
                      src="/images/properties/luxury.svg" 
                      alt="Mansão"
                      fill
                      className="object-cover opacity-60"
                    />
                  </div>
                  <div className="h-14 rounded-md bg-muted relative overflow-hidden">
            <Image
                      src="/images/properties/apartment.svg" 
                      alt="Apartamento"
                      fill
                      className="object-cover opacity-60"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Container>
  );
}

function Features() {
  const items = [
    { icon: <Wand2 className="h-5 w-5" />, title: "IA com visão", desc: "Análise de fotos e dados para descrever seus imóveis e criar posts." },
    { icon: <Building2 className="h-5 w-5" />, title: "Sites multi-tenant", desc: "Cada corretor com subdomínio próprio e templates profissionais." },
    { icon: <LineChart className="h-5 w-5" />, title: "Leads e métricas", desc: "Capture contatos, acompanhe estágios e visualize resultados." },
    { icon: <Eye className="h-5 w-5" />, title: "Preview em tempo real", desc: "Veja suas alterações instantaneamente no seu site." },
    { icon: <Users className="h-5 w-5" />, title: "CRM integrado", desc: "Gerencie leads, clientes e negociações em um só lugar." },
    { icon: <BarChart3 className="h-5 w-5" />, title: "Analytics detalhado", desc: "Acompanhe visitas, conversões e performance dos seus anúncios." },
  ];
  return (
    <Container>
      <div id="features" className="py-16 md:py-20">
        <motion.h2 variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-2xl md:text-4xl font-semibold tracking-tight text-foreground">
          Tudo que você precisa, em um só lugar
        </motion.h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-xl border border-border bg-card p-5 backdrop-blur-sm"
            >
              <div className="flex items-center gap-2 text-sm text-foreground">
                <div className="h-8 w-8 rounded-lg bg-muted flex items-center justify-center">
                  {item.icon}
                </div>
                <span className="font-medium">{item.title}</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Container>
  );
}

function DashboardPreview() {
  return (
    <Container>
      <div className="py-16 md:py-20">
        <motion.div variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-semibold tracking-tight mb-4 text-foreground">
            Dashboard completo para gerenciar seu negócio
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Controle total sobre seus imóveis, leads e site. Interface intuitiva e funcionalidades poderosas.
          </p>
        </motion.div>
        
        <motion.div variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }} className="relative">
          <div className="rounded-2xl border border-border bg-card overflow-hidden">
            <div className="relative">
          <Image
                src="/images/dashboard-preview.svg" 
                alt="Preview do Dashboard"
                width={600}
                height={400}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            <div className="p-6 md:p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="h-12 w-12 rounded-lg bg-blue-500/20 flex items-center justify-center mx-auto mb-3">
                    <Building2 className="h-6 w-6 text-blue-400" />
                  </div>
                  <h3 className="font-semibold mb-2 text-foreground">Gerenciamento de Imóveis</h3>
                  <p className="text-sm text-muted-foreground">Adicione, edite e organize seus imóveis com facilidade</p>
                </div>
                <div className="text-center">
                  <div className="h-12 w-12 rounded-lg bg-green-500/20 flex items-center justify-center mx-auto mb-3">
                    <Users className="h-6 w-6 text-green-400" />
                  </div>
                  <h3 className="font-semibold mb-2 text-foreground">CRM de Leads</h3>
                  <p className="text-sm text-muted-foreground">Capture e gerencie leads de forma organizada</p>
                </div>
                <div className="text-center">
                  <div className="h-12 w-12 rounded-lg bg-purple-500/20 flex items-center justify-center mx-auto mb-3">
                    <Wand2 className="h-6 w-6 text-purple-400" />
                  </div>
                  <h3 className="font-semibold mb-2 text-foreground">IA Integrada</h3>
                  <p className="text-sm text-muted-foreground">Gere descrições e conteúdo automaticamente</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Container>
  );
}

function TemplatesPreview() {
  const templates = [
    { name: "Moderno", image: "/images/properties/apartment.svg", desc: "Design limpo e profissional" },
    { name: "Clássico", image: "/images/properties/house.svg", desc: "Elegante e tradicional" },
    { name: "Luxo", image: "/images/properties/luxury.svg", desc: "Sofisticado para imóveis premium" },
  ];
  
    return (
    <Container>
      <div id="templates" className="py-16 md:py-20">
        <motion.h2 variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-2xl md:text-4xl font-semibold tracking-tight text-foreground">
          Templates elegantes e personalizáveis
        </motion.h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {templates.map((template, i) => (
            <motion.div key={i} variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }} className="rounded-xl overflow-hidden border border-border bg-card">
              <div className="aspect-[4/3] relative overflow-hidden">
          <Image
                  src={template.image} 
                  alt={template.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">{template.name}</h3>
                  <p className="text-sm opacity-80">{template.desc}</p>
                </div>
              </div>
              <div className="p-4 flex items-center justify-between">
                <span className="text-sm text-foreground">{template.name}</span>
                <button className="text-xs px-2 py-1 rounded-md border border-border hover:bg-accent text-foreground">Visualizar</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Container>
  );
}

function Pricing() {
  return (
    <Container>
      <div id="pricing" className="py-16 md:py-20">
        <motion.h2 variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-2xl md:text-4xl font-semibold tracking-tight text-foreground">
          Planos simples e transparentes
        </motion.h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {["Básico", "Pro", "Business"].map((name, idx) => (
            <motion.div key={name} variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }} className={`rounded-2xl border p-6 bg-card border-border ${idx === 1 ? "ring-2 ring-primary/40" : ""}`}>
              <div className="text-sm text-muted-foreground">{name}</div>
              <div className="mt-2 text-3xl font-bold text-foreground">R$ {idx === 0 ? "49" : idx === 1 ? "99" : "199"}<span className="text-base font-normal text-muted-foreground">/mês</span></div>
              <ul className="mt-4 space-y-2 text-sm text-foreground">
                <li>Site com subdomínio</li>
                <li>Gerenciamento de imóveis</li>
                <li>Geração por IA {idx === 0 ? "(limite mensal)" : idx === 1 ? "(prioritária)" : "(ilimitada)"}</li>
                <li>Leads e páginas estáticas</li>
              </ul>
              <Link href="/cadastro" className="mt-6 w-full px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 inline-block text-center">Assinar</Link>
            </motion.div>
          ))}
        </div>
      </div>
    </Container>
  );
}

function CTA() {
  return (
    <Container>
      <motion.div variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }} className="my-20 rounded-2xl border border-border bg-card p-8 text-center">
        <h3 className="text-2xl md:text-3xl font-semibold text-foreground">Pronto para lançar seu site?</h3>
        <p className="mt-2 text-muted-foreground">Leva menos de 5 minutos para começar. Sem cartão na fase beta.</p>
        <div className="mt-5 flex items-center justify-center gap-3">
          <Link href="/cadastro" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90">
            Criar minha conta <ArrowRight className="h-4 w-4" />
          </Link>
          <a href="#features" className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-border hover:bg-accent text-foreground">
            Ver recursos
          </a>
        </div>
      </motion.div>
    </Container>
  );
}

function Footer() {
  return (
    <Container>
      <div className="py-10 border-t border-border text-sm text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-blue-500 to-pink-500 text-white text-xs font-bold">S</span>
          <span>Seusite © {new Date().getFullYear()}</span>
        </div>
        <div className="flex items-center gap-4">
          <a className="hover:text-foreground transition-colors" href="#">Privacidade</a>
          <a className="hover:text-foreground transition-colors" href="#">Termos</a>
          <a className="hover:text-foreground transition-colors" href="#">Contato</a>
        </div>
      </div>
    </Container>
  );
}
