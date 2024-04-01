import { getUserById } from "@/lib/actions/userActions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await currentUser();
  
  if (!user) redirect("/welcome");

  const fetchedUser = await getUserById(user.id);
  
  if (!fetchedUser?.onboarded) {
    console.log("should redirect")
  }
  
  return (
    <>
      <span>home</span>
    </>
  );
}
