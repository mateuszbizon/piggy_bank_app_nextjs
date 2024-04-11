"use client"

import React from "react";
import {
	HomeIcon,
	PlusIcon,
	UserIcon,
	MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const sidebarItems = [
	{ route: "/", icon: <HomeIcon className='h-6 w-6' />, text: "Główny" },
	{ route: "/create", icon: <PlusIcon className='h-6 w-6' />, text: "Utwórz" },
	{
		route: "/profile/edit",
		icon: <UserIcon className='h-6 w-6' />,
		text: "Profil",
	},
	{
		route: "/search",
		icon: <MagnifyingGlassIcon className='h-6 w-6' />,
		text: "Wyszukaj",
	},
];

function LeftSidebar() {
	const pathName = usePathname();

	return (
		<aside className='sticky top-0 left-0 h-screen w-fit pt-24 px-6 lg:px-8 border-r border-r-light-2 bg-light-1 hidden md:block'>
			<div className='flex flex-col gap-7'>
				{sidebarItems.map(item => {
					const isRouteActive = item.route === pathName;

					return (
						<Link
							href={item.route}
							key={item.route}
							className={`flex items-center gap-3 lg:w-[200px] p-2 rounded-lg text-xl hover:bg-light-2 transition ${isRouteActive && "bg-light-2 font-semibold"}`}>
							{item.icon}
							<span className='hidden lg:block'>{item.text}</span>
						</Link>
					);
				})}
			</div>
		</aside>
	);
}

export default LeftSidebar;
