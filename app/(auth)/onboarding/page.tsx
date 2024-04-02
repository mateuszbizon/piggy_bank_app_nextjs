import AccountProfileForm from "@/components/forms/AccountProfileForm";
import { getUserById } from "@/lib/actions/userActions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";

async function OnBoarding() {
	const user = await currentUser();

	if (!user) return null;

	const fetchedUser = await getUserById(user.id);

	if (fetchedUser?.onboarded) redirect("/");

	return (
		<section className='mx-auto max-w-3xl flex flex-col'>
			<h1 className='text-3xl font-semibold mb-2'>Utwórz profil</h1>
			<p className='text-lg mb-5'>
				Stwórz swój profil, aby móc korzystać z aplikacji.
			</p>
			<div className='bg-light-3 py-2 px-3 rounded-lg'>
				<AccountProfileForm />
			</div>
		</section>
	);
}

export default OnBoarding;
