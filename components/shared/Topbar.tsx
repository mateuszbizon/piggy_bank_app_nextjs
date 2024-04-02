import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowRightEndOnRectangleIcon, ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/solid";
import { SignedIn, SignedOut, SignOutButton } from "@clerk/nextjs";
import Button from "../ui/Button";
import ButtonCircle from "../ui/ButtonCircle";

function Topbar() {
	return (
		<nav className='fixed w-full top-0 flex justify-between px-3 py-3 md:px-14 lg:px-32 border-b border-light-2 bg-light-1 z-50'>
			<Link href='/' className='flex items-center gap-4'>
				<Image
					src='/assets/piggy-bank.png'
					width={30}
					height={30}
					alt='piggy bank pink'
				/>
				<span className='font-bold text-lg hidden sm:block'>PiggyBank</span>
			</Link>
			<SignedOut>
				<Link
					href='/sign-in'
					className='main-btn-circle'>
					<ArrowRightEndOnRectangleIcon className='h-6 w-6' />
				</Link>
				<Link href="/sign-in" className="main-btn hidden md:block">
					<span>Zaloguj się</span>
				</Link>
			</SignedOut>
			<SignedIn>
                <SignOutButton>
                    <ButtonCircle>
                        <ArrowRightStartOnRectangleIcon className='h-6 w-6' />
                    </ButtonCircle>
                </SignOutButton>
				<SignOutButton>
					<div className="hidden md:block">
						<Button>
							Wyloguj się
						</Button>
					</div>
				</SignOutButton>
			</SignedIn>
		</nav>
	);
}

export default Topbar;
