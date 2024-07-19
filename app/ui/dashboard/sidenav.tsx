"use client";

import Link from "next/link";
import NavLinks from "@/app/ui/dashboard/nav-links";
import AcmeLogo from "@/app/ui/acme-logo";
import { PowerIcon, SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { logOut } from "@/app/lib/actions";

const ThemeSelector = () => {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
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
};

export default function SideNav() {
  return (
    <div className="flex h-full px-3 py-4 md:px-2">
      <aside className="flex fixed inset-y-0 left-0 z-10 w-14 flex-col border-r bg-background">
        <nav className="flex flex-col h-full items-center gap-4 px-2 sm:py-4">
          <Link
            className="mb-2 flex items-end justify-start rounded-md bg-blue-600 p-2 "
            href="/"
          >
            <div className="text-white">
              <AcmeLogo />
            </div>
          </Link>
          <div className="flex grow flex-col space-x-0 space-y-2">
            <NavLinks />
            {/* <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div> */}
            <div className="flex flex-col flex-grow justify-end space-y-2">
              <ThemeSelector />
              <form action={logOut}>
                <Button variant="outline" size="icon">
                  <PowerIcon className="w-6" />
                </Button>
              </form>
            </div>
          </div>
        </nav>
      </aside>
    </div>
  );
}
