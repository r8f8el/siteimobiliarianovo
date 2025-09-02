"use client";
import { motion } from "framer-motion";
import { Settings, User, Palette, Globe, Bell, Shield, CreditCard } from "lucide-react";

const settingsSections = [
  {
    title: "Perfil",
    description: "Gerencie suas informações pessoais",
    icon: User,
    items: [
      { label: "Nome completo", value: "João Silva", type: "text" },
      { label: "E-mail", value: "joao@exemplo.com", type: "email" },
      { label: "Telefone", value: "(11) 99999-9999", type: "tel" },
      { label: "CRECI", value: "123456", type: "text" }
    ]
  },
  {
    title: "Site",
    description: "Configure seu site público",
    icon: Globe,
    items: [
      { label: "Nome do site", value: "João Silva Imóveis", type: "text" },
      { label: "Subdomínio", value: "joaosilva", type: "text" },
      { label: "URL", value: "joaosilva.seusite.com.br", type: "text", disabled: true },
      { label: "Descrição", value: "Especialista em imóveis residenciais", type: "textarea" }
    ]
  },
  {
    title: "Aparência",
    description: "Personalize o visual do seu site",
    icon: Palette,
    items: [
      { label: "Template", value: "Moderno", type: "select", options: ["Moderno", "Clássico", "Negrito"] },
      { label: "Cor principal", value: "#3B82F6", type: "color" },
      { label: "Logo", value: "", type: "file" },
      { label: "Favicon", value: "", type: "file" }
    ]
  },
  {
    title: "Notificações",
    description: "Configure como receber notificações",
    icon: Bell,
    items: [
      { label: "Novos leads", value: true, type: "checkbox" },
      { label: "Visualizações de imóveis", value: false, type: "checkbox" },
      { label: "E-mail semanal", value: true, type: "checkbox" },
      { label: "Notificações push", value: true, type: "checkbox" }
    ]
  },
  {
    title: "Segurança",
    description: "Gerencie a segurança da sua conta",
    icon: Shield,
    items: [
      { label: "Senha atual", value: "", type: "password" },
      { label: "Nova senha", value: "", type: "password" },
      { label: "Confirmar senha", value: "", type: "password" },
      { label: "Autenticação 2FA", value: false, type: "checkbox" }
    ]
  },
  {
    title: "Assinatura",
    description: "Gerencie seu plano e pagamentos",
    icon: CreditCard,
    items: [
      { label: "Plano atual", value: "Pro", type: "text", disabled: true },
      { label: "Próximo vencimento", value: "15/02/2024", type: "text", disabled: true },
      { label: "Valor", value: "R$ 99,00/mês", type: "text", disabled: true },
      { label: "Método de pagamento", value: "Cartão terminado em 1234", type: "text" }
    ]
  }
];

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Configurações</h1>
          <p className="text-gray-600">Gerencie suas configurações e preferências</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Salvar alterações
        </button>
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
              <div className="h-10 w-10 bg-blue-50 rounded-lg flex items-center justify-center">
                <section.icon className="h-5 w-5 text-blue-600" />
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
                      disabled={'disabled' in item ? item.disabled : false}
                      className={`w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        'disabled' in item && item.disabled ? 'bg-gray-50 text-gray-500' : ''
                      }`}
                    />
                  )}
                  
                  {item.type === "email" && (
                    <input
                      type="email"
                      defaultValue={String(item.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  )}
                  
                  {item.type === "tel" && (
                    <input
                      type="tel"
                      defaultValue={String(item.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  )}
                  
                  {item.type === "password" && (
                    <input
                      type="password"
                      placeholder="Digite sua senha"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  )}
                  
                  {item.type === "textarea" && (
                    <textarea
                      defaultValue={String(item.value)}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    />
                  )}
                  
                  {item.type === "select" && (
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      {'options' in item && item.options?.map((option) => (
                        <option key={option} value={option} selected={option === item.value}>
                          {option}
                        </option>
                      ))}
                    </select>
                  )}
                  
                  {item.type === "color" && (
                    <div className="flex items-center gap-3">
                      <input
                        type="color"
                        defaultValue={String(item.value)}
                        className="h-10 w-16 border border-gray-300 rounded-lg cursor-pointer"
                      />
                      <input
                        type="text"
                        defaultValue={String(item.value)}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  )}
                  
                  {item.type === "file" && (
                    <div className="flex items-center gap-3">
                      <input
                        type="file"
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      {item.value && (
                        <span className="text-sm text-gray-500">Arquivo atual: {String(item.value)}</span>
                      )}
                    </div>
                  )}
                  
                  {item.type === "checkbox" && (
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        defaultChecked={typeof item.value === 'boolean' ? item.value : false}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
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

      {/* Danger Zone */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-white rounded-xl border border-red-200 p-6"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 bg-red-50 rounded-lg flex items-center justify-center">
            <Shield className="h-5 w-5 text-red-600" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-red-900">Zona de Perigo</h2>
            <p className="text-sm text-red-600">Ações irreversíveis para sua conta</p>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
            <div>
              <h3 className="font-medium text-red-900">Excluir conta</h3>
              <p className="text-sm text-red-600">Exclua permanentemente sua conta e todos os dados</p>
            </div>
            <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
              Excluir conta
            </button>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg">
            <div>
              <h3 className="font-medium text-yellow-900">Cancelar assinatura</h3>
              <p className="text-sm text-yellow-600">Cancele sua assinatura atual</p>
            </div>
            <button className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors">
              Cancelar
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
