import { useEffect, useState } from "react";

const STORAGE_KEY = "aqip.sidebar.collapsed";

export function useSidebar() {
  const [collapsed, setCollapsed] = useState<boolean>(() => {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === "true";
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, String(collapsed));
  }, [collapsed]);

  const toggle = () => {
    setCollapsed((prev) => !prev);
  };

  return {
    collapsed,
    toggle,
    setCollapsed,
  };
}
