import Image from "next/image";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { fetchFilteredCustomers } from "@/app/lib/data";

export default async function CustomersTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const customers = await fetchFilteredCustomers(query, currentPage);

  return (
    <Card>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Customer</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Total Invoices</TableHead>
            <TableHead>Total paid</TableHead>
            <TableHead>Total Pending</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {customers.map((customer) => (
            <TableRow key={customer.id}>
              <TableCell className="font-medium">
                {
                  <div className="flex items-center">
                    <Image
                      src={customer.image_url}
                      alt={`${customer.name}'s profile picture`}
                      className="mr-4 rounded-full"
                      width={32}
                      height={32}
                    />
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold md:text-base">
                        {customer.name}
                      </p>
                    </div>
                  </div>
                }
              </TableCell>
              <TableCell>{customer.email}</TableCell>

              <TableCell>{customer.total_invoices}</TableCell>
              <TableCell>{customer.total_paid}</TableCell>

              <TableCell>{customer.total_pending}</TableCell>
              <TableCell>
                <div className="flex justify-end gap-3"></div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
