import React from "react";
import { Button } from "@/components/ui/button";
import TicketPreview from "@/components/ticket-preview";

export default function Ticket() {
	return (
		<div className="font-roboto text-base leading-[150%] font-normal space-y-6">
			<div className="space-y-8">
				<div className="text-center space-y-4">
					<h2 className="text-2xl sm:text-[32px] font-alatsi leading-normal">
						Your Ticket is Booked!
					</h2>
					<p>
						Check your email for a copy or you can{" "}
						<span className="font-semibold">download</span>
					</p>
				</div>
				<TicketPreview />
			</div>
			<div className="w-full flex flex-col sm:flex-row gap-4 sm:gap-6 font-jeju">
				<Button variant={"outline"} className="w-full">
					Book Another Ticket
				</Button>
				<Button className="w-full">Download Ticket</Button>
			</div>
		</div>
	);
}
