"use client";

import { TrendingUp } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  ResponsiveContainer,
  Tooltip,
  YAxis,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Chart({ data }: { data: any[] }) {
  return (
    <div className="w-full flex">
      <Card>
        <CardHeader>
          <CardTitle>Bar Chart</CardTitle>
          <CardDescription>January - June 2024</CardDescription>
        </CardHeader>

        <CardContent>
          <ResponsiveContainer
            width="100%"
            height="100%"
            minWidth={450}
            minHeight={378}
          >
            <BarChart width={450} height={378} data={data} barSize={50}>
              {/* <CartesianGrid stroke="hsl(var(--primary))" /> */}
              <YAxis
                tick={{
                  fill: "hsl(var(--primary))",
                }}
                name="Revenue in $"
              />
              <XAxis
                tick={{
                  fill: "hsl(var(--primary))",
                }}
                dataKey="month"
                tickMargin={10}
              />
              <Bar dataKey="revenue" fill="hsl(var(--chart-1))"></Bar>
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
