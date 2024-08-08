import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "../public/corpcomment.png";
import rmtdevImg from "../public/rmtdev.png";
import wordanalyticsImg from "../public/wordanalytics.png";
import plantProImg from "../public/plantProImg.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Web Development - Bootcamp",
    location: "remote",
    description:
      "Das 12 Wochen / Coding-Bootcamp (in Vollzeit, Englisch) war eine intensive Erfahrung, jeder Error hat nicht nur mir viel Kopfzerbrechen bereitet aber der Spaß am Tüfteln überwiegt und mehr als begeistert bin ich, was ich und meine Peers während dieser Zeit mit dem finalen Projekt erreichen konnten. ",
    icon: React.createElement(FaReact),
    date: "04/2024 - 07/2024",
  },
  {
    title: "Bildredakteurin",
    location: "Hamburg / remote",
    description:
      "Es war mir eine Freude, die Fotoproduktionen und Geschichten in den Zeitungen und Zeitschriften sehen zu dürfen, die wir bei 'Thomas & Thomas' selbst oder in Zusammenarbeit mit unserem Fotografen-Netzwerk entstehen lassen haben. Nicht nur der Einsatz bei Fotoshootings auch jede Art von technische Herausvorderung, haben für eine abwechslungsreiche und spannende Zeit gesorgt.",
    icon: React.createElement(CgWorkAlt),
    date: "05/2024 - 06/2006",
  },
  {
    title: "Bilddokumentarin",
    location: "Hamburg",
    description:
      "Bei 'New Eyes' haben wir als Agentur-Team ein analoges Bildarchiv digital zum Leben erweckt. Dabei habe ich gelernt, wie wichtig es ist, traditionelle Medien mit modernen Technologien zu verbinden, um ihre Relevanz und ihren Wert auch in der digitalen Welt zu erhalten. ",
    icon: React.createElement(CgWorkAlt),
    date: "03/2000 - 11/2005",
  },
  {
    title: "Ausbildung zur Fotografin",
    location: "Elmshorn",
    description:
      "Mit Porträt-, Hochzeits- und Gesellschaftsfotografie fing nach dem Abitur mein Berufsleben an - 100% analoge Fotografie und viel Zeit in der Dunkelkammer 😉",
    icon: React.createElement(LuGraduationCap),
    date: "08/1996 - 08/1999",
  },
] as const;

export const projectsData = [
  {
    title: "Portfolio Webseite",
    description:
      "Nach dem Web Developemnt Bootcamp erstellte ich meine Portfolio Webseite und machte mit Hilfe eines Tutorials erste Schritte in Typescript, Tailwind CSS und Framer Motion.",
    tags: ["React", "Next.js", "Typescript", "Tailwind CSS", "Framer Motion"],
    imageUrl: corpcommentImg,
  },
  {
    title: "SPICED - Captstone Project",
    description:
      "In den letzten drei Wochen des 3-monatigen Intensiv-Coding-Bootcamps von 'SPICED Academy / neuefische' entwickelten wir im Dreier-Team eine 'Plant-Care-App' als Abschluss-Projekt. ",
    tags: ["React", "Next.js", "JavaScript", "Cloudinary", "Fuse.js", "Vercel"],
    imageUrl: plantProImg,
  },
  {
    title: "Dummy Projekt",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Dummy Projekt",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "GitHub",
  "MongoDB",
  "Adobe Photoshop",
  "TypeScript",
  "Tailwind",
  "Framer Motion",
] as const;
