"use client";

import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "../context/active-section-context";

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.75,
  });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("About");
    }
  }, [inView, setActiveSection]);

  return (
    <motion.section
      id="about"
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
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
