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
import { Loader2, UploadCloud } from "lucide-react";
import { MdMailOutline } from "react-icons/md";
import { Textarea } from "@/components/ui/textarea";
import { db } from "@/lib/db";

const formSchema = z.object({
	name: z.string().min(2, "Name is required").max(100),
	email: z.string().email("Invalid email"),
	avatar: z.string().url("Invalid image URL"),
	specialRequest: z.string().optional(),
	seat: z.string(),
	ticketNum: z.string(),
});

interface AttendeeDetailsProps {
	setStep: (step: number) => void;
	seat: string;
	ticketNum: string;
}

export default function AttendeeDetails({
	setStep,
	seat,
	ticketNum,
}: AttendeeDetailsProps) {
	const [imagePreview, setImagePreview] = useState<string | null>(null);
	//const [imagePreview, setImagePreview] = useState<string>(
	//	"https://res.cloudinary.com/dapbvli1v/image/upload/v1739459686/dp_cc2rdu.jpg"
	//);
	const [isUploading, setIsUploading] = useState<boolean>(false);
	const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

	const form = useForm<FormData>({
		resolver: zodResolver(formSchema),
		mode: "onChange",
		defaultValues: {
			name: "",
			email: "",
			avatar: "",
			specialRequest: "",
			seat,
			ticketNum,
		},
	});

	const handleImageUpload = async (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setIsUploading(true);
		const file = event.target.files?.[0];
		if (!file) {
			console.log("No file selected or unsupported file type.");
			return;
		}

		console.log("Uploading file:", file.name, file.type, file.size);

		const formData = new FormData();
		formData.append("file", file);
		formData.append("upload_preset", "chill guy");

		try {
			const response = await fetch(
				"https://api.cloudinary.com/v1_1/dapbvli1v/image/upload",
				{
					method: "POST",
					body: formData,
				}
			);

			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}

			const data = await response.json();
			console.log("Upload successful:", data);

			if (!data.secure_url) {
				throw new Error("No secure_url returned from Cloudinary");
			}

			form.setValue("avatar", data.secure_url, { shouldValidate: true });
			setImagePreview(data.secure_url);
		} catch (error) {
			console.error("Image upload failed", error);
			alert("Image upload failed. Please try again.");
		} finally {
			setIsUploading(false);
		}
	};

	type FormData = z.infer<typeof formSchema>;

	const onSubmit = async (data: FormData) => {
		setIsSubmitting(true);
		try {
			await db.event1.add(data);
			setStep(3);
		} catch (error) {
			console.log(`Failed to save info: ${error}`);
		} finally {
			setIsSubmitting(false);
		}
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
						render={({}) => (
							<FormItem className="p-6 pb-12 space-y-8 border border-input rounded-3xl bg-popover">
								<FormLabel>Upload Profile Photo</FormLabel>
								<FormControl className="">
									<div className="sm:bg-black/20 flex justify-center items-center w-full h-[200px]">
										<label className="border-4 border-upload bg-border rounded-[32px] cursor-pointer flex flex-col items-center justify-center size-60 mx-auto">
											<div
												className="flex flex-col items-center justify-center space-y-4 bg-cover bg-center h-full rounded-[32px]"
												style={{
													backgroundImage:
														imagePreview
															? `url(${imagePreview})`
															: "none",
												}}
											>
												<UploadCloud className="size-8 " />
												<span className="text-center px-6">
													{isUploading
														? "Uploading..."
														: "Drag & drop or click to upload"}
												</span>
											</div>
											<Input
												type="file"
												accept="image/*"
												className="hidden"
												onChange={handleImageUpload}
											/>
										</label>
									</div>
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
							<FormItem>
								<FormLabel>Enter Your Email *</FormLabel>
								<FormControl>
									<div className="flex w-full items-center rounded-xl border border-input bg-transparent p-3 transition-colors focus-within:ring-1 focus-within:ring-ring">
										<MdMailOutline
											className="size-6 focus:outline-none focus:ring-0"
											tabIndex={-1}
										/>
										<Input
											type="email"
											{...field}
											className="border-none p-0 pl-2 flex-1 bg-transparent focus-visible:ring-0"
										/>
									</div>
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
					<div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
						<Button
							type="submit"
							disabled={!form.formState.isValid || isSubmitting}
							className="w-full"
						>
							<Loader2
								className={`animate-spin  ${
									isSubmitting ? "inline-flex" : "hidden"
								}`}
							/>
							Get My Free Ticket
						</Button>

						<Button
							variant={"outline"}
							className="w-full"
							onClick={() => setStep(1)}
						>
							Back
						</Button>
					</div>
				</form>
			</Form>
		</div>
	);
}
