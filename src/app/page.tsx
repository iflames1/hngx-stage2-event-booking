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
		<div className="border border-border rounded-[32px] sm:rounded-[40px] bg-card p-6 sm:p-12 space-y-8 max-w-[700px] mx-auto">
			<div className="space-y-3">
				<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
					<h1 className="text-2xl sm:text-[32px] font-normal">
						Ticket Selection
					</h1>
					<p className="font-roboto text-base font-normal">
						Step 1/3
					</p>
				</div>
				<Progress value={progress} className="" />
			</div>

			<div className="space-y-8 sm:p-6">
				<div className="banner backdrop-blur-[7px] border-[2px] border-input rounded-3xl py-4 px-6 sm:p-6 text-center sm:space-y-2 flex flex-col justify-between h-[243px] sm:h-full ">
					<div className="space-y-2">
						<h2 className="font-road text-5xl sm:text-[62px] font-normal leading-[100%]">
							Techember Fest ”25
						</h2>
						<p className="font-roboto text-sm sm:text-base font-normal leading-[150%] sm:max-w-[340px] mx-auto">
							Join us for an unforgettable experience at [Event
							Name]! Secure your spot now.
						</p>
					</div>
					<p className="font-roboto text-base font-normal leading-[150%] flex flex-col sm:flex-row justify-center gap-1 sm:gap-4">
						<span>📍 [Event Location]</span>
						<span className="hidden sm:inline-flex">| |</span>
						<span>March 15, 2025 | 7:00 PM</span>
					</p>
				</div>
				<div className="bg-input h-1 w-full" />
				<SelectSeat
					selectedSeat={selectedSeat}
					setSelectedSeat={setSelectedSeat}
				/>
				<TicketNum ticketNum={ticketNum} setTicketNum={setTicketNum} />
				<div className="w-full flex flex-col sm:flex-row gap-4 sm:gap-6">
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
