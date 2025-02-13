"use client";

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UploadCloud } from "lucide-react";
import Image from "next/image";

const formSchema = z.object({
	name: z.string().min(2, "Name is required").max(100),
	email: z.string().email("Invalid email"),
	avatar: z.string().url("Invalid image URL"),
	specialRequest: z.string().optional(),
});

export default function AttendeeDetails() {
	const [imagePreview, setImagePreview] = useState<string | null>(null);
	const form = useForm({
		resolver: zodResolver(formSchema),
		mode: "onChange",
	});

	const handleImageUpload = async (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const file = event.target.files?.[0];
		if (!file) return;

		const formData = new FormData();
		formData.append("file", file);
		formData.append("upload_preset", "your_upload_preset");

		try {
			const response = await fetch(
				"https://api.cloudinary.com/v1_1/dapbvli1v/image/upload",
				{
					method: "POST",
					body: formData,
				}
			);
			const data = await response.json();
			form.setValue("avatar", data.secure_url);
			setImagePreview(data.secure_url);
		} catch (error) {
			console.error("Image upload failed", error);
		}
	};

	const onSubmit = (data: any) => {
		console.log("Form Submitted:", data);
	};

	return (
		<div className="max-w-md mx-auto p-6 border rounded-lg shadow-lg">
			<h2 className="text-2xl font-semibold mb-4">Attendee Details</h2>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<FormField
						control={form.control}
						name="avatar"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Upload Profile Photo</FormLabel>
								<FormControl>
									<>
										<label className="border-2 border-dashed p-6 rounded-lg cursor-pointer flex flex-col items-center justify-center">
											<UploadCloud className="w-10 h-10 text-gray-500" />
											<span className="text-sm text-gray-500">
												Drop or Click to Upload
											</span>
											<Input
												type="file"
												accept="image/*"
												className="hidden"
												onChange={handleImageUpload}
											/>
										</label>
										{imagePreview && (
											<Image
												src={imagePreview}
												alt="Preview"
												className="mt-3 w-20 h-20 rounded-lg"
											/>
										)}
									</>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Enter Your Name</FormLabel>
								<FormControl>
									<Input {...field} placeholder="John Doe" />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Enter Your Email *</FormLabel>
								<FormControl>
									<Input
										type="email"
										{...field}
										placeholder="example@email.com"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<Button
						type="submit"
						disabled={!form.formState.isValid}
						className="mt-4 w-full"
					>
						Submit
					</Button>
				</form>
			</Form>
		</div>
	);
}
