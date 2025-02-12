import React from "react";
import {
	Select,
	SelectTrigger,
	SelectContent,
	SelectItem,
	SelectValue,
} from "./ui/select";

interface TicketNumProps {
	ticketNum: string;
	setTicketNum: (value: string) => void;
}

export default function TicketNum({ setTicketNum }: TicketNumProps) {
	return (
		<div className="font-roboto text-base font-normal leading-[150%] space-y-2">
			<p>Number of Tickets</p>
			<Select onValueChange={setTicketNum} defaultValue="1">
				<SelectTrigger>
					<SelectValue placeholder="1" />
				</SelectTrigger>
				<SelectContent>
					{Array.from({ length: 10 }, (_, i) => (
						<SelectItem key={i + 1} value={`${i + 1}`}>
							{i + 1}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	);
}
