"use client";
import { Moon } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

export function DarkModeButton() {
  const { actualTheme, setTheme } = useTheme();
  if (actualTheme === "dark") return null;
  return (
    <button
      onClick={() => setTheme("dark")}
      className="fixed bottom-4 right-4 z-50 inline-flex items-center justify-center rounded-full w-12 h-12 bg-primary text-primary-foreground shadow-lg hover:bg-primary/90"
      aria-label="Ativar modo escuro"
      title="Ativar modo escuro"
    >
      <Moon className="h-5 w-5" />
    </button>
  );
}


