"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, 
  Copy, 
  Check, 
  RefreshCw,
  Download,
  Share2
} from "lucide-react";

interface AIContentGeneratorProps {
  propertyData: {
    title: string;
    type: string;
    bedrooms: number;
    bathrooms: number;
    area: number;
    price: number;
    location: string;
    features: string[];
  };
  onClose: () => void;
}

export function AIContentGenerator({ propertyData, onClose }: AIContentGeneratorProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<{
    description: string;
    socialMedia: string;
    seoTitle: string;
  } | null>(null);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const generateContent = async () => {
    setIsGenerating(true);
    
    // Simular delay da IA
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Conteúdo gerado pela IA (simulado)
    const content = {
      description: `Apartamento moderno de ${propertyData.bedrooms} quartos com acabamento de primeira qualidade. Localizado em ${propertyData.location}, oferece ${propertyData.area}m² de área útil com ${propertyData.bathrooms} banheiros completos.

A sala ampla integrada à cozinha americana cria um ambiente perfeito para receber amigos e família. Os quartos são bem iluminados e ventilados, garantindo conforto em todos os momentos.

O apartamento conta com ${propertyData.features.join(', ').toLowerCase()}, proporcionando praticidade e bem-estar para toda a família.

Próximo a escolas, shoppings, transporte público e principais vias de acesso, oferece a conveniência que você procura.

Uma excelente oportunidade para quem busca qualidade de vida, conforto e localização privilegiada. Agende sua visita!`,

      socialMedia: `🏠 OPORTUNIDADE ÚNICA! 

Apartamento ${propertyData.bedrooms} quartos em ${propertyData.location}
${propertyData.area}m² • ${propertyData.bathrooms} banheiros

✨ ${propertyData.features.slice(0, 3).join(' • ')}

📍 Localização privilegiada
🚇 Próximo ao transporte público
🛍️ Shopping e escolas na região

💰 R$ ${propertyData.price.toLocaleString('pt-BR')}

📱 Entre em contato e agende sua visita!

#imoveis #apartamento #${propertyData.location.replace(/\s+/g, '')} #oportunidade`,

      seoTitle: `Apartamento ${propertyData.bedrooms} quartos ${propertyData.location} - R$ ${propertyData.price.toLocaleString('pt-BR')}`
    };
    
    setGeneratedContent(content);
    setIsGenerating(false);
  };

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (error) {
      console.error('Erro ao copiar:', error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Sparkles className="h-7 w-7" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">IA Gerou seu Conteúdo! ✨</h2>
                <p className="text-blue-100">Conteúdo profissional criado automaticamente</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          {!generatedContent ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Sparkles className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Pronto para gerar conteúdo com IA?
              </h3>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                Nossa IA vai analisar as informações do seu imóvel e criar descrições profissionais, posts para redes sociais e títulos otimizados para SEO.
              </p>
              <button
                onClick={generateContent}
                disabled={isGenerating}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isGenerating ? (
                  <div className="flex items-center gap-2">
                    <RefreshCw className="h-5 w-5 animate-spin" />
                    Gerando conteúdo...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5" />
                    Gerar com IA
                  </div>
                )}
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Descrição Completa */}
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                    📝 Descrição Completa
                  </h3>
                  <button
                    onClick={() => copyToClipboard(generatedContent.description, 'description')}
                    className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    {copiedField === 'description' ? (
                      <Check className="h-4 w-4 text-green-600" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                    {copiedField === 'description' ? 'Copiado!' : 'Copiar'}
                  </button>
                </div>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {generatedContent.description}
                </p>
              </div>

              {/* Post para Redes Sociais */}
              <div className="bg-blue-50 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                    📱 Post para Redes Sociais
                  </h3>
                  <button
                    onClick={() => copyToClipboard(generatedContent.socialMedia, 'social')}
                    className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    {copiedField === 'social' ? (
                      <Check className="h-4 w-4 text-green-600" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                    {copiedField === 'social' ? 'Copiado!' : 'Copiar'}
                  </button>
                </div>
                <div className="bg-white rounded-lg p-4 border border-blue-200">
                  <p className="text-gray-800 whitespace-pre-line">
                    {generatedContent.socialMedia}
                  </p>
                </div>
              </div>

              {/* Título SEO */}
              <div className="bg-green-50 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                    🔍 Título para SEO
                  </h3>
                  <button
                    onClick={() => copyToClipboard(generatedContent.seoTitle, 'seo')}
                    className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    {copiedField === 'seo' ? (
                      <Check className="h-4 w-4 text-green-600" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                    {copiedField === 'seo' ? 'Copiado!' : 'Copiar'}
                  </button>
                </div>
                <div className="bg-white rounded-lg p-4 border border-green-200">
                  <p className="text-gray-800 font-medium">
                    {generatedContent.seoTitle}
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4 pt-6">
                <button
                  onClick={generateContent}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <RefreshCw className="h-4 w-4" />
                  Regenerar Conteúdo
                </button>
                <button
                  onClick={onClose}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Check className="h-4 w-4" />
                  Usar Conteúdo
                </button>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
