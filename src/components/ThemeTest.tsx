"use client";
import { useTheme } from '@/contexts/ThemeContext';

export function ThemeTest() {
  const { theme, actualTheme, setTheme } = useTheme();

  const handleClick = (newTheme: 'light' | 'dark' | 'system') => {
    console.log('Mudando tema para:', newTheme);
    setTheme(newTheme);
  };

  return (
    <div className="p-4 border border-gray-300 rounded-lg bg-white">
      <h3 className="text-lg font-bold mb-4">Teste de Temas</h3>
      
      <div className="mb-4">
        <p><strong>Tema selecionado:</strong> {theme}</p>
        <p><strong>Tema aplicado:</strong> {actualTheme}</p>
        <p><strong>Classe do body:</strong> {typeof document !== 'undefined' ? document.documentElement.className : 'N/A'}</p>
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

      <div className="mt-4 p-4 bg-gray-100 rounded">
        <p className="text-sm">
          Este texto deve mudar de cor quando o tema for alterado.
          Se estiver funcionando, você verá a mudança visual.
        </p>
      </div>
    </div>
  );
}
