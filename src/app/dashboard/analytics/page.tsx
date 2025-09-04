"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown,
  Users, 
  Building2, 
  DollarSign, 
  Eye, 
  MousePointer,
  Calendar,
  Download,
  Filter,
  RefreshCw,
  Target,
  Award,
  Activity,
  PieChart,
  LineChart,
  FileText,
  Share2,
  Settings,
  ChevronDown,
  ArrowUpRight,
  ArrowDownRight,
  Minus
} from "lucide-react";

// Dados de exemplo para analytics
const mockAnalytics = {
  overview: {
    totalViews: 12547,
    totalLeads: 234,
    totalSales: 45,
    totalRevenue: 12500000,
    viewsChange: 12.5,
    leadsChange: -3.2,
    salesChange: 8.7,
    revenueChange: 15.3
  },
  viewsByMonth: [
    { month: "Jan", views: 1200, leads: 45, sales: 8 },
    { month: "Fev", views: 1350, leads: 52, sales: 12 },
    { month: "Mar", views: 1180, leads: 38, sales: 6 },
    { month: "Abr", views: 1420, leads: 61, sales: 15 },
    { month: "Mai", views: 1680, leads: 78, sales: 18 },
    { month: "Jun", views: 1950, leads: 89, sales: 22 },
    { month: "Jul", views: 2100, leads: 95, sales: 25 },
    { month: "Ago", views: 1850, leads: 72, sales: 19 },
    { month: "Set", views: 2200, leads: 108, sales: 28 },
    { month: "Out", views: 2400, leads: 125, sales: 32 },
    { month: "Nov", views: 2100, leads: 98, sales: 24 },
    { month: "Dez", views: 1870, leads: 76, sales: 18 }
  ],
  topProperties: [
    { id: 1, title: "Apartamento 3 quartos - Centro", views: 1250, leads: 45, sales: 8, revenue: 2400000 },
    { id: 2, title: "Casa com piscina - Zona Sul", views: 980, leads: 32, sales: 6, revenue: 1800000 },
    { id: 3, title: "Cobertura - Vila Madalena", views: 850, leads: 28, sales: 5, revenue: 1500000 },
    { id: 4, title: "Apartamento 2 quartos - Moema", views: 720, leads: 25, sales: 4, revenue: 1200000 },
    { id: 5, title: "Casa térrea - Butantã", views: 680, leads: 22, sales: 3, revenue: 900000 }
  ],
  leadSources: [
    { source: "Site", count: 89, percentage: 38.0, color: "bg-blue-500" },
    { source: "Google Ads", count: 67, percentage: 28.6, color: "bg-green-500" },
    { source: "Facebook", count: 45, percentage: 19.2, color: "bg-purple-500" },
    { source: "Indicação", count: 23, percentage: 9.8, color: "bg-orange-500" },
    { source: "Outros", count: 10, percentage: 4.3, color: "bg-gray-500" }
  ],
  conversionFunnel: [
    { stage: "Visualizações", count: 12547, percentage: 100 },
    { stage: "Leads", count: 234, percentage: 1.9 },
    { stage: "Propostas", count: 89, percentage: 0.7 },
    { stage: "Vendas", count: 45, percentage: 0.4 }
  ],
  teamPerformance: [
    { name: "João Silva", leads: 45, sales: 12, revenue: 3600000, conversion: 26.7 },
    { name: "Ana Costa", leads: 38, sales: 10, revenue: 3000000, conversion: 26.3 },
    { name: "Carlos Santos", leads: 32, sales: 8, revenue: 2400000, conversion: 25.0 },
    { name: "Maria Oliveira", leads: 28, sales: 6, revenue: 1800000, conversion: 21.4 }
  ]
};

const timeRanges = [
  { value: "7d", label: "Últimos 7 dias" },
  { value: "30d", label: "Últimos 30 dias" },
  { value: "90d", label: "Últimos 90 dias" },
  { value: "1y", label: "Último ano" }
];

