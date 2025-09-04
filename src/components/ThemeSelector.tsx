"use client";
import { Sun, Moon, Monitor, Check } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useState } from 'react';

export function ThemeSelector() {
  const { theme, actualTheme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const themes = [
    {
      id: 'light' as const,
      name: 'Claro',
      icon: Sun,
      description: 'Tema claro sempre'
    },
    {
      id: 'dark' as const,
      name: 'Escuro',
      icon: Moon,
      description: 'Tema escuro sempre'
    },
    {
      id: 'system' as const,
      name: 'Automático',
      icon: Monitor,
      description: `Segue o sistema (${actualTheme === 'dark' ? 'escuro' : 'claro'})`
    }
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted hover:bg-accent text-foreground border border-border transition-colors"
        aria-label="Selecionar tema"
      >
        {(() => {
          const currentTheme = themes.find(t => t.id === theme);
          const Icon = currentTheme?.icon;
          return Icon ? <Icon className="h-4 w-4" /> : null;
        })()}
        <span className="text-sm font-medium">
          {themes.find(t => t.id === theme)?.name}
        </span>
        <div className={`w-2 h-2 rounded-full ${
          theme === 'system' ? 'bg-gradient-to-br from-yellow-400 to-blue-500' :
          theme === 'dark' ? 'bg-gray-800' : 'bg-yellow-400'
        }`} />
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <div className="absolute top-full left-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg z-20">
            <div className="p-2">
              {themes.map((themeOption) => {
                const Icon = themeOption.icon;
                const isSelected = theme === themeOption.id;
                
                return (
                  <button
                    key={themeOption.id}
                    onClick={() => {
                      setTheme(themeOption.id);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-left transition-colors ${
                      isSelected 
                        ? 'bg-accent text-accent-foreground' 
                        : 'hover:bg-muted text-foreground'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <div className="flex-1">
                      <div className="text-sm font-medium">{themeOption.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {themeOption.description}
                      </div>
                    </div>
                    {isSelected && (
                      <Check className="h-4 w-4 text-primary" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
