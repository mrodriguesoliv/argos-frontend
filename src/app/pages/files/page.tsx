import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import type { Metadata } from "next";
import { FilesTable } from "./files-info-table/page";

export const metadata: Metadata = {
  title: "Files",
};

export default function FilesPage() {
  return (
    <div className="mx-auto w-full max-w-[1080px]">
      <Breadcrumb pageName="Files" />
      <div className="grid grid-cols-0 gap-8">
        <div className="col-span-5 xl:col-span-3">
          <FilesTable/>
        </div>
      </div>
    </div>
  );
};

