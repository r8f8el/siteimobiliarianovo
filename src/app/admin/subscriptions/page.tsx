"use client";
import { motion } from "framer-motion";
import { CreditCard, Search, Filter, TrendingUp, DollarSign, Users, Calendar, AlertCircle } from "lucide-react";

const subscriptions = [
  {
    id: 1,
    user: "João Silva",
    email: "joao@exemplo.com",
    plan: "Pro",
    status: "Ativo",
    amount: 99,
    billingCycle: "Mensal",
    startDate: "2024-01-15",
    nextBilling: "2024-02-15",
    paymentMethod: "Cartão terminado em 1234",
    properties: 12,
    leads: 45
  },
  {
    id: 2,
    user: "Maria Santos",
    email: "maria@exemplo.com",
    plan: "Starter",
    status: "Ativo",
    amount: 0,
    billingCycle: "Gratuito",
    startDate: "2024-01-10",
    nextBilling: null,
    paymentMethod: null,
    properties: 3,
    leads: 8
  },
  {
    id: 3,
    user: "Carlos Oliveira",
    email: "carlos@exemplo.com",
    plan: "Pro",
    status: "Pendente",
    amount: 99,
    billingCycle: "Mensal",
    startDate: "2024-01-18",
    nextBilling: "2024-02-18",
    paymentMethod: "Cartão terminado em 5678",
    properties: 0,
    leads: 0
  },
  {
    id: 4,
    user: "Ana Costa",
    email: "ana@exemplo.com",
    plan: "Pro",
    status: "Cancelado",
    amount: 99,
    billingCycle: "Mensal",
    startDate: "2024-01-05",
    nextBilling: null,
    paymentMethod: "Cartão terminado em 9012",
    properties: 2,
    leads: 5
  },
  {
    id: 5,
    user: "Pedro Lima",
    email: "pedro@exemplo.com",
    plan: "Pro",
    status: "Ativo",
    amount: 99,
    billingCycle: "Mensal",
    startDate: "2024-01-12",
    nextBilling: "2024-02-12",
    paymentMethod: "Cartão terminado em 3456",
    properties: 8,
    leads: 23
  }
];

const statusConfig = {
  "Ativo": "bg-green-100 text-green-800",
  "Pendente": "bg-yellow-100 text-yellow-800",
  "Cancelado": "bg-red-100 text-red-800",
  "Expirado": "bg-gray-100 text-gray-800"
};

const planConfig = {
  "Pro": "bg-blue-100 text-blue-800",
  "Starter": "bg-gray-100 text-gray-800"
};

export default function SubscriptionsPage() {
  const totalRevenue = subscriptions
    .filter(sub => sub.status === "Ativo")
    .reduce((sum, sub) => sum + sub.amount, 0);

  const activeSubscriptions = subscriptions.filter(sub => sub.status === "Ativo").length;
  const pendingSubscriptions = subscriptions.filter(sub => sub.status === "Pendente").length;
  const cancelledSubscriptions = subscriptions.filter(sub => sub.status === "Cancelado").length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Assinaturas</h1>
          <p className="text-gray-600">Gerencie planos e pagamentos dos usuários</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
            <Filter className="h-4 w-4" />
            Filtros
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            <CreditCard className="h-4 w-4" />
            Novo Plano
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Receita Total", value: `R$ ${totalRevenue.toLocaleString('pt-BR')}`, change: "+15%", color: "emerald", icon: DollarSign },
          { label: "Assinaturas Ativas", value: activeSubscriptions.toString(), change: "+8%", color: "green", icon: Users },
          { label: "Pendentes", value: pendingSubscriptions.toString(), change: "+2", color: "yellow", icon: AlertCircle },
          { label: "Canceladas", value: cancelledSubscriptions.toString(), change: "-5%", color: "red", icon: TrendingUp }
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
                <p className={`text-sm mt-1 ${
                  stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change}
                </p>
              </div>
              <div className={`h-12 w-12 bg-${stat.color}-50 rounded-lg flex items-center justify-center`}>
                <stat.icon className={`h-6 w-6 text-${stat.color}-600`} />
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
                placeholder="Buscar assinaturas..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Todos os status</option>
              <option>Ativo</option>
              <option>Pendente</option>
              <option>Cancelado</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Todos os planos</option>
              <option>Pro</option>
              <option>Starter</option>
            </select>
          </div>
        </div>
      </div>

      {/* Subscriptions Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Usuário</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Plano</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Valor</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ciclo</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Próximo Pagamento</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Uso</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {subscriptions.map((subscription, index) => (
                <motion.tr
                  key={subscription.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="hover:bg-gray-50"
                >
                  <td className="px-6 py-4">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{subscription.user}</div>
                      <div className="text-sm text-gray-500">{subscription.email}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-xs rounded-full ${planConfig[subscription.plan as keyof typeof planConfig]}`}>
                      {subscription.plan}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-xs rounded-full ${statusConfig[subscription.status as keyof typeof statusConfig]}`}>
                      {subscription.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {subscription.amount > 0 ? `R$ ${subscription.amount}` : "Gratuito"}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {subscription.billingCycle}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {subscription.nextBilling ? (
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(subscription.nextBilling).toLocaleDateString('pt-BR')}
                      </div>
                    ) : (
                      "-"
                    )}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    <div>{subscription.properties} imóveis</div>
                    <div>{subscription.leads} leads</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button className="px-3 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                        Ver
                      </button>
                      {subscription.status === "Ativo" ? (
                        <button className="px-3 py-1 text-xs bg-red-600 text-white rounded hover:bg-red-700 transition-colors">
                          Cancelar
                        </button>
                      ) : subscription.status === "Pendente" ? (
                        <button className="px-3 py-1 text-xs bg-green-600 text-white rounded hover:bg-green-700 transition-colors">
                          Ativar
                        </button>
                      ) : (
                        <button className="px-3 py-1 text-xs bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors">
                          Reativar
                        </button>
                      )}
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Revenue Chart Placeholder */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-white rounded-xl border border-gray-200 p-6"
      >
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Receita por Mês</h2>
        <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
          <div className="text-center text-gray-500">
            <TrendingUp className="h-12 w-12 mx-auto mb-2" />
            <div className="text-sm">Gráfico de receita</div>
            <div className="text-xs">Integração com biblioteca de gráficos</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

