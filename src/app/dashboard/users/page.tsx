"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Users, 
  Plus, 
  Search, 
  Filter, 
  Edit, 
  Trash2, 
  Eye, 
  Shield,
  UserCheck,
  UserX,
  Mail,
  Phone,
  Calendar,
  MapPin,
  Building2,
  Star,
  MoreVertical,
  Settings,
  Key,
  Bell,
  Globe,
  Lock,
  Unlock,
  Crown,
  User,
  UserPlus,
  Activity,
  TrendingUp,
  Award
} from "lucide-react";

// Dados de exemplo para usuários
const mockUsers = [
  {
    id: 1,
    name: "João Silva",
    email: "joao@seusite.com",
    phone: "(11) 99999-9999",
    role: "admin",
    status: "ativo",
    avatar: "/api/placeholder/100/100",
    lastLogin: "2024-01-20T10:30:00Z",
    createdAt: "2023-06-15",
    properties: 45,
    leads: 120,
    sales: 23,
    rating: 4.8,
    permissions: ["read", "write", "delete", "admin"],
    location: "São Paulo, SP"
  },
  {
    id: 2,
    name: "Ana Costa",
    email: "ana@seusite.com",
    phone: "(11) 88888-8888",
    role: "corretor",
    status: "ativo",
    avatar: "/api/placeholder/100/100",
    lastLogin: "2024-01-19T15:45:00Z",
    createdAt: "2023-08-20",
    properties: 32,
    leads: 89,
    sales: 18,
    rating: 4.6,
    permissions: ["read", "write"],
    location: "Rio de Janeiro, RJ"
  },
  {
    id: 3,
    name: "Carlos Santos",
    email: "carlos@seusite.com",
    phone: "(11) 77777-7777",
    role: "corretor",
    status: "inativo",
    avatar: "/api/placeholder/100/100",
    lastLogin: "2024-01-10T09:15:00Z",
    createdAt: "2023-09-10",
    properties: 15,
    leads: 45,
    sales: 8,
    rating: 4.2,
    permissions: ["read", "write"],
    location: "Belo Horizonte, MG"
  },
  {
    id: 4,
    name: "Maria Oliveira",
    email: "maria@seusite.com",
    phone: "(11) 66666-6666",
    role: "assistente",
    status: "ativo",
    avatar: "/api/placeholder/100/100",
    lastLogin: "2024-01-20T14:20:00Z",
    createdAt: "2023-11-05",
    properties: 0,
    leads: 25,
    sales: 0,
    rating: 4.5,
    permissions: ["read"],
    location: "Salvador, BA"
  }
];

const userRoles = [
  { value: "admin", label: "Administrador", color: "bg-red-100 text-red-800", icon: Crown },
  { value: "corretor", label: "Corretor", color: "bg-blue-100 text-blue-800", icon: UserCheck },
  { value: "assistente", label: "Assistente", color: "bg-green-100 text-green-800", icon: User },
  { value: "cliente", label: "Cliente", color: "bg-gray-100 text-gray-800", icon: UserPlus }
];

const statusOptions = [
  { value: "ativo", label: "Ativo", color: "bg-green-100 text-green-800" },
  { value: "inativo", label: "Inativo", color: "bg-gray-100 text-gray-800" },
  { value: "suspenso", label: "Suspenso", color: "bg-yellow-100 text-yellow-800" }
];

