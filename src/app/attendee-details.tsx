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
import { MdMailOutline } from "react-icons/md";
import { Textarea } from "@/components/ui/textarea";

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
		<div className="sm:p-6 sm:border border-border rounded-[32px] sm:bg-[#08252B]">
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-8 font-roboto text-base leading-[150%] font-normal"
				>
					<FormField
						control={form.control}
						name="avatar"
						render={({ field }) => (
							<FormItem className="p-6 border border-input rounded-3xl bg-popover">
								<FormLabel>Upload Profile Photo</FormLabel>
								<FormControl className="">
									<>
										<label className="border-4 border-upload bg-border p-6 rounded-[32px] cursor-pointer flex flex-col items-center justify-center size-60 mx-auto ">
											<div className="flex flex-col items-center justify-center space-y-4">
												<UploadCloud className="size-8 " />
												<span className="text-center">
													Drag & drop or click to
													upload
												</span>
											</div>
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

					<div className="bg-input h-1 w-full" />

					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Enter Your Name</FormLabel>
								<FormControl>
									<Input {...field} type="text" />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem className="relative">
								<FormLabel>Enter Your Email *</FormLabel>
								<FormControl className="relative flex items-center">
									<>
										{/*<MdMailOutline className="absolute left-3 bottom-3 size-6" />*/}
										<Input
											type="email"
											{...field}
											//className="pl-10"
										/>
									</>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="specialRequest"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Special Request?</FormLabel>
								<FormControl>
									<Textarea {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<div className="flex flex-col sm:flex-row gap-4">
						<Button
							type="submit"
							disabled={!form.formState.isValid}
							className="w-full"
						>
							Get My Free Ticket
						</Button>
						<Button variant={"outline"} className="w-full">
							Back
						</Button>
					</div>
				</form>
			</Form>
		</div>
	);
}
