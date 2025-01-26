"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SidebarMenuButton, useSidebar } from "./ui/sidebar";


export function DarkModeToggle() {
  const { setTheme } = useTheme();
  const { isMobile } = useSidebar();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <div className="dark:hidden gap-2 flex items-center">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted ">
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-colors dark:-rotate-90 dark:scale-0" />
            </div>
            <span className="truncate transition-colors">Tema claro</span>
          </div>
          <div className="dark:flex gap-2 hidden items-center">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted ">
              <Moon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-colors dark:rotate-0 dark:scale-100" />
            </div>
            <span className="truncate transition-colors">Tema oscuro</span>
          </div>
        </SidebarMenuButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
        side={isMobile ? "bottom" : "right"}
        align="end"
        sideOffset={4}
      >
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
