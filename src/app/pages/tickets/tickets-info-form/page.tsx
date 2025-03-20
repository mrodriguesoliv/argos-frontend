"use client";

import AddIcon from '@mui/icons-material/Add';
import { ShowcaseSection } from "@/components/Layouts/showcase-section";
import { useRouter } from 'next/navigation';

export function TicketsInfoForm() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/pages/new-ticket');
  };

  return (
    <ShowcaseSection title="Tickets Information" className="!p-7 relative">
      <button
        className="absolute top-[-45px] right-6 flex items-center justify-center w-10 h-8 bg-gray-200 rounded-full shadow-md p-2 hover:bg-gray-300 focus:outline-none"
        onClick={handleClick}
      >
        <AddIcon className="text-primary" />
      </button>

      <form>
        {/* OS TICKETS */}
      </form>
    </ShowcaseSection>
  );
}
