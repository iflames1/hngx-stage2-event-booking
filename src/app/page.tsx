"use client";
import SelectSeat from "@/components/select-seat";
import TicketNum from "@/components/ticket-num";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

export default function Home() {
	const [progress, setProgress] = useState(33);
	const [selectedSeat, setSelectedSeat] = useState("free");
	const [ticketNum, setTicketNum] = useState("1");

	useEffect(() => {
		const timer = setTimeout(() => setProgress(33), 500);
		return () => clearTimeout(timer);
	}, []);

	return (
		<div className="border border-border rounded-[40px] bg-card p-12 space-y-8 max-w-[700px] mx-auto">
			<div className="space-y-3">
				<div className="flex items-center justify-between">
					<h1 className="text-[32px] font-normal">
						Ticket Selection
					</h1>
					<p className="font-roboto text-base font-normal">
						Step 1/3
					</p>
				</div>
				<Progress value={progress} className="" />
			</div>

			<div className="space-y-8 p-6">
				<div className="banner backdrop-blur-[7px] border-[2px] border-input rounded-3xl p-6 text-center space-y-2">
					<h2 className="font-road text-[62px] font-normal leading-[100%]">
						Techember Fest ”25
					</h2>
					<p className="font-roboto text-base font-normal leading-[150%] max-w-[340px] mx-auto">
						Join us for an unforgettable experience at [Event Name]!
						Secure your spot now.
					</p>
					<p className="font-roboto text-base font-normal leading-[150%] space-x-4">
						<span>📍 [Event Location]</span>
						<span>| |</span>
						<span>March 15, 2025 | 7:00 PM</span>
					</p>
				</div>
				<div className="bg-input h-1 w-full" />
				<SelectSeat
					selectedSeat={selectedSeat}
					setSelectedSeat={setSelectedSeat}
				/>
				<TicketNum ticketNum={ticketNum} setTicketNum={setTicketNum} />
				<div className="w-full flex gap-6">
					<Button
						variant={"outline"}
						className="w-full text-primary leading-[150%]"
					>
						Cancel
					</Button>
					<Button className="w-full">Next</Button>
				</div>
			</div>
		</div>
	);
}
