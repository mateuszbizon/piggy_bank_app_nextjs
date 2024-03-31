import React from "react";
import {
	HomeIcon,
	PlusIcon,
	UserIcon,
	MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

export const sidebarItems = [
	{ route: "/", icon: <HomeIcon className='h-6 w-6' />, text: "Home" },
	{ route: "/create", icon: <PlusIcon className='h-6 w-6' />, text: "Create" },
	{
		route: "/profile",
		icon: <UserIcon className='h-6 w-6' />,
		text: "Profile",
	},
	{
		route: "/search",
		icon: <MagnifyingGlassIcon className='h-6 w-6' />,
		text: "Search",
	},
];

function LeftSidebar() {
	return (
		<aside className='sticky top-0 left-0 h-screen w-fit pt-24 px-6 lg:px-8 border-r border-r-light-2 bg-light-1 hidden md:block'>
			<div className='flex flex-col gap-7'>
				{sidebarItems.map(item => {
					return (
						<Link
							href={item.route}
							key={item.route}
							className='flex items-center gap-3 text-xl hover:text-primary transition'>
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
