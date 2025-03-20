import { useState } from "react";
import { Dropdown, DropdownContent, DropdownTrigger } from "@/components/ui/dropdown";
import Link from "next/link";
import { LogOutIcon, SettingsIcon } from "./icons";
import { Button } from "@/components/ui/button";
import { User } from "../../sidebar/icons";
import { useRouter } from 'next/router';

const Navbar = () => {
  const [user, setUser] = useState({ name: "John Doe", email: "john.doe@example.com" }); // Simulando um usuário autenticado
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    setUser(null); // Remove o usuário
    setIsOpen(false); // Fecha o dropdown
    router.push('/login'); // Redireciona para a página de login ou outra página
  };

  return (
    <Dropdown isOpen={isOpen} setIsOpen={setIsOpen}>
      {user && (
        <DropdownContent
          className="border border-stroke bg-white shadow-md dark:border-dark-3 dark:bg-gray-dark min-[230px]:min-w-[17.5rem]"
          align="end"
        >
          <figure className="flex items-center gap-2.5 px-5 py-3.5">
            <figcaption className="space-y-1 text-base font-medium">
              <div className="mb-2 leading-none text-dark dark:text-white">
                {user.name}
              </div>
              <div className="leading-none text-gray-6">{user.email}</div>
            </figcaption>
          </figure>

          <hr className="border-[#E8E8E8] dark:border-dark-3" />

          <div className="p-2 text-base text-[#4B5563] dark:text-dark-6 [&>*]:cursor-pointer">
            <Link
              href="/settings"
              onClick={() => setIsOpen(false)}
              className="flex w-full items-center gap-2.5 rounded-lg px-2.5 py-[9px] hover:bg-gray-2 hover:text-dark dark:hover:bg-dark-3 dark:hover:text-white"
            >
              <SettingsIcon />
              <span className="mr-auto text-base font-medium">Account Settings</span>
            </Link>
          </div>

          <hr className="border-[#E8E8E8] dark:border-dark-3" />

          <div className="p-2 text-base text-[#4B5563] dark:text-dark-6">
            <button
              className="flex w-full items-center gap-2.5 rounded-lg px-2.5 py-[9px] hover:bg-gray-2 hover:text-dark dark:hover:bg-dark-3 dark:hover:text-white"
              onClick={handleLogout}
            >
              <LogOutIcon />
              <span className="text-base font-medium">Log out</span>
            </button>
          </div>
        </DropdownContent>
      )}
    </Dropdown>
  );
};

export default Navbar;
