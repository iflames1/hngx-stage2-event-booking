import { db, type Event1 } from "@/lib/db";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function TicketPreview() {
	const [eventData, setEventData] = useState<Event1 | null>(null);

	useEffect(() => {
		const fetchEventData = async () => {
			const data = await db.event1.toArray(); // Fetch all events
			if (data.length > 0) {
				setEventData(data[data.length - 1]); // Use the first event
			}
			console.log(data);
		};

		fetchEventData();
	}, []);
	return (
		<>
			{eventData ? (
				<div className="sm:py-8 sm:px-[21px] space-y-[1px]">
					<div className="border border-primary bg-[#072C31] p-5 rounded-3xl max-w-[300px] mx-auto">
						<div className="border border-primary rounded-2xl bg-ticket backdrop:blur-[2px] p-[14px] space-y-5">
							<div className="text-center">
								<h1 className="font-road text-[34px] leading-[100%]">
									Techember Fest ”25
								</h1>
								<div className="p-1 space-y-1 text-[10px] leading-[150%]">
									<p>📍 04 Rumens road, Ikoyi, Lagos</p>
									<p>📅 March 15, 2025 | 7:00 PM</p>
								</div>
							</div>

							<Image
								src={eventData.avatar}
								alt="avarter"
								width={140}
								height={140}
								className="rounded-xl border-4 border-upload mx-auto"
							/>

							<div className="border border-[#133D44] rounded-md bg-[#08343C] p-1 grid grid-cols-2 grid-rows-2 gap-0 w-full">
								<div className="border-r border-b border-[#12464E] p-1 space-y-1">
									<p className="text-white/[0.33] text-[10px] leading-[150%]">
										Name
									</p>
									<p className="text-xs font-bold leading-[150%] truncate overflow-hidden">
										{eventData.name}
									</p>
								</div>
								<div className="border-b border-[#12464E] p-1 space-y-1">
									<p className="text-white/[0.33] text-[10px] leading-[150%]">
										Email
									</p>
									<p className="text-xs font-bold leading-[150%] truncate overflow-hidden">
										{eventData.email}
									</p>
								</div>
								<div className="border-r border-[#12464E] p-1 space-y-1">
									<p className="text-white/[0.33] text-[10px] leading-[150%]">
										Ticket Type
									</p>
									<p className="text-xs leading-[150%] truncate overflow-hidden uppercase">
										{eventData.seat}
									</p>
								</div>
								<div className="border-[#12464E] p-1 space-y-1">
									<p className="text-white/[0.33] text-[10px] leading-[150%]">
										Ticket for
									</p>
									<p className="text-xs leading-[150%] truncate overflow-hidden uppercase">
										{eventData.ticketNum}
									</p>
								</div>
								{eventData.specialRequest && (
									<div className="border-t border-[#12464E] col-span-2  p-2 space-y-1">
										<p className="text-white/[0.33] text-[10px] leading-[150%]">
											Special request
										</p>
										<p className="text-xs leading-[150%]">
											{eventData.specialRequest}
										</p>
									</div>
								)}
							</div>
						</div>
					</div>
					<div className="border border-primary bg-[#072C31] p-5 rounded-3xl max-w-[300px] mx-auto">
						<Image
							src={"/barcode.svg"}
							alt="barcode"
							width={236}
							height={68}
							className="mx-auto"
						/>
					</div>
				</div>
			) : (
				<p>
					<Loader2 className="animate-spin" /> Loading ticket...
				</p>
			)}
		</>
	);
}
