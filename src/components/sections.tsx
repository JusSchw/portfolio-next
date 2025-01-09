"use client";

import { motion } from "framer-motion";
import { GithubLogo } from "./logos";
import Threadmill, { HoverCard } from "./general";
import { useState } from "react";
import { calculateAge } from "@/util/age";

export function HeroSection() {
  return (
    <>
      <section
        className="h-[calc(100vh-5rem)] w-full flex flex-col sm:flex-row justify-center items-center gap-4"
        id="hero"
      >
        <GithubLogo />
        <img
          src="/avatar_placeholder.jpg"
          className="h-32 w-32 rounded-full object-contain outline-2 outline-offset-4 outline outline-red-500"
          alt="Avatar"
        />
        <div className="text-center">
          <h1 className="text-5xl font-serif italic text-nowrap">
            Justin Schwab
          </h1>
          <h2 className="text-2xl font-extrabold text-nowrap">
            FULLSTACK DEV MIT ❤️
          </h2>
          <div className="w-full h-0.5 bg-white rounded-full" />
        </div>
      </section>
      <Threadmill />
    </>
  );
}

export function AboutSection() {
  return (
    <>
      <section
        className="w-full min-h-screen flex-col flex items-center"
        id="about"
      >
        <div className="h-[7.5rem]" />
        <h2 className="text-4xl font-extrabold top-5 md:sticky">
          FAKTEN ÜBER MICH
        </h2>
        <div className="h-10" />
        <div className="w-full h-full flex flex-wrap gap-4 justify-around px-4">
          <HoverCard>
            <p className="p-4 text-black text-xl absolute inset-0 font-semibold">
              Ich bin {calculateAge("2003-03-26")} Jahre alt und habe mein
              Fachabitur sowie die Ausbildung zum staatlich geprüften
              Informationstechnischer Assistent absolviert.
            </p>
          </HoverCard>
          <HoverCard>
            <p className="p-4 text-black text-xl absolute inset-0 font-semibold">
              Meine Lieblingssprache ist Rust
            </p>
          </HoverCard>
          <HoverCard>
            <>
              <p className="p-4 text-black text-xl absolute inset-0 font-semibold">
                Zusammen mit meinen Bruder haben wir das Spiel Pitfall Protocol
                programmiert.
              </p>
            </>
          </HoverCard>
          <HoverCard />
          <HoverCard />
          <HoverCard />
          <HoverCard />
          <HoverCard />
        </div>
      </section>
    </>
  );
}
