"use client";
import { motion } from "framer-motion";
import { FileText, Plus, Search, Edit, Trash2, Eye, Calendar, Sparkles } from "lucide-react";
import Link from "next/link";

const posts = [
  {
    id: 1,
    title: "Como fotografar imóveis que convertem",
    excerpt: "Dicas práticas para valorizar seus anúncios com fotos profissionais.",
    status: "Publicado",
    views: 245,
    leads: 12,
    date: "2024-01-15",
    tags: ["Fotografia", "Marketing"]
  },
  {
    id: 2,
    title: "Roteiro de vídeo para tours rápidos",
    excerpt: "Passo a passo para criar vídeos curtos e eficientes para seus imóveis.",
    status: "Publicado",
    views: 189,
    leads: 8,
    date: "2024-01-12",
    tags: ["Vídeo", "Marketing"]
  },
  {
    id: 3,
    title: "SEO para imóveis: como aparecer no Google",
    excerpt: "Estratégias para melhorar o posicionamento dos seus anúncios.",
    status: "Rascunho",
    views: 0,
    leads: 0,
    date: "2024-01-10",
    tags: ["SEO", "Marketing Digital"]
  },
  {
    id: 4,
    title: "Financiamento imobiliário: guia completo",
    excerpt: "Tudo que você precisa saber sobre financiamento para seus clientes.",
    status: "Agendado",
    views: 0,
    leads: 0,
    date: "2024-01-20",
    tags: ["Financiamento", "Vendas"]
  }
];

const statusConfig = {
  "Publicado": "bg-green-100 text-green-800",
  "Rascunho": "bg-yellow-100 text-yellow-800",
  "Agendado": "bg-blue-100 text-blue-800"
};

export default function BlogPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Blog</h1>
          <p className="text-gray-600">Gerencie seus artigos e acompanhe o desempenho</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-pink-500 text-white rounded-lg hover:from-blue-600 hover:to-pink-600 transition-all duration-200">
            <Sparkles className="h-4 w-4" />
            Gerar com IA
          </button>
          <Link href="/dashboard/blog/new" className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
            <Plus className="h-4 w-4" />
            Novo Post
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Total de Posts", value: "12", change: "+2 este mês", color: "blue" },
          { label: "Publicados", value: "8", change: "+1", color: "green" },
          { label: "Visualizações", value: "1,234", change: "+15%", color: "purple" },
          { label: "Leads Gerados", value: "45", change: "+8", color: "orange" }
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
                <FileText className={`h-6 w-6 text-${stat.color}-600`} />
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
                placeholder="Buscar posts..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Todos os status</option>
              <option>Publicado</option>
              <option>Rascunho</option>
              <option>Agendado</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Todas as categorias</option>
              <option>Marketing</option>
              <option>Vendas</option>
              <option>SEO</option>
            </select>
          </div>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
          >
            {/* Image placeholder */}
            <div className="aspect-[16/9] bg-gradient-to-br from-gray-100 to-gray-200 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <FileText className="h-12 w-12 mx-auto mb-2" />
                  <div className="text-sm">Imagem do Post</div>
                </div>
              </div>
              <div className="absolute top-3 left-3">
                <span className={`px-2 py-1 text-xs rounded-full ${statusConfig[post.status as keyof typeof statusConfig]}`}>
                  {post.status}
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
              <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{post.title}</h3>
              <p className="text-sm text-gray-600 mb-3 line-clamp-2">{post.excerpt}</p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-1 mb-3">
                {post.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Stats */}
              <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <Eye className="h-3 w-3" />
                    {post.views}
                  </span>
                  <span>{post.leads} leads</span>
                </div>
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {new Date(post.date).toLocaleDateString('pt-BR')}
                </span>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 px-3 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Editar
                </button>
                <button className="px-3 py-2 text-sm border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  Visualizar
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Empty State */}
      {posts.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-12"
        >
          <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Nenhum post encontrado</h3>
          <p className="text-gray-600 mb-6">Comece criando seu primeiro artigo</p>
          <Link href="/dashboard/blog/new" className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Plus className="h-4 w-4" />
            Criar Post
          </Link>
        </motion.div>
      )}
    </div>
  );
}