export default function UsersPage() {
  const [users, setUsers] = useState(mockUsers);
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [showUserModal, setShowUserModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);

  // Filtrar usuários
  const filteredUsers = users.filter(user => {
    const matchesSearch = 
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = roleFilter === "all" || user.role === roleFilter;
    const matchesStatus = statusFilter === "all" || user.status === statusFilter;
    return matchesSearch && matchesRole && matchesStatus;
  });

  // Calcular métricas
  const totalUsers = users.length;
  const activeUsers = users.filter(u => u.status === "ativo").length;
  const adminUsers = users.filter(u => u.role === "admin").length;
  const corretorUsers = users.filter(u => u.role === "corretor").length;

  const handleStatusChange = (userId: number, newStatus: string) => {
    setUsers(users.map(user => 
      user.id === userId ? { ...user, status: newStatus } : user
    ));
  };

  const handleRoleChange = (userId: number, newRole: string) => {
    setUsers(users.map(user => 
      user.id === userId ? { ...user, role: newRole } : user
    ));
  };

  const handleViewUser = (user: any) => {
    setSelectedUser(user);
    setShowUserModal(true);
  };

  const handleDeleteUser = (id: number) => {
    if (confirm('Tem certeza que deseja excluir este usuário?')) {
      setUsers(users.filter(user => user.id !== id));
      alert('Usuário excluído com sucesso!');
    }
  };

  const handleCreateUser = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const newUser = {
      id: Math.max(...users.map(user => user.id)) + 1,
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      role: formData.get('role') as string,
      status: 'ativo',
      avatar: "/api/placeholder/100/100",
      lastLogin: new Date().toISOString(),
      createdAt: new Date().toISOString().split('T')[0],
      properties: 0,
      leads: 0,
      sales: 0,
      rating: 5.0,
      permissions: formData.get('role') === 'admin' ? ['read', 'write', 'delete', 'admin'] : ['read', 'write'],
      location: formData.get('location') as string
    };
    
    setUsers([...users, newUser]);
    setShowCreateModal(false);
    alert('Usuário criado com sucesso!');
  };

  const handleSendEmail = (user: any) => {
    const subject = encodeURIComponent('Contato - Seusite');
    const body = encodeURIComponent(`Olá ${user.name},\n\nEspero que esteja bem!\n\nGostaria de entrar em contato...`);
    window.open(`mailto:${user.email}?subject=${subject}&body=${body}`);
  };

  const getRoleInfo = (role: string) => {
    return userRoles.find(r => r.value === role) || userRoles[0];
  };

  const getStatusInfo = (status: string) => {
    return statusOptions.find(s => s.value === status) || statusOptions[0];
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Usuários</h1>
          <p className="text-muted-foreground">Gerencie usuários, permissões e acessos</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-accent text-foreground transition-colors"
          >
            <Filter className="h-4 w-4" />
            Filtros
          </button>
          <button
            onClick={() => setShowCreateModal(true)}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Plus className="h-4 w-4" />
            Novo Usuário
          </button>
        </div>
      </div>

      {/* Filtros */}
      {showFilters && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="bg-card rounded-xl border border-border p-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Buscar</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Nome ou email..."
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Função</label>
              <select
                value={roleFilter}
                onChange={(e) => setRoleFilter(e.target.value)}
                className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="all">Todas</option>
                {userRoles.map(role => (
                  <option key={role.value} value={role.value}>{role.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Status</label>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="all">Todos</option>
                {statusOptions.map(status => (
                  <option key={status.value} value={status.value}>{status.label}</option>
                ))}
              </select>
            </div>
            <div className="flex items-end">
              <button
                onClick={() => {
                  setSearchTerm("");
                  setRoleFilter("all");
                  setStatusFilter("all");
                }}
                className="w-full px-4 py-2 border border-border rounded-lg hover:bg-accent text-foreground transition-colors"
              >
                Limpar Filtros
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card rounded-xl border border-border p-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Total de Usuários</p>
              <p className="text-2xl font-bold text-foreground">{totalUsers}</p>
              <p className="text-xs text-green-600 mt-1">+2 este mês</p>
            </div>
            <div className="h-12 w-12 bg-primary/20 rounded-lg flex items-center justify-center">
              <Users className="h-6 w-6 text-primary" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-card rounded-xl border border-border p-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Usuários Ativos</p>
              <p className="text-2xl font-bold text-foreground">{activeUsers}</p>
              <p className="text-xs text-green-600 mt-1">{((activeUsers/totalUsers)*100).toFixed(1)}% do total</p>
            </div>
            <div className="h-12 w-12 bg-green-500/20 rounded-lg flex items-center justify-center">
              <UserCheck className="h-6 w-6 text-green-500" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-card rounded-xl border border-border p-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Corretores</p>
              <p className="text-2xl font-bold text-foreground">{corretorUsers}</p>
              <p className="text-xs text-blue-600 mt-1">Ativos no sistema</p>
            </div>
            <div className="h-12 w-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
              <Building2 className="h-6 w-6 text-blue-500" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-card rounded-xl border border-border p-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Administradores</p>
              <p className="text-2xl font-bold text-foreground">{adminUsers}</p>
              <p className="text-xs text-red-600 mt-1">Acesso total</p>
            </div>
            <div className="h-12 w-12 bg-red-500/20 rounded-lg flex items-center justify-center">
              <Crown className="h-6 w-6 text-red-500" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Users List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-card rounded-xl border border-border"
      >
        <div className="p-6 border-b border-border">
          <h2 className="text-lg font-semibold text-foreground">Lista de Usuários</h2>
        </div>
        
        <div className="divide-y divide-border">
          {filteredUsers.map((user) => {
            const roleInfo = getRoleInfo(user.role);
            const statusInfo = getStatusInfo(user.status);
            return (
              <div key={user.id} className="p-6 hover:bg-accent/50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                      {user.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">{user.name}</h3>
                      <div className="flex items-center gap-4 mt-1">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${roleInfo.color}`}>
                          {roleInfo.label}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusInfo.color}`}>
                          {statusInfo.label}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {user.location}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Último acesso</p>
                      <p className="font-medium text-foreground">
                        {new Date(user.lastLogin).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Performance</p>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium text-foreground">{user.rating}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleViewUser(user)}
                        className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                        title="Ver perfil"
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                      <button 
                        onClick={() => handleViewUser(user)}
                        className="p-2 text-muted-foreground hover:text-foreground transition-colors" 
                        title="Editar"
                      >
                        <Edit className="h-4 w-4" />
                      </button>
                      <button 
                        onClick={() => handleSendEmail(user)}
                        className="p-2 text-muted-foreground hover:text-foreground transition-colors" 
                        title="Enviar Email"
                      >
                        <Mail className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleStatusChange(user.id, user.status === "ativo" ? "inativo" : "ativo")}
                        className={`p-2 transition-colors ${
                          user.status === "ativo" 
                            ? "text-yellow-600 hover:bg-yellow-100" 
                            : "text-green-600 hover:bg-green-100"
                        }`}
                        title={user.status === "ativo" ? "Desativar" : "Ativar"}
                      >
                        {user.status === "ativo" ? <UserX className="h-4 w-4" /> : <UserCheck className="h-4 w-4" />}
                      </button>
                      <button
                        onClick={() => handleDeleteUser(user.id)}
                        className="p-2 text-muted-foreground hover:text-red-600 transition-colors"
                        title="Excluir"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* User Detail Modal */}
      {showUserModal && selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-card rounded-xl p-6 w-full max-w-4xl mx-4 max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-foreground">Perfil do Usuário</h2>
              <button
                onClick={() => setShowUserModal(false)}
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Informações Pessoais */}
              <div className="lg:col-span-1">
                <div className="text-center mb-6">
                  <div className="h-24 w-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                    {selectedUser.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{selectedUser.name}</h3>
                  <p className="text-muted-foreground">{selectedUser.email}</p>
                  <div className="flex items-center justify-center gap-1 mt-2">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-foreground">{selectedUser.rating}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Telefone</label>
                    <p className="text-muted-foreground">{selectedUser.phone}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Localização</label>
                    <p className="text-muted-foreground">{selectedUser.location}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Membro desde</label>
                    <p className="text-muted-foreground">{new Date(selectedUser.createdAt).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Último acesso</label>
                    <p className="text-muted-foreground">{new Date(selectedUser.lastLogin).toLocaleString()}</p>
                  </div>
                </div>
              </div>

              {/* Estatísticas e Permissões */}
              <div className="lg:col-span-2 space-y-6">
                {/* Estatísticas */}
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-4">Estatísticas</h4>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-muted rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-foreground">{selectedUser.properties}</div>
                      <div className="text-sm text-muted-foreground">Imóveis</div>
                    </div>
                    <div className="bg-muted rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-foreground">{selectedUser.leads}</div>
                      <div className="text-sm text-muted-foreground">Leads</div>
                    </div>
                    <div className="bg-muted rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-foreground">{selectedUser.sales}</div>
                      <div className="text-sm text-muted-foreground">Vendas</div>
                    </div>
                  </div>
                </div>

                {/* Permissões */}
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-4">Permissões</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedUser.permissions.map((permission: string) => (
                      <div key={permission} className="flex items-center gap-2 bg-muted rounded-lg p-3">
                        <Shield className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-foreground capitalize">{permission}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Ações */}
                <div className="flex items-center justify-end gap-3 pt-4">
                  <button
                    onClick={() => setShowUserModal(false)}
                    className="px-4 py-2 text-muted-foreground border border-border rounded-lg hover:bg-accent transition-colors"
                  >
                    Fechar
                  </button>
                  <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                    Editar Usuário
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Create User Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-card rounded-xl p-6 w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-foreground">Novo Usuário</h2>
              <button
                onClick={() => setShowCreateModal(false)}
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <form onSubmit={handleCreateUser} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Nome</label>
                  <input
                    type="text"
                    name="name"
                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Nome completo"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="email@exemplo.com"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Telefone</label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="(11) 99999-9999"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Função</label>
                  <select name="role" className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent" required>
                    {userRoles.map(role => (
                      <option key={role.value} value={role.value}>{role.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Localização</label>
                <input
                  type="text"
                  name="location"
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Cidade, Estado"
                  required
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  className="px-4 py-2 text-muted-foreground border border-border rounded-lg hover:bg-accent transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Criar Usuário
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}
