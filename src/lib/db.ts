import Dexie, { type EntityTable } from "dexie";

interface Event1 {
	id?: number;
	name: string;
	email: string;
	avatar: string;
	specialRequest?: string;
	seat: string;
	ticketNum: string;
	eventName: string;
	eventLocation: string;
	eventDateTime: string;
}

const db = new Dexie("EventDB") as Dexie & {
	event1: EntityTable<Event1, "id">;
};

db.version(1).stores({
	event1: "++id, name, email, avatar, specialRequest, seat, ticketNum, eventName, eventLocation, eventDateTime",
});

export type { Event1 };
export { db };
