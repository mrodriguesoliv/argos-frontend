import { PeriodPicker } from "@/components/period-picker";
import { standardFormat } from "@/lib/format-number";
import { cn } from "@/lib/utils";
import { getBalanceQuestionsOverviewData } from "@/services/charts.services";
import { BalanceQuestionsOverviewChart } from "./chart";

type PropsType = {
  timeFrame?: string;
  className?: string;
};

export async function BalanceQuestionsOverview({
  timeFrame = "monthly",
  className,
}: PropsType) {
  const data = await getBalanceQuestionsOverviewData(timeFrame);

  return (
    <div
      className={cn(
        "grid gap-2 rounded-[10px] bg-white px-7.5 pb-6 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card",
        className,
      )}
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-body-2xlg font-bold text-dark dark:text-white">
          Balance of Questions
        </h2>

        <PeriodPicker defaultValue={timeFrame} sectionKey="payments_overview" />
      </div>

      <BalanceQuestionsOverviewChart data={data} />

    </div>
  );
}
