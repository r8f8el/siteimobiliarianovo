"use client";
import { useTheme } from '@/contexts/ThemeContext';

export function ThemeTestSimple() {
  const { theme, actualTheme, setTheme } = useTheme();

  const handleClick = (newTheme: 'light' | 'dark' | 'system') => {
    console.log('Mudando tema para:', newTheme);
    setTheme(newTheme);
  };

  return (
    <div style={{
      padding: '16px',
      border: '2px solid red',
      borderRadius: '8px',
      backgroundColor: actualTheme === 'dark' ? '#1f2937' : '#ffffff',
      color: actualTheme === 'dark' ? '#ffffff' : '#000000',
    }}>
      <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '16px' }}>
        Teste Simples de Temas
      </h3>
      
      <div style={{ marginBottom: '16px' }}>
        <p><strong>Tema selecionado:</strong> {theme}</p>
        <p><strong>Tema aplicado:</strong> {actualTheme}</p>
      </div>

      <div style={{ display: 'flex', gap: '8px' }}>
        <button
          onClick={() => handleClick('light')}
          style={{
            padding: '8px 16px',
            borderRadius: '4px',
            backgroundColor: theme === 'light' ? '#3b82f6' : '#e5e7eb',
            color: theme === 'light' ? '#ffffff' : '#374151',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          Claro
        </button>
        <button
          onClick={() => handleClick('dark')}
          style={{
            padding: '8px 16px',
            borderRadius: '4px',
            backgroundColor: theme === 'dark' ? '#3b82f6' : '#e5e7eb',
            color: theme === 'dark' ? '#ffffff' : '#374151',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          Escuro
        </button>
        <button
          onClick={() => handleClick('system')}
          style={{
            padding: '8px 16px',
            borderRadius: '4px',
            backgroundColor: theme === 'system' ? '#3b82f6' : '#e5e7eb',
            color: theme === 'system' ? '#ffffff' : '#374151',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          Automático
        </button>
      </div>

      <div style={{
        padding: '16px',
        marginTop: '16px',
        borderRadius: '8px',
        backgroundColor: actualTheme === 'dark' ? '#374151' : '#f3f4f6',
        color: actualTheme === 'dark' ? '#ffffff' : '#000000',
      }}>
        <p style={{ fontSize: '14px' }}>
          Este texto deve mudar de cor quando o tema for alterado.
          Fundo deve ficar cinza escuro no modo escuro.
        </p>
      </div>
    </div>
  );
}