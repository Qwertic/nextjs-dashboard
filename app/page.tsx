import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import { TypographyH1, TypographyH3 } from "./ui/typography";
import styles from "@/app/ui/home.module.css";

export default function Page() {
  return (
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
            <Link
              href="/login"
              className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
            >
              <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
            </Link>
          </CardFooter>
        </Card>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <div className={styles.abstract}></div>
        </div>
      </div>
    </main>
  );
}
