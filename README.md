# 🎟️ Ticket Generator

## Overview

The **Ticket Generator** is a web application that allows users to browse events, fill out a form with their avatar, name, and email, and generate a personalized event ticket. Users can then download the ticket as an image for easy access and event entry.

## ✨ Features

-   🗂 **Event Listing** – Users can browse a list of available events.
-   📝 **Form Submission** – Collects user details (avatar, name, email) to personalize the ticket.
-   🎟️ **Ticket Generation** – Generates a downloadable ticket with the user's details.
-   📷 **Image Upload** – Users can upload an avatar to be displayed on the ticket.
-   📥 **Downloadable Ticket** – Users can download their ticket as an image file.
-   🔄 **Local Database** – Stores user-generated tickets using Dexie (IndexedDB).

## 🚀 Tech Stack

-   **Next.js 15** – Framework for server-side rendering and optimized frontend performance.
-   **React 19** – UI library for component-based development.
-   **Dexie.js** – IndexedDB wrapper for efficient local storage.
-   **Tailwind CSS** – Utility-first CSS framework for responsive styling.
-   **html2canvas** – Converts HTML elements into downloadable image files.

## 📦 Dependencies

```json
"dependencies": {
    "@hookform/resolvers": "^4.0.0",
    "@radix-ui/react-label": "^2.1.2",
    "@radix-ui/react-progress": "^1.1.2",
    "@radix-ui/react-select": "^2.1.6",
    "@radix-ui/react-slot": "^1.1.2",
    "@radix-ui/react-tabs": "^1.1.3",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "dexie": "^4.0.11",
    "dexie-react-hooks": "^1.1.7",
    "html2canvas": "^1.4.1",
    "lucide-react": "^0.475.0",
    "next": "15.1.7",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-hook-form": "^7.54.2",
    "react-icons": "^5.4.0",
    "tailwind-merge": "^3.0.1",
    "tailwindcss-animate": "^1.0.7",
    "zod": "^3.24.2"
}
```

## 🛠️ Installation & Setup

1. **Clone the repository**
    ```sh
    git clone https://github.com/your-username/ticket-generator.git
    cd ticket-generator
    ```
2. **Install dependencies**
    ```sh
    npm install
    # or
    yarn install
    ```
3. **Set up environment variables**
   Create a `.env.local` file in the root directory and add:
    ```env
    NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET="your-upload-preset"
    NEXT_PUBLIC_CLOUDINARY_USERNAME="your-cloudinary-username"
    ```
4. **Run the development server**
    ```sh
    npm run dev
    ```
    The app will be available at [http://localhost:3000](http://localhost:3000).

## 🎨 Usage

1. Browse through the available events.
2. Click on an event to proceed to the ticket booking form.
3. Upload your avatar, enter your name and email.
4. Submit the form to generate your ticket.
5. Download your ticket for future use.

## 📌 Future Enhancements

-   🎫 **QR Code Integration** – Add a scannable QR code for event check-ins.
-   💳 **Payment Integration** – Allow paid ticket purchases via Stripe, Paystack, or Flutterwave.
-   🔐 **User Authentication** – Enable user accounts to manage bookings.
-   📨 **Email Confirmation** – Send tickets directly to users via email.

## 🤝 Contributing

Pull requests are welcome! If you have ideas for improvements, feel free to fork the repo and submit a PR.

---

💡 **Built with passion by Flames**
