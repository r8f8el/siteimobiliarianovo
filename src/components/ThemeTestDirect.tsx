"use client";
import { useTheme } from '@/contexts/ThemeContext';
import { useEffect, useState } from 'react';

export function ThemeTestDirect() {
  const { theme, actualTheme, setTheme } = useTheme();
  const [htmlClasses, setHtmlClasses] = useState('');

  useEffect(() => {
    const updateHtmlClasses = () => {
      setHtmlClasses(document.documentElement.className);
    };
    
    updateHtmlClasses();
    
    // Observar mudanças no DOM
    const observer = new MutationObserver(updateHtmlClasses);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    
    return () => observer.disconnect();
  }, []);

  const handleClick = (newTheme: 'light' | 'dark' | 'system') => {
    console.log('Mudando tema para:', newTheme);
    setTheme(newTheme);
  };

  return (
    <div className="p-4 border-2 border-red-500 rounded-lg bg-white dark:bg-gray-800">
      <h3 className="text-lg font-bold mb-4 text-black dark:text-white">Teste Direto de Temas</h3>
      
      <div className="mb-4 text-black dark:text-white">
        <p><strong>Tema selecionado:</strong> {theme}</p>
        <p><strong>Tema aplicado:</strong> {actualTheme}</p>
        <p><strong>Classe do html:</strong> {htmlClasses}</p>
                 <p><strong>Tem classe &apos;dark&apos;:</strong> {htmlClasses.includes('dark') ? 'SIM' : 'NÃO'}</p>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => handleClick('light')}
          className={`px-4 py-2 rounded ${
            theme === 'light' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
          }`}
        >
          Claro
        </button>
        <button
          onClick={() => handleClick('dark')}
          className={`px-4 py-2 rounded ${
            theme === 'dark' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
          }`}
        >
          Escuro
        </button>
        <button
          onClick={() => handleClick('system')}
          className={`px-4 py-2 rounded ${
            theme === 'system' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
          }`}
        >
          Automático
        </button>
      </div>

      <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded">
        <p className="text-sm text-black dark:text-white">
          Este texto deve mudar de cor quando o tema for alterado.
          Fundo deve ficar cinza escuro no modo escuro.
        </p>
      </div>

      <div className="mt-4 p-4 bg-blue-100 dark:bg-blue-900 rounded">
        <p className="text-sm text-blue-800 dark:text-blue-200">
          Este texto azul deve ficar mais claro no modo escuro.
        </p>
      </div>

      <div className="mt-4 p-4 bg-red-100 dark:bg-red-900 rounded">
        <p className="text-sm text-red-800 dark:text-red-200">
          Este texto vermelho deve ficar mais claro no modo escuro.
        </p>
      </div>
    </div>
  );
}
