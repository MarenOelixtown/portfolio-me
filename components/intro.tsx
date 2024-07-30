"use client";

import Image from "next/image";
import React from "react";
import mePortrait from "../public/mePortrait.jpg";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src={mePortrait}
              alt="Maren Portrait"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 left-0 text-3xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            ✌️
          </motion.span>
        </div>
      </div>
      <motion.p
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Moin, ich bin Maren.</span> Ich bin{" "}
        <span className="font-bold">Junior Web Developer</span> mit über 15
        Jahre Erfahrung als Bildredakteurin und von Natur aus aufgeschlossen und
        neugierig.{" "}
        <span className="italic">
          „Neue Herausforderungen sind wunderbare Gelegenheiten, Neues über sich
          selbst zu erfahren“,
        </span>{" "}
        finde ich, ist ein treffendes Motto.
      </motion.p>
    </section>
  );
}
