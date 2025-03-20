import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import type { Metadata } from "next";
import { TicketsInfoForm } from "./tickets-info-form/page";

export const metadata: Metadata = {
  title: "Tickets",
};

export default function TicketsPage() {
  return (
    <div className="mx-auto w-full max-w-[1080px]">
      <Breadcrumb pageName="Tickets" />
      <div className="grid grid-cols-0 gap-8">
        <div className="col-span-5 xl:col-span-3">
          <TicketsInfoForm/>
        </div>
      </div>
    </div>
  );
};

