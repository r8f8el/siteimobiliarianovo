"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Megaphone, 
  Plus, 
  Eye, 
  Edit, 
  Trash2, 
  Target,
  TrendingUp,
  DollarSign,
  Users,
  Image as ImageIcon,
  FileText,
  Building2,
  X,
  Filter,
  Search,
  Calendar,
  BarChart3,
  Download,
  Settings,
  Play,
  Pause,
  Square
} from "lucide-react";

// Dados de exemplo para anúncios
const mockAds = [
  {
    id: 1,
    title: "Apartamento 3 quartos - Centro",
    type: "imovel",
    status: "ativo",
    budget: 500,
    spent: 150,
    impressions: 1250,
    clicks: 45,
    ctr: 3.6,
    created: "2024-01-15",
    image: "/api/placeholder/300/200"
  },
  {
    id: 2,
    title: "Casa com piscina - Zona Sul",
    type: "imovel",
    status: "pausado",
    budget: 800,
    spent: 320,
    impressions: 2100,
    clicks: 78,
    ctr: 3.7,
    created: "2024-01-10",
    image: "/api/placeholder/300/200"
  },
  {
    id: 3,
    title: "Promoção Black Friday",
    type: "promocao",
    status: "ativo",
    budget: 1000,
    spent: 450,
    impressions: 3500,
    clicks: 120,
    ctr: 3.4,
    created: "2024-01-20",
    image: "/api/placeholder/300/200"
  }
];

const adTypes = [
  { value: "imovel", label: "Imóvel", icon: Building2 },
  { value: "promocao", label: "Promoção", icon: TrendingUp },
  { value: "servico", label: "Serviço", icon: Users },
  { value: "blog", label: "Blog", icon: FileText }
];

