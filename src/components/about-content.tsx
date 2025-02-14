import React from "react";

export default function AboutContent() {
	return (
		<div className="space-y-4">
			<h1 className="text-2xl">
				Event Ticket Booking UI – Open Source Practice Project 🎟️
			</h1>

			<h2 className="text-xl">Overview</h2>
			<p>
				This is a beginner-friendly yet practical Event Ticket Booking
				UI designed for developers to clone, explore, and build upon.
				The design focuses on a seamless, login-free ticket reservation
				flow, allowing users to book event tickets quickly and
				efficiently.
			</p>

			<p>
				The project consists of a three-step ticket booking flow, and
				developers can extend it further by integrating payment
				solutions, user authentication (optional), and ticket validation
				systems.
			</p>

			<h2 className="text-xl">Flow & Features</h2>

			<h3 className="text-lg">1️⃣ Ticket Selection</h3>
			<ul className="text-sm">
				<li>Users can browse available tickets (Free & Paid).</li>
				<li>Ticket options are displayed in a list or card view.</li>
				<li>
					For Free Tickets → Clicking “Get Free Ticket” proceeds to
					attendee details.
				</li>
				<li>
					For Paid Tickets → Clicking “Purchase Ticket” would ideally
					open a payment modal.
				</li>
			</ul>

			<h3 className="text-lg">2️⃣ Attendee Details Form</h3>
			<ul className="text-sm">
				<li>
					Users input their Name, Email, and optional Phone Number.
				</li>
				<li>
					Profile picture upload option with preview functionality.
				</li>
				<li>
					Ticket summary is visible to ensure users review their
					details before submission.
				</li>
			</ul>

			<h3 className="text-lg">3️⃣ Payment or Success Page</h3>
			<ul className="text-sm">
				<li>
					If the ticket is free, the user is taken directly to the
					Ticket Confirmation Page.
				</li>
				<li>
					If the ticket is paid, developers can integrate Stripe,
					Paystack, or Flutterwave to process payments before showing
					the confirmation page.
				</li>
				<li>Upon successful booking, users should receive:</li>
				<ul className="text-xs">
					<li>A visual ticket preview with a unique QR Code.</li>
					<li>
						An option to download the ticket as PDF or save it to
						their device.
					</li>
					<li>An email confirmation containing ticket details.</li>
				</ul>
			</ul>

			<h2 className="text-xl">How to Build This 🚀</h2>
			<h3 className="text-lg">📌 Frontend (Next.js or React)</h3>
			<ul className="text-sm">
				<li>Component Breakdown:</li>
				<ul className="text-xs">
					<li>TicketCard.tsx → Displays ticket details</li>
					<li>AttendeeForm.tsx → Captures user details</li>
					<li>PaymentModal.tsx → Handles payment processing</li>
					<li>SuccessScreen.tsx → Shows the final ticket preview</li>
				</ul>
				<li>
					State Management: React’s Context API, Zustand, or Redux (if
					needed).
				</li>
				<li>
					File Handling: Users should be able to upload images
					(profile picture for ticket) using Firebase Storage,
					Cloudinary, or local preview with URL.createObjectURL().
				</li>
			</ul>

			<h3 className="text-lg">📌 Backend (Optional)</h3>
			<ul className="text-sm">
				<li>
					If persistence is required, a backend can be built using:
				</li>
				<ul className="text-xs">
					<li>Node.js & Express or Firebase Functions</li>
				</ul>
				<li>
					Database: MongoDB, PostgreSQL, or Firebase Firestore to
					store ticket records.
				</li>
			</ul>

			<h3 className="text-lg">📌 Payment Integration</h3>
			<ul className="text-sm">
				<li>For paid events, developers should integrate:</li>
				<ul className="text-xs">
					<li>Stripe Checkout (for international transactions)</li>
					<li>Paystack or Flutterwave (for African users)</li>
				</ul>
			</ul>

			<h2 className="text-xl">What You’ll Learn 🧑‍💻</h2>
			<ul className="text-sm">
				<li>File handling & validation (profile picture uploads).</li>
				<li>Dynamic UI updates based on ticket selection.</li>
				<li>Persisting bookings using local state or a backend.</li>
				<li>Integrating payment gateways for ticket purchases.</li>
				<li>
					Generating & validating QR Codes for event check-in
					(Advanced).
				</li>
			</ul>

			<h2 className="text-xl">Need Help? Reach Out! 💬</h2>
		</div>
	);
}
