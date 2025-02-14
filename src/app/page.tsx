"use client";
import { useState } from "react";
import TicketSelection from "./ticket-selection";
import AttendeeDetails from "./attendee-details";
import TicketProgress from "./ticket-progress";
import Ticket from "./ticket";
import Events from "./events";
import events, { Event } from "@/lib/events";

export default function Home() {
	const [step, setStep] = useState(0);
	const [selectedSeat, setSelectedSeat] = useState("free");
	const [ticketNum, setTicketNum] = useState("1");
	const [event, setEvent] = useState<Event>(events[0]);

	return (
		<div className="mx-[5.33%] mb-16 mt-[18px] sm:mt-8">
			<div className="border border-border rounded-[32px] sm:rounded-[40px] bg-card p-6 sm:p-12 space-y-8 max-w-[700px] mx-auto">
				<TicketProgress step={step} />
				{step === 0 ? (
					<Events setStep={setStep} setEvent={setEvent} />
				) : step === 1 ? (
					<TicketSelection
						event={event}
						selectedSeat={selectedSeat}
						setSelectedSeat={setSelectedSeat}
						ticketNum={ticketNum}
						setTicketNum={setTicketNum}
						setStep={setStep}
					/>
				) : step === 2 ? (
					<AttendeeDetails
						setStep={setStep}
						seat={selectedSeat}
						ticketNum={ticketNum}
					/>
				) : step === 3 ? (
					<Ticket setStep={setStep} />
				) : null}
			</div>
		</div>
	);
}
