import { fetchRevenue } from "@/app/lib/data";
import Chart from "@/app/ui/dashboard/chart";

export default async function RevenueChart() {
  const revenue = await fetchRevenue();

  if (!revenue || revenue.length === 0) {
    return <p className="mt-4 text-gray-400">No data available.</p>;
  }

  return (
    <div className="min-w-1/3 w-auto mr-6 mb-6">
      <Chart data={revenue} />
    </div>
  );
}
