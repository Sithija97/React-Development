import { ColumnDef } from "@tanstack/react-table";
import { Title } from "../ui/title";
import { DataTable } from "../ui/datatable";
import { ordersData } from "@/data";
import { Badge } from "../ui/badge";

export type IPayment = {
  order: string;
  status: string;
  lastOrder: string;
  method: string;
};

const columns: ColumnDef<IPayment>[] = [
  {
    accessorKey: "order",
    header: "Order",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return <Badge>{row.getValue("status")}</Badge>;
    },
  },
  {
    accessorKey: "lastOrder",
    header: "Last Order",
  },
  {
    accessorKey: "method",
    header: "Method",
  },
];

export const Orders = () => {
  return (
    <div className="flex flex-col gap-5 w-full">
      <Title title="Orders" />
      <DataTable columns={columns} data={ordersData} />
    </div>
  );
};
