import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { IoIosArrowRoundForward } from "react-icons/io";
import Nav from "./nav";
import Link from "next/link";

export default function Header() {
	return (
		<header className="fixed z-50 w-full flex justify-center sm:mt-6 mt-[10px]">
			<div className="flex justify-between items-center py-3 px-4 bg-nav backdrop-blur-[2px] border border-[#197686] rounded-3xl mx-[7.33%] w-full max-w-[1200px]">
				<Link href={"/"} className="flex gap-2 items-center">
					<Image
						src="/ticket.svg"
						alt="logo"
						width={24}
						height={24}
					/>
					<Image
						src="/ticz.svg"
						alt="logo"
						width={43.793}
						height={22.624}
					/>
				</Link>
				<Nav />
				<Button
					variant={"secondary"}
					className="sm:py-4 py-3 sm:text-base text-sm"
				>
					MY TICKETS <IoIosArrowRoundForward size={16} />
				</Button>
			</div>
		</header>
	);
}
