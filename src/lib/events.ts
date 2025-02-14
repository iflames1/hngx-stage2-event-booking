export interface Event {
	eventName: string;
	eventLocation: string;
	eventDateTime: string;
}

const events: Event[] = [
	{
		eventName: "Techember Fest ’25",
		eventLocation: "04 Rumens road, Ikoyi, Lagos",
		eventDateTime: "March 15, 2025 | 7:00 PM",
	},
	{
		eventName: "Next.js Conf 2025",
		eventLocation: "Moscone Center, San Francisco, CA",
		eventDateTime: "April 10, 2025 | 9:00 AM",
	},
	{
		eventName: "Blockchain Summit Africa",
		eventLocation: "Eko Hotel & Suites, Lagos",
		eventDateTime: "June 20, 2025 | 10:00 AM",
	},
	{
		eventName: "Frontend Dev Meetup",
		eventLocation: "The Hive, Nairobi, Kenya",
		eventDateTime: "July 5, 2025 | 6:30 PM",
	},
	{
		eventName: "AI & Web3 Hackathon",
		eventLocation: "Silicon Valley, CA",
		eventDateTime: "September 12, 2025 | 8:00 AM",
	},
	{
		eventName: "Design & Code Festival",
		eventLocation: "Dubai World Trade Center",
		eventDateTime: "November 1, 2025 | 5:00 PM",
	},
];

export default events;
