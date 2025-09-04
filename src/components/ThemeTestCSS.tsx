"use client";
import { useTheme } from '@/contexts/ThemeContext';
import { useEffect, useState } from 'react';

export function ThemeTestCSS() {
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

  // Estilos inline para testar
  const containerStyle = {
    padding: '16px',
    border: '2px solid red',
    borderRadius: '8px',
    backgroundColor: actualTheme === 'dark' ? '#1f2937' : '#ffffff',
    color: actualTheme === 'dark' ? '#ffffff' : '#000000',
  };

  const boxStyle = {
    padding: '16px',
    marginTop: '16px',
    borderRadius: '8px',
    backgroundColor: actualTheme === 'dark' ? '#374151' : '#f3f4f6',
    color: actualTheme === 'dark' ? '#ffffff' : '#000000',
  };

  return (
    <div style={containerStyle}>
      <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '16px' }}>
        Teste CSS Inline de Temas
      </h3>
      
      <div style={{ marginBottom: '16px' }}>
        <p><strong>Tema selecionado:</strong> {theme}</p>
        <p><strong>Tema aplicado:</strong> {actualTheme}</p>
        <p><strong>Classe do html:</strong> {htmlClasses}</p>
        <p><strong>Tem classe dark:</strong> {htmlClasses.includes('dark') ? 'SIM' : 'NÃO'}</p>
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

      <div style={boxStyle}>
        <p style={{ fontSize: '14px' }}>
          Este texto deve mudar de cor quando o tema for alterado.
          Fundo deve ficar cinza escuro no modo escuro.
        </p>
      </div>

      <div style={{
        ...boxStyle,
        backgroundColor: actualTheme === 'dark' ? '#1e3a8a' : '#dbeafe',
        color: actualTheme === 'dark' ? '#bfdbfe' : '#1e40af'
      }}>
        <p style={{ fontSize: '14px' }}>
          Este texto azul deve ficar mais claro no modo escuro.
        </p>
      </div>

      <div style={{
        ...boxStyle,
        backgroundColor: actualTheme === 'dark' ? '#991b1b' : '#fee2e2',
        color: actualTheme === 'dark' ? '#fecaca' : '#dc2626'
      }}>
        <p style={{ fontSize: '14px' }}>
          Este texto vermelho deve ficar mais claro no modo escuro.
        </p>
      </div>
    </div>
  );
}
