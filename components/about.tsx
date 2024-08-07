"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Die digitalen Herausforderungen haben meine Leidenschaft für Tech-Themen
        zum Leuchten gebracht, die ich in einem{" "}
        <span className="font-medium">Web-Development-Bootcamp</span> bei{" "}
        <a
          href="https://www.neuefische.de/"
          target="_blank"
          className=" hover:text-orange-500"
        >
          neuefische - School and Pool for Digital Talent
        </a>{" "}
        /{" "}
        <a
          href="https://www.spiced-academy.com/de"
          target="_blank"
          className=" hover:text-indigo-600"
        >
          SPICED Academy
        </a>{" "}
        mit Skills in{" "}
        <span className="underline">JavaScript, React.js, HTML, CSS, </span>...
        ausgebaut habe.
      </p>
      <p>
        Meine Neugierde auf technische Werkzeuge treibt mich an, neue Wege zu
        gehen, und ich freue mich darauf, an Lösungen für die digitale Welt
        kreativ mitzuarbeiten.
      </p>
    </motion.section>
  );
}
