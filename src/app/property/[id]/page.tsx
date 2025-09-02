"use client";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Bed, Bath, Square, Car, Phone, Mail, Calculator, Play, ChevronLeft, ChevronRight, Wifi, Shield, TreePine, Waves, Mountain, Utensils, Dumbbell, Camera, Map, Star, Calendar, Eye, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ShareButton } from "@/components/ShareButton";
import { FavoriteButton } from "@/components/FavoriteButton";

// Dados fictícios do imóvel
const property = {
  id: "1",
  title: "Casa Moderna com 3 Quartos em Condomínio Fechado",
  price: 850000,
  address: "Rua das Flores, 123 - Jardim América, São Paulo - SP",
  description: "Casa moderna com acabamento de primeira qualidade, localizada em condomínio fechado com segurança 24h. Possui 3 quartos sendo 2 suítes, 3 banheiros, sala ampla integrada à cozinha americana, área gourmet com churrasqueira, piscina e jardim. Garagem para 2 carros. Próximo a escolas, shoppings e transporte público.",
  features: {
    bedrooms: 3,
    bathrooms: 3,
    area: 180,
    parking: 2,
    type: "Casa",
    status: "Venda",
    yearBuilt: 2020,
    floor: "Térreo",
    condominium: 450,
    iptu: 320
  },
  amenities: [
    { icon: <Wifi className="h-5 w-5" />, name: "Wi-Fi" },
    { icon: <Shield className="h-5 w-5" />, name: "Segurança 24h" },
    { icon: <TreePine className="h-5 w-5" />, name: "Jardim" },
    { icon: <Waves className="h-5 w-5" />, name: "Piscina" },
    { icon: <Utensils className="h-5 w-5" />, name: "Churrasqueira" },
    { icon: <Dumbbell className="h-5 w-5" />, name: "Academia" }
  ],
  images: [
    "/images/properties/house.svg",
    "/images/properties/apartment.svg", 
    "/images/properties/luxury.svg",
    "/images/properties/house.svg"
  ],
  virtualTour: "https://example.com/tour",
  views: 1247,
  saved: 23,
  published: "2024-01-15",
  agent: {
    name: "João Silva",
    phone: "(11) 99999-9999",
    email: "joao@exemplo.com",
    avatar: "/api/placeholder/100/100",
    rating: 4.8,
    properties: 45,
    experience: "5 anos"
  },
  location: {
    lat: -23.5505,
    lng: -46.6333,
    neighborhood: "Jardim América",
    city: "São Paulo",
    state: "SP"
  }
};

