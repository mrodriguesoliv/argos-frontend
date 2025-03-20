import { useRouter } from 'next/navigation';
import { createClient } from "@/utils/supabase/client";
import { LogOutIcon } from "@/assets/icons";

const supabase = createClient();

const Logout = () => {
  const router = useRouter();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error('Erro ao deslogar:', error.message);
    } else {
      router.push('/auth'); 
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="flex items-center gap-2.5 rounded-lg px-4 py-2.5 hover:bg-gray-2 dark:hover:bg-dark-3 dark:text-white"
    >
      <LogOutIcon />
      <span className="text-base font-medium">Log out</span>
    </button>
  );
};

export default Logout;
