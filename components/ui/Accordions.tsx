"use client";

import { MAIN_ACCORDIONS } from "@/constants";
import useAccordions from "@/hooks/useAccordions";
import React from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

function Accordions() {
	const { handleSetCurrentIndex, currentIndex } = useAccordions();

	return (
		<div className='flex flex-col'>
			{MAIN_ACCORDIONS.map((item, index) => {
                const isActive = index == currentIndex ? true : false;

				return (
					<div key={item.title} className='border-b border-b-light-2 text-lg'>
						<button
							className={`flex justify-between w-full bg-light-1 py-4 px-6 hover:bg-light-3 transition cursor-pointer ${isActive && "bg-light-3 text-primary"}`}
							onClick={() => handleSetCurrentIndex(index)}>
							<span>{item.title}</span>
                            <ChevronDownIcon className={`h-6 w-6 transition-all duration-300  ${isActive && "rotate-180"}`} />
						</button>
                        <div className={`grid px-6 transition-all duration-300 ${isActive ? "grid-rows-[1fr] py-4" : "grid-rows-[0fr]"}`}>
                            <div className="overflow-hidden" dangerouslySetInnerHTML={{ __html: item.text }}></div>
                        </div>
					</div>
				);
			})}
		</div>
	);
}

export default Accordions;
