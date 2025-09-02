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
  X
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
  const [selectedAd, setSelectedAd] = useState(null);

  const handleCreateAd = () => {
    setShowCreateForm(true);
  };

  const handleEditAd = (ad: any) => {
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

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Anúncios</h1>
          <p className="text-gray-600">Gerencie seus anúncios e campanhas publicitárias</p>
        </div>
        <button
          onClick={handleCreateAd}
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="h-4 w-4" />
          Criar Anúncio
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl border border-gray-200 p-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total de Anúncios</p>
              <p className="text-2xl font-bold text-gray-900">{ads.length}</p>
            </div>
            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Megaphone className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-xl border border-gray-200 p-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Orçamento Total</p>
              <p className="text-2xl font-bold text-gray-900">
                R$ {ads.reduce((sum, ad) => sum + ad.budget, 0).toLocaleString()}
              </p>
            </div>
            <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
              <DollarSign className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl border border-gray-200 p-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Impressões</p>
              <p className="text-2xl font-bold text-gray-900">
                {ads.reduce((sum, ad) => sum + ad.impressions, 0).toLocaleString()}
              </p>
            </div>
            <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Eye className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-xl border border-gray-200 p-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">CTR Médio</p>
              <p className="text-2xl font-bold text-gray-900">
                {(ads.reduce((sum, ad) => sum + ad.ctr, 0) / ads.length).toFixed(1)}%
              </p>
            </div>
            <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <Target className="h-6 w-6 text-orange-600" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Ads List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-xl border border-gray-200"
      >
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Meus Anúncios</h2>
        </div>
        
        <div className="divide-y divide-gray-200">
          {ads.map((ad) => (
            <div key={ad.id} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 bg-gray-200 rounded-lg flex items-center justify-center">
                    <ImageIcon className="h-8 w-8 text-gray-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{ad.title}</h3>
                    <div className="flex items-center gap-4 mt-1">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(ad.status)}`}>
                        {getStatusLabel(ad.status)}
                      </span>
                      <span className="text-sm text-gray-500">
                        Criado em {new Date(ad.created).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Orçamento</p>
                    <p className="font-medium">R$ {ad.budget}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Gasto</p>
                    <p className="font-medium">R$ {ad.spent}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">CTR</p>
                    <p className="font-medium">{ad.ctr}%</p>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleToggleStatus(ad.id)}
                      className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                        ad.status === "ativo" 
                          ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-200" 
                          : "bg-green-100 text-green-800 hover:bg-green-200"
                      }`}
                    >
                      {ad.status === "ativo" ? "Pausar" : "Ativar"}
                    </button>
                    <button
                      onClick={() => handleEditAd(ad)}
                      className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <Edit className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteAd(ad.id)}
                      className="p-2 text-gray-400 hover:text-red-600 transition-colors"
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

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Título do Anúncio
                </label>
                <input
                  type="text"
                  defaultValue={selectedAd?.title || ""}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Ex: Apartamento 3 quartos - Centro"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tipo de Anúncio
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
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
                    defaultValue={selectedAd?.budget || ""}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="500"
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
    </div>
  );
}
