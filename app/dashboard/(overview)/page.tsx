import { Suspense } from "react";
import RevenueChart from "@/app/ui/dashboard/revenue-chart";
import CardWrapper from "@/app/ui/dashboard/cards";
import {
  RevenueChartSkeleton,
  LatestInvoicesSkeleton,
  CardsSkeleton,
} from "@/app/ui/skeletons";
import LatestInvoices from "@/app/ui/dashboard/latest-invoices";
import { TypographyH3 } from "@/app/ui/typography";

export default async function Page() {
  return (
    <main>
      <TypographyH3>Dashboard</TypographyH3>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className="mt-6 flex w-full flex-wrap">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  );
}
