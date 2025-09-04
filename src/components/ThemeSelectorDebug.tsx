"use client";
import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useState } from 'react';

export function ThemeSelectorDebug() {
  const { theme, actualTheme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const themes = [
    {
      id: 'light' as const,
      name: 'Claro',
      icon: Sun,
    },
    {
      id: 'dark' as const,
      name: 'Escuro',
      icon: Moon,
    },
    {
      id: 'system' as const,
      name: 'Automático',
      icon: Monitor,
    }
  ];

  const handleThemeChange = (newTheme: 'light' | 'dark' | 'system') => {
    console.log('Mudando tema para:', newTheme);
    setTheme(newTheme);
    setIsOpen(false);
  };

  const currentTheme = themes.find(t => t.id === theme);
  const Icon = currentTheme?.icon;

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-900 border border-gray-300 transition-colors"
        aria-label="Selecionar tema"
      >
        {Icon && <Icon className="h-4 w-4" />}
        <span className="text-sm font-medium">
          {currentTheme?.name}
        </span>
        <div className={`w-2 h-2 rounded-full ${
          theme === 'system' ? 'bg-blue-500' :
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
          <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-20">
            <div className="p-2">
              {themes.map((themeOption) => {
                const Icon = themeOption.icon;
                const isSelected = theme === themeOption.id;
                
                return (
                  <button
                    key={themeOption.id}
                    onClick={() => handleThemeChange(themeOption.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-left transition-colors ${
                      isSelected 
                        ? 'bg-blue-100 text-blue-900' 
                        : 'hover:bg-gray-100 text-gray-900'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <div className="flex-1">
                      <div className="text-sm font-medium">{themeOption.name}</div>
                      <div className="text-xs text-gray-500">
                        Tema atual: {actualTheme}
                      </div>
                    </div>
                    {isSelected && (
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
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
