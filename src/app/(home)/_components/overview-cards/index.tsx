import { compactFormat } from "@/lib/format-number";
import { getOverviewData } from "../../fetch";
import { OverviewCard } from "./card";
import * as icons from "./icons";

export async function OverviewCardsGroup() {
  const { organizations, tickets, products, users } = await getOverviewData();

  return (
    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4 2xl:gap-7.5">
      <OverviewCard
        label="Total Organizations"
        data={{
          ...organizations,
          value: compactFormat(organizations.value),
        }}
        Icon={icons.Views}
      />

      <OverviewCard
        label="Total Tickets"
        data={{
          ...tickets,
          value: compactFormat(tickets.value),
        }}
        Icon={icons.Profit}
      />

      <OverviewCard
        label="Total Files"
        data={{
          ...products,
          value: compactFormat(products.value),
        }}
        Icon={icons.Product}
      />

      <OverviewCard
        label="Total Meets"
        data={{
          ...users,
          value: compactFormat(users.value),
        }}
        Icon={icons.Users}
      />
    </div>
  );
}
