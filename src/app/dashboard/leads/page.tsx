"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Users, 
  Plus, 
  Search, 
  Filter, 
  Phone, 
  Mail, 
  MessageSquare, 
  Calendar,
  MapPin,
  Building2,
  DollarSign,
  Clock,
  Star,
  MoreVertical,
  Eye,
  Edit,
  Trash2,
  UserPlus,
  TrendingUp,
  Target,
  CheckCircle,
  AlertCircle,
  XCircle,
  FileText,
  X
} from "lucide-react";

// Dados de exemplo para leads
const mockLeads = [
  {
    id: 1,
    name: "Maria Silva",
    email: "maria@email.com",
    phone: "(11) 99999-9999",
    source: "Site",
    status: "novo",
    property: "Apartamento 3 quartos - Centro",
    budget: 450000,
    lastContact: "2024-01-20",
    notes: "Interessada em apartamento próximo ao metrô",
    priority: "alta",
    assignedTo: "João Corretor"
  },
  {
    id: 2,
    name: "Carlos Santos",
    email: "carlos@email.com",
    phone: "(11) 88888-8888",
    source: "Facebook",
    status: "contatado",
    property: "Casa com piscina - Zona Sul",
    budget: 800000,
    lastContact: "2024-01-19",
    notes: "Agendou visita para sábado",
    priority: "media",
    assignedTo: "Ana Corretora"
  },
  {
    id: 3,
    name: "Ana Costa",
    email: "ana@email.com",
    phone: "(11) 77777-7777",
    source: "Indicação",
    status: "proposta",
    property: "Cobertura - Vila Madalena",
    budget: 1200000,
    lastContact: "2024-01-18",
    notes: "Enviou proposta, aguardando resposta",
    priority: "alta",
    assignedTo: "João Corretor"
  },
  {
    id: 4,
    name: "Pedro Oliveira",
    email: "pedro@email.com",
    phone: "(11) 66666-6666",
    source: "Google Ads",
    status: "fechado",
    property: "Apartamento 2 quartos - Moema",
    budget: 350000,
    lastContact: "2024-01-15",
    notes: "Venda realizada com sucesso!",
    priority: "baixa",
    assignedTo: "Ana Corretora"
  }
];

const leadStatuses = [
  { value: "novo", label: "Novo", color: "bg-blue-100 text-blue-800", icon: UserPlus },
  { value: "contatado", label: "Contatado", color: "bg-yellow-100 text-yellow-800", icon: Phone },
  { value: "proposta", label: "Proposta", color: "bg-orange-100 text-orange-800", icon: FileText },
  { value: "fechado", label: "Fechado", color: "bg-green-100 text-green-800", icon: CheckCircle },
  { value: "perdido", label: "Perdido", color: "bg-red-100 text-red-800", icon: XCircle }
];

const priorityColors = {
  alta: "text-red-600",
  media: "text-yellow-600", 
  baixa: "text-green-600"
};

