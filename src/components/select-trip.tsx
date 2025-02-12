import React from "react";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";

export default function SelectTrip() {
	return (
		<div className="space-y-2">
			<p className="font-roboto font-normal text-base leading-[150%]">
				Select Ticket Type:
			</p>
			<Tabs>
				<TabsList className="font-roboto">
					<TabsTrigger value="free" className="space-y-3">
						<h1 className="font-roboto text-2xl font-semibold leading-[110%]">
							Free
						</h1>
						<div>
							<p className="uppercase text-card-foreground text-base font-normal leading-[150%]">
								Regular Access
							</p>
							<p className="font-roboto text-sm font-normal leading-[150%]">
								20/52
							</p>
						</div>
					</TabsTrigger>
					<TabsTrigger value="vip" className="space-y-3">
						<h1 className="font-roboto text-2xl font-semibold leading-[110%]">
							$150
						</h1>
						<div>
							<p className="uppercase text-card-foreground text-base font-normal leading-[150%]">
								VIP Access
							</p>
							<p className="font-roboto text-sm font-normal leading-[150%]">
								20/52
							</p>
						</div>
					</TabsTrigger>
					<TabsTrigger value="vvip" className="space-y-3">
						<h1 className="font-roboto text-2xl font-semibold leading-[110%]">
							$250
						</h1>
						<div>
							<p className="uppercase text-card-foreground text-base font-normal leading-[150%]">
								VVIP Access
							</p>
							<p className="font-roboto text-sm font-normal leading-[150%]">
								20/52
							</p>
						</div>
					</TabsTrigger>
				</TabsList>
			</Tabs>
		</div>
	);
}
