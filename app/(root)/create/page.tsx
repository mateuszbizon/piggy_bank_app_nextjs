import PiggyBankCreateForm from "@/components/forms/PiggyBankCreateForm";
import { getUserById } from "@/lib/actions/userActions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";

async function Page() {
	const user = await currentUser();
	if (!user) return null;

	const fetchedUser: ApiResponse<UserResponse> = await getUserById(user.id);

	if (!fetchedUser.data?.onboarded) redirect("/onboarding");

	return (
		<div className='inner-container'>
			<h1 className='title mb-5'>Utwórz skarbonkę</h1>
			<section className='form-section'>
				<PiggyBankCreateForm userId={fetchedUser.data.id} />
			</section>
		</div>
	);
}

export default Page;
