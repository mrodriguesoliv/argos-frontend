import { PersonalInfoForm } from "@/app/pages/tickets/_components/personal-info";
import { UploadPhotoForm } from "@/app/pages/tickets/_components/upload-photo"

export default function NewTicketPage() {
  return (
    <div className="grid grid-cols-5 gap-8">
      <div className="col-span-5 xl:col-span-3">
        <PersonalInfoForm />
      </div>
      <div className="col-span-5 xl:col-span-2">
        <UploadPhotoForm />
      </div>
    </div>
  );
}
