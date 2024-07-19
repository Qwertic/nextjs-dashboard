import { PencilIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import { deleteInvoice } from "@/app/lib/actions";

export function CreateInvoice() {
  return (
    <Button>
      <Link
        href="/dashboard/invoices/create"
        className="flex h-10 items-center "
      >
        Create Invoice
        <PlusIcon className="h-5 md:ml-4" />
      </Link>
    </Button>
  );
}

export function UpdateInvoice({ id }: { id: string }) {
  return (
    <Button variant="outline" size="icon">
      <Link href={`/dashboard/invoices/${id}/edit`}>
        <PencilIcon className="w-4" />
      </Link>
    </Button>
  );
}

export function DeleteInvoice({ id }: { id: string }) {
  const deleteInvoiceWithId = deleteInvoice.bind(null, id);

  return (
    <form action={deleteInvoiceWithId}>
      <Button variant="outline" size="icon">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </Button>
    </form>
  );
}
