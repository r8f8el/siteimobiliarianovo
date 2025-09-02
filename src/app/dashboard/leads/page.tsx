"use client";
import { motion } from "framer-motion";
import { Users, Search, Filter, Phone, Mail, MessageSquare, Calendar, CheckCircle, Clock, XCircle } from "lucide-react";

const leads = [
  {
    id: 1,
    name: "Maria Santos",
    email: "maria@email.com",
    phone: "(11) 99999-9999",
    property: "Casa 3 quartos - Rua das Flores",
    message: "Gostaria de agendar uma visita para este fim de semana.",
    status: "Novo",
    source: "Site",
    date: "2024-01-15T10:30:00Z",
    priority: "Alta"
  },
  {
    id: 2,
    name: "João Oliveira",
    email: "joao@email.com",
    phone: "(11) 88888-8888",
    property: "Apartamento 2 quartos - Av. Paulista",
    message: "Interessado no apartamento. Qual o valor do condomínio?",
    status: "Em contato",
    source: "WhatsApp",
    date: "2024-01-15T09:15:00Z",
    priority: "Média"
  },
  {
    id: 3,
    name: "Ana Costa",
    email: "ana@email.com",
    phone: "(11) 77777-7777",
    property: "Casa 4 quartos - Rua dos Jardins",
    message: "Preciso de financiamento. Vocês trabalham com algum banco?",
    status: "Interessado",
    source: "Site",
    date: "2024-01-14T16:45:00Z",
    priority: "Alta"
  },
  {
    id: 4,
    name: "Carlos Silva",
    email: "carlos@email.com",
    phone: "(11) 66666-6666",
    property: "Loft Industrial - Rua Augusta",
    message: "O imóvel ainda está disponível?",
    status: "Convertido",
    source: "Instagram",
    date: "2024-01-14T14:20:00Z",
    priority: "Baixa"
  },
  {
    id: 5,
    name: "Fernanda Lima",
    email: "fernanda@email.com",
    phone: "(11) 55555-5555",
    property: "Casa 3 quartos - Rua das Flores",
    message: "Não tenho interesse no momento.",
    status: "Perdido",
    source: "Site",
    date: "2024-01-13T11:10:00Z",
    priority: "Baixa"
  }
];

const statusConfig = {
  "Novo": { color: "bg-blue-100 text-blue-800", icon: Clock },
  "Em contato": { color: "bg-yellow-100 text-yellow-800", icon: MessageSquare },
  "Interessado": { color: "bg-green-100 text-green-800", icon: CheckCircle },
  "Convertido": { color: "bg-emerald-100 text-emerald-800", icon: CheckCircle },
  "Perdido": { color: "bg-red-100 text-red-800", icon: XCircle }
};

const priorityConfig = {
  "Alta": "bg-red-100 text-red-800",
  "Média": "bg-yellow-100 text-yellow-800",
  "Baixa": "bg-green-100 text-green-800"
};

export default function LeadsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Leads</h1>
          <p className="text-gray-600">Gerencie e acompanhe seus leads de vendas</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
            <Filter className="h-4 w-4" />
            Filtros
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Total de Leads", value: "24", change: "+12%", color: "blue" },
          { label: "Novos", value: "8", change: "+3", color: "blue" },
          { label: "Em Contato", value: "6", change: "+1", color: "yellow" },
          { label: "Convertidos", value: "4", change: "+2", color: "green" }
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl border border-gray-200 p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                <p className="text-sm text-green-600 mt-1">{stat.change}</p>
              </div>
              <div className={`h-12 w-12 bg-${stat.color}-50 rounded-lg flex items-center justify-center`}>
                <Users className={`h-6 w-6 text-${stat.color}-600`} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar leads..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Todos os status</option>
              <option>Novo</option>
              <option>Em contato</option>
              <option>Interessado</option>
              <option>Convertido</option>
              <option>Perdido</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Todas as fontes</option>
              <option>Site</option>
              <option>WhatsApp</option>
              <option>Instagram</option>
              <option>Facebook</option>
            </select>
          </div>
        </div>
      </div>

      {/* Leads Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lead</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Imóvel</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prioridade</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {leads.map((lead, index) => {
                const StatusIcon = statusConfig[lead.status as keyof typeof statusConfig].icon;
                return (
                  <motion.tr
                    key={lead.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="hover:bg-gray-50"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-pink-500 flex items-center justify-center text-white font-bold text-sm">
                          {lead.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{lead.name}</div>
                          <div className="text-sm text-gray-500">{lead.email}</div>
                          <div className="text-sm text-gray-500">{lead.phone}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">{lead.property}</div>
                      <div className="text-sm text-gray-500 max-w-xs truncate">{lead.message}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-1 px-2 py-1 text-xs rounded-full ${statusConfig[lead.status as keyof typeof statusConfig].color}`}>
                        <StatusIcon className="h-3 w-3" />
                        {lead.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs rounded-full ${priorityConfig[lead.priority as keyof typeof priorityConfig]}`}>
                        {lead.priority}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {new Date(lead.date).toLocaleDateString('pt-BR')}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button className="p-1 text-blue-600 hover:text-blue-700">
                          <Phone className="h-4 w-4" />
                        </button>
                        <button className="p-1 text-green-600 hover:text-green-700">
                          <Mail className="h-4 w-4" />
                        </button>
                        <button className="p-1 text-gray-600 hover:text-gray-700">
                          <MessageSquare className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
