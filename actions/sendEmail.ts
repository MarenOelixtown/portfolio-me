"use server";
import React from "react";
import { Resend } from "resend";
import { getErrorMessage, validateString } from "../lib/utils";
import ContactFormEmail from "../email/contact-form-email";
import { error } from "console";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // additional server-side-validation
  if (!validateString(senderEmail, 500)) {
    return { error: "Invalid sender email" };
  }
  if (!validateString(message, 5000)) {
    return { error: "Invalid message" };
  }

  let response;
  try {
    response = await resend.emails.send({
      from: "Portfolio-Me Contact <onboarding@resend.dev>",
      to: "marenehlers@gmx.net",
      subject: "Message from portfolio contact form",
      reply_to: `${senderEmail}`,
      react: React.createElement(ContactFormEmail, {
        message: `${message}`,
        senderEmail: `${senderEmail}`,
      }),
    });

    if (response?.error) {
      console.log("API returned an error:", response.error);
      return {
        error: response.error.message || "Unknown error occurred",
      };
    }

    return {
      data: response.data,
    };
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
};
