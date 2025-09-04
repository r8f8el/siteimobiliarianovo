"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ArrowRight, 
  Check, 
  Sparkles, 
  Building2, 
  Users, 
  FileText, 
  Zap,
  Star,
  Shield,
  Clock,
  Smartphone,
  Globe,
  Laptop,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { ThemeToggle } from '@/components/ThemeToggle';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] } }
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-blue-500 to-pink-500 text-white font-bold">S</span>
              <span className="font-semibold text-gray-900">Seusite</span>
            </div>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <Link href="/login" className="text-gray-600 hover:text-gray-900 transition-colors">
                Entrar
              </Link>
              <Link 
                href="/cadastro" 
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Começar Teste Grátis
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Seção 1: Hero com CTA Principal */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Conteúdo Textual */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="show"
              className="space-y-8"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm text-blue-700">
                <Sparkles className="h-4 w-4" />
                <span>Powered by Inteligência Artificial</span>
              </div>

              {/* Título Principal */}
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Seu site profissional.{" "}
                <span className="bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
                  Suas descrições com IA.
                </span>
              </h1>

              {/* Subtítulo */}
              <p className="text-xl text-gray-600 leading-relaxed">
                Deixe de ser apenas mais um corretor. Transforme seu nome em uma{" "}
                <span className="font-semibold text-gray-900">marca de sucesso</span> com templates profissionais e descrições que vendem sozinhas.
              </p>

              {/* CTA Principal */}
              <div className="space-y-4">
                <Link 
                  href="/cadastro"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 relative overflow-hidden group"
                >
                  <span className="relative z-10">Criar meu site agora</span>
                  <ArrowRight className="h-5 w-5 relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                <p className="text-sm text-gray-500">
                  Teste grátis por 7 dias. Cancele quando quiser, sem drama.
                </p>
                
                
              </div>
            </motion.div>

            {/* Visual - Site em Notebook e Celular */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="show"
              className="relative"
            >
              <div className="relative">
                {/* Notebook */}
                <div className="relative mx-auto w-full max-w-lg">
                  <div className="bg-gray-800 rounded-lg p-2 shadow-2xl">
                    <div className="bg-white rounded-md overflow-hidden">
                      <div className="bg-gray-100 h-6 flex items-center px-4">
                        <div className="flex gap-2">
                          <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        </div>
                      </div>
                      <div className="h-64 bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
                        <div className="text-center">
                          <Building2 className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                          <p className="text-sm text-gray-600">Site do Corretor</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Celular */}
                <div className="absolute -bottom-8 -right-4 w-32 h-56 bg-gray-800 rounded-2xl p-1 shadow-2xl">
                  <div className="bg-white rounded-xl h-full flex items-center justify-center">
                    <div className="text-center">
                      <Smartphone className="h-8 w-8 text-blue-600 mx-auto mb-1" />
                      <p className="text-xs text-gray-600">Mobile</p>
                    </div>
                  </div>
                </div>

                {/* Painel sutil */}
                <div className="absolute top-4 -left-8 w-24 h-16 bg-white rounded-lg shadow-lg border border-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <Laptop className="h-6 w-6 text-green-600 mx-auto mb-1" />
                    <p className="text-xs text-gray-600">Painel</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Seção 2: Prova Social e Quebra de Objeções */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              O futuro do mercado imobiliário já chegou.
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              E você, vai ficar para trás?
            </p>
            
            {/* Depoimento Dinâmico */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                  JS
                </div>
                <div>
                  <p className="font-semibold text-gray-900">João Silva</p>
                  <p className="text-sm text-gray-600">Corretor em São Paulo</p>
                </div>
              </div>
              <blockquote className="text-gray-700 italic">
                &ldquo;Em 10 minutos, meu site estava no ar. Em 15, a IA já tinha escrito meu primeiro anúncio. Surreal!&rdquo;
              </blockquote>
            </div>
            
            {/* Logos/Selos de Confiança */}
            <div className="flex items-center justify-center gap-8 opacity-60 mt-8">
              <div className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-green-600" />
                <span className="text-sm font-medium text-gray-600">SSL Seguro</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-6 w-6 text-yellow-500" />
                <span className="text-sm font-medium text-gray-600">4.9/5 Avaliação</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-6 w-6 text-blue-600" />
                <span className="text-sm font-medium text-gray-600">500+ Corretores</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Seção 3: Apresentando a Solução (Como Funciona) */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Sua máquina de vendas online. Pronta em 3, 2, 1...
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Escolha seu Template",
                description: "Selecione entre nossos templates profissionais, adicione sua logo e personalize as cores. Seu site fica pronto em minutos, sem complicação.",
                icon: Globe,
                color: "from-blue-500 to-blue-600"
              },
              {
                step: "02", 
                title: "Cadastre seus Imóveis",
                description: "Adicione seus imóveis com fotos e dados básicos. Nossa plataforma é intuitiva e pensada para corretores que querem resultados rápidos.",
                icon: Building2,
                color: "from-green-500 to-green-600"
              },
              {
                step: "03",
                title: "Deixe a IA Criar o Conteúdo",
                description: "Cansado de encarar a página em branco? Com 1 clique, nossa IA cria descrições profissionais e posts para redes sociais. É como ter um redator particular, 24/7.",
                icon: Zap,
                color: "from-purple-500 to-purple-600"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="text-center bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color} text-white text-2xl font-bold mb-6`}>
                  {item.step}
                </div>
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gray-100 mb-6">
                  <item.icon className="h-10 w-10 text-gray-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção 4: O Diferencial (Foco na IA) */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Dê adeus ao bloqueio criativo. Para sempre.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nossa IA não é um simples gerador de texto. Ela é sua parceira estratégica para criar conteúdo. Ela analisa suas fotos de imóveis, entende o que torna cada propriedade especial e cria descrições profissionais e posts para redes sociais que vendem. Do luxo silencioso de um piso de madeira à energia de uma varanda ensolarada, nada passa despercebido.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Antes */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <h3 className="text-xl font-semibold text-gray-900">Antes (Manual)</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h4 className="font-medium text-gray-900 mb-2">Dados Básicos do Imóvel</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div>• Apartamento 3 quartos</div>
                    <div>• 2 banheiros</div>
                    <div>• 85m²</div>
                    <div>• R$ 450.000</div>
                  </div>
                </div>
                <div className="bg-gray-100 rounded-lg p-4">
                  <p className="text-gray-600 text-sm">
                    &ldquo;Apartamento 3 quartos, 2 banheiros, sala, cozinha, área de serviço...&rdquo;
                  </p>
                  <p className="text-xs text-gray-500 mt-2">Descrição manual básica</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Clock className="h-4 w-4" />
                  <span>Tempo: 30-45 minutos por imóvel</span>
                </div>
              </div>
            </motion.div>

            {/* Depois */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border-2 border-blue-200"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <h3 className="text-xl font-semibold text-gray-900">Depois (Com IA)</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-green-200">
                  <h4 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-blue-600" />
                    Descrição Profissional
                  </h4>
                  <p className="text-gray-800 text-sm leading-relaxed">
                    &ldquo;Apartamento moderno de 3 quartos com acabamento de primeira qualidade. Localizado em condomínio fechado com segurança 24h, oferece privacidade e tranquilidade...&rdquo;
                  </p>
                  <p className="text-xs text-green-600 mt-2">Gerada automaticamente pela IA</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-blue-200">
                  <h4 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                    <FileText className="h-4 w-4 text-blue-600" />
                    Post para Redes Sociais
                  </h4>
                  <p className="text-gray-800 text-sm">
                    &ldquo;🏠 OPORTUNIDADE ÚNICA! Apartamento 3 quartos em localização privilegiada...&rdquo;
                  </p>
                  <p className="text-xs text-blue-600 mt-2">Pronto para Instagram/Facebook</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-green-600">
                  <Zap className="h-4 w-4" />
                  <span>Tempo: 30 segundos por imóvel</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Seção 5: Preço Transparente */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                O único plano que você vai precisar.
              </h2>
            </div>

            {/* Box de Preço */}
            <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 shadow-2xl border-2 border-blue-200 max-w-md mx-auto relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
              <div className="relative z-10">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Plano Impulso IA</h3>
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <span className="text-4xl font-bold text-blue-600">R$ 99,90</span>
                    <span className="text-gray-600">/mês</span>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Templates Profissionais</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Portfólio de Imóveis Ilimitado</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700 font-semibold">100 Descrições geradas por IA/mês</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Posts para Redes Sociais com IA</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">CRM para não perder nenhum lead</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Suporte que resolve de verdade</span>
                  </div>
                </div>

                {/* CTA Secundário */}
                <div className="space-y-4">
                  <Link 
                    href="/cadastro"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl w-full justify-center transform hover:scale-105"
                  >
                    Quero meu impulso de 7 dias!
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                  <p className="text-sm text-gray-500">
                    Seu futuro começa agora. O pagamento, só depois.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Seção 6: FAQ - Perguntas Frequentes */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ainda na dúvida? A gente resolve.
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "Vou precisar comprar domínio e hospedagem?",
                answer: "Nop! Você ganha um endereço seunome.nosso.site na hora. Zero dor de cabeça técnica."
              },
              {
                question: "E se eu quiser cancelar?",
                answer: "É fácil. Prometemos. Faça você mesmo no seu painel, com 2 cliques. Sem precisar ligar ou mandar e-mail."
              },
              {
                question: "Isso serve para a minha imobiliária?",
                answer: "No momento, somos o melhor amigo do corretor autônomo. Planos para equipes estão no forno!"
              },
              {
                question: "A IA realmente funciona bem?",
                answer: "Sim! Nossa IA foi treinada especificamente para o mercado imobiliário brasileiro e gera descrições profissionais que aumentam o interesse dos compradores."
              },
              {
                question: "Posso testar antes de pagar?",
                answer: "Claro! Oferecemos 7 dias grátis para você testar todas as funcionalidades. Só cobramos se você decidir continuar."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA Final */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-16 -translate-x-16"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4">
                  Pronto para ser o corretor que todo mundo admira?
                </h3>
                <p className="text-blue-100 mb-6">
                  Junte-se a centenas de corretores que já estão vendendo mais com o Seusite
                </p>
                <Link 
                  href="/cadastro"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 text-lg font-semibold rounded-xl hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Quero ser o próximo sucesso!
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <p className="text-blue-100 text-sm mt-4">
                  ✅ 7 dias grátis • ✅ Sem compromisso • ✅ Cancele a qualquer momento
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-blue-500 to-pink-500 text-white font-bold">S</span>
              <span className="font-semibold text-white">Seusite</span>
            </div>
            <div className="flex items-center gap-6 text-gray-400">
              <Link href="/sobre" className="hover:text-white transition-colors">Sobre</Link>
              <Link href="/contato" className="hover:text-white transition-colors">Contato</Link>
              <Link href="/privacidade" className="hover:text-white transition-colors">Privacidade</Link>
              <Link href="/termos" className="hover:text-white transition-colors">Termos</Link>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Seusite. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
