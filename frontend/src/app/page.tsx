import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import CTA from "@/components/CTA";
import SpecialIcon from "@/components/SpecialIcon";

import {
	CurrencyDollarIcon,
	AdjustmentsHorizontalIcon,
	LightBulbIcon,
	ArrowPathIcon,
	ClockIcon,
	ArrowTrendingUpIcon,
} from "@heroicons/react/24/outline";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";

export default function Home() {
	return (
		<>
			<Navbar />

			<div className="w-full h-screen grid grid-cols-10 pt-20 box-border">
				{/* Left section*/}
				<div className="relative col-span-6 pt-16 px-8">
					<div className="flex flex-col items-start justify-between gap-4 h-full pb-20">
						<div className="flex flex-col items-start gap-4">
							<div className="relative flex flex-row gap-2 items-center">
								<SpecialIcon icon="ArrowTrendingUpIcon" />
								<span className="inline-block font-bold font-title text-lg uppercase">
									SCALABLE, CONTRACT
								</span>
							</div>

							<div className="flex flex-col gap-2 font-bold font-title text-6xl">
								<h2>Software Engineering</h2>
								<div className="flex items-center gap-3">
									<span>Talent</span>
									<div className="flex">
										<div className="h-[50px] w-[50px]">
											<Image
												src="/person1.png"
												className="bg-cover max-h-full min-h-full rounded-full border-2 border-background bg-background"
												height={50}
												width={50}
												alt="Software Engineer Headshot"
											></Image>
										</div>
										<div className="h-[50px] w-[50px] -translate-x-3">
											<Image
												src="/person2.png"
												className="bg-cover max-h-full min-h-full rounded-full border-2 border-background bg-background"
												height={50}
												width={50}
												alt="Software Engineer Headshot"
											></Image>
										</div>
									</div>
								</div>
							</div>
							<h2 className="font-tile text-xl">
								For Government Agencies, Corporations, and More...
							</h2>

							{/* Floating Visual */}
							<div className="absolute top-[38%] -right-[100px] h-[180px] w-[160px] flex flex-col justify-between rounded-xl bg-primary box-border p-5 pt-0">
								<div className="text-background w-full h-10 flex items-center justify-center">
									SP Velocity
								</div>
								<div className="relative flex items-end justify-between w-full h-[130px]">
									{/* Red Arbitrary Stat Bar */}
									<div className="h-[70px] rounded-full w-3 bg-background/30 flex items-end">
										<div className="h-[40px] rounded-full w-3 bg-red-200"></div>
									</div>
									<div className="h-[100px] rounded-full w-3 bg-background/30 flex items-end">
										<div className="h-[64px] rounded-full w-3 bg-yellow-200"></div>
									</div>
									<div className="h-[90px] rounded-full w-3 bg-background/30 flex items-end">
										<div className="h-[76px] rounded-full w-3 bg-green-200"></div>
									</div>
									<div className="h-[110px] rounded-full w-3 bg-background/30 flex items-end">
										<div className="h-[83px] rounded-full w-3 bg-blue-200"></div>
									</div>
									<div className="h-[120px] rounded-full w-3 bg-background/30 flex items-end">
										<div className="h-[79px] rounded-full w-3 bg-green-200"></div>
									</div>
								</div>
							</div>

							<div className="mt-8 flex items-center gap-10">
								<CTA />
								<Link
									href="/marketplace"
									className="text-lg font-[500] pb-[1px] hover:pb-0 border-b-black border-b-[2px] hover:border-b-[3px]"
								>
									Tool Marketplace
								</Link>
							</div>
						</div>
						<HeroAbout />
					</div>
				</div>
				<div className="relative h-full col-span-4 pt-16 px-8 flex justify-center bg-primary/5">
					<div className="absolute top-5 left-9 font-title text-8xl rotate-12">
						*
					</div>
					<div
						style={{ "font-variant-ligatures": "common-ligatures;" }}
						className="absolute top-24 right-24 font-code text-6xl -rotate-6"
					>
						+=
					</div>
					<div className="h-[440px] w-[256px] bg-gradient-sunset rounded-full flex justify-end flex-col shadow-lg">
						{/* <Image */}
						{/* 	src="/person3.png" */}
						{/* 	className="bg-contain rounded-full" */}
						{/* 	alt="Generic model posing as software engineer" */}
						{/* 	width={256} */}
						{/* 	height={400} */}
						{/* /> */}
					</div>
				</div>
			</div>
		</>
	);
}

function HeroAbout() {
	return (
		<>
			<div className="mt-28 font-semibold flex flex-wrap items-center space-x-1 text-xl leading-relaxed max-w-xl">
				<span>Cost-efficient</span>
				<span className="inline-flex items-center">
					and
					<CurrencyDollarIcon className="w-5 h-5 ml-1 text-gray-600" />
				</span>
				<span>flexible,</span>
				<span>we</span>
				<span>deliver</span>
				<span className="inline-flex items-center">
					specialized
					<LightBulbIcon className="w-5 h-5 ml-1 text-gray-600" />
				</span>
				<span>software</span>
				<span>engineering</span>
				<span>expertise</span>
				<span>tailored</span>
				<span>to</span>
				<span>your</span>
				<span>needs.</span>
				<span>Faster</span>
				<span>onboarding</span>
				<span>ensures</span>
				<span>seamless</span>
				<span>integration</span>
				<span>into</span>
				<span>your</span>
				<span>projects.</span>
				<span>Perfect</span>
				<span>for</span>
				<span>satisfying</span>
				<span>temporary</span>
				<span className="inline-flex items-center">
					demands
					<ClockIcon className="w-5 h-5 ml-1 text-gray-600" />
				</span>
				<span>or</span>
				<span>scaling</span>
				<span>for</span>
				<span className="inline-flex items-center">
					growth
					<ArrowTrendingUpIcon className="w-5 h-5 ml-1 text-gray-600" />
				</span>
				<span>.</span>
			</div>
		</>
	);
}
