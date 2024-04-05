import PiggyBankCard from "@/components/cards/PiggyBankCard";
import { getUserById } from "@/lib/actions/userActions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await currentUser();
  
  if (!user) redirect("/welcome");

  const fetchedUser: ApiResponse<User> = await getUserById(user.id);
  
  if (!fetchedUser.data?.onboarded) redirect("/onboarding")
  
  return (
    <>
      <h1 className="font-semibold text-4xl mb-5">Witaj {fetchedUser.data.name}</h1>
      <p className="mb-4 text-xl">Twoje skarbonki:</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-y-6 lg:grid-cols-3 gap-4">
        <PiggyBankCard />
      </div>
    </>
  );
}
