import { MessageCircleIcon, Search } from "lucide-react";
import LinksDropdown from "./links-dropdown";
import ThemeToggle from "./theme-toggle";
import UserButton from "./user-button";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Navbar() {
  return (
    <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
      <LinksDropdown />

      <div className="w-full flex-1">
        <form>
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
            />
          </div>
        </form>
      </div>

      <div className="flex items-center gap-x-4">
        <Button variant="outline" size="icon" asChild>
          <Link href="/admin/messages">
            <MessageCircleIcon />
          </Link>
        </Button>
        <ThemeToggle />
        <UserButton />
      </div>
    </header>
  );
}
export default Navbar;
