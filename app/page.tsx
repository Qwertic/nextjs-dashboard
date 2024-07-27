import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { ThemeProvider } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";

import { TypographyH1, TypographyH3 } from "./ui/typography";
import Image from "next/image";

export default function Page() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <main className="flex min-h-screen flex-col p-6">
        <div className="mt-4 flex grow flex-col gap-4 md:flex-row items-center">
          <Card>
            <CardHeader>
              <TypographyH1>Welcome to Acme.</TypographyH1>
            </CardHeader>
            <CardContent>
              <TypographyH3>This is the example for the </TypographyH3>
              <TypographyH3>
                <a href="https://nextjs.org/learn/" className="text-blue-500">
                  Next.js Learn Course
                </a>
              </TypographyH3>
              <TypographyH3>brought you by Vercel</TypographyH3>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href="/login">
                  <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
          <div className="flex items-center justify-center p-6 mx-auto">
            <Image
              src="/smile.svg"
              alt="Smile Emoji"
              width={500}
              height={500}
            />
          </div>
        </div>
      </main>
    </ThemeProvider>
  );
}
