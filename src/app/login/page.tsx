"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, EyeOff, Mail, Lock, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Simular login
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Verificar credenciais de teste
    if (formData.email === "admin@seusite.com" && formData.password === "admin123") {
      localStorage.setItem("user", JSON.stringify({
        id: "1",
        name: "Admin",
        email: "admin@seusite.com",
        role: "admin",
        avatar: "A"
      }));
      router.push("/admin");
    } else if (formData.email === "corretor@exemplo.com" && formData.password === "corretor123") {
      localStorage.setItem("user", JSON.stringify({
        id: "2",
        name: "João Silva",
        email: "corretor@exemplo.com",
        role: "corretor",
        avatar: "JS"
      }));
      router.push("/dashboard");
    } else {
      setError("Credenciais inválidas");
    }

    setIsLoading(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (error) setError("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-pink-500 text-white font-bold text-xl">S</span>
            <span className="text-2xl font-bold text-white">Seusite</span>
          </div>
          <p className="text-white/70">Entre na sua conta</p>
        </motion.div>

        {/* Login Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-white/90">
                <Mail className="h-4 w-4" />
                E-mail
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="seu@email.com"
                required
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-white/90">
                <Lock className="h-4 w-4" />
                Senha
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                  className="w-full px-4 py-3 pr-12 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Sua senha"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {/* Error Message */}
            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 text-sm"
                >
                  {error}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                isLoading
                  ? "bg-white/20 text-white/60 cursor-not-allowed"
                  : "bg-gradient-to-r from-blue-500 to-pink-500 text-white hover:from-blue-600 hover:to-pink-600"
              }`}
            >
              {isLoading ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full"
                  />
                  Entrando...
                </>
              ) : (
                <>
                  Entrar
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </motion.button>
          </form>

          {/* Links */}
          <div className="mt-6 text-center space-y-3">
            <Link href="/esqueci-senha" className="text-sm text-white/70 hover:text-white transition-colors">
              Esqueceu sua senha?
            </Link>
            <div className="text-sm text-white/70">
              Não tem uma conta?{" "}
              <Link href="/cadastro" className="text-blue-400 hover:text-blue-300 transition-colors">
                Cadastre-se
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Test Credentials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4"
        >
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="h-4 w-4 text-blue-400" />
            <span className="text-sm font-medium text-white">Credenciais de Teste</span>
          </div>
          <div className="space-y-2 text-xs text-white/70">
            <div>
              <span className="text-blue-400">Admin:</span> admin@seusite.com / admin123
            </div>
            <div>
              <span className="text-green-400">Corretor:</span> corretor@exemplo.com / corretor123
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

