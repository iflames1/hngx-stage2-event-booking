"use client";
import SelectSeat from "@/components/select-seat";
import TicketNum from "@/components/ticket-num";
import { Button } from "@/components/ui/button";
import { Event } from "@/lib/events";

interface TicketSelectionProps {
	selectedSeat: string;
	setSelectedSeat: (seat: string) => void;
	ticketNum: string;
	setTicketNum: (ticket: string) => void;
	setStep: (step: number) => void;
	event: Event;
}

export default function TicketSelection({
	selectedSeat,
	setSelectedSeat,
	ticketNum,
	setTicketNum,
	setStep,
	event,
}: TicketSelectionProps) {
	return (
		<div className="space-y-8 sm:p-6">
			<div className="banner backdrop-blur-[7px] border-[2px] border-input rounded-3xl py-4 px-6 sm:p-6 text-center flex flex-col justify-between sm:gap-2 min-h-[243px] sm:min-h-fit sm:h-full ">
				<div className="space-y-2">
					<h2 className="font-road text-5xl sm:text-[62px] font-normal leading-[100%]">
						{event.eventName}
					</h2>
					<p className="font-roboto text-sm sm:text-base font-normal leading-[150%] sm:max-w-[340px] mx-auto">
						Join us for an unforgettable experience at
						{event.eventName}! Secure your spot now.
					</p>
				</div>
				<p className="font-roboto text-base font-normal leading-[150%] flex flex-col sm:flex-row justify-center gap-1 sm:gap-4">
					<span>📍 {event.eventLocation}</span>
					<span className="hidden sm:inline-flex">| |</span>
					<span>${event.eventDateTime}</span>
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
				<Button className="w-full" onClick={() => setStep(2)}>
					Next
				</Button>
			</div>
		</div>
	);
}
