import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "../ui/datatable";
import { Title } from "../ui/title";
import { settingsData } from "@/data";

export type ISettings = {
  category: string;
  value: string | number | boolean;
};

const columns: ColumnDef<ISettings>[] = [
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "value",
    header: "Value",
  },
];

export const Settings = () => {
  return (
    <div className="flex flex-col gap-5  w-full">
      <Title title="Settings" />
      <DataTable columns={columns} data={settingsData} />
    </div>
  );
};
