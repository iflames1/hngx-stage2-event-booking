import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import TicketPreview from "@/components/ticket-preview";
import { useRef } from "react";
import html2canvas from "html2canvas";
import { Loader2 } from "lucide-react";
import { db, type Event1 } from "@/lib/db";

export default function Ticket({
	setStep,
}: {
	setStep: (step: number) => void;
}) {
	const ticketRef = useRef<HTMLDivElement>(null);
	const [isDownloading, setIsDownloading] = useState(false);
	const [eventData, setEventData] = useState<Event1 | null>(null);

	useEffect(() => {
		const fetchEventData = async () => {
			const data = await db.event1.toArray(); // Fetch all events
			if (data.length > 0) {
				setEventData(data[data.length - 1]); // Use the first event
			}
		};

		fetchEventData();
	}, []);

	const handleDownload = async () => {
		setIsDownloading(true);

		if (!ticketRef.current) return;

		try {
			const canvas = await html2canvas(ticketRef.current, {
				scale: 2,
			});
			const imgData = canvas.toDataURL("image/png");

			const link = document.createElement("a");
			link.href = imgData;
			link.download = "ticket.png";
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		} catch (error) {
			console.error("Error generating image:", error);
		} finally {
			setIsDownloading(false);
		}
	};

	return (
		<div className="font-roboto text-base leading-[150%] font-normal space-y-6">
			<div className="space-y-8">
				<div className="text-center space-y-4">
					<h2 className="text-2xl sm:text-[32px] font-alatsi leading-normal">
						Your Ticket is Booked!
					</h2>
					<p>Check your email for a copy</p>
				</div>
				<div ref={ticketRef}>
					<TicketPreview eventData={eventData} />
				</div>
			</div>
			<div className="w-full flex flex-col sm:flex-row gap-4 sm:gap-6 font-jeju">
				<Button
					onClick={() => setStep(0)}
					variant={"outline"}
					className="w-full"
				>
					Book Another Ticket
				</Button>
				<Button
					className="w-full"
					disabled={isDownloading}
					onClick={handleDownload}
				>
					<Loader2
						className={`animate-spin  ${
							isDownloading ? "inline-flex" : "hidden"
						}`}
					/>
					{isDownloading ? "Downloading..." : "Download Ticket"}
				</Button>
			</div>
		</div>
	);
}
