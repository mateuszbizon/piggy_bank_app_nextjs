import PiggyBankCard from "@/components/cards/PiggyBankCard";
import { getUserById, getUserPiggyBanks } from "@/lib/actions/userActions";
import { currentUser } from "@clerk/nextjs";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await currentUser();
  
  if (!user) redirect("/welcome");

  const fetchedUser: ApiResponse<User> = await getUserById(user.id);
  
  if (!fetchedUser.data?.onboarded) redirect("/onboarding")

  const result: ApiResponse<User> = await getUserPiggyBanks(user.id)
  
  return (
    <>
      <h1 className="title mb-5">Witaj {fetchedUser.data.name}</h1>
      <p className="mb-4 text-xl">Twoje skarbonki:</p>
      {result.data?.piggyBanks.length == 0 ? (
        <div className="flex flex-col items-center">
          <p className="mb-6 no-result">Nie masz jeszcze żadnych skarbonek</p>
          <Link href="/create" className="main-btn">
            Dodaj skarbonkę
          </Link>
        </div>
      ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-y-6 lg:grid-cols-3 gap-4">
        {result.data?.piggyBanks.map(piggyBank => {
          return (
            <PiggyBankCard key={piggyBank._id} piggyBank={piggyBank} />
          )
        })}
      </div>
      )}
    </>
  );
}
