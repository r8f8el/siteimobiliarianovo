"use client";
import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

export function ThemeToggle() {
  const { theme, actualTheme, toggleTheme } = useTheme();

  const getIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun className="h-5 w-5" />;
      case 'dark':
        return <Moon className="h-5 w-5" />;
      case 'system':
        return <Monitor className="h-5 w-5" />;
      default:
        return <Monitor className="h-5 w-5" />;
    }
  };

  const getAriaLabel = () => {
    switch (theme) {
      case 'light':
        return 'Tema claro ativo - Clique para modo escuro';
      case 'dark':
        return 'Tema escuro ativo - Clique para modo automático';
      case 'system':
        return `Modo automático ativo (${actualTheme === 'dark' ? 'escuro' : 'claro'}) - Clique para modo claro`;
      default:
        return 'Alternar tema';
    }
  };

  const getTooltip = () => {
    switch (theme) {
      case 'light':
        return 'Modo claro';
      case 'dark':
        return 'Modo escuro';
      case 'system':
        return `Automático (${actualTheme === 'dark' ? 'escuro' : 'claro'})`;
      default:
        return 'Tema';
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center w-10 h-10 rounded-lg bg-muted hover:bg-accent text-foreground border border-border transition-colors"
      aria-label={getAriaLabel()}
      title={getTooltip()}
    >
      {getIcon()}
    </button>
  );
}
