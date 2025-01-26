import { cn } from "@/lib/utils"

export function Banner({
  children,
  className,
}: { children: React.ReactNode } & React.ComponentProps<"h1">) {
  return (
    <header className="w-full">
      <h1 className={cn("font-bold text-3xl", className)}>{children}</h1>
    </header>
  )
}
