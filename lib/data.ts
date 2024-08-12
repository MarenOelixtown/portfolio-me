import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import portfolioMeImg from "../public/portfolioMeImg.webp";
import rmtdevImg from "../public/rmtdev.png";
import plantProImg from "../public/plantProImg.webp";

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
    title: "Web Development - Bootcamp / Student",
    employer: "SPICED Academy / neuefische",
    location: "remote - Vollzeit - englisch",
    description:
      "Das 12 Wochen / Coding-Bootcamp war eine intensive Erfahrung. Mit Spaß am Tüfteln haben wir uns aus zahlreichen Errors herausgekämpft und es ist toll zu sehen, was meine Peers und ich während der 3-wöchigen Abschluss-Phase als finales Projekt erreichen konnten.",
    icon: React.createElement(FaReact),
    date: "04/2024 - 07/2024",
  },
  {
    title: "Bildredakteurin",
    employer: "Thomas & Thomas Presseagentur",
    location: "Hamburg / remote",
    description:
      "Es war mir eine Freude, die Fotoproduktionen und Geschichten in Zeitungen und Zeitschriften sehen zu dürfen, die wir bei 'Thomas & Thomas' selbst oder in Zusammenarbeit mit unserem Fotografen-Netzwerk entstehen lassen haben. Nicht nur der Einsatz bei Fotoshootings auch jede Art von technische Herausvorderung hat für eine abwechslungsreiche und spannende Zeit gesorgt.",
    icon: React.createElement(CgWorkAlt),
    date: "05/2024 - 06/2006",
  },
  {
    title: "Bilddokumentarin",
    employer: "New Eyes Fotoagentur GmbH",
    location: "Hamburg",
    description:
      "Bei 'New Eyes' haben wir als Agentur-Team ein analoges Bildarchiv digital zum Leben erweckt. Dabei habe ich gelernt, wie wichtig es ist, traditionelle Medien mit modernen Technologien zu verbinden, um ihre Relevanz und ihren Wert auch in der digitalen Welt zu erhalten. ",
    icon: React.createElement(CgWorkAlt),
    date: "03/2000 - 11/2005",
  },
  {
    title: "Ausbildung zur Fotografin",
    employer: "Studio Berthold",
    location: "Elmshorn",
    description:
      "Mit Porträt-, Hochzeits- und Gesellschaftsfotografie fing nach dem Abitur mein Berufsleben an - 100% analoge Fotografie kombiniert mit Dunkelkammer-Zeit 😉",
    icon: React.createElement(LuGraduationCap),
    date: "08/1996 - 08/1999",
  },
] as const;

export const projectsData = [
  {
    title: "Portfolio Webseite",
    description:
      "Nach dem Web Developemnt Bootcamp erstellte ich meine Portfolio Webseite und machte erste Schritte in Typescript, Tailwind CSS, Framer Motion, React Email & Resend.",
    tags: ["React", "Next.js", "Typescript", "Tailwind CSS", "Framer Motion"],
    imageUrl: portfolioMeImg,
  },
  {
    title: "SPICED - Captstone Project",
    description:
      "In den letzten drei Wochen des 3-monatigen Intensiv-Coding-Bootcamps entwickelten wir im Dreier-Team eine 'Plant-Care-App' als Abschluss-Projekt. ",
    tags: ["React", "Next.js", "JavaScript", "Cloudinary", "Fuse.js", "Vercel"],
    imageUrl: plantProImg,
  },
  {
    title: "Neue Projekte",
    description: "Coming soon...",
    tags: [],
    imageUrl: rmtdevImg,
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
