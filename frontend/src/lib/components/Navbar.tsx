import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
    return (
        <>
            {/* Navbar */}
            <div className="flex items-center justify-between px-4 box-border w-full h-20 border-b border-black">
                <Image
                    src="/logo.png"
                    alt="Gold Fox Dev logo"
                    width={32 * 5.78}
                    height={32}
                />
                <div className="flex items-center h-full gap-4">
                    <Link
                        href="/dashboard"
                        className="hover:underline underline-offset-4 text-lg"
                    >
                        About
                    </Link>
                    <Link
                        href="/dashboard"
                        className="hover:underline underline-offset-4 text-lg"
                    >
                        Contact
                    </Link>
                    <Link
                        href="/dashboard"
                        className="hover:underline underline-offset-4 text-lg"
                    >
                        Clients
                    </Link>
                    <Button
                        className="text-lg bg-transparent text-secondary rounded-md px-3.5 py-2.5 text-md bg-primary text-primary-foreground font-semibold shadow-sm ring-1 ring-inset ring-accent-300"
                        asChild
                    >
                        <Link href="/#contact">Learn More</Link>
                    </Button>
                </div>
            </div>
        </>
    );
}
