"use client";

import { IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 bg-card text-muted transition hover:border-accent/50 hover:text-accent"
    >
      {mounted && theme === "dark" ? (
        <IconSun size={20} />
      ) : (
        <IconMoon size={20} />
      )}
    </button>
  );
};

export default ThemeToggle;
