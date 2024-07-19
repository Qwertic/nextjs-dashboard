import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
} from "@heroicons/react/24/outline";

import { fetchCardData } from "@/app/lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const iconMap = {
  collected: BanknotesIcon,
  customers: UserGroupIcon,
  pending: ClockIcon,
  invoices: InboxIcon,
};

export default async function CardWrapper() {
  const {
    numberOfInvoices,
    numberOfCustomers,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData();

  return (
    <>
      {/* NOTE: Uncomment this code in Chapter 9 */}

      <CardComponent
        title="Collected"
        value={totalPaidInvoices}
        type="collected"
      />
      <CardComponent
        title="Pending"
        value={totalPendingInvoices}
        type="pending"
      />
      <CardComponent
        title="Total Invoices"
        value={numberOfInvoices}
        type="invoices"
      />
      <CardComponent
        title="Total Customers"
        value={numberOfCustomers}
        type="customers"
      />
    </>
  );
}

export function CardComponent({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: "invoices" | "customers" | "pending" | "collected";
}) {
  const Icon = iconMap[type];

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center">
          {Icon ? <Icon className="h-8 w-8 pr-2 text-foreground " /> : null}
          <p className="text-xl font-medium leading-none">{title}</p>
        </div>
      </CardHeader>
      <CardContent>
        <CardTitle>{value}</CardTitle>
      </CardContent>
    </Card>
  );
}
