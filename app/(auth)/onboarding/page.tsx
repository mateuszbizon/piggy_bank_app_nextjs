import AccountProfileForm from "@/components/forms/AccountProfileForm";
import { getUserById } from "@/lib/actions/userActions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";

async function OnBoarding() {
	const user = await currentUser();

	if (!user) return null;

	const fetchedUser: ApiResponse<UserResponse> = await getUserById(user.id);

	const userData = {
		id: user.id,
		name: "",
		username: user.username || "",
	}

	if (fetchedUser.data?.onboarded) redirect("/");

	return (
		<>
			<h1 className='text-3xl font-semibold mb-2'>Utwórz profil</h1>
			<p className='text-lg mb-5'>
				Stwórz swój profil, aby móc korzystać z aplikacji.
			</p>
			<section className='bg-light-3 py-4 px-3 rounded-lg'>
				<AccountProfileForm user={userData} btnText="Kontynuuj" />
			</section>
		</>
	);
}

export default OnBoarding;
