import { TypographyH3 } from "@/app/ui/typography";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customers",
};

export default function Page() {
  return <TypographyH3>Customers page</TypographyH3>;
}