export default function LeadsPage() {
  const [leads, setLeads] = useState(mockLeads);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedLead, setSelectedLead] = useState<any>(null);
  const [showLeadModal, setShowLeadModal] = useState(false);
  const [viewMode, setViewMode] = useState<"list" | "pipeline">("list");

  // Filtrar leads
  const filteredLeads = leads.filter(lead => {
    const matchesSearch = 
      lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.phone.includes(searchTerm);
    const matchesStatus = statusFilter === "all" || lead.status === statusFilter;
    const matchesPriority = priorityFilter === "all" || lead.priority === priorityFilter;
    return matchesSearch && matchesStatus && matchesPriority;
  });

  // Calcular métricas
  const totalLeads = leads.length;
  const newLeads = leads.filter(l => l.status === "novo").length;
  const closedLeads = leads.filter(l => l.status === "fechado").length;
  const totalValue = leads.filter(l => l.status === "fechado").reduce((sum, l) => sum + l.budget, 0);
  const conversionRate = totalLeads > 0 ? (closedLeads / totalLeads * 100) : 0;

  // Agrupar leads por status para pipeline
  const leadsByStatus = leadStatuses.map(status => ({
    ...status,
    leads: filteredLeads.filter(lead => lead.status === status.value)
  }));

  const handleStatusChange = (leadId: number, newStatus: string) => {
    setLeads(leads.map(lead => 
      lead.id === leadId ? { ...lead, status: newStatus } : lead
    ));
  };

  const handleViewLead = (lead: any) => {
    setSelectedLead(lead);
    setShowLeadModal(true);
  };

  const handleCreateLead = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const newLead = {
      id: Math.max(...leads.map(lead => lead.id)) + 1,
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      source: formData.get('source') as string,
      status: 'novo',
      property: formData.get('property') as string,
      budget: parseInt(formData.get('budget') as string) || 0,
      lastContact: new Date().toISOString().split('T')[0],
      notes: formData.get('notes') as string,
      priority: formData.get('priority') as string,
      assignedTo: 'Usuário Atual'
    };
    
    setLeads([...leads, newLead]);
    setShowLeadModal(false);
    setSelectedLead(null);
    alert('Lead criado com sucesso!');
  };

  const handleDeleteLead = (id: number) => {
    if (confirm('Tem certeza que deseja excluir este lead?')) {
      setLeads(leads.filter(lead => lead.id !== id));
      alert('Lead excluído com sucesso!');
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Leads</h1>
          <p className="text-muted-foreground">Gerencie seus leads e pipeline de vendas</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center border border-border rounded-lg">
            <button
              onClick={() => setViewMode("list")}
              className={`px-3 py-2 text-sm transition-colors ${
                viewMode === "list" 
                  ? "bg-primary text-primary-foreground" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Lista
            </button>
            <button
              onClick={() => setViewMode("pipeline")}
              className={`px-3 py-2 text-sm transition-colors ${
                viewMode === "pipeline" 
                  ? "bg-primary text-primary-foreground" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Pipeline
            </button>
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-accent text-foreground transition-colors"
          >
            <Filter className="h-4 w-4" />
            Filtros
          </button>
          <button 
            onClick={() => setShowLeadModal(true)}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Plus className="h-4 w-4" />
            Novo Lead
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
                  placeholder="Nome, email ou telefone..."
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Status</label>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="all">Todos</option>
                {leadStatuses.map(status => (
                  <option key={status.value} value={status.value}>{status.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Prioridade</label>
              <select
                value={priorityFilter}
                onChange={(e) => setPriorityFilter(e.target.value)}
                className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="all">Todas</option>
                <option value="alta">Alta</option>
                <option value="media">Média</option>
                <option value="baixa">Baixa</option>
              </select>
            </div>
            <div className="flex items-end">
              <button
                onClick={() => {
                  setSearchTerm("");
                  setStatusFilter("all");
                  setPriorityFilter("all");
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
              <p className="text-sm font-medium text-muted-foreground">Total de Leads</p>
              <p className="text-2xl font-bold text-foreground">{totalLeads}</p>
              <p className="text-xs text-green-600 mt-1">+5 este mês</p>
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
              <p className="text-sm font-medium text-muted-foreground">Novos Leads</p>
              <p className="text-2xl font-bold text-foreground">{newLeads}</p>
              <p className="text-xs text-blue-600 mt-1">Precisam contato</p>
            </div>
            <div className="h-12 w-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
              <UserPlus className="h-6 w-6 text-blue-500" />
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
              <p className="text-sm font-medium text-muted-foreground">Taxa de Conversão</p>
              <p className="text-2xl font-bold text-foreground">{conversionRate.toFixed(1)}%</p>
              <p className="text-xs text-green-600 mt-1">+2.3% vs mês anterior</p>
            </div>
            <div className="h-12 w-12 bg-green-500/20 rounded-lg flex items-center justify-center">
              <Target className="h-6 w-6 text-green-500" />
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
              <p className="text-sm font-medium text-muted-foreground">Valor Fechado</p>
              <p className="text-2xl font-bold text-foreground">R$ {totalValue.toLocaleString()}</p>
              <p className="text-xs text-muted-foreground mt-1">{closedLeads} vendas</p>
            </div>
            <div className="h-12 w-12 bg-green-500/20 rounded-lg flex items-center justify-center">
              <DollarSign className="h-6 w-6 text-green-500" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Content */}
      {viewMode === "list" ? (
        /* Lista de Leads */
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-card rounded-xl border border-border"
        >
          <div className="p-6 border-b border-border">
            <h2 className="text-lg font-semibold text-foreground">Lista de Leads</h2>
          </div>
          
          <div className="divide-y divide-border">
            {filteredLeads.map((lead) => {
              const statusInfo = leadStatuses.find(s => s.value === lead.status);
              return (
                <div key={lead.id} className="p-6 hover:bg-accent/50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                        {lead.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground">{lead.name}</h3>
                        <div className="flex items-center gap-4 mt-1">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusInfo?.color}`}>
                            {statusInfo?.label}
                          </span>
                          <span className={`text-xs font-medium ${priorityColors[lead.priority as keyof typeof priorityColors]}`}>
                            {lead.priority.toUpperCase()}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {lead.source}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">Orçamento</p>
                        <p className="font-medium text-foreground">R$ {lead.budget.toLocaleString()}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">Último contato</p>
                        <p className="font-medium text-foreground">
                          {new Date(lead.lastContact).toLocaleDateString()}
                        </p>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleViewLead(lead)}
                          className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                          title="Ver detalhes"
                        >
                          <Eye className="h-4 w-4" />
                        </button>
                        <button 
                          onClick={() => handleViewLead(lead)}
                          className="p-2 text-muted-foreground hover:text-foreground transition-colors" 
                          title="Editar"
                        >
                          <Edit className="h-4 w-4" />
                        </button>
                        <button 
                          onClick={() => handleDeleteLead(lead.id)}
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
      ) : (
        /* Pipeline View */
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-5 gap-6"
        >
          {leadsByStatus.map((status) => (
            <div key={status.value} className="bg-card rounded-xl border border-border p-4">
              <div className="flex items-center gap-2 mb-4">
                <status.icon className="h-5 w-5" />
                <h3 className="font-semibold text-foreground">{status.label}</h3>
                <span className="bg-muted text-muted-foreground text-xs px-2 py-1 rounded-full">
                  {status.leads.length}
                </span>
              </div>
              
              <div className="space-y-3">
                {status.leads.map((lead) => (
                  <motion.div
                    key={lead.id}
                    whileHover={{ scale: 1.02 }}
                    className="bg-background rounded-lg p-3 border border-border cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => handleViewLead(lead)}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="h-6 w-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        {lead.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                      </div>
                      <span className="font-medium text-sm text-foreground">{lead.name}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">{lead.property}</p>
                    <p className="text-sm font-medium text-foreground">R$ {lead.budget.toLocaleString()}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      )}

      {/* Lead Detail Modal */}
      {showLeadModal && !selectedLead && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-card rounded-xl p-6 w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-foreground">Novo Lead</h2>
              <button
                onClick={() => setShowLeadModal(false)}
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <form onSubmit={handleCreateLead} className="space-y-6">
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
                  <label className="block text-sm font-medium text-foreground mb-2">Fonte</label>
                  <select name="source" className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent" required>
                    <option value="">Selecione</option>
                    <option value="Site">Site</option>
                    <option value="Google Ads">Google Ads</option>
                    <option value="Facebook">Facebook</option>
                    <option value="Indicação">Indicação</option>
                    <option value="Outros">Outros</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Orçamento (R$)</label>
                  <input
                    type="number"
                    name="budget"
                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="500000"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Prioridade</label>
                  <select name="priority" className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent" required>
                    <option value="baixa">Baixa</option>
                    <option value="media">Média</option>
                    <option value="alta">Alta</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Imóvel de Interesse</label>
                <input
                  type="text"
                  name="property"
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Ex: Apartamento 3 quartos - Centro"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Observações</label>
                <textarea
                  name="notes"
                  rows={3}
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Informações adicionais sobre o lead..."
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowLeadModal(false)}
                  className="px-4 py-2 text-muted-foreground border border-border rounded-lg hover:bg-accent transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Criar Lead
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}

      {/* Lead Detail Modal */}
      {showLeadModal && selectedLead && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-card rounded-xl p-6 w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-foreground">Detalhes do Lead</h2>
              <button
                onClick={() => setShowLeadModal(false)}
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {selectedLead.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{selectedLead.name}</h3>
                  <p className="text-muted-foreground">{selectedLead.email}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Telefone</label>
                  <p className="text-muted-foreground">{selectedLead.phone}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Fonte</label>
                  <p className="text-muted-foreground">{selectedLead.source}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Orçamento</label>
                  <p className="text-muted-foreground">R$ {selectedLead.budget.toLocaleString()}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Responsável</label>
                  <p className="text-muted-foreground">{selectedLead.assignedTo}</p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Imóvel de Interesse</label>
                <p className="text-muted-foreground">{selectedLead.property}</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Observações</label>
                <p className="text-muted-foreground">{selectedLead.notes}</p>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4">
                <button
                  onClick={() => setShowLeadModal(false)}
                  className="px-4 py-2 text-muted-foreground border border-border rounded-lg hover:bg-accent transition-colors"
                >
                  Fechar
                </button>
                <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                  Editar Lead
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}