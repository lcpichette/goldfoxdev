import React from "react";
import Link from "next/link";

export default function CTA() {
	const text = "Learn More";
	return (
		<>
			<Link
				className={`relative text-primary inline-block font-medium group py-1.5 px-2.5 w-32 h-10`}
				href="/#contact"
			>
				<span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
				<span className="absolute inset-0 w-full h-full bg-white border border-primary"></span>
				<span className="invisible">{text}</span>
				<span className="transform translate-x-0 absolute left-[20px] top-[7px]">
					{text}
				</span>
			</Link>
		</>
	);
}
