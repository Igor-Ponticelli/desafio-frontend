import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
    } else {
      // Detecta tema do sistema
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative w-12 h-6 rounded-full bg-zinc-300 dark:bg-zinc-700 transition-colors duration-300 my-5 ml-1"
    >
      <span
        className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white dark:bg-black transition-transform duration-300 ${
          theme === "dark" ? "translate-x-6" : ""
        }`}
      />
      <Sun className="absolute left-1 top-1 w-4 h-4 stroke-yellow-500" />
      <Moon className="absolute right-1 top-1 w-4 h-4 stroke-blue-500" />
    </button>
  );
}

export default ThemeToggle