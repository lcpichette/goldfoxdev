import {
	CurrencyDollarIcon,
	AdjustmentsHorizontalIcon,
	LightBulbIcon,
	ArrowPathIcon,
	ClockIcon,
	ArrowTrendingUpIcon,
} from "@heroicons/react/24/outline";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";

interface Props {
	icon: string;
	background?: string;
}

export default function SpecialIcon({ icon, background = "badge" }: Props) {
	return (
		<>
			{background && (
				<>
					<CheckBadgeIcon className="w-6 h-6 text-primary flex items-center justify-center" />
					<div className="w-3 h-3 top-2 left-2 absolute bg-primary rounded-full"></div>
				</>
			)}
			<ArrowTrendingUpIcon className="absolute left-1.5 w-3 h-3 text-background" />
		</>
	);
}
