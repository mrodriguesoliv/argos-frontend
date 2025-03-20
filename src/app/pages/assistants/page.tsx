import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import type { Metadata } from "next";
import { AssistantsTable } from "./assistants-info-table/page";

export const metadata: Metadata = {
  title: "Assistants",
};

export default function AssistantsPage() {
  return (
    <div className="mx-auto w-full max-w-[1080px]">
      <Breadcrumb pageName="Assistants" />
      <div className="grid grid-cols-0 gap-8">
        <div className="col-span-5 xl:col-span-3">
          <AssistantsTable/>
        </div>
      </div>
    </div>
  );
};