export default function PropertyPage() {
  const [currentImage, setCurrentImage] = useState(0);
  const [showCalculator, setShowCalculator] = useState(false);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-white hover:text-white/80">
            <ArrowLeft className="h-5 w-5" />
            <span>Voltar</span>
          </Link>
          <div className="flex items-center gap-4">
            <ShareButton 
              title={property.title}
              description={property.description}
              url={typeof window !== 'undefined' ? window.location.href : ''}
            />
            <FavoriteButton 
              propertyId={property.id}
            />
            <div className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-blue-500 to-pink-500 text-white font-bold text-sm">S</span>
              <span className="font-semibold text-white">Seusite</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Conteúdo Principal */}
          <div className="lg:col-span-2 space-y-6">
            {/* Galeria de Imagens Interativa */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-2xl overflow-hidden bg-white/5 border border-white/10 relative group"
            >
              <div className="aspect-[4/3] relative">
                <Image 
                  src={property.images[currentImage]} 
                  alt={`Imagem ${currentImage + 1} do imóvel`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Navegação da galeria */}
                <button 
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>

                {/* Indicadores */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {property.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentImage ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>

                {/* Contador de imagens */}
                <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1 text-white text-sm">
                  {currentImage + 1} / {property.images.length}
                </div>

                {/* Botão de tour virtual */}
                <div className="absolute top-4 right-4">
                  <a 
                    href={property.virtualTour}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-500/90 hover:bg-blue-500 text-white text-sm font-medium transition-colors"
                  >
                    <Play className="h-4 w-4" />
                    Tour Virtual
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Informações do Imóvel */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <h1 className="text-3xl font-bold text-white mb-3">{property.title}</h1>
                  <div className="flex items-center gap-2 text-white/70 mb-4">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{property.address}</span>
                  </div>
                  
                  {/* Estatísticas */}
                  <div className="flex items-center gap-6 text-sm text-white/60">
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      <span>{property.views} visualizações</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="h-4 w-4" />
                      <span>{property.saved} salvos</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>Publicado em {new Date(property.published).toLocaleDateString('pt-BR')}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-bold text-white mb-1">R$ {property.price.toLocaleString('pt-BR')}</div>
                  <div className="text-sm text-white/60 mb-2">{property.features.status}</div>
                  <div className="text-xs text-white/50">
                    Condomínio: R$ {property.features.condominium}/mês
                  </div>
                  <div className="text-xs text-white/50">
                    IPTU: R$ {property.features.iptu}/mês
                  </div>
                </div>
              </div>

              {/* Características Principais */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="flex items-center gap-2 text-white/80 bg-white/5 rounded-lg p-3">
                  <Bed className="h-5 w-5 text-blue-400" />
                  <div>
                    <div className="text-sm font-medium">{property.features.bedrooms}</div>
                    <div className="text-xs text-white/60">quartos</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-white/80 bg-white/5 rounded-lg p-3">
                  <Bath className="h-5 w-5 text-green-400" />
                  <div>
                    <div className="text-sm font-medium">{property.features.bathrooms}</div>
                    <div className="text-xs text-white/60">banheiros</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-white/80 bg-white/5 rounded-lg p-3">
                  <Square className="h-5 w-5 text-purple-400" />
                  <div>
                    <div className="text-sm font-medium">{property.features.area}m²</div>
                    <div className="text-xs text-white/60">área útil</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-white/80 bg-white/5 rounded-lg p-3">
                  <Car className="h-5 w-5 text-orange-400" />
                  <div>
                    <div className="text-sm font-medium">{property.features.parking}</div>
                    <div className="text-xs text-white/60">vagas</div>
                  </div>
                </div>
              </div>

              {/* Detalhes Adicionais */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="text-sm font-medium text-white mb-2">Detalhes do Imóvel</h4>
                  <div className="space-y-1 text-sm text-white/70">
                    <div>Ano de construção: {property.features.yearBuilt}</div>
                    <div>Andar: {property.features.floor}</div>
                    <div>Tipo: {property.features.type}</div>
                  </div>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="text-sm font-medium text-white mb-2">Custos Mensais</h4>
                  <div className="space-y-1 text-sm text-white/70">
                    <div>Condomínio: R$ {property.features.condominium}</div>
                    <div>IPTU: R$ {property.features.iptu}</div>
                    <div className="text-xs text-white/50">*Valores aproximados</div>
                  </div>
                </div>
              </div>

              {/* Comodidades */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-4">Comodidades</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {property.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center gap-2 text-white/80 bg-white/5 rounded-lg p-3">
                      <div className="text-blue-400">{amenity.icon}</div>
                      <span className="text-sm">{amenity.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Descrição */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Descrição</h3>
                <p className="text-white/80 leading-relaxed">{property.description}</p>
              </div>
            </motion.div>

            {/* Mapa */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6"
            >
              <h3 className="text-lg font-semibold text-white mb-4">Localização</h3>
              <div className="aspect-[16/9] bg-gradient-to-br from-blue-500/20 to-green-500/20 rounded-lg flex items-center justify-center relative overflow-hidden">
                <div className="text-center text-white/80">
                  <Map className="h-12 w-12 mx-auto mb-2 opacity-50" />
                  <div className="text-sm">Mapa interativo</div>
                  <div className="text-xs text-white/60 mt-1">
                    {property.location.neighborhood}, {property.location.city} - {property.location.state}
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <a 
                    href={`https://maps.google.com/?q=${property.location.lat},${property.location.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm transition-colors"
                  >
                    <Map className="h-4 w-4" />
                    Ver no Google Maps
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Calculadora de Financiamento */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">Financiamento</h3>
                <button 
                  onClick={() => setShowCalculator(!showCalculator)}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <Calculator className="h-4 w-4" />
                </button>
              </div>
              
              {showCalculator && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-white/70 mb-2">Entrada (%)</label>
                    <input 
                      type="range" 
                      min="10" 
                      max="50" 
                      defaultValue="20"
                      className="w-full"
                    />
                    <div className="text-sm text-white/60 mt-1">20% - R$ 170.000</div>
                  </div>
                  <div>
                    <label className="block text-sm text-white/70 mb-2">Prazo (anos)</label>
                    <input 
                      type="range" 
                      min="10" 
                      max="35" 
                      defaultValue="25"
                      className="w-full"
                    />
                    <div className="text-sm text-white/60 mt-1">25 anos</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3">
                    <div className="text-sm text-white/70">Parcela estimada</div>
                    <div className="text-2xl font-bold text-white">R$ 3.847/mês</div>
                    <div className="text-xs text-white/50 mt-1">*Taxa de 8,5% a.a.</div>
                  </div>
                </div>
              )}
            </motion.div>

            {/* Contato */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 sticky top-24"
            >
              <h3 className="text-lg font-semibold text-white mb-4">Entre em contato</h3>
              
              {/* Agente */}
              <div className="flex items-center gap-3 mb-6">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-pink-500 flex items-center justify-center text-white font-bold">
                  {property.agent.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex-1">
                  <div className="font-medium text-white">{property.agent.name}</div>
                  <div className="text-sm text-white/60">Corretor</div>
                  <div className="flex items-center gap-1 mt-1">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs text-white/70">{property.agent.rating}</span>
                    <span className="text-xs text-white/50">•</span>
                    <span className="text-xs text-white/70">{property.agent.experience}</span>
                  </div>
                </div>
              </div>

              {/* Formulário de Contato */}
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Seu nome" 
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input 
                  type="email" 
                  placeholder="Seu e-mail" 
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input 
                  type="tel" 
                  placeholder="Seu telefone" 
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea 
                  placeholder="Sua mensagem" 
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
                <button 
                  type="submit"
                  className="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-pink-500 text-white font-medium hover:from-blue-600 hover:to-pink-600 transition-all duration-200"
                >
                  Enviar Mensagem
                </button>
              </form>

              {/* Contatos Diretos */}
              <div className="mt-6 pt-6 border-t border-white/10 space-y-3">
                <a 
                  href={`tel:${property.agent.phone}`}
                  className="flex items-center gap-3 text-white/80 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5"
                >
                  <Phone className="h-4 w-4" />
                  <span className="text-sm">{property.agent.phone}</span>
                </a>
                <a 
                  href={`mailto:${property.agent.email}`}
                  className="flex items-center gap-3 text-white/80 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5"
                >
                  <Mail className="h-4 w-4" />
                  <span className="text-sm">{property.agent.email}</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
