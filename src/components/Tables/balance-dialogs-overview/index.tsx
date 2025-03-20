import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { compactFormat, standardFormat } from "@/lib/format-number";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { getTopChannels } from "../fetch";

export async function TopChannels({ className }: { className?: string }) {
  const data = await getTopChannels();

  return (
    <div
      className={cn(
        "w-full max-w-[1500px] rounded-[10px] bg-white px-7.5 pb-4 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card ",
      className,
      )}
    >
      <h2 className="w-full mb-4 text-body-2xlg font-bold text-dark dark:text-white">
        Balance of Dialogs
      </h2>

      <Table>
        <TableHeader>
          <TableRow className="w-full border-none uppercase [&>th]:text-center">
            <TableHead className="min-w-[120px] !text-left">Question</TableHead>
            <TableHead>User</TableHead>
            <TableHead className="!text-right">Messages Count</TableHead>
            <TableHead>Folder Name</TableHead>
            <TableHead>Created</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map((channel, i) => (
            <TableRow
              className="w-full text-center text-base font-medium text-dark dark:text-white"
              key="0"
            >
              <TableCell className="flex min-w-fit items-center gap-3">
                <div className="">{channel.name}</div>
              </TableCell>

              <TableCell>{compactFormat(channel.visitors)}</TableCell>

              <TableCell className="!text-right text-green-light-1">
                {standardFormat(channel.revenues)}
              </TableCell>

              <TableCell>{channel.sales}</TableCell>

              <TableCell>{channel.conversion}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
