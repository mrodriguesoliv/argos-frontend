import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import type { Metadata } from "next";
import { OrganizationsTable } from "./organizations-info-table/page";

export const metadata: Metadata = {
  title: "Organizations",
};

export default function OrganizationsPage() {
  return (
    <div className="mx-auto w-full max-w-[1080px]">
      <Breadcrumb pageName="Organizations" />
      <div className="grid grid-cols-0 gap-8">
        <div className="col-span-5 xl:col-span-3">
          <OrganizationsTable/>
        </div>
      </div>
    </div>
  );
};

