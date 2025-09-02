"use client";
import { motion } from "framer-motion";
import { Building2, Plus, Search, Filter, Eye, Edit, Trash2, Sparkles } from "lucide-react";
import Link from "next/link";

const properties = [
  {
    id: 1,
    title: "Casa Moderna com 3 Quartos",
    price: 850000,
    address: "Rua das Flores, 123 - Jardim América",
    status: "Ativo",
    type: "Casa",
    bedrooms: 3,
    bathrooms: 3,
    area: 180,
    views: 45,
    leads: 8,
    image: "/api/placeholder/300/200"
  },
  {
    id: 2,
    title: "Apartamento 2 Quartos Centro",
    price: 450000,
    address: "Av. Paulista, 1000 - Bela Vista",
    status: "Ativo",
    type: "Apartamento",
    bedrooms: 2,
    bathrooms: 2,
    area: 85,
    views: 32,
    leads: 5,
    image: "/api/placeholder/300/200"
  },
  {
    id: 3,
    title: "Casa com Piscina",
    price: 1200000,
    address: "Rua dos Jardins, 456 - Jardins",
    status: "Pendente",
    type: "Casa",
    bedrooms: 4,
    bathrooms: 4,
    area: 250,
    views: 28,
    leads: 3,
    image: "/api/placeholder/300/200"
  },
  {
    id: 4,
    title: "Loft Industrial",
    price: 380000,
    address: "Rua Augusta, 789 - Consolação",
    status: "Rascunho",
    type: "Loft",
    bedrooms: 1,
    bathrooms: 1,
    area: 65,
    views: 12,
    leads: 1,
    image: "/api/placeholder/300/200"
  }
];

export default function PropertiesPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Imóveis</h1>
          <p className="text-gray-600">Gerencie seus imóveis e acompanhe o desempenho</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-pink-500 text-white rounded-lg hover:from-blue-600 hover:to-pink-600 transition-all duration-200">
            <Sparkles className="h-4 w-4" />
            Gerar com IA
          </button>
          <Link href="/dashboard/properties/new" className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
            <Plus className="h-4 w-4" />
            Novo Imóvel
          </Link>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar imóveis..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Todos os status</option>
              <option>Ativo</option>
              <option>Pendente</option>
              <option>Rascunho</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Todos os tipos</option>
              <option>Casa</option>
              <option>Apartamento</option>
              <option>Loft</option>
            </select>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Filter className="h-4 w-4" />
              Filtros
            </button>
          </div>
        </div>
      </div>

      {/* Properties Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property, index) => (
          <motion.div
            key={property.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
          >
            {/* Image */}
            <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <Building2 className="h-12 w-12 mx-auto mb-2" />
                  <div className="text-sm">Imagem do Imóvel</div>
                </div>
              </div>
              <div className="absolute top-3 left-3">
                <span className={`px-2 py-1 text-xs rounded-full ${
                  property.status === 'Ativo' ? 'bg-green-100 text-green-800' :
                  property.status === 'Pendente' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {property.status}
                </span>
              </div>
              <div className="absolute top-3 right-3">
                <div className="flex gap-1">
                  <button className="p-1 bg-white/80 rounded-full hover:bg-white transition-colors">
                    <Eye className="h-4 w-4 text-gray-600" />
                  </button>
                  <button className="p-1 bg-white/80 rounded-full hover:bg-white transition-colors">
                    <Edit className="h-4 w-4 text-gray-600" />
                  </button>
                  <button className="p-1 bg-white/80 rounded-full hover:bg-white transition-colors">
                    <Trash2 className="h-4 w-4 text-red-600" />
                  </button>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2">{property.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{property.address}</p>
              
              <div className="flex items-center justify-between mb-3">
                <span className="text-lg font-bold text-gray-900">R$ {property.price.toLocaleString('pt-BR')}</span>
                <span className="text-sm text-gray-500">{property.type}</span>
              </div>

              <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                <span>{property.bedrooms} quartos</span>
                <span>{property.bathrooms} banheiros</span>
                <span>{property.area}m²</span>
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-4">
                  <span className="text-gray-600">{property.views} visualizações</span>
                  <span className="text-gray-600">{property.leads} leads</span>
                </div>
                <button className="text-blue-600 hover:text-blue-700 font-medium">
                  Ver detalhes
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Empty State (when no properties) */}
      {properties.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-12"
        >
          <Building2 className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Nenhum imóvel encontrado</h3>
          <p className="text-gray-600 mb-6">Comece adicionando seu primeiro imóvel</p>
          <Link href="/dashboard/properties/new" className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Plus className="h-4 w-4" />
            Adicionar Imóvel
          </Link>
        </motion.div>
      )}
    </div>
  );
}
