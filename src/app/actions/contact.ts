"use server";

import { z } from "zod";

const ContactSchema = z.object({
  service: z.string().min(1, "Please select a service"),
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be under 100 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().max(20, "Phone number is too long").optional().or(z.literal("")),
  message: z.string().max(2000, "Message must be under 2000 characters").optional().or(z.literal("")),
});

export type ContactFormState = {
  success: boolean;
  errors?: Record<string, string[]>;
  message?: string;
};

export async function submitContactForm(
  data: {
    service: string;
    name: string;
    email: string;
    phone: string;
    message: string;
  }
): Promise<ContactFormState> {
  const validated = ContactSchema.safeParse(data);

  if (!validated.success) {
    return {
      success: false,
      errors: validated.error.flatten().fieldErrors,
      message: "Please correct the errors above.",
    };
  }

  // ─── Send email via Netlify Forms or external service ───
  // For now, log to server console. Replace with Resend/SendGrid/Netlify Forms.
  console.log("═══ NEW CONTACT FORM SUBMISSION ═══");
  console.log("Service:", validated.data.service);
  console.log("Name:", validated.data.name);
  console.log("Email:", validated.data.email);
  console.log("Phone:", validated.data.phone || "(not provided)");
  console.log("Message:", validated.data.message || "(not provided)");
  console.log("Timestamp:", new Date().toISOString());
  console.log("═══════════════════════════════════");

  return {
    success: true,
    message: "Thank you! Chris or Jess will be in touch within 24 hours.",
  };
}
