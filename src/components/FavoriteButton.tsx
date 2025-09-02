"use client";
import { Heart } from 'lucide-react';
import { useState, useEffect } from 'react';

interface FavoriteButtonProps {
  propertyId: string;
  className?: string;
}

export function FavoriteButton({ propertyId, className = "" }: FavoriteButtonProps) {
  const [isFavorited, setIsFavorited] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Carregar estado inicial do localStorage
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favoriteProperties') || '[]');
    setIsFavorited(favorites.includes(propertyId));
  }, [propertyId]);

  const toggleFavorite = () => {
    setIsAnimating(true);
    
    // Atualizar estado
    const newFavorited = !isFavorited;
    setIsFavorited(newFavorited);
    
    // Atualizar localStorage
    const favorites = JSON.parse(localStorage.getItem('favoriteProperties') || '[]');
    if (newFavorited) {
      favorites.push(propertyId);
    } else {
      const index = favorites.indexOf(propertyId);
      if (index > -1) {
        favorites.splice(index, 1);
      }
    }
    localStorage.setItem('favoriteProperties', JSON.stringify(favorites));
    
    // Parar animação
    setTimeout(() => setIsAnimating(false), 300);
    
    // Feedback visual
    if (newFavorited) {
      // Mostrar notificação de sucesso
      showNotification('Imóvel adicionado aos favoritos!', 'success');
    } else {
      showNotification('Imóvel removido dos favoritos', 'info');
    }
  };

  const showNotification = (message: string, type: 'success' | 'info') => {
    // Criar elemento de notificação
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 z-50 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
      type === 'success' 
        ? 'bg-green-500 text-white' 
        : 'bg-blue-500 text-white'
    }`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animar entrada
    setTimeout(() => {
      notification.style.transform = 'translateX(0)';
      notification.style.opacity = '1';
    }, 100);
    
    // Remover após 3 segundos
    setTimeout(() => {
      notification.style.transform = 'translateX(100%)';
      notification.style.opacity = '0';
      setTimeout(() => {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification);
        }
      }, 300);
    }, 3000);
  };

  return (
    <button
      onClick={toggleFavorite}
      className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 border ${
        isFavorited 
          ? 'bg-red-500/20 text-red-500 border-red-500/30 hover:bg-red-500/30' 
          : 'bg-muted hover:bg-accent text-foreground border-border'
      } ${isAnimating ? 'scale-110' : 'scale-100'} ${className}`}
      aria-label={isFavorited ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
    >
      <Heart 
        className={`h-4 w-4 transition-all duration-200 ${
          isFavorited ? 'fill-current' : ''
        } ${isAnimating ? 'scale-125' : 'scale-100'}`} 
      />
      <span className="hidden sm:inline">
        {isFavorited ? 'Salvo' : 'Salvar'}
      </span>
    </button>
  );
}
