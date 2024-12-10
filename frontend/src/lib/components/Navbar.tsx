import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import CTA from "./CTA.tsx";

const navigationOptions = [
	{
		title: "About",
		href: "/#about-us",
	},
	{
		title: "Contact",
		href: "/#contact-us",
	},
	{
		title: "Tools",
		href: "/marketplace",
	},
	{
		title: "Clients",
		href: "/dashboard",
	},
];

export default function Navbar() {
	return (
		<>
			{/* Navbar */}
			<div className="hidden md:block">
				<DesktopNavbar />
			</div>
			<div className="block md:hidden">
				<MobileNavbar />
			</div>
		</>
	);
}

function DesktopNavbar() {
	return (
		<>
			<div className="flex items-center justify-between px-4 box-border w-full h-20 border-b border-black fixed top-0 bg-background z-[1000]">
				<Image
					src="/logo.webp"
					alt="Gold Fox Dev logo"
					width={32 * 5.78}
					height={32}
				/>

				<div className="flex items-center h-full gap-4">
					<NavigationOptions />

					<CTA />
				</div>
			</div>
		</>
	);
}

function MobileNavbar() {
	return (
		<>
			<span>WIP</span>
		</>
	);
}

function NavigationOptions() {
	const Links = [];
	navigationOptions.forEach((opt, i) => {
		Links.push(
			<Link
				key={i}
				href={opt.href}
				className="hover:underline underline-offset-4 text-lg"
			>
				{opt.title}
			</Link>,
		);
	});
	return <>{Links}</>;
}
