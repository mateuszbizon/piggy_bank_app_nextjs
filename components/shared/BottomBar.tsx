import Link from "next/link";
import React from "react";
import { sidebarItems } from "./LeftSidebar";

function BottomBar() {
	return (
		<nav className='fixed bottom-0 w-full flex justify-between py-3 px-8 bg-light-1 border-t border-t-light-2 md:hidden'>
			{sidebarItems.map(item => {
				return (
					<Link
						href={item.route}
						key={item.route}
						className='flex flex-col gap-1 items-center'>
						{item.icon}
						<span className='text-xs hidden sm:block'>{item.text}</span>
					</Link>
				);
			})}
		</nav>
	);
}

export default BottomBar;
