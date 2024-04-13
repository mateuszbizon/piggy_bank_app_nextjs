import PiggyBankCard from "@/components/cards/PiggyBankCard";
import NoResultMessage from "@/components/messages/NoResultMessage";
import { getUserById, getUserPiggyBanks } from "@/lib/actions/userActions";
import { currentUser } from "@clerk/nextjs";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await currentUser();
  
  if (!user) redirect("/welcome");

  const fetchedUser: ApiResponse<UserResponse> = await getUserById(user.id);
  
  if (!fetchedUser.data?.onboarded) redirect("/onboarding")

  const result: ApiResponse<PiggyBanksResponse> = await getUserPiggyBanks(fetchedUser.data.id)
  
  return (
    <>
      <h1 className="title mb-5">Witaj {fetchedUser.data.name}</h1>
      <p className="mb-4 text-xl">Twoje skarbonki:</p>
      {result.data?.length == 0 ? (
        <NoResultMessage message="Nie masz jeszcze żadnych skarbonek">
          <Link href="/create" className="main-btn">
            Dodaj skarbonkę
          </Link>
        </NoResultMessage>
      ) : (
      <div className="grid-container">
        {result.data?.map(piggyBank => {
          return (
            <PiggyBankCard key={piggyBank._id} piggyBank={piggyBank} />
          )
        })}
      </div>
      )}
    </>
  );
}
