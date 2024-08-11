"use client";

import React, { useEffect } from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import useLocalStorageState from "use-local-storage-state";

type Theme = "light" | "dark";

export default function ThemeSwitch() {
  const [theme, setTheme] = useLocalStorageState<Theme>("theme", {
    defaultValue: "light",
  });

  useEffect(() => {
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (theme === "light" && systemPrefersDark) {
      setTheme("dark");
    } else if (theme === "dark" && !systemPrefersDark) {
      setTheme("light");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <button
      className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] activ:scale-105 transition-all"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
