import { ColumnDef } from "@tanstack/react-table";
import { Title } from "../ui/title";
import { usersData } from "@/data";
import { DataTable } from "../ui/datatable";

export type IUser = {
  name: string;
  email: string;
  lastOrder: string;
  method: string;
};

const handleSelectRow = (row: unknown) => {
  console.log(row);
};

const columns: ColumnDef<IUser>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      return (
        <div
          className="flex gap-2 items-center cursor-pointer"
          onClick={() => handleSelectRow(row)}
        >
          <img
            className="h-10 w-10"
            src={`https://api.dicebear.com/7.x/lorelei/svg?seed=${row.getValue(
              "name"
            )}`}
            alt="user-image"
          />
          <p>{row.getValue("name")} </p>
        </div>
      );
    },
  },
  {
    accessorKey: "email",
    header: "Email",
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

export const Users = () => {
  return (
    <div className="flex flex-col gap-5  w-full">
      <Title title="Users" />
      <DataTable columns={columns} data={usersData} />
    </div>
  );
};
