import React from "react";
import { Progress } from "@/components/ui/progress";

export default function TicketProgress({ step }: { step: number }) {
	const progress = (step / 3) * 100;
	const title = ["Ticket Selection", "Attendee Details", "Ready"];
	return (
		<div className="space-y-3">
			<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
				<h1 className="text-2xl sm:text-[32px] font-normal">
					{title[step - 1]}
				</h1>
				<p className="font-roboto text-base font-normal">
					Step {step}/3
				</p>
			</div>
			<Progress value={progress} className="" />
		</div>
	);
}
