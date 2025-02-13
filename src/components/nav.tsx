"use client";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
	const pathname = usePathname();
	const navs = [
		{ href: "/", label: "Events" },
		{ href: "/tickets", label: "Tickets" },
		{ href: "/about", label: "About" },
	];
	return (
		<nav className="sm:flex gap-4 text-base font-normal rounded-md text-accent-foreground hidden">
			{navs.map(({ href, label }) => (
				<Button
					key={href}
					variant={"link"}
					className={`p-[10px] ${pathname === href && "text-white"}`}
					asChild
				>
					<Link href={href}>{label}</Link>
				</Button>
			))}
		</nav>
	);
}
