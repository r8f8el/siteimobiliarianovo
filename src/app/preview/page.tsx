"use client";
import { ThemeSelector } from "@/components/ThemeSelector";

export default function PreviewPage() {
  return (
    <div className="min-h-screen p-8 bg-background text-foreground">
      <header className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">Preview de Tema</h1>
        <ThemeSelector />
      </header>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="rounded-xl border border-border p-6 bg-card text-card-foreground">
          <h2 className="font-semibold mb-2">Card</h2>
          <p className="text-sm text-muted-foreground">Este card usa tokens de tema.</p>
        </div>
        <div className="rounded-xl border border-border p-6 bg-secondary text-secondary-foreground">
          <h2 className="font-semibold mb-2">Secondary</h2>
          <p className="text-sm">Bloco com cores secundárias.</p>
        </div>
        <div className="rounded-xl border border-border p-6">
          <button className="px-4 py-2 rounded-md bg-primary text-primary-foreground">Primário</button>
        </div>
      </div>
    </div>
  );
}


