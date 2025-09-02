"use client";
import { motion } from "framer-motion";
import { Settings, Globe, Mail, Shield, CreditCard, Bell, Database, Key } from "lucide-react";

const settingsSections = [
  {
    title: "Geral",
    description: "Configurações básicas da plataforma",
    icon: Settings,
    items: [
      { label: "Nome da plataforma", value: "Seusite.com.br", type: "text" },
      { label: "URL base", value: "https://seusite.com.br", type: "text" },
      { label: "E-mail de suporte", value: "suporte@seusite.com.br", type: "email" },
      { label: "Telefone de contato", value: "(11) 99999-9999", type: "tel" },
      { label: "Descrição", value: "Plataforma SaaS para corretores de imóveis", type: "textarea" }
    ]
  },
  {
    title: "Pagamentos",
    description: "Configurações de gateway de pagamento",
    icon: CreditCard,
    items: [
      { label: "Gateway principal", value: "Stripe", type: "select", options: ["Stripe", "Mercado Pago", "PagSeguro"] },
      { label: "Chave pública", value: "pk_test_...", type: "text" },
      { label: "Chave secreta", value: "sk_test_...", type: "password" },
      { label: "Webhook URL", value: "https://seusite.com.br/api/webhooks/stripe", type: "text" },
      { label: "Moeda padrão", value: "BRL", type: "select", options: ["BRL", "USD", "EUR"] }
    ]
  },
  {
    title: "E-mail",
    description: "Configurações de envio de e-mails",
    icon: Mail,
    items: [
      { label: "Servidor SMTP", value: "smtp.gmail.com", type: "text" },
      { label: "Porta", value: "587", type: "number" },
      { label: "Usuário", value: "noreply@seusite.com.br", type: "email" },
      { label: "Senha", value: "", type: "password" },
      { label: "SSL/TLS", value: true, type: "checkbox" }
    ]
  },
  {
    title: "Segurança",
    description: "Configurações de segurança e autenticação",
    icon: Shield,
    items: [
      { label: "Autenticação 2FA", value: true, type: "checkbox" },
      { label: "Sessão timeout (minutos)", value: "60", type: "number" },
      { label: "Tentativas de login", value: "5", type: "number" },
      { label: "Bloqueio de IP", value: false, type: "checkbox" },
      { label: "Logs de segurança", value: true, type: "checkbox" }
    ]
  },
  {
    title: "Notificações",
    description: "Configurações de notificações do sistema",
    icon: Bell,
    items: [
      { label: "E-mail de boas-vindas", value: true, type: "checkbox" },
      { label: "Notificação de novos usuários", value: true, type: "checkbox" },
      { label: "Alertas de pagamento", value: true, type: "checkbox" },
      { label: "Relatórios semanais", value: false, type: "checkbox" },
      { label: "Manutenção programada", value: true, type: "checkbox" }
    ]
  },
  {
    title: "Banco de Dados",
    description: "Configurações de backup e manutenção",
    icon: Database,
    items: [
      { label: "Backup automático", value: true, type: "checkbox" },
      { label: "Frequência do backup", value: "Diário", type: "select", options: ["Diário", "Semanal", "Mensal"] },
      { label: "Retenção (dias)", value: "30", type: "number" },
      { label: "Compactação", value: true, type: "checkbox" },
      { label: "Criptografia", value: true, type: "checkbox" }
    ]
  },
  {
    title: "API",
    description: "Configurações de API e integrações",
    icon: Key,
    items: [
      { label: "Chave da API", value: "sk_live_...", type: "password" },
      { label: "Rate limit (req/min)", value: "1000", type: "number" },
      { label: "CORS habilitado", value: true, type: "checkbox" },
      { label: "Webhooks ativos", value: true, type: "checkbox" },
      { label: "Logs de API", value: true, type: "checkbox" }
    ]
  }
];

export default function AdminSettingsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Configurações do Sistema</h1>
          <p className="text-gray-600">Gerencie as configurações da plataforma</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
            Resetar
          </button>
          <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
            Salvar alterações
          </button>
        </div>
      </div>

      {/* Settings Sections */}
      <div className="space-y-6">
        {settingsSections.map((section, sectionIndex) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: sectionIndex * 0.1 }}
            className="bg-white rounded-xl border border-gray-200 p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 bg-red-50 rounded-lg flex items-center justify-center">
                <section.icon className="h-5 w-5 text-red-600" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-900">{section.title}</h2>
                <p className="text-sm text-gray-600">{section.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {section.items.map((item, itemIndex) => (
                <div key={item.label} className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    {item.label}
                  </label>
                  
                  {item.type === "text" && (
                    <input
                      type="text"
                      defaultValue={String(item.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  )}
                  
                  {item.type === "email" && (
                    <input
                      type="email"
                      defaultValue={String(item.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  )}
                  
                  {item.type === "tel" && (
                    <input
                      type="tel"
                      defaultValue={String(item.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  )}
                  
                  {item.type === "number" && (
                    <input
                      type="number"
                      defaultValue={String(item.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  )}
                  
                  {item.type === "password" && (
                    <input
                      type="password"
                      placeholder="Digite a senha"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  )}
                  
                  {item.type === "textarea" && (
                    <textarea
                      defaultValue={String(item.value)}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                    />
                  )}
                  
                  {item.type === "select" && (
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent">
                      {'options' in item && item.options?.map((option) => (
                        <option key={option} value={option} selected={option === item.value}>
                          {option}
                        </option>
                      ))}
                    </select>
                  )}
                  
                  {item.type === "checkbox" && (
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        defaultChecked={typeof item.value === 'boolean' ? item.value : false}
                        className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                      />
                      <span className="ml-2 text-sm text-gray-700">
                        {item.value ? "Ativado" : "Desativado"}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* System Status */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="bg-white rounded-xl border border-gray-200 p-6"
      >
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Status do Sistema</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
            <div className="h-3 w-3 bg-green-500 rounded-full"></div>
            <div>
              <p className="text-sm font-medium text-green-900">Servidor</p>
              <p className="text-xs text-green-700">Online</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
            <div className="h-3 w-3 bg-green-500 rounded-full"></div>
            <div>
              <p className="text-sm font-medium text-green-900">Banco de Dados</p>
              <p className="text-xs text-green-700">Conectado</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 bg-yellow-50 rounded-lg">
            <div className="h-3 w-3 bg-yellow-500 rounded-full"></div>
            <div>
              <p className="text-sm font-medium text-yellow-900">Cache</p>
              <p className="text-xs text-yellow-700">Parcial</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Danger Zone */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="bg-white rounded-xl border border-red-200 p-6"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 bg-red-50 rounded-lg flex items-center justify-center">
            <Shield className="h-5 w-5 text-red-600" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-red-900">Zona de Perigo</h2>
            <p className="text-sm text-red-600">Ações irreversíveis do sistema</p>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
            <div>
              <h3 className="font-medium text-red-900">Limpar cache</h3>
              <p className="text-sm text-red-600">Remove todos os dados em cache</p>
            </div>
            <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
              Limpar
            </button>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
            <div>
              <h3 className="font-medium text-red-900">Backup manual</h3>
              <p className="text-sm text-red-600">Força um backup completo do sistema</p>
            </div>
            <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
              Backup
            </button>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
            <div>
              <h3 className="font-medium text-red-900">Manutenção</h3>
              <p className="text-sm text-red-600">Coloca o sistema em modo de manutenção</p>
            </div>
            <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
              Ativar
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

