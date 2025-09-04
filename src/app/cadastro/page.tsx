"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Check, 
  Shield, 
  CreditCard, 
  Lock,
  Sparkles,
  Building2,
  Users,
  FileText
} from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function CadastroPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    subdomain: "",
    phone: "",
    creci: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubdomainChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, '');
    setFormData({
      ...formData,
      subdomain: value
    });
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-blue-500 to-pink-500 text-white font-bold">S</span>
              <span className="font-semibold text-gray-900">Seusite</span>
            </Link>
            <Link href="/login" className="text-gray-600 hover:text-gray-900 transition-colors">
              Já tem conta? Entrar
            </Link>
          </div>
        </div>
      </header>

      <div className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Lado Esquerdo - Formulário */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="show"
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-gray-600">
                    Passo {step} de 3
                  </span>
                  <span className="text-sm font-medium text-gray-600">
                    {Math.round((step / 3) * 100)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(step / 3) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Step 1: Informações Pessoais */}
              {step === 1 && (
                <motion.div
                  variants={fadeIn}
                  initial="hidden"
                  animate="show"
                  className="space-y-6"
                >
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      Vamos começar! 🚀
                    </h2>
                    <p className="text-gray-600">
                      Crie sua conta e comece seu teste grátis de 7 dias
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nome completo *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Seu nome completo"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="seu@email.com"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Senha *
                      </label>
                      <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Mínimo 8 caracteres"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Telefone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="(11) 99999-9999"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        CRECI
                      </label>
                      <input
                        type="text"
                        name="creci"
                        value={formData.creci}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="12345"
                      />
                    </div>
                  </div>

                  <button
                    onClick={nextStep}
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Continuar
                  </button>
                </motion.div>
              )}

              {/* Step 2: Subdomínio */}
              {step === 2 && (
                <motion.div
                  variants={fadeIn}
                  initial="hidden"
                  animate="show"
                  className="space-y-6"
                >
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      Escolha seu subdomínio 🌐
                    </h2>
                    <p className="text-gray-600">
                      Este será o endereço do seu site profissional
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Seu subdomínio *
                    </label>
                    <div className="flex items-center">
                      <input
                        type="text"
                        name="subdomain"
                        value={formData.subdomain}
                        onChange={handleSubdomainChange}
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="seunome"
                        required
                      />
                      <span className="px-4 py-3 bg-gray-100 border border-l-0 border-gray-300 rounded-r-lg text-gray-600">
                        .seusite.com.br
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">
                      Apenas letras, números e hífens são permitidos
                    </p>
                  </div>

                  {formData.subdomain && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Check className="h-5 w-5 text-green-600" />
                        <span className="font-medium text-green-800">Seu site será:</span>
                      </div>
                      <p className="text-green-700 font-mono">
                        https://{formData.subdomain}.seusite.com.br
                      </p>
                    </div>
                  )}

                  <div className="flex gap-4">
                    <button
                      onClick={prevStep}
                      className="flex-1 border border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                    >
                      Voltar
                    </button>
                    <button
                      onClick={nextStep}
                      className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      Continuar
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Pagamento */}
              {step === 3 && (
                <motion.div
                  variants={fadeIn}
                  initial="hidden"
                  animate="show"
                  className="space-y-6"
                >
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      Quase lá! 💳
                    </h2>
                    <p className="text-gray-600">
                      Adicione seu cartão para começar seu teste grátis
                    </p>
                  </div>

                  {/* Avisos de Segurança */}
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-green-800 mb-1">
                          Você não será cobrado hoje
                        </h3>
                        <p className="text-sm text-green-700">
                          Seu teste grátis de 7 dias começa agora. Você só será cobrado após o período de teste.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <Lock className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-blue-800 mb-1">
                          Pagamento 100% seguro
                        </h3>
                        <p className="text-sm text-blue-700">
                          Seus dados são protegidos com criptografia SSL e processados por Stripe.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Formulário de Pagamento Simulado */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Número do cartão
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="1234 5678 9012 3456"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Validade
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="MM/AA"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          CVV
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="123"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nome no cartão
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Nome como está no cartão"
                      />
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button
                      onClick={prevStep}
                      className="flex-1 border border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                    >
                      Voltar
                    </button>
                    <button
                      onClick={() => {
                        // Simular cadastro bem-sucedido
                        alert("Cadastro realizado com sucesso! Redirecionando para o dashboard...");
                        window.location.href = "/dashboard";
                      }}
                      className="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                    >
                      Iniciar Teste Grátis
                    </button>
                  </div>
                </motion.div>
              )}
            </motion.div>

            {/* Lado Direito - Benefícios */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="show"
              className="space-y-8"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  O que você ganha com o Seusite:
                </h3>
                
                <div className="space-y-4">
                  {[
                    {
                      icon: Sparkles,
                      title: "IA que trabalha por você",
                      description: "Gere descrições profissionais em segundos"
                    },
                    {
                      icon: Building2,
                      title: "Site profissional",
                      description: "Seu próprio site com seu domínio personalizado"
                    },
                    {
                      icon: Users,
                      title: "CRM integrado",
                      description: "Gerencie seus leads em um só lugar"
                    },
                    {
                      icon: FileText,
                      title: "Blog automático",
                      description: "Conteúdo para SEO gerado automaticamente"
                    }
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <benefit.icon className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {benefit.title}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">
                  Teste grátis de 7 dias
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5" />
                    <span>Sem compromisso</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5" />
                    <span>Cancele a qualquer momento</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5" />
                    <span>Acesso completo à plataforma</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5" />
                    <span>Suporte 24/7</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-white/20">
                  <p className="text-blue-100 text-sm">
                    Após o teste: R$ 99,90/mês
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}