"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  ArrowLeft, 
  X, 
  Sparkles, 
  Building2, 
  Zap,
  Check,
  Target,
  Users,
  FileText
} from "lucide-react";

interface TourStep {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  action?: string;
  target?: string;
  position?: "top" | "bottom" | "left" | "right";
}

const tourSteps: TourStep[] = [
  {
    id: "welcome",
    title: "Bem-vindo ao Seusite! 🎉",
    description: "Vamos personalizar seu site e configurar tudo para você começar a vender mais imóveis.",
    icon: Sparkles,
    position: "bottom"
  },
  {
    id: "customize",
    title: "Personalize seu site",
    description: "Adicione sua logo, escolha suas cores e configure as informações da sua empresa.",
    icon: Target,
    action: "Vamos personalizar!",
    target: "customize-section",
    position: "right"
  },
  {
    id: "first-property",
    title: "Cadastre seu primeiro imóvel",
    description: "Vamos adicionar um imóvel para você ver como funciona. É super simples!",
    icon: Building2,
    action: "Adicionar imóvel",
    target: "add-property-btn",
    position: "bottom"
  },
  {
    id: "ai-magic",
    title: "O momento mágico da IA ✨",
    description: "Após adicionar as fotos e dados básicos, clique aqui e veja nossa IA criar a descrição perfeita para você!",
    icon: Zap,
    action: "Gerar com IA",
    target: "ai-generate-btn",
    position: "top"
  },
  {
    id: "leads",
    title: "Gerencie seus leads",
    description: "Todos os contatos que chegarem pelo seu site aparecerão aqui. Organize e acompanhe cada oportunidade.",
    icon: Users,
    action: "Ver leads",
    target: "leads-section",
    position: "left"
  },
  {
    id: "blog",
    title: "Blog automático para SEO",
    description: "Nossa IA também cria conteúdo para seu blog, ajudando você a aparecer no Google.",
    icon: FileText,
    action: "Ver blog",
    target: "blog-section",
    position: "right"
  },
  {
    id: "complete",
    title: "Parabéns! 🎊",
    description: "Seu site está pronto! Agora você pode começar a adicionar mais imóveis e gerar leads. Boa sorte!",
    icon: Check,
    position: "bottom"
  }
];

interface OnboardingTourProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: () => void;
}

export function OnboardingTour({ isOpen, onClose, onComplete }: OnboardingTourProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      setCurrentStep(0);
    }
  }, [isOpen]);

  const nextStep = () => {
    if (currentStep < tourSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      completeTour();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const completeTour = () => {
    setIsVisible(false);
    setTimeout(() => {
      onComplete();
      onClose();
    }, 300);
  };

  const skipTour = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  if (!isOpen || !isVisible) return null;

  const currentTourStep = tourSteps[currentStep];
  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === tourSteps.length - 1;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
        onClick={skipTour}
      >
        {/* Overlay com buraco para destacar elemento */}
        <div className="absolute inset-0">
          {/* Aqui seria implementado o highlight do elemento específico */}
        </div>

        {/* Tour Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md mx-4"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <currentTourStep.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">
                      {currentTourStep.title}
                    </h3>
                    <p className="text-blue-100 text-sm">
                      Passo {currentStep + 1} de {tourSteps.length}
                    </p>
                  </div>
                </div>
                <button
                  onClick={skipTour}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full bg-white/20 rounded-full h-2">
                <div 
                  className="bg-white h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentStep + 1) / tourSteps.length) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <p className="text-gray-700 leading-relaxed mb-6">
                {currentTourStep.description}
              </p>

              {/* Action Button (se houver) */}
              {currentTourStep.action && !isLastStep && (
                <div className="mb-6">
                  <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                    {currentTourStep.action}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              )}

              {/* Navigation */}
              <div className="flex items-center justify-between">
                <button
                  onClick={prevStep}
                  disabled={isFirstStep}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                    isFirstStep 
                      ? 'text-gray-400 cursor-not-allowed' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <ArrowLeft className="h-4 w-4" />
                  Anterior
                </button>

                <div className="flex items-center gap-2">
                  {tourSteps.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentStep 
                          ? 'bg-blue-600' 
                          : index < currentStep 
                            ? 'bg-green-500' 
                            : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextStep}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                    isLastStep
                      ? 'bg-green-600 text-white hover:bg-green-700'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {isLastStep ? (
                    <>
                      <Check className="h-4 w-4" />
                      Finalizar
                    </>
                  ) : (
                    <>
                      Próximo
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// Hook para gerenciar o tour
export function useOnboardingTour() {
  const [isTourOpen, setIsTourOpen] = useState(false);
  const [hasCompletedTour, setHasCompletedTour] = useState(false);

  useEffect(() => {
    // Verificar se o usuário já completou o tour
    const completed = localStorage.getItem('onboarding-tour-completed');
    if (completed) {
      setHasCompletedTour(true);
    }
  }, []);

  const startTour = () => {
    setIsTourOpen(true);
  };

  const closeTour = () => {
    setIsTourOpen(false);
  };

  const completeTour = () => {
    setHasCompletedTour(true);
    localStorage.setItem('onboarding-tour-completed', 'true');
    setIsTourOpen(false);
  };

  return {
    isTourOpen,
    hasCompletedTour,
    startTour,
    closeTour,
    completeTour
  };
}
