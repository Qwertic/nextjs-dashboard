import { CheckIcon, ClockIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

export default function InvoiceStatus({ status }: { status: string }) {
  return (
    <span
      className={clsx("inline-flex items-center rounded-md px-2 py-1 text-xs", {
        "bg-gray-100 dark:outline dark:bg-transparent dark:outline-gray-200 dark:text-gray-200":
          status === "pending",
        "bg-green-500 dark:outline dark:bg-transparent text-white dark:outline-green-500 dark:text-green-500":
          status === "paid",
      })}
    >
      {status === "pending" ? (
        <>
          Pending
          <ClockIcon className="ml-1 w-4 text-gray-500 dark:text-gray-200" />
        </>
      ) : null}
      {status === "paid" ? (
        <>
          Paid
          <CheckIcon className="ml-1 w-4 text-white dark:text-green-500" />
        </>
      ) : null}
    </span>
  );
}
