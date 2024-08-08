import React from "react";
import SectionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="mb-20 sm:mb-28 w-[min(100%, 38rem)]">
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700">
        Kontaktiere mich gerne direkt über{" "}
        <a className="underline" href="mailto:marenehlers@gmx.net">
          marenehlers@gmx.net
        </a>{" "}
        oder mit diesem Formular.
      </p>
      <form className="mt-10 flex flex-col">
        <input
          type="email"
          placeholder="Deine email"
          className="h-14 px-4 rounded-lg borderBlack"
        />
        <textarea
          placeholder="Deine Nachricht"
          className="h-52 my-3 rounded-lg borderBlack p-4"
        />
        <button
          type="submit"
          className="group flex justify-center items-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105"
        >
          Senden{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </button>
      </form>
    </section>
  );
}
