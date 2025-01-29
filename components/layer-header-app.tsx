"use client"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { getPatient } from "@/lib/actions/patients"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Fragment, useEffect, useState } from "react"

type LayerHeaderAppProps = {
  children: React.ReactNode
  className?: string
}

export function LayerHeaderApp({ children, className }: LayerHeaderAppProps) {
  const path = usePathname()
  const [patientNames, setPatientNames] = useState<Record<string, string>>({})

  useEffect(() => {
    async function resolvePatientNames() {
      const segments = path.split("/").filter((segment) => segment !== "")
      const resolvedNames: Record<string, string> = {}

      for (const segment of segments) {
        const id = parseInt(segment, 10)
        if (!isNaN(id)) {
          const patient = await getPatient({ id })
          if (patient) {
            resolvedNames[segment] = patient.fullName
          }
        }
      }

      setPatientNames(resolvedNames)
    }

    resolvePatientNames()
  }, [path])

  const segments = path.split("/").filter((segment) => segment !== "")

  const formattedSegments = segments.map((segment, index) => {
    const isPatientName = patientNames[segment]
    const label = isPatientName ? isPatientName : segment.replace(/-/g, " ")

    return {
      href: `/${segments.slice(0, index + 1).join("/")}`,
      label: label.charAt(0).toUpperCase() + label.slice(1),
    }
  })
  return (
    <SidebarInset>
      <header className="flex h-14 shrink-0 items-center gap-2">
        <div className="flex items-center gap-2 px-6">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              {formattedSegments.map(({ href, label }, i) => (
                <Fragment key={href}>
                  <BreadcrumbItem className="hidden md:block">
                    {i < formattedSegments.length - 1 ? (
                      <BreadcrumbLink asChild>
                        <Link href={href} className="capitalize">
                          {decodeURIComponent(label)}
                        </Link>
                      </BreadcrumbLink>
                    ) : (
                      <BreadcrumbPage className="capitalize">
                        {decodeURIComponent(label)}
                      </BreadcrumbPage>
                    )}
                  </BreadcrumbItem>
                  {i < formattedSegments.length - 1 && <BreadcrumbSeparator />}
                </Fragment>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
      <div className={cn("flex flex-1 flex-col gap-4 p-6", className)}>
        {children}
      </div>
    </SidebarInset>
  )
}
