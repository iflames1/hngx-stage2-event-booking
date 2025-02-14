import AboutContent from "@/components/about-content";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function About() {
	return (
		<div className="font-roboto text-base font-normal leading-[150%] border border-border rounded-3xl sm:rounded-[40px] bg-card mx-[5.33%] mb-16 mt-[18px] sm:mt-8 sm:p-12 p-6 space-y-8">
			<AboutContent />
			<div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
				<Button asChild variant={"outline"} className="w-full">
					<Link
						href={
							"https://www.figma.com/community/file/1470800949188681164/event-ticket-booking-ui-open-source-practice-project"
						}
						target="_blank"
					>
						Design File
					</Link>
				</Button>

				<Button asChild className="w-full">
					<Link
						href={
							"https://github.com/iflames1/hngx-stage2-event-booking"
						}
						target="_blank"
					>
						Github code
					</Link>
				</Button>
			</div>
		</div>
	);
}
