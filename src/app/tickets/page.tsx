"use client";
import TicketPreview from "@/components/ticket-preview";
import { Button } from "@/components/ui/button";
import { db, type Event1 } from "@/lib/db";
import html2canvas from "html2canvas";
import { Loader2, Trash2 } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

export default function TicketPage() {
	const [tickets, setTickets] = useState<Event1[] | null>(null);
	const [downloadingId, setDownloadingId] = useState<number | null>(null);
	const ticketRef = useRef<HTMLDivElement>(null!);

	useEffect(() => {
		const fetchEventData = async () => {
			const data = await db.event1.toArray();
			setTickets(data);
		};

		fetchEventData();
	}, []);

	const handleDelete = async (id: number) => {
		await db.event1.delete(id);
		setTickets(
			(prev) => prev?.filter((ticket) => ticket.id !== id) || null
		);
	};

	const handleDownload = async (
		id: number,
		ref: React.RefObject<HTMLDivElement> | null
	) => {
		setDownloadingId(id);

		if (!ref?.current) return;

		try {
			const canvas = await html2canvas(ref.current, { scale: 2 });
			const imgData = canvas.toDataURL("image/png");

			const link = document.createElement("a");
			link.href = imgData;
			link.download = `ticket-${id}.png`;
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		} catch (error) {
			console.error("Error generating image:", error);
		} finally {
			setDownloadingId(null);
		}
	};

	return (
		<div className="mx-[5.33%] mb-16 mt-[18px] sm:mt-8">
			<div className="border border-border rounded-[32px] sm:rounded-[40px] bg-card p-6 sm:p-12 max-w-[700px] mx-auto">
				<div className="font-roboto text-base leading-[150%] font-normal space-y-6">
					<h1 className="font-road text-3xl text-center">
						My Tickets
					</h1>
					{tickets?.map((ticket) => (
						<div key={ticket.id}>
							<div ref={ticketRef}>
								<TicketPreview eventData={ticket} />
							</div>
							<div className="w-full flex flex-col sm:flex-row gap-4 sm:gap-6 font-jeju max-w-[300px] mx-auto">
								<Button
									className="w-full"
									disabled={downloadingId === ticket.id}
									onClick={() =>
										handleDownload(ticket.id!, ticketRef)
									}
								>
									{downloadingId === ticket.id ? (
										<>
											<Loader2 className="animate-spin inline-block mr-2" />
											Downloading...
										</>
									) : (
										"Download"
									)}
								</Button>
								<Button
									className="w-full"
									variant="outline"
									onClick={() => handleDelete(ticket.id!)}
								>
									<Trash2 className="mr-2" />
									Delete
								</Button>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