export default function AnalyticsPage() {
  const [selectedTimeRange, setSelectedTimeRange] = useState("30d");
  const [selectedMetric, setSelectedMetric] = useState("views");
  const [showFilters, setShowFilters] = useState(false);

  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  const formatCurrency = (num: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 0
    }).format(num);
  };

  const getChangeIcon = (change: number) => {
    if (change > 0) return <ArrowUpRight className="h-4 w-4 text-green-500" />;
    if (change < 0) return <ArrowDownRight className="h-4 w-4 text-red-500" />;
    return <Minus className="h-4 w-4 text-gray-500" />;
  };

  const getChangeColor = (change: number) => {
    if (change > 0) return "text-green-600";
    if (change < 0) return "text-red-600";
    return "text-gray-600";
  };

  const handleExportCSV = () => {
    const csvData = [
      ['Métrica', 'Valor', 'Mudança (%)'],
      ['Visualizações', mockAnalytics.overview.totalViews, mockAnalytics.overview.viewsChange],
      ['Leads', mockAnalytics.overview.totalLeads, mockAnalytics.overview.leadsChange],
      ['Vendas', mockAnalytics.overview.totalSales, mockAnalytics.overview.salesChange],
      ['Receita', mockAnalytics.overview.totalRevenue, mockAnalytics.overview.revenueChange]
    ];
    
    const csvContent = csvData.map(row => row.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `analytics-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
    alert('Dados exportados com sucesso!');
  };

  const handleExportPDF = () => {
    alert('Funcionalidade de exportação PDF será implementada em breve!');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Relatório de Analytics',
        text: 'Confira o relatório de analytics da plataforma',
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copiado para a área de transferência!');
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Analytics</h1>
          <p className="text-muted-foreground">Métricas e relatórios de performance</p>
        </div>
        <div className="flex items-center gap-3">
          <select
            value={selectedTimeRange}
            onChange={(e) => setSelectedTimeRange(e.target.value)}
            className="px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            {timeRanges.map(range => (
              <option key={range.value} value={range.value}>{range.label}</option>
            ))}
          </select>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-accent text-foreground transition-colors"
          >
            <Filter className="h-4 w-4" />
            Filtros
          </button>
          <button 
            onClick={handleExportCSV}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Download className="h-4 w-4" />
            Exportar
          </button>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card rounded-xl border border-border p-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Visualizações</p>
              <p className="text-2xl font-bold text-foreground">{formatNumber(mockAnalytics.overview.totalViews)}</p>
              <div className="flex items-center gap-1 mt-1">
                {getChangeIcon(mockAnalytics.overview.viewsChange)}
                <span className={`text-xs ${getChangeColor(mockAnalytics.overview.viewsChange)}`}>
                  {Math.abs(mockAnalytics.overview.viewsChange)}%
                </span>
              </div>
            </div>
            <div className="h-12 w-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
              <Eye className="h-6 w-6 text-blue-500" />
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
              <p className="text-sm font-medium text-muted-foreground">Leads</p>
              <p className="text-2xl font-bold text-foreground">{mockAnalytics.overview.totalLeads}</p>
              <div className="flex items-center gap-1 mt-1">
                {getChangeIcon(mockAnalytics.overview.leadsChange)}
                <span className={`text-xs ${getChangeColor(mockAnalytics.overview.leadsChange)}`}>
                  {Math.abs(mockAnalytics.overview.leadsChange)}%
                </span>
              </div>
            </div>
            <div className="h-12 w-12 bg-green-500/20 rounded-lg flex items-center justify-center">
              <Users className="h-6 w-6 text-green-500" />
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
              <p className="text-sm font-medium text-muted-foreground">Vendas</p>
              <p className="text-2xl font-bold text-foreground">{mockAnalytics.overview.totalSales}</p>
              <div className="flex items-center gap-1 mt-1">
                {getChangeIcon(mockAnalytics.overview.salesChange)}
                <span className={`text-xs ${getChangeColor(mockAnalytics.overview.salesChange)}`}>
                  {Math.abs(mockAnalytics.overview.salesChange)}%
                </span>
              </div>
            </div>
            <div className="h-12 w-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
              <Target className="h-6 w-6 text-purple-500" />
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
              <p className="text-sm font-medium text-muted-foreground">Receita</p>
              <p className="text-2xl font-bold text-foreground">{formatCurrency(mockAnalytics.overview.totalRevenue)}</p>
              <div className="flex items-center gap-1 mt-1">
                {getChangeIcon(mockAnalytics.overview.revenueChange)}
                <span className={`text-xs ${getChangeColor(mockAnalytics.overview.revenueChange)}`}>
                  {Math.abs(mockAnalytics.overview.revenueChange)}%
                </span>
              </div>
            </div>
            <div className="h-12 w-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
              <DollarSign className="h-6 w-6 text-orange-500" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Views Trend Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-card rounded-xl border border-border p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-foreground">Tendência de Visualizações</h3>
            <div className="flex items-center gap-2">
              <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
                <LineChart className="h-4 w-4" />
              </button>
              <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
                <BarChart3 className="h-4 w-4" />
              </button>
            </div>
          </div>
          
          <div className="h-64 flex items-end justify-between gap-2">
            {mockAnalytics.viewsByMonth.map((month, index) => (
              <div key={month.month} className="flex flex-col items-center gap-2 flex-1">
                <div 
                  className="w-full bg-gradient-to-t from-blue-500 to-blue-400 rounded-t"
                  style={{ height: `${(month.views / 2500) * 200}px` }}
                />
                <span className="text-xs text-muted-foreground">{month.month}</span>
                <span className="text-xs font-medium text-foreground">{month.views}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Lead Sources Pie Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-card rounded-xl border border-border p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-foreground">Fontes de Leads</h3>
            <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
              <PieChart className="h-4 w-4" />
            </button>
          </div>
          
          <div className="space-y-4">
            {mockAnalytics.leadSources.map((source, index) => (
              <div key={source.source} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${source.color}`} />
                  <span className="text-sm text-foreground">{source.source}</span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-foreground">{source.count}</div>
                  <div className="text-xs text-muted-foreground">{source.percentage}%</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Conversion Funnel */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-card rounded-xl border border-border p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-foreground">Funil de Conversão</h3>
          <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
            <Activity className="h-4 w-4" />
          </button>
        </div>
        
        <div className="space-y-4">
          {mockAnalytics.conversionFunnel.map((stage, index) => (
            <div key={stage.stage} className="relative">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-foreground">{stage.stage}</span>
                <div className="text-right">
                  <span className="text-sm font-bold text-foreground">{formatNumber(stage.count)}</span>
                  <span className="text-xs text-muted-foreground ml-2">({stage.percentage}%)</span>
                </div>
              </div>
              <div className="w-full bg-muted rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-1000"
                  style={{ width: `${stage.percentage}%` }}
                />
              </div>
              {index < mockAnalytics.conversionFunnel.length - 1 && (
                <div className="flex justify-center mt-2">
                  <div className="w-0.5 h-4 bg-muted" />
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Top Properties and Team Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Properties */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-card rounded-xl border border-border p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-foreground">Top Imóveis</h3>
            <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
              <Building2 className="h-4 w-4" />
            </button>
          </div>
          
          <div className="space-y-4">
            {mockAnalytics.topProperties.map((property, index) => (
              <div key={property.id} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">#{index + 1}</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground line-clamp-1">{property.title}</p>
                    <p className="text-xs text-muted-foreground">{property.views} visualizações</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-foreground">{formatCurrency(property.revenue)}</p>
                  <p className="text-xs text-muted-foreground">{property.sales} vendas</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Team Performance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-card rounded-xl border border-border p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-foreground">Performance da Equipe</h3>
            <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
              <Award className="h-4 w-4" />
            </button>
          </div>
          
          <div className="space-y-4">
            {mockAnalytics.teamPerformance.map((member, index) => (
              <div key={member.name} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{member.name}</p>
                    <p className="text-xs text-muted-foreground">{member.leads} leads • {member.sales} vendas</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-foreground">{member.conversion}%</p>
                  <p className="text-xs text-muted-foreground">conversão</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Export and Share Options */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="bg-card rounded-xl border border-border p-6"
      >
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-foreground">Relatórios</h3>
            <p className="text-sm text-muted-foreground">Exporte dados e compartilhe insights</p>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={handleExportPDF}
              className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-accent text-foreground transition-colors"
            >
              <FileText className="h-4 w-4" />
              Relatório PDF
            </button>
            <button 
              onClick={handleExportCSV}
              className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-accent text-foreground transition-colors"
            >
              <Download className="h-4 w-4" />
              Exportar CSV
            </button>
            <button 
              onClick={handleShare}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Share2 className="h-4 w-4" />
              Compartilhar
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
