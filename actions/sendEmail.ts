"use server";
import { Resend } from "resend";
import { getErrorMessage, validateString } from "../lib/utils";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  console.log("Running on server");
  console.log(formData.get("senderEmail"));
  console.log(formData.get("message"));
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // additional server-side-validation
  if (!validateString(senderEmail, 500)) {
    return { error: "Invalid sender email" };
  }
  if (!validateString(message, 5000)) {
    return { error: "Invalid message" };
  }

  try {
    await resend.emails.send({
      from: "Portfolio-Me Contact <onboarding@resend.dev>",
      to: "marenehlers@gmx.net",
      subject: "Message from portfolio contact form",
      reply_to: `${senderEmail}`,
      text: `${message}`,
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
};
