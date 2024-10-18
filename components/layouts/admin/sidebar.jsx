"use client";

import { Button } from "@/components/ui/button";
import { ADMIN_LINKS } from "@/lib/links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, Package2 } from "lucide-react";

function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/admin" className="flex items-center gap-2 font-semibold">
            <Package2 className="h-6 w-6" />
            <span className="">Fuarlarım</span>
          </Link>
          <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
        </div>

        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            {ADMIN_LINKS.map((link) => {
              return (
                <Link
                  href={link.href}
                  key={link.href}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                    pathname === link.href ? "bg-secondary" : ""
                  }`}
                >
                  {link.icon}
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
