import Image from "next/image";

import { fetchLatestInvoices } from "@/app/lib/data";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function LatestInvoices() {
  const latestInvoices = await fetchLatestInvoices();

  return (
    <div className="w-auto flex-grow">
      <Card>
        <CardHeader>
          <CardTitle>Latest Invoices</CardTitle>
          <CardDescription>January - June 2024</CardDescription>
        </CardHeader>
        <Table>
          <TableCaption>Latest Incoices</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {latestInvoices.map((invoice) => (
              <TableRow key={invoice.id}>
                <TableCell className="font-medium">
                  {
                    <div className="flex items-center">
                      <Image
                        src={invoice.image_url}
                        alt={`${invoice.name}'s profile picture`}
                        className="mr-4 rounded-full"
                        width={32}
                        height={32}
                      />
                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold md:text-base">
                          {invoice.name}
                        </p>
                      </div>
                    </div>
                  }
                </TableCell>
                <TableCell>{invoice.email}</TableCell>

                <TableCell className="text-right">{invoice.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
