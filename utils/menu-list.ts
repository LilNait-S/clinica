import {
  LayoutDashboard,
  LucideIcon,
  Map,
  MessageCircle,
  Settings,
  Target,
  Users,
} from "lucide-react"

type Submenu = {
  href: string
  label: string
  active: boolean
}

type Menu = {
  href: string
  label: string
  active: boolean
  icon: LucideIcon
  submenus?: Submenu[]
  isActive?: boolean
}

type Group = {
  groupLabel: string
  menus: Menu[]
}

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "Accesibilidad",
      menus: [
        {
          href: "/",
          label: "Panel Principal",
          active: pathname === "/",
          icon: LayoutDashboard,
        },
        {
          href: "/patients",
          label: "Pacientes",
          active: pathname.includes("/patients"),
          icon: Users,
        },
        {
          href: "/tasks",
          label: "Tareas",
          active: pathname.includes("/tasks"),
          icon: Target,
        },
        {
          href: "/appointments",
          label: "Citas",
          active: pathname.includes("/appointments"),
          icon: Map,
        },
        {
          href: "/messages",
          label: "Mensajes",
          active: pathname.includes("/messages"),
          icon: MessageCircle,
        },
        {
          href: "/settings",
          label: "Configuración",
          active: pathname.includes("/settings"),
          icon: Settings,
        },
        // {
        //   href: "/dashboard/analytics",
        //   label: "Análisis",
        //   active: pathname.includes("/dashboard/analytics"),
        //   icon: BarChart4,
        //   isActive: true,
        //   submenus: [
        //     {
        //       href: "/dashboard/analytics/general",
        //       label: "General",
        //       active: pathname === "/dashboard/analytics/general",
        //     },
        //     {
        //       href: "/dashboard/analytics/specific",
        //       label: "Específico",
        //       active: pathname === "/dashboard/analytics/specific",
        //     },
        //   ],
        // },
      ],
    },
  ]
}
