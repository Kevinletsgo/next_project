"use client"
import {Button} from "@/components/ui/button";
import {LucideSun, LucideMoon} from "lucide-react";
import {useTheme} from "next-themes";

const ThemeSwitcher = () => {
  const {theme, setTheme} = useTheme();
  return (
      <Button variant="outline" size="icon" onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}>
      {theme === "dark" ? (
        <LucideMoon className="w-4 h-4" />
      ) : (
        <LucideSun className="w-4 h-4" />
      )}
      </Button>
  )
}

export {ThemeSwitcher};