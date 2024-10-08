"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "../lib/hooks";
import { sendEmail } from "../actions/sendEmail";
import SubmitButton from "./submit-button";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="text-center mb-20 scroll-mt-28 sm:mb-28 w-[min(100%, 38rem)]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700 dark:text-white/80">
        Kontaktiere mich gerne direkt über{" "}
        <a className="underline" href="mailto:marenehlers@gmx.net">
          marenehlers@gmx.net
        </a>{" "}
        oder mit diesem Formular.
      </p>
      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          console.log("error: ", error);

          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Email erfolgreich gesendet!");
        }}
      >
        <label htmlFor="senderEmail" className="sr-only">
          Deine Email
        </label>
        <input
          type="email"
          name="senderEmail"
          id="senderEmail"
          required
          maxLength={500}
          placeholder="Deine email"
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
        />
        <label htmlFor="message" className="sr-only">
          Deine Nachricht
        </label>
        <textarea
          placeholder="Deine Nachricht"
          name="message"
          id="message"
          required
          maxLength={5000}
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
        />
        <SubmitButton />
      </form>
    </motion.section>
  );
}
