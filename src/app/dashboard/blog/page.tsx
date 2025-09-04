"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { 
  FileText, 
  Plus, 
  Search, 
  Filter, 
  Edit, 
  Trash2, 
  Eye, 
  Calendar,
  User,
  Tag,
  Globe,
  BarChart3,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle,
  X,
  Save,
  Image as ImageIcon,
  Link,
  Hash,
  Bold,
  Italic,
  List,
  Quote,
  Code,
  Upload
} from "lucide-react";

// Dados de exemplo para posts
const mockPosts = [
  {
    id: 1,
    title: "Como escolher o imóvel ideal para sua família",
    slug: "como-escolher-imovel-ideal-familia",
    excerpt: "Dicas essenciais para encontrar o lar perfeito para sua família crescer feliz.",
    content: "Conteúdo completo do post...",
    status: "publicado",
    category: "Dicas",
    tags: ["imóveis", "família", "comprar"],
    author: "João Corretor",
    publishedAt: "2024-01-20",
    views: 1250,
    likes: 45,
    featuredImage: "/api/placeholder/400/250"
  },
  {
    id: 2,
    title: "Tendências do mercado imobiliário em 2024",
    slug: "tendencias-mercado-imobiliario-2024",
    excerpt: "Análise completa das principais tendências que vão moldar o mercado este ano.",
    content: "Conteúdo completo do post...",
    status: "rascunho",
    category: "Mercado",
    tags: ["tendências", "mercado", "2024"],
    author: "Ana Corretora",
    publishedAt: "2024-01-18",
    views: 890,
    likes: 32,
    featuredImage: "/api/placeholder/400/250"
  },
  {
    id: 3,
    title: "Financiamento imobiliário: guia completo",
    slug: "financiamento-imobiliario-guia-completo",
    excerpt: "Tudo que você precisa saber sobre financiamento para comprar seu imóvel.",
    content: "Conteúdo completo do post...",
    status: "publicado",
    category: "Financiamento",
    tags: ["financiamento", "compra", "guia"],
    author: "João Corretor",
    publishedAt: "2024-01-15",
    views: 2100,
    likes: 78,
    featuredImage: "/api/placeholder/400/250"
  }
];

const categories = ["Dicas", "Mercado", "Financiamento", "Investimento", "Notícias"];
const statusOptions = [
  { value: "rascunho", label: "Rascunho", color: "bg-gray-100 text-gray-800" },
  { value: "publicado", label: "Publicado", color: "bg-green-100 text-green-800" },
  { value: "agendado", label: "Agendado", color: "bg-blue-100 text-blue-800" }
];

