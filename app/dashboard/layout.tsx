import SideNav from "@/app/ui/dashboard/sidenav";
import { ThemeProvider } from "@/components/theme-provider";

export const experimental_ppr = true;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="flex min-h-screen w-full flex-col bg-background">
        <SideNav />
        <div className="flex-grow pr-8 pl-16 py-8 md:overflow-y-auto">
          {children}
        </div>
      </div>
    </ThemeProvider>
  );
}
