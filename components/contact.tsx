"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "../lib/hooks";
import { sendEmail } from "../actions/sendEmail";
import SubmitButton from "./submit-button";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="text-centermb-20 sm:mb-28 w-[min(100%, 38rem)]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700">
        Kontaktiere mich gerne direkt über{" "}
        <a className="underline" href="mailto:marenehlers@gmx.net">
          marenehlers@gmx.net
        </a>{" "}
        oder mit diesem Formular.
      </p>
      <form
        className="mt-10 flex flex-col "
        action={async (formData) => {
          console.log("Running on client");
          console.log(formData.get("senderEmail"));
          console.log(formData.get("message"));
          await sendEmail(formData);
        }}
      >
        <input
          type="email"
          name="senderEmail"
          required
          maxLength={500}
          placeholder="Deine email"
          className="h-14 px-4 rounded-lg borderBlack"
        />
        <textarea
          placeholder="Deine Nachricht"
          name="message"
          required
          maxLength={5000}
          className="h-52 my-3 rounded-lg borderBlack p-4"
        />
        <SubmitButton />
      </form>
    </motion.section>
  );
}
