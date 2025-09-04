"use client";
import { motion } from "framer-motion";
import { Building2, Users, Eye, TrendingUp, Plus, Sparkles, Settings, Megaphone } from "lucide-react";
import Link from "next/link";

const stats = [
  { name: "Imóveis Ativos", value: "12", icon: Building2, change: "+2 este mês", changeType: "positive" },
  { name: "Anúncios Ativos", value: "5", icon: Megaphone, change: "+1 esta semana", changeType: "positive" },
  { name: "Leads Recebidos", value: "48", icon: Users, change: "+12% vs mês anterior", changeType: "positive" },
  { name: "Visualizações", value: "1,234", icon: Eye, change: "+8% vs mês anterior", changeType: "positive" },
  { name: "Taxa de Conversão", value: "3.2%", icon: TrendingUp, change: "+0.5% vs mês anterior", changeType: "positive" },
];

const recentLeads = [
  { id: 1, name: "Maria Santos", email: "maria@email.com", property: "Casa 3 quartos", date: "2 horas atrás", status: "Novo" },
  { id: 2, name: "João Oliveira", email: "joao@email.com", property: "Apartamento 2 quartos", date: "5 horas atrás", status: "Em contato" },
  { id: 3, name: "Ana Costa", email: "ana@email.com", property: "Casa 4 quartos", date: "1 dia atrás", status: "Interessado" },
];

const recentProperties = [
  { id: 1, title: "Casa Moderna com 3 Quartos", price: 850000, status: "Ativo", views: 45 },
  { id: 2, title: "Apartamento 2 Quartos Centro", price: 450000, status: "Ativo", views: 32 },
  { id: 3, title: "Casa com Piscina", price: 1200000, status: "Pendente", views: 28 },
];

export default function DashboardPage() {
  const handleGenerateWithAI = () => {
    alert('Funcionalidade de IA será implementada em breve! Por enquanto, você pode usar as outras funcionalidades do dashboard.');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">Bem-vindo de volta, João! Aqui está um resumo da sua atividade.</p>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={handleGenerateWithAI}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-pink-500 text-white rounded-lg hover:from-blue-600 hover:to-pink-600 transition-all duration-200"
          >
            <Sparkles className="h-4 w-4" />
            Gerar com IA
          </button>
          <Link href="/dashboard/properties" className="flex items-center gap-2 px-4 py-2 bg-card border border-border text-foreground rounded-lg hover:bg-accent transition-colors">
            <Plus className="h-4 w-4" />
            Novo Imóvel
          </Link>
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
            className="bg-card rounded-xl border border-border p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">{stat.name}</p>
                <p className="text-2xl font-bold text-foreground mt-1">{stat.value}</p>
                <p className={`text-sm mt-1 ${
                  stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change}
                </p>
              </div>
              <div className="h-12 w-12 bg-gradient-to-br from-blue-50 to-pink-50 rounded-lg flex items-center justify-center">
                <stat.icon className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Leads */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-card rounded-xl border border-border p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-foreground">Leads Recentes</h2>
            <Link href="/dashboard/leads" className="text-sm text-blue-600 hover:text-blue-700">
              Ver todos
            </Link>
          </div>
          <div className="space-y-4">
            {recentLeads.map((lead) => (
              <div key={lead.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-foreground">{lead.name}</p>
                  <p className="text-sm text-muted-foreground">{lead.property}</p>
                  <p className="text-xs text-muted-foreground">{lead.date}</p>
                </div>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  lead.status === 'Novo' ? 'bg-blue-100 text-blue-800' :
                  lead.status === 'Em contato' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {lead.status}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Recent Properties */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-card rounded-xl border border-border p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-foreground">Imóveis Recentes</h2>
            <Link href="/dashboard/properties" className="text-sm text-blue-600 hover:text-blue-700">
              Ver todos
            </Link>
          </div>
          <div className="space-y-4">
            {recentProperties.map((property) => (
              <div key={property.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-foreground">{property.title}</p>
                  <p className="text-sm text-muted-foreground">R$ {property.price.toLocaleString('pt-BR')}</p>
                  <p className="text-xs text-muted-foreground">{property.views} visualizações</p>
                </div>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  property.status === 'Ativo' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {property.status}
                </span>
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
        className="bg-card rounded-xl border border-border p-6"
      >
        <h2 className="text-lg font-semibold text-foreground mb-4">Ações Rápidas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link href="/dashboard/properties" className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
            <Building2 className="h-6 w-6 text-blue-600" />
            <div>
              <p className="font-medium text-blue-900">Adicionar Imóvel</p>
              <p className="text-sm text-blue-700">Cadastre um novo imóvel</p>
            </div>
          </Link>
          <Link href="/dashboard/ads" className="flex items-center gap-3 p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
            <Megaphone className="h-6 w-6 text-orange-600" />
            <div>
              <p className="font-medium text-orange-900">Criar Anúncio</p>
              <p className="text-sm text-orange-700">Promova seus imóveis</p>
            </div>
          </Link>
          <Link href="/dashboard/blog" className="flex items-center gap-3 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
            <Sparkles className="h-6 w-6 text-green-600" />
            <div>
              <p className="font-medium text-green-900">Criar Post</p>
              <p className="text-sm text-green-700">Escreva um novo artigo</p>
            </div>
          </Link>
          <Link href="/dashboard/settings" className="flex items-center gap-3 p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
            <Settings className="h-6 w-6 text-purple-600" />
            <div>
              <p className="font-medium text-purple-900">Configurações</p>
              <p className="text-sm text-purple-700">Personalize seu site</p>
            </div>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