export default function BlogPage() {
  const [posts, setPosts] = useState(mockPosts);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const [showEditor, setShowEditor] = useState(false);
  const [selectedPost, setSelectedPost] = useState<any>(null);
  const [editorContent, setEditorContent] = useState("");

  // Filtrar posts
  const filteredPosts = posts.filter(post => {
    const matchesSearch = 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || post.status === statusFilter;
    const matchesCategory = categoryFilter === "all" || post.category === categoryFilter;
    return matchesSearch && matchesStatus && matchesCategory;
  });

  // Calcular métricas
  const totalPosts = posts.length;
  const publishedPosts = posts.filter(p => p.status === "publicado").length;
  const totalViews = posts.reduce((sum, p) => sum + p.views, 0);
  const totalLikes = posts.reduce((sum, p) => sum + p.likes, 0);

  const handleCreatePost = () => {
    setSelectedPost(null);
    setEditorContent("");
    setShowEditor(true);
  };

  const handleEditPost = (post: any) => {
    setSelectedPost(post);
    setEditorContent(post.content);
    setShowEditor(true);
  };

  const handleDeletePost = (id: number) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  const handleStatusChange = (id: number, newStatus: string) => {
    setPosts(posts.map(post => 
      post.id === id ? { ...post, status: newStatus } : post
    ));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Blog</h1>
          <p className="text-muted-foreground">Gerencie seu conteúdo e artigos</p>
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
            onClick={handleCreatePost}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Plus className="h-4 w-4" />
            Novo Post
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
                  placeholder="Título ou conteúdo..."
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
                {statusOptions.map(status => (
                  <option key={status.value} value={status.value}>{status.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Categoria</label>
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="all">Todas</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            <div className="flex items-end">
              <button
                onClick={() => {
                  setSearchTerm("");
                  setStatusFilter("all");
                  setCategoryFilter("all");
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
              <p className="text-sm font-medium text-muted-foreground">Total de Posts</p>
              <p className="text-2xl font-bold text-foreground">{totalPosts}</p>
              <p className="text-xs text-green-600 mt-1">+3 este mês</p>
            </div>
            <div className="h-12 w-12 bg-primary/20 rounded-lg flex items-center justify-center">
              <FileText className="h-6 w-6 text-primary" />
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
              <p className="text-sm font-medium text-muted-foreground">Publicados</p>
              <p className="text-2xl font-bold text-foreground">{publishedPosts}</p>
              <p className="text-xs text-muted-foreground mt-1">Rascunhos: {totalPosts - publishedPosts}</p>
            </div>
            <div className="h-12 w-12 bg-green-500/20 rounded-lg flex items-center justify-center">
              <CheckCircle className="h-6 w-6 text-green-500" />
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
              <p className="text-sm font-medium text-muted-foreground">Visualizações</p>
              <p className="text-2xl font-bold text-foreground">{totalViews.toLocaleString()}</p>
              <p className="text-xs text-green-600 mt-1">+15% vs mês anterior</p>
            </div>
            <div className="h-12 w-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
              <Eye className="h-6 w-6 text-blue-500" />
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
              <p className="text-sm font-medium text-muted-foreground">Engajamento</p>
              <p className="text-2xl font-bold text-foreground">{totalLikes}</p>
              <p className="text-xs text-muted-foreground mt-1">Curtidas totais</p>
            </div>
            <div className="h-12 w-12 bg-red-500/20 rounded-lg flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-red-500" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Posts List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-card rounded-xl border border-border"
      >
        <div className="p-6 border-b border-border">
          <h2 className="text-lg font-semibold text-foreground">Posts do Blog</h2>
        </div>
        
        <div className="divide-y divide-border">
          {filteredPosts.map((post) => {
            const statusInfo = statusOptions.find(s => s.value === post.status);
            return (
              <div key={post.id} className="p-6 hover:bg-accent/50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 bg-muted rounded-lg flex items-center justify-center">
                      <ImageIcon className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-foreground">{post.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center gap-4 mt-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusInfo?.color}`}>
                          {statusInfo?.label}
                        </span>
                        <span className="text-xs text-muted-foreground">{post.category}</span>
                        <span className="text-xs text-muted-foreground">
                          {new Date(post.publishedAt).toLocaleDateString()}
                        </span>
                        <span className="text-xs text-muted-foreground">por {post.author}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Visualizações</p>
                      <p className="font-medium text-foreground">{post.views.toLocaleString()}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Curtidas</p>
                      <p className="font-medium text-foreground">{post.likes}</p>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => window.open(`/blog/${post.slug}`, '_blank')}
                        className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                        title="Ver post"
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleEditPost(post)}
                        className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                        title="Editar"
                      >
                        <Edit className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleDeletePost(post.id)}
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

      {/* Editor Modal */}
      {showEditor && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-card rounded-xl w-full max-w-6xl mx-4 max-h-[90vh] overflow-hidden flex flex-col"
          >
            {/* Editor Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="text-xl font-semibold text-foreground">
                {selectedPost ? "Editar Post" : "Novo Post"}
              </h2>
              <div className="flex items-center gap-3">
                <button className="px-4 py-2 border border-border rounded-lg hover:bg-accent text-foreground transition-colors">
                  <Save className="h-4 w-4 mr-2" />
                  Salvar Rascunho
                </button>
                <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                  Publicar
                </button>
                <button
                  onClick={() => setShowEditor(false)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>

            {/* Editor Content */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="space-y-6">
                {/* Post Meta */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Título</label>
                    <input
                      type="text"
                      defaultValue={selectedPost?.title || ""}
                      className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Título do post..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Slug</label>
                    <input
                      type="text"
                      defaultValue={selectedPost?.slug || ""}
                      className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="url-do-post"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Categoria</label>
                    <select className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent">
                      {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Status</label>
                    <select className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent">
                      {statusOptions.map(status => (
                        <option key={status.value} value={status.value}>{status.label}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Data de Publicação</label>
                    <input
                      type="date"
                      defaultValue={selectedPost?.publishedAt || new Date().toISOString().split('T')[0]}
                      className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Resumo</label>
                  <textarea
                    rows={3}
                    defaultValue={selectedPost?.excerpt || ""}
                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Breve resumo do post..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Tags</label>
                  <input
                    type="text"
                    defaultValue={selectedPost?.tags?.join(', ') || ""}
                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="tag1, tag2, tag3"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Imagem Destacada</label>
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                    <ImageIcon className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Clique para fazer upload ou arraste uma imagem</p>
                    <input type="file" className="hidden" accept="image/*" />
                  </div>
                </div>

                {/* Editor de Texto */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Conteúdo</label>
                  <div className="border border-border rounded-lg">
                    {/* Toolbar */}
                    <div className="flex items-center gap-2 p-3 border-b border-border">
                      <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
                        <Bold className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
                        <Italic className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
                        <List className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
                        <Quote className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
                        <Link className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
                        <ImageIcon className="h-4 w-4" />
                      </button>
                    </div>
                    {/* Editor */}
                    <textarea
                      rows={15}
                      value={editorContent}
                      onChange={(e) => setEditorContent(e.target.value)}
                      className="w-full p-4 border-0 bg-background text-foreground focus:ring-0 resize-none"
                      placeholder="Escreva seu post aqui..."
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}