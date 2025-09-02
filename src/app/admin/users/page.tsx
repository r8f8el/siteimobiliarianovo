"use client";
import { motion } from "framer-motion";
import { Users, Search, Filter, MoreVertical, Eye, Edit, Trash2, UserCheck, UserX, Mail } from "lucide-react";
import { useState } from "react";

const users = [
  {
    id: 1,
    name: "João Silva",
    email: "joao@exemplo.com",
    plan: "Pro",
    status: "Ativo",
    signupDate: "2024-01-15",
    lastLogin: "2024-01-20",
    properties: 12,
    leads: 45,
    avatar: "JS"
  },
  {
    id: 2,
    name: "Maria Santos",
    email: "maria@exemplo.com",
    plan: "Starter",
    status: "Ativo",
    signupDate: "2024-01-10",
    lastLogin: "2024-01-19",
    properties: 3,
    leads: 8,
    avatar: "MS"
  },
  {
    id: 3,
    name: "Carlos Oliveira",
    email: "carlos@exemplo.com",
    plan: "Pro",
    status: "Pendente",
    signupDate: "2024-01-18",
    lastLogin: "2024-01-18",
    properties: 0,
    leads: 0,
    avatar: "CO"
  },
  {
    id: 4,
    name: "Ana Costa",
    email: "ana@exemplo.com",
    plan: "Starter",
    status: "Suspenso",
    signupDate: "2024-01-05",
    lastLogin: "2024-01-15",
    properties: 2,
    leads: 5,
    avatar: "AC"
  },
  {
    id: 5,
    name: "Pedro Lima",
    email: "pedro@exemplo.com",
    plan: "Pro",
    status: "Ativo",
    signupDate: "2024-01-12",
    lastLogin: "2024-01-20",
    properties: 8,
    leads: 23,
    avatar: "PL"
  }
];

const statusConfig = {
  "Ativo": "bg-green-100 text-green-800",
  "Pendente": "bg-yellow-100 text-yellow-800",
  "Suspenso": "bg-red-100 text-red-800"
};

const planConfig = {
  "Pro": "bg-blue-100 text-blue-800",
  "Starter": "bg-gray-100 text-gray-800"
};

export default function UsersPage() {
  const [selectedUsers, setSelectedUsers] = useState<number[]>([]);
  const [showActions, setShowActions] = useState<number | null>(null);

  const handleSelectUser = (userId: number) => {
    setSelectedUsers(prev => 
      prev.includes(userId) 
        ? prev.filter(id => id !== userId)
        : [...prev, userId]
    );
  };

  const handleSelectAll = () => {
    if (selectedUsers.length === users.length) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(users.map(user => user.id));
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Usuários</h1>
          <p className="text-gray-600">Gerencie todos os usuários da plataforma</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
            <Filter className="h-4 w-4" />
            Filtros
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
            <Users className="h-4 w-4" />
            Novo Usuário
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Total de Usuários", value: "1,234", change: "+12%", color: "blue" },
          { label: "Usuários Ativos", value: "1,089", change: "+8%", color: "green" },
          { label: "Assinaturas Pro", value: "456", change: "+15%", color: "purple" },
          { label: "Novos este Mês", value: "89", change: "+23%", color: "orange" }
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
                placeholder="Buscar usuários..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Todos os status</option>
              <option>Ativo</option>
              <option>Pendente</option>
              <option>Suspenso</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Todos os planos</option>
              <option>Pro</option>
              <option>Starter</option>
            </select>
          </div>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left">
                  <input
                    type="checkbox"
                    checked={selectedUsers.length === users.length}
                    onChange={handleSelectAll}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Usuário</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Plano</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Atividade</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cadastro</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {users.map((user, index) => (
                <motion.tr
                  key={user.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="hover:bg-gray-50"
                >
                  <td className="px-6 py-4">
                    <input
                      type="checkbox"
                      checked={selectedUsers.includes(user.id)}
                      onChange={() => handleSelectUser(user.id)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-pink-500 flex items-center justify-center text-white font-bold text-sm">
                        {user.avatar}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{user.name}</div>
                        <div className="text-sm text-gray-500">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-xs rounded-full ${planConfig[user.plan as keyof typeof planConfig]}`}>
                      {user.plan}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-xs rounded-full ${statusConfig[user.status as keyof typeof statusConfig]}`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    <div>{user.properties} imóveis</div>
                    <div>{user.leads} leads</div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {new Date(user.signupDate).toLocaleDateString('pt-BR')}
                  </td>
                  <td className="px-6 py-4">
                    <div className="relative">
                      <button
                        onClick={() => setShowActions(showActions === user.id ? null : user.id)}
                        className="p-1 text-gray-400 hover:text-gray-600"
                      >
                        <MoreVertical className="h-4 w-4" />
                      </button>
                      {showActions === user.id && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-10">
                          <div className="py-1">
                            <button className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                              <Eye className="h-4 w-4" />
                              Ver perfil
                            </button>
                            <button className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                              <Edit className="h-4 w-4" />
                              Editar
                            </button>
                            <button className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                              <Mail className="h-4 w-4" />
                              Enviar e-mail
                            </button>
                            {user.status === 'Ativo' ? (
                              <button className="flex items-center gap-2 w-full px-4 py-2 text-sm text-yellow-700 hover:bg-yellow-50">
                                <UserX className="h-4 w-4" />
                                Suspender
                              </button>
                            ) : (
                              <button className="flex items-center gap-2 w-full px-4 py-2 text-sm text-green-700 hover:bg-green-50">
                                <UserCheck className="h-4 w-4" />
                                Ativar
                              </button>
                            )}
                            <button className="flex items-center gap-2 w-full px-4 py-2 text-sm text-red-700 hover:bg-red-50">
                              <Trash2 className="h-4 w-4" />
                              Excluir
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Bulk Actions */}
      {selectedUsers.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-blue-50 border border-blue-200 rounded-lg p-4"
        >
          <div className="flex items-center justify-between">
            <span className="text-sm text-blue-800">
              {selectedUsers.length} usuário(s) selecionado(s)
            </span>
            <div className="flex gap-2">
              <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                Ativar
              </button>
              <button className="px-3 py-1 text-sm bg-yellow-600 text-white rounded hover:bg-yellow-700 transition-colors">
                Suspender
              </button>
              <button className="px-3 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700 transition-colors">
                Excluir
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

