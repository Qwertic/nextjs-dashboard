// Loading animation
import { Skeleton } from "@/components/ui/skeleton";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function CardSkeleton() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[125px] w-[250px] rounded-xl items-start"></Skeleton>
    </div>
    // <div
    //   className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm`}
    // >
    //   <div className="flex p-4">
    //     <div className="h-5 w-5 rounded-md bg-gray-200" />
    //     <div className="ml-2 h-6 w-16 rounded-md bg-gray-200 text-sm font-medium" />
    //   </div>
    //   <div className="flex items-center justify-center truncate rounded-xl bg-white px-4 py-8">
    //     <div className="h-7 w-20 rounded-md bg-gray-200" />
    //   </div>
    // </div>
  );
}

export function CardsSkeleton() {
  return (
    <>
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </>
  );
}

export function RevenueChartSkeleton() {
  return (
    <div className="flex flex-col w-1/3 mr-4">
      <Skeleton className="w-[100px] h-[26px] rounded-full mb-6" />
      <Card>
        <div className={`relative w-full p-4  overflow-hidden mr-6 mb-6`}>
          <Skeleton className=" grid h-[406px] grid-cols-12 items-end mt-0 gap-2 rounded-md sm:grid-cols-13 md:gap-4" />
        </div>
      </Card>
    </div>
  );
}

export function InvoiceSkeleton() {
  return (
    <div className="flex flex-row items-center justify-between border-b py-4">
      <div className="flex items-center">
        <Skeleton className="mr-2 h-8 w-8 rounded-3xl" />
        <div className="min-w-0">
          <Skeleton className="h-5 w-40" />
          <Skeleton className="mt-2 h-4 w-12" />
        </div>
      </div>
      <Skeleton className="mt-2 h-4 w-12" />
    </div>
  );
}

export function LatestInvoicesSkeleton() {
  return (
    <div className="w-auto flex-grow">
      <Skeleton className="w-[100px] h-[26px] rounded-full mb-6" />
      <Card>
        <div className="px-6">
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <InvoiceSkeleton />
        </div>
      </Card>
    </div>
  );
}

export default function DashboardSkeleton() {
  return (
    <>
      <div
        className={`${shimmer} relative mb-4 h-8 w-36 overflow-hidden rounded-md bg-gray-100`}
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <RevenueChartSkeleton />
        <LatestInvoicesSkeleton />
      </div>
    </>
  );
}

export function TableRowSkeleton() {
  return (
    <TableRow>
      <TableCell>
        <div className="flex items-start w-full">
          <Skeleton className="mr-2 h-8 w-8 rounded-3xl" />
          <Skeleton className="mt-2 h-4 w-20" />
        </div>
      </TableCell>
      <TableCell>
        <div className="min-w-0">
          <Skeleton className="h-5 w-40" />
        </div>
      </TableCell>
      <TableCell className="text-right">
        <Skeleton className="mt-2 h-4 w-12" />
      </TableCell>
      <TableCell>
        <Skeleton className="mt-2 h-4 w-12" />
      </TableCell>
      <TableCell>
        <Skeleton className="mt-2 h-4 w-12" />
      </TableCell>
      <TableCell>
        <div className="flex justify-end w-full">
          <Skeleton className="mt-2 mr-2 h-10 w-10" />
          <Skeleton className="mt-2 h-10 w-10" />
        </div>
      </TableCell>
    </TableRow>
  );
}

export function InvoicesMobileSkeleton() {
  return (
    <div className="mb-2 w-full rounded-md bg-white p-4">
      <div className="flex items-center justify-between border-b border-gray-100 pb-8">
        <div className="flex items-center">
          <div className="mr-2 h-8 w-8 rounded-full bg-gray-100"></div>
          <div className="h-6 w-16 rounded bg-gray-100"></div>
        </div>
        <div className="h-6 w-16 rounded bg-gray-100"></div>
      </div>
      <div className="flex w-full items-center justify-between pt-4">
        <div>
          <div className="h-6 w-16 rounded bg-gray-100"></div>
          <div className="mt-2 h-6 w-24 rounded bg-gray-100"></div>
        </div>
        <div className="flex justify-end gap-2">
          <div className="h-10 w-10 rounded bg-gray-100"></div>
          <div className="h-10 w-10 rounded bg-gray-100"></div>
        </div>
      </div>
    </div>
  );
}

export function InvoicesTableSkeleton() {
  return (
    <div className="mt-4 flow-root">
      <div className="inline-block min-w-full align-middle">
        <Card>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Customer</TableHead>
                <TableHead>Email</TableHead>
                <TableHead className="text-right">Amount</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
            </TableBody>
          </Table>
        </Card>
      </div>
    </div>
  );
}
