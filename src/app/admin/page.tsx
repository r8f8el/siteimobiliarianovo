"use client";
import { motion } from "framer-motion";
import { Users, CreditCard, TrendingUp, DollarSign, Eye, UserPlus, Building2, FileText, BarChart3 } from "lucide-react";

const stats = [
  { name: "Total de Usuários", value: "1,234", change: "+12%", changeType: "positive", icon: Users, color: "blue" },
  { name: "Assinaturas Ativas", value: "892", change: "+8%", changeType: "positive", icon: CreditCard, color: "green" },
  { name: "Receita Mensal", value: "R$ 89.200", change: "+15%", changeType: "positive", icon: DollarSign, color: "emerald" },
  { name: "Taxa de Conversão", value: "3.2%", change: "+0.5%", changeType: "positive", icon: TrendingUp, color: "purple" },
];

const recentUsers = [
  { id: 1, name: "João Silva", email: "joao@exemplo.com", plan: "Pro", status: "Ativo", date: "2 horas atrás" },
  { id: 2, name: "Maria Santos", email: "maria@exemplo.com", plan: "Starter", status: "Ativo", date: "4 horas atrás" },
  { id: 3, name: "Carlos Oliveira", email: "carlos@exemplo.com", plan: "Pro", status: "Pendente", date: "6 horas atrás" },
  { id: 4, name: "Ana Costa", email: "ana@exemplo.com", plan: "Starter", status: "Ativo", date: "1 dia atrás" },
];

const recentActivity = [
  { id: 1, type: "user_signup", message: "Novo usuário cadastrado: João Silva", time: "2 horas atrás", icon: UserPlus },
  { id: 2, type: "subscription", message: "Assinatura Pro ativada para Maria Santos", time: "4 horas atrás", icon: CreditCard },
  { id: 3, type: "property", message: "15 novos imóveis cadastrados hoje", time: "6 horas atrás", icon: Building2 },
  { id: 4, type: "blog", message: "8 novos posts publicados", time: "8 horas atrás", icon: FileText },
];

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard Administrativo</h1>
          <p className="text-gray-600">Visão geral da plataforma e métricas principais</p>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={() => window.open('/dashboard/analytics', '_blank')}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Eye className="h-4 w-4" />
            Relatório Completo
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl border border-gray-200 p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                <p className={`text-sm mt-1 ${
                  stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
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

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Users */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl border border-gray-200 p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Usuários Recentes</h2>
            <button className="text-sm text-blue-600 hover:text-blue-700">
              Ver todos
            </button>
          </div>
          <div className="space-y-4">
            {recentUsers.map((user) => (
              <div key={user.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-pink-500 flex items-center justify-center text-white font-bold text-sm">
                    {user.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{user.name}</p>
                    <p className="text-sm text-gray-600">{user.email}</p>
                    <p className="text-xs text-gray-500">{user.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    user.plan === 'Pro' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {user.plan}
                  </span>
                  <p className={`text-xs mt-1 ${
                    user.status === 'Ativo' ? 'text-green-600' : 'text-yellow-600'
                  }`}>
                    {user.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-xl border border-gray-200 p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Atividade Recente</h2>
            <button className="text-sm text-blue-600 hover:text-blue-700">
              Ver todas
            </button>
          </div>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <activity.icon className="h-4 w-4 text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">{activity.message}</p>
                  <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-white rounded-xl border border-gray-200 p-6"
      >
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Ações Rápidas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button 
            onClick={() => window.location.href = '/dashboard/users'}
            className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
          >
            <Users className="h-6 w-6 text-blue-600" />
            <div>
              <p className="font-medium text-blue-900">Gerenciar Usuários</p>
              <p className="text-sm text-blue-700">Ver e editar usuários</p>
            </div>
          </button>
          <button 
            onClick={() => alert('Funcionalidade de Assinaturas será implementada em breve!')}
            className="flex items-center gap-3 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
          >
            <CreditCard className="h-6 w-6 text-green-600" />
            <div>
              <p className="font-medium text-green-900">Assinaturas</p>
              <p className="text-sm text-green-700">Gerenciar planos</p>
            </div>
          </button>
          <button 
            onClick={() => window.location.href = '/dashboard/analytics'}
            className="flex items-center gap-3 p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
          >
            <BarChart3 className="h-6 w-6 text-purple-600" />
            <div>
              <p className="font-medium text-purple-900">Analytics</p>
              <p className="text-sm text-purple-700">Ver relatórios</p>
            </div>
          </button>
        </div>
      </motion.div>
    </div>
  );
}
