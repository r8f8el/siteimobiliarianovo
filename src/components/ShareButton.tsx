"use client";
import { Share2, Copy, Facebook, Twitter, MessageCircle, Mail, ChevronDown, Check } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

interface ShareButtonProps {
  title: string;
  description: string;
  url: string;
  className?: string;
}

export function ShareButton({ title, description, url, className = "" }: ShareButtonProps) {
  const [showMenu, setShowMenu] = useState(false);
  const [copied, setCopied] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Fechar dropdown ao clicar fora
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const shareData = {
    title,
    text: description,
    url: url
  };

  const handleNativeShare = async () => {
    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
        setShowMenu(false);
      } catch (error) {
        console.log('Erro ao compartilhar:', error);
      }
    } else {
      setShowMenu(true);
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      setShowMenu(false);
    } catch (error) {
      console.log('Erro ao copiar link:', error);
    }
  };

  const handleSocialShare = (platform: string) => {
    let shareUrl = '';
    
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
        break;
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${encodeURIComponent(`${title} - ${url}`)}`;
        break;
      case 'email':
        shareUrl = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`${description}\n\n${url}`)}`;
        break;
    }
    
    if (shareUrl) {
      if (platform === 'email') {
        window.location.href = shareUrl;
      } else {
        window.open(shareUrl, '_blank', 'width=600,height=400');
      }
      setShowMenu(false);
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={handleNativeShare}
        className={`flex items-center gap-2 px-3 py-2 rounded-lg bg-muted hover:bg-accent text-foreground border border-border transition-all duration-200 ${className}`}
        aria-label="Compartilhar imóvel"
      >
        <Share2 className="h-4 w-4" />
        <span className="hidden sm:inline">Compartilhar</span>
        <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${showMenu ? 'rotate-180' : ''}`} />
      </button>

      {showMenu && (
        <div className="absolute right-0 top-full mt-2 w-52 bg-card/95 backdrop-blur-md border border-border rounded-xl shadow-2xl z-50 overflow-hidden animate-in slide-in-from-top-2 duration-200">
          <div className="py-2">
            {/* Web Share API (se disponível) */}
            {navigator.share && (
              <button
                onClick={handleNativeShare}
                className="w-full flex items-center gap-3 px-4 py-3 text-left text-foreground hover:bg-accent transition-all duration-200 border-b border-border/50"
              >
                <Share2 className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Compartilhar nativo</span>
              </button>
            )}
            
            {/* Copiar link */}
            <button
              onClick={handleCopyLink}
              className="w-full flex items-center gap-3 px-4 py-3 text-left text-foreground hover:bg-accent transition-all duration-200"
            >
              {copied ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <Copy className="h-4 w-4 text-muted-foreground" />
              )}
              <span className="text-sm font-medium">{copied ? 'Link copiado!' : 'Copiar link'}</span>
              {copied && <Check className="h-3 w-3 ml-auto text-green-500" />}
            </button>
            
            {/* Redes sociais */}
            <div className="border-t border-border/50 pt-1">
              <button
                onClick={() => handleSocialShare('facebook')}
                className="w-full flex items-center gap-3 px-4 py-3 text-left text-foreground hover:bg-blue-500/10 hover:text-blue-600 transition-all duration-200"
              >
                <Facebook className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-medium">Facebook</span>
              </button>
              
              <button
                onClick={() => handleSocialShare('twitter')}
                className="w-full flex items-center gap-3 px-4 py-3 text-left text-foreground hover:bg-sky-500/10 hover:text-sky-600 transition-all duration-200"
              >
                <Twitter className="h-4 w-4 text-sky-500" />
                <span className="text-sm font-medium">Twitter</span>
              </button>
              
              <button
                onClick={() => handleSocialShare('whatsapp')}
                className="w-full flex items-center gap-3 px-4 py-3 text-left text-foreground hover:bg-green-500/10 hover:text-green-600 transition-all duration-200"
              >
                <MessageCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm font-medium">WhatsApp</span>
              </button>
              
              <button
                onClick={() => handleSocialShare('email')}
                className="w-full flex items-center gap-3 px-4 py-3 text-left text-foreground hover:bg-orange-500/10 hover:text-orange-600 transition-all duration-200"
              >
                <Mail className="h-4 w-4 text-orange-500" />
                <span className="text-sm font-medium">E-mail</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
