import { Button } from "@/components/ui/button";
import events, { Event } from "@/lib/events";

interface EventsProps {
	setStep: (step: number) => void;
	setEvent: (event: Event) => void;
}

export default function Events({ setStep, setEvent }: EventsProps) {
	return (
		<div className="space-y-6 sm:p-6 sm:border border-border rounded-[32px] sm:bg-[#08252B]">
			{events.map((event, index) => (
				<div
					key={index}
					className="p-4 border border-input rounded-lg space-y-6 banner backdrop-blur-[7px]"
				>
					<div className="space-y-2 sm:space-y-4">
						<h3 className="font-road text-3xl sm:text-5xl font-normal leading-[100%]">
							{event.eventName}
						</h3>
						<p className="font-roboto text-base font-normal leading-[150%] flex flex-col sm:flex-row gap-1 sm:gap-4">
							<span className="truncate overflow-hidden">
								📍 {event.eventLocation}
							</span>
							<span className="hidden sm:inline-flex">| |</span>
							<span className="truncate overflow-hidden">
								📅 {event.eventDateTime}
							</span>
						</p>
					</div>
					<div className="flex justify-end">
						<Button
							onClick={() => {
								setEvent(event);
								setStep(1);
							}}
						>
							Get Ticket
						</Button>
					</div>
				</div>
			))}
		</div>
	);
}
