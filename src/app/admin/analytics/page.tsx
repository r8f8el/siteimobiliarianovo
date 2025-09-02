"use client";
import { motion } from "framer-motion";
import { BarChart3, TrendingUp, Users, Eye, MousePointer, Clock, DollarSign, Calendar } from "lucide-react";

const analyticsData = {
  overview: [
    { label: "Usuários Ativos", value: "1,234", change: "+12%", color: "blue" },
    { label: "Visualizações", value: "45,678", change: "+8%", color: "green" },
    { label: "Conversões", value: "3.2%", change: "+0.5%", color: "purple" },
    { label: "Receita", value: "R$ 89.200", change: "+15%", color: "emerald" }
  ],
  topPages: [
    { page: "/", views: 12345, unique: 8934, bounce: "45%" },
    { page: "/templates", views: 8765, unique: 6543, bounce: "38%" },
    { page: "/pricing", views: 5432, unique: 4321, bounce: "52%" },
    { page: "/blog", views: 3210, unique: 2876, bounce: "41%" }
  ],
  userActivity: [
    { time: "00:00", users: 45 },
    { time: "04:00", users: 23 },
    { time: "08:00", users: 156 },
    { time: "12:00", users: 234 },
    { time: "16:00", users: 198 },
    { time: "20:00", users: 167 }
  ],
  deviceStats: [
    { device: "Desktop", percentage: 65, users: 802 },
    { device: "Mobile", percentage: 30, users: 370 },
    { device: "Tablet", percentage: 5, users: 62 }
  ],
  conversionFunnel: [
    { step: "Visitantes", count: 10000, percentage: 100 },
    { step: "Interessados", count: 2500, percentage: 25 },
    { step: "Cadastros", count: 500, percentage: 5 },
    { step: "Assinaturas", count: 125, percentage: 1.25 }
  ]
};

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
          <p className="text-gray-600">Métricas e insights da plataforma</p>
        </div>
        <div className="flex items-center gap-3">
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option>Últimos 7 dias</option>
            <option>Últimos 30 dias</option>
            <option>Últimos 90 dias</option>
            <option>Último ano</option>
          </select>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Calendar className="h-4 w-4" />
            Exportar
          </button>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {analyticsData.overview.map((stat, index) => (
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
                <BarChart3 className={`h-6 w-6 text-${stat.color}-600`} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Traffic Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl border border-gray-200 p-6"
        >
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Tráfego por Hora</h2>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center text-gray-500">
              <TrendingUp className="h-12 w-12 mx-auto mb-2" />
              <div className="text-sm">Gráfico de tráfego</div>
              <div className="text-xs">Integração com Chart.js ou Recharts</div>
            </div>
          </div>
        </motion.div>

        {/* Device Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-xl border border-gray-200 p-6"
        >
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Dispositivos</h2>
          <div className="space-y-4">
            {analyticsData.deviceStats.map((device, index) => (
              <div key={device.device} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">{device.device}</span>
                  <span className="text-sm text-gray-500">{device.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${device.percentage}%` }}
                  />
                </div>
                <div className="text-xs text-gray-500">{device.users} usuários</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Top Pages */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-white rounded-xl border border-gray-200 p-6"
      >
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Páginas Mais Visitadas</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Página</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Visualizações</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Únicos</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Taxa de Rejeição</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {analyticsData.topPages.map((page, index) => (
                <motion.tr
                  key={page.page}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="hover:bg-gray-50"
                >
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{page.page}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{page.views.toLocaleString('pt-BR')}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{page.unique.toLocaleString('pt-BR')}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{page.bounce}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Conversion Funnel */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="bg-white rounded-xl border border-gray-200 p-6"
      >
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Funil de Conversão</h2>
        <div className="space-y-4">
          {analyticsData.conversionFunnel.map((step, index) => (
            <div key={step.step} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">{step.step}</span>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-500">{step.count.toLocaleString('pt-BR')}</span>
                  <span className="text-sm font-medium text-gray-900">{step.percentage}%</span>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-1000"
                  style={{ width: `${step.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Real-time Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-green-100 rounded-lg flex items-center justify-center">
              <Eye className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Usuários Online</p>
              <p className="text-2xl font-bold text-gray-900">234</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <MousePointer className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Sessões Ativas</p>
              <p className="text-2xl font-bold text-gray-900">156</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <Clock className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Tempo Médio</p>
              <p className="text-2xl font-bold text-gray-900">3:24</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

