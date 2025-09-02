"use client";
import { Share2, Copy, Facebook, Twitter, Whatsapp, Mail } from 'lucide-react';
import { useState } from 'react';

interface ShareButtonProps {
  title: string;
  description: string;
  url: string;
  className?: string;
}

export function ShareButton({ title, description, url, className = "" }: ShareButtonProps) {
  const [showMenu, setShowMenu] = useState(false);
  const [copied, setCopied] = useState(false);

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
      window.open(shareUrl, '_blank', 'width=600,height=400');
      setShowMenu(false);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={handleNativeShare}
        className={`flex items-center gap-2 px-3 py-2 rounded-lg bg-muted hover:bg-accent text-foreground border border-border transition-colors ${className}`}
        aria-label="Compartilhar imóvel"
      >
        <Share2 className="h-4 w-4" />
        <span className="hidden sm:inline">Compartilhar</span>
      </button>

      {showMenu && (
        <>
          {/* Overlay */}
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setShowMenu(false)}
          />
          
          {/* Menu */}
          <div className="absolute right-0 top-full mt-2 w-48 bg-card border border-border rounded-lg shadow-lg z-50 p-2">
            <div className="space-y-1">
              <button
                onClick={handleCopyLink}
                className="w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent text-foreground text-sm transition-colors"
              >
                <Copy className="h-4 w-4" />
                {copied ? 'Copiado!' : 'Copiar link'}
              </button>
              
              <button
                onClick={() => handleSocialShare('facebook')}
                className="w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent text-foreground text-sm transition-colors"
              >
                <Facebook className="h-4 w-4 text-blue-600" />
                Facebook
              </button>
              
              <button
                onClick={() => handleSocialShare('twitter')}
                className="w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent text-foreground text-sm transition-colors"
              >
                <Twitter className="h-4 w-4 text-blue-400" />
                Twitter
              </button>
              
              <button
                onClick={() => handleSocialShare('whatsapp')}
                className="w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent text-foreground text-sm transition-colors"
              >
                <Whatsapp className="h-4 w-4 text-green-500" />
                WhatsApp
              </button>
              
              <button
                onClick={() => handleSocialShare('email')}
                className="w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent text-foreground text-sm transition-colors"
              >
                <Mail className="h-4 w-4 text-gray-500" />
                E-mail
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
