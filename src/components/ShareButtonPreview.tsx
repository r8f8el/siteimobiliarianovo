"use client";
import { ShareButton } from "./ShareButton";

export function ShareButtonPreview() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            🚀 Sistema de Compartilhamento em Redes Sociais
          </h1>
          <p className="text-slate-300 text-lg">
            Menu dropdown elegante com integração completa às redes sociais
          </p>
        </div>

        {/* Preview do Componente */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-blue-500 to-pink-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <div>
                <h2 className="text-white font-semibold">Apartamento 3 quartos no centro</h2>
                <p className="text-slate-400 text-sm">R$ 450.000 • 120m² • 3 quartos</p>
              </div>
            </div>
            
            {/* Botão de Compartilhamento */}
            <div className="flex items-center gap-3">
              <ShareButton
                title="Apartamento 3 quartos no centro"
                description="Apartamento moderno com 3 quartos, 2 banheiros, sala ampla e cozinha integrada. Localizado no centro da cidade com fácil acesso ao transporte público."
                url="https://seusite.com.br/property/123"
                className="bg-white/10 hover:bg-white/20 text-white border-white/20"
              />
              <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span className="text-sm">Favoritar</span>
              </button>
            </div>
          </div>

          {/* Imagem do Imóvel */}
          <div className="aspect-video rounded-xl bg-slate-700 mb-6 flex items-center justify-center">
            <div className="text-center text-slate-400">
              <svg className="h-16 w-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p>Imagem do imóvel</p>
            </div>
          </div>

          {/* Detalhes do Imóvel */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-700/50 rounded-lg p-4">
              <h3 className="text-white font-semibold mb-2">Características</h3>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>• 3 quartos</li>
                <li>• 2 banheiros</li>
                <li>• 120m²</li>
                <li>• 1 vaga de garagem</li>
              </ul>
            </div>
            
            <div className="bg-slate-700/50 rounded-lg p-4">
              <h3 className="text-white font-semibold mb-2">Localização</h3>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>• Centro da cidade</li>
                <li>• Próximo ao metrô</li>
                <li>• Shopping próximo</li>
                <li>• Escolas na região</li>
              </ul>
            </div>
            
            <div className="bg-slate-700/50 rounded-lg p-4">
              <h3 className="text-white font-semibold mb-2">Contato</h3>
              <div className="text-slate-300 text-sm space-y-2">
                <p>João Silva</p>
                <p>CRECI: 12345</p>
                <p>(11) 99999-9999</p>
                <button className="w-full mt-3 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm transition-colors">
                  Entrar em contato
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Funcionalidades do Sistema */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <h3 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
              <span className="text-2xl">📱</span>
              Redes Sociais
            </h3>
            <ul className="text-slate-300 space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Facebook - Compartilhamento direto
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-sky-500 rounded-full"></span>
                Twitter - Tweet com título e URL
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                WhatsApp - Mensagem pré-formatada
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                E-mail - Cliente nativo
              </li>
            </ul>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <h3 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
              <span className="text-2xl">✨</span>
              Recursos Avançados
            </h3>
            <ul className="text-slate-300 space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                Web Share API nativa
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                Copiar link para área de transferência
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                Menu dropdown elegante
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                Animações suaves
              </li>
            </ul>
          </div>
        </div>

        {/* Instruções */}
        <div className="mt-8 text-center">
          <div className="bg-blue-600/20 border border-blue-500/30 rounded-lg p-6">
            <h3 className="text-blue-400 font-semibold mb-2">🎯 Como Testar</h3>
            <p className="text-slate-300 text-sm">
              Clique no botão &ldquo;Compartilhar&rdquo; acima para ver o menu dropdown em ação!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
