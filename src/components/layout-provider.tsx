"use client";
import { createContext, useContext } from "react";
import { getCurrentPreset, LayoutPreset } from "@/data/layouts/presets";

const LayoutContext = createContext<LayoutPreset | null>(null);

export function LayoutProvider({ children }: { children: React.ReactNode }) {
  const preset = getCurrentPreset();
  return (
    <LayoutContext.Provider value={preset}>
      {children}
    </LayoutContext.Provider>
  );
}

export function useLayout(): LayoutPreset {
  const context = useContext(LayoutContext);
  if (!context) {
    return getCurrentPreset();
  }
  return context;
}
