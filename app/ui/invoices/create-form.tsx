"use client";

import { useActionState } from "react";
import Link from "next/link";

import { CustomerField } from "@/app/lib/definitions";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { createInvoice, State } from "@/app/lib/actions";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Form({ customers }: { customers: CustomerField[] }) {
  const initialState: State = { message: null, errors: {} };
  const [state, formAction] = useActionState(createInvoice, initialState);

  return (
    <form action={formAction}>
      <Card>
        <CardHeader>
          <CardTitle>Create a new invoice</CardTitle>
          <CardDescription>
            Fill out the form to create a new invoice.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Label htmlFor="customerId">Choose customer</Label>
            <div className="relative" aria-describedby="customer-error">
              <Select name="customerId">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a customer" />
                </SelectTrigger>
                <SelectContent>
                  {customers.map((customer) => (
                    <SelectItem value={customer.id}>{customer.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div id="customer-error" aria-live="polite" aria-atomic="true">
              {state.errors?.customerId &&
                state.errors?.customerId.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </div>

          {/* Invoice Amount */}
          <div className="mb-4">
            <label htmlFor="amount" className="mb-2 block text-sm font-medium">
              Choose an amount
            </label>
            <div className="relative mt-2 rounded-md">
              <div className="relative">
                <Input
                  id="amount"
                  name="amount"
                  type="number"
                  step="0.01"
                  placeholder="Enter USD amount"
                  aria-describedby="amount-error"
                />
              </div>
              <div id="amount-error" aria-live="polite" aria-atomic="true">
                {state.errors?.amount &&
                  state.errors?.amount.map((error: string) => (
                    <p className="mt-2 text-sm text-red-500" key={error}>
                      {error}
                    </p>
                  ))}
              </div>
            </div>
          </div>

          <fieldset>
            <Label htmlFor="status">Set the invoice status</Label>
            <div className="flex mt-2" aria-describedby="status-error">
              <RadioGroup defaultValue="" className="flex" name="status">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="pending" id="pending" />
                  <Label htmlFor="pending">Pending</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="paid" id="paid" />
                  <Label htmlFor="paid">Paid</Label>
                </div>
              </RadioGroup>
            </div>
            <div id="status-error" aria-live="polite" aria-atomic="true">
              {state.errors?.status &&
                state.errors?.status.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </fieldset>
        </CardContent>
      </Card>
      <div className="mt-6 flex justify-end gap-4">
        <Button variant="secondary" asChild>
          <Link href="/dashboard/invoices">Cancel</Link>
        </Button>
        <Button type="submit">Create Invoice</Button>
      </div>
    </form>
  );
}
