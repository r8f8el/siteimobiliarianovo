"use client";
import { motion } from "framer-motion";
import { 
  MapPin, 
  Bed, 
  Bath, 
  Car, 
  Ruler, 
  Heart,
  Share2,
  Phone,
  MessageCircle,
  Star,
  Eye,
  Calendar
} from "lucide-react";
import Link from "next/link";

// Dados de exemplo para anúncios publicados
const publishedAds = [
  {
    id: 1,
    title: "Apartamento 3 quartos - Centro",
    price: "R$ 450.000",
    location: "Centro, São Paulo - SP",
    description: "Apartamento moderno com 3 quartos, 2 banheiros, sala ampla e cozinha planejada. Localizado no centro da cidade com fácil acesso ao transporte público.",
    features: {
      bedrooms: 3,
      bathrooms: 2,
      parking: 1,
      area: 85
    },
    images: [
      "/api/placeholder/400/300",
      "/api/placeholder/400/300",
      "/api/placeholder/400/300"
    ],
    agent: {
      name: "Maria Silva",
      phone: "(11) 99999-9999",
      email: "maria@imobiliaria.com",
      avatar: "MS",
      rating: 4.8,
      reviews: 127
    },
    published: "2024-01-15",
    views: 1250,
    likes: 45,
    isLiked: false
  },
  {
    id: 2,
    title: "Casa com piscina - Zona Sul",
    price: "R$ 850.000",
    location: "Vila Madalena, São Paulo - SP",
    description: "Casa espaçosa com 4 quartos, 3 banheiros, piscina, área gourmet e jardim. Perfeita para famílias que buscam conforto e lazer.",
    features: {
      bedrooms: 4,
      bathrooms: 3,
      parking: 2,
      area: 180
    },
    images: [
      "/api/placeholder/400/300",
      "/api/placeholder/400/300",
      "/api/placeholder/400/300"
    ],
    agent: {
      name: "João Santos",
      phone: "(11) 88888-8888",
      email: "joao@imobiliaria.com",
      avatar: "JS",
      rating: 4.9,
      reviews: 89
    },
    published: "2024-01-10",
    views: 2100,
    likes: 78,
    isLiked: true
  },
  {
    id: 3,
    title: "Loft moderno - Centro",
    price: "R$ 320.000",
    location: "República, São Paulo - SP",
    description: "Loft moderno e aconchegante, ideal para jovens profissionais. Ambiente integrado com design contemporâneo.",
    features: {
      bedrooms: 1,
      bathrooms: 1,
      parking: 0,
      area: 45
    },
    images: [
      "/api/placeholder/400/300",
      "/api/placeholder/400/300"
    ],
    agent: {
      name: "Ana Costa",
      phone: "(11) 77777-7777",
      email: "ana@imobiliaria.com",
      avatar: "AC",
      rating: 4.7,
      reviews: 156
    },
    published: "2024-01-20",
    views: 890,
    likes: 32,
    isLiked: false
  }
];

export default function AdsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Anúncios de Imóveis</h1>
              <p className="text-gray-600">Encontre o imóvel perfeito para você</p>
            </div>
            <Link 
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Voltar ao Site
            </Link>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Localização</label>
              <input
                type="text"
                placeholder="Digite a cidade ou bairro"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Tipo</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="">Todos os tipos</option>
                <option value="apartamento">Apartamento</option>
                <option value="casa">Casa</option>
                <option value="loft">Loft</option>
                <option value="studio">Studio</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Preço</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="">Qualquer preço</option>
                <option value="0-300000">Até R$ 300.000</option>
                <option value="300000-500000">R$ 300.000 - R$ 500.000</option>
                <option value="500000-800000">R$ 500.000 - R$ 800.000</option>
                <option value="800000+">Acima de R$ 800.000</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Quartos</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="">Qualquer</option>
                <option value="1">1 quarto</option>
                <option value="2">2 quartos</option>
                <option value="3">3 quartos</option>
                <option value="4+">4+ quartos</option>
              </select>
            </div>
          </div>
        </div>

        {/* Ads Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {publishedAds.map((ad, index) => (
            <motion.div
              key={ad.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Image */}
              <div className="relative h-48 bg-gray-200">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <button className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
                    <Heart className={`h-5 w-5 ${ad.isLiked ? 'text-red-500 fill-current' : 'text-gray-600'}`} />
                  </button>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-2xl font-bold">{ad.price}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">{ad.title}</h3>
                  <button className="p-1 text-gray-400 hover:text-gray-600">
                    <Share2 className="h-4 w-4" />
                  </button>
                </div>

                <div className="flex items-center gap-1 text-gray-600 mb-3">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{ad.location}</span>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{ad.description}</p>

                {/* Features */}
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Bed className="h-4 w-4" />
                    <span>{ad.features.bedrooms}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="h-4 w-4" />
                    <span>{ad.features.bathrooms}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Car className="h-4 w-4" />
                    <span>{ad.features.parking}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Ruler className="h-4 w-4" />
                    <span>{ad.features.area}m²</span>
                  </div>
                </div>

                {/* Agent Info */}
                <div className="flex items-center gap-3 mb-4 p-3 bg-gray-50 rounded-lg">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">
                    {ad.agent.avatar}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{ad.agent.name}</p>
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">{ad.agent.rating} ({ad.agent.reviews} avaliações)</span>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Eye className="h-4 w-4" />
                    <span>{ad.views} visualizações</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>Publicado em {new Date(ad.published).toLocaleDateString()}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    <Phone className="h-4 w-4" />
                    Ligar
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <button className="px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
            Carregar Mais Anúncios
          </button>
        </div>
      </div>
    </div>
  );
}