export default function AdsPage() {
  const [ads, setAds] = useState(mockAds);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [selectedAd, setSelectedAd] = useState<{ id: number; title: string; description: string; status: string; budget: number; targetAudience: string; startDate: string; endDate: string } | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedAdForAnalytics, setSelectedAdForAnalytics] = useState<number | null>(null);
  const [showAnalyticsModal, setShowAnalyticsModal] = useState(false);

  const handleCreateAd = () => {
    setShowCreateForm(true);
  };

  const handleSubmitAd = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const newAd = {
      id: Math.max(...ads.map(ad => ad.id)) + 1,
      title: formData.get('title') as string,
      type: formData.get('type') as string,
      status: 'ativo',
      budget: parseInt(formData.get('budget') as string) || 0,
      spent: 0,
      impressions: 0,
      clicks: 0,
      ctr: 0,
      created: new Date().toISOString().split('T')[0],
      image: "/api/placeholder/300/200"
    };
    
    setAds([...ads, newAd]);
    setShowCreateForm(false);
    setSelectedAd(null);
    alert('Anúncio criado com sucesso!');
  };

  const handleEditAd = (ad: { id: number; title: string; description: string; status: string; budget: number; targetAudience: string; startDate: string; endDate: string }) => {
    setSelectedAd(ad);
    setShowCreateForm(true);
  };

  const handleDeleteAd = (id: number) => {
    setAds(ads.filter(ad => ad.id !== id));
  };

  const handleToggleStatus = (id: number) => {
    setAds(ads.map(ad => 
      ad.id === id 
        ? { ...ad, status: ad.status === "ativo" ? "pausado" : "ativo" }
        : ad
    ));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "ativo": return "bg-green-100 text-green-800";
      case "pausado": return "bg-yellow-100 text-yellow-800";
      case "finalizado": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "ativo": return "Ativo";
      case "pausado": return "Pausado";
      case "finalizado": return "Finalizado";
      default: return "Desconhecido";
    }
  };

  // Filtrar anúncios
  const filteredAds = ads.filter(ad => {
    const matchesSearch = ad.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || ad.status === statusFilter;
    const matchesType = typeFilter === "all" || ad.type === typeFilter;
    return matchesSearch && matchesStatus && matchesType;
  });

  // Calcular métricas
  const totalBudget = ads.reduce((sum, ad) => sum + ad.budget, 0);
  const totalSpent = ads.reduce((sum, ad) => sum + ad.spent, 0);
  const totalImpressions = ads.reduce((sum, ad) => sum + ad.impressions, 0);
  const totalClicks = ads.reduce((sum, ad) => sum + ad.clicks, 0);
  const averageCTR = ads.length > 0 ? (ads.reduce((sum, ad) => sum + ad.ctr, 0) / ads.length) : 0;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Anúncios</h1>
          <p className="text-muted-foreground">Gerencie seus anúncios e campanhas publicitárias</p>
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
            onClick={handleCreateAd}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Plus className="h-4 w-4" />
            Criar Anúncio
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
                  placeholder="Buscar anúncios..."
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
                <option value="ativo">Ativo</option>
                <option value="pausado">Pausado</option>
                <option value="finalizado">Finalizado</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Tipo</label>
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="all">Todos</option>
                <option value="imovel">Imóvel</option>
                <option value="promocao">Promoção</option>
                <option value="servico">Serviço</option>
                <option value="blog">Blog</option>
              </select>
            </div>
            <div className="flex items-end">
              <button
                onClick={() => {
                  setSearchTerm("");
                  setStatusFilter("all");
                  setTypeFilter("all");
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
              <p className="text-sm font-medium text-muted-foreground">Total de Anúncios</p>
              <p className="text-2xl font-bold text-foreground">{ads.length}</p>
              <p className="text-xs text-green-600 mt-1">+2 este mês</p>
            </div>
            <div className="h-12 w-12 bg-primary/20 rounded-lg flex items-center justify-center">
              <Megaphone className="h-6 w-6 text-primary" />
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
              <p className="text-sm font-medium text-muted-foreground">Orçamento Total</p>
              <p className="text-2xl font-bold text-foreground">R$ {totalBudget.toLocaleString()}</p>
              <p className="text-xs text-muted-foreground mt-1">Gasto: R$ {totalSpent.toLocaleString()}</p>
            </div>
            <div className="h-12 w-12 bg-green-500/20 rounded-lg flex items-center justify-center">
              <DollarSign className="h-6 w-6 text-green-500" />
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
              <p className="text-sm font-medium text-muted-foreground">Impressões</p>
              <p className="text-2xl font-bold text-foreground">{totalImpressions.toLocaleString()}</p>
              <p className="text-xs text-muted-foreground mt-1">Clicks: {totalClicks.toLocaleString()}</p>
            </div>
            <div className="h-12 w-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
              <Eye className="h-6 w-6 text-purple-500" />
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
              <p className="text-sm font-medium text-muted-foreground">CTR Médio</p>
              <p className="text-2xl font-bold text-foreground">{averageCTR.toFixed(1)}%</p>
              <p className="text-xs text-green-600 mt-1">+0.3% vs mês anterior</p>
            </div>
            <div className="h-12 w-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
              <Target className="h-6 w-6 text-orange-500" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Ads List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-card rounded-xl border border-border"
      >
        <div className="p-6 border-b border-border">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-foreground">Meus Anúncios</h2>
            <div className="flex items-center gap-2">
              <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
                <Download className="h-4 w-4" />
              </button>
              <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
                <Settings className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="divide-y divide-border">
          {filteredAds.map((ad) => (
            <div key={ad.id} className="p-6 hover:bg-accent/50 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 bg-muted rounded-lg flex items-center justify-center">
                    <ImageIcon className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">{ad.title}</h3>
                    <div className="flex items-center gap-4 mt-1">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(ad.status)}`}>
                        {getStatusLabel(ad.status)}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        Criado em {new Date(ad.created).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Orçamento</p>
                    <p className="font-medium text-foreground">R$ {ad.budget}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Gasto</p>
                    <p className="font-medium text-foreground">R$ {ad.spent}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">CTR</p>
                    <p className="font-medium text-foreground">{ad.ctr}%</p>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        setSelectedAdForAnalytics(ad.id);
                        setShowAnalyticsModal(true);
                      }}
                      className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                      title="Ver Analytics"
                    >
                      <BarChart3 className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleToggleStatus(ad.id)}
                      className={`p-2 rounded-md transition-colors ${
                        ad.status === "ativo" 
                          ? "text-yellow-600 hover:bg-yellow-100" 
                          : "text-green-600 hover:bg-green-100"
                      }`}
                      title={ad.status === "ativo" ? "Pausar" : "Ativar"}
                    >
                      {ad.status === "ativo" ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                    </button>
                    <button
                      onClick={() => handleEditAd(ad)}
                      className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                      title="Editar"
                    >
                      <Edit className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteAd(ad.id)}
                      className="p-2 text-muted-foreground hover:text-red-600 transition-colors"
                      title="Excluir"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Create/Edit Form Modal */}
      {showCreateForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl p-6 w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                {selectedAd ? "Editar Anúncio" : "Criar Novo Anúncio"}
              </h2>
              <button
                onClick={() => {
                  setShowCreateForm(false);
                  setSelectedAd(null);
                }}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <form onSubmit={handleSubmitAd} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Título do Anúncio
                </label>
                <input
                  type="text"
                  name="title"
                  defaultValue={selectedAd?.title || ""}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Ex: Apartamento 3 quartos - Centro"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tipo de Anúncio
                </label>
                <select name="type" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" required>
                  {adTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Orçamento (R$)
                  </label>
                  <input
                    type="number"
                    name="budget"
                    defaultValue={selectedAd?.budget || ""}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Duração (dias)
                  </label>
                  <input
                    type="number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="30"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Descrição
                </label>
                <textarea
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Descreva seu anúncio..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Imagem do Anúncio
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <ImageIcon className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Clique para fazer upload ou arraste uma imagem</p>
                  <input type="file" className="hidden" accept="image/*" />
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowCreateForm(false);
                    setSelectedAd(null);
                  }}
                  className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {selectedAd ? "Salvar Alterações" : "Criar Anúncio"}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}

      {/* Analytics Modal */}
      {showAnalyticsModal && selectedAdForAnalytics && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-card rounded-xl p-6 w-full max-w-4xl mx-4 max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-foreground">Analytics do Anúncio</h2>
              <button
                onClick={() => {
                  setShowAnalyticsModal(false);
                  setSelectedAdForAnalytics(null);
                }}
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {(() => {
              const ad = ads.find(a => a.id === selectedAdForAnalytics);
              if (!ad) return null;
              
              return (
                <div className="space-y-6">
                  <div className="bg-muted rounded-lg p-4">
                    <h3 className="font-semibold text-foreground mb-2">{ad.title}</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-foreground">{ad.impressions.toLocaleString()}</div>
                        <div className="text-sm text-muted-foreground">Impressões</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-foreground">{ad.clicks.toLocaleString()}</div>
                        <div className="text-sm text-muted-foreground">Cliques</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-foreground">{ad.ctr}%</div>
                        <div className="text-sm text-muted-foreground">CTR</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-foreground">R$ {ad.spent.toLocaleString()}</div>
                        <div className="text-sm text-muted-foreground">Gasto</div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-muted rounded-lg p-4">
                      <h4 className="font-semibold text-foreground mb-3">Performance por Dia</h4>
                      <div className="space-y-2">
                        {[1, 2, 3, 4, 5, 6, 7].map(day => (
                          <div key={day} className="flex justify-between items-center">
                            <span className="text-sm text-muted-foreground">Dia {day}</span>
                            <div className="flex items-center gap-4">
                              <span className="text-sm text-foreground">{Math.floor(ad.impressions / 7)} impressões</span>
                              <span className="text-sm text-foreground">{Math.floor(ad.clicks / 7)} cliques</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-muted rounded-lg p-4">
                      <h4 className="font-semibold text-foreground mb-3">Métricas de Conversão</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Taxa de Clique</span>
                          <span className="text-sm font-medium text-foreground">{ad.ctr}%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Custo por Clique</span>
                          <span className="text-sm font-medium text-foreground">R$ {(ad.spent / ad.clicks).toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Orçamento Restante</span>
                          <span className="text-sm font-medium text-foreground">R$ {(ad.budget - ad.spent).toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-end gap-3 pt-4">
                    <button
                      onClick={() => {
                        setShowAnalyticsModal(false);
                        setSelectedAdForAnalytics(null);
                      }}
                      className="px-4 py-2 text-muted-foreground border border-border rounded-lg hover:bg-accent transition-colors"
                    >
                      Fechar
                    </button>
                    <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                      Exportar Relatório
                    </button>
                  </div>
                </div>
              );
            })()}
          </motion.div>
        </div>
      )}
    </div>
  );
}
