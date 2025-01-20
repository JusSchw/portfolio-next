"use client";

import { GithubLogo } from "./logos";
import Threadmill, { HoverCard } from "./general";
import { calculateAge } from "@/util/age";
import Image from "next/image";

export function HeroSection() {
  return (
    <>
      <section
        className="flex sm:flex-row flex-col justify-center items-center gap-4 w-full h-[calc(100vh-5rem)]"
        id="hero"
      >
        <GithubLogo />
        <img
          src="/avatar_placeholder.jpg"
          className="rounded-full w-32 h-32 object-contain outline outline-2 outline-offset-4 outline-red-500"
          alt="Avatar"
        />
        <div className="text-center">
          <h1 className="font-serif text-5xl text-nowrap italic">
            Justin Schwab
          </h1>
          <h2 className="font-extrabold text-2xl text-nowrap">
            FULLSTACK DEV MIT ❤️
          </h2>
          <div className="bg-white rounded-full w-full h-0.5" />
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
        className="flex flex-col items-center w-full min-h-screen"
        id="about"
      >
        <div className="h-[7.5rem]" />
        <h2 className="top-5 md:sticky font-extrabold text-4xl">
          FAKTEN ÜBER MICH
        </h2>
        <div className="h-10" />
        <div className="flex flex-wrap justify-around gap-4 px-4 w-full max-w-[75%] h-full">
          <HoverCard>
            <p className="absolute inset-0 p-4 font-semibold text-black text-xl">
              Ich bin {calculateAge("2003-03-26")} Jahre alt und habe mein
              Fachabitur sowie die Ausbildung zum staatlich geprüften
              Informationstechnischer Assistent absolviert.
            </p>
          </HoverCard>
          <HoverCard>
            <>
              <p className="absolute inset-0 p-4 font-semibold text-black text-xl">
                Rust ist meine Superpower
              </p>
              <Image
                src="/rustacean.png"
                width={200}
                height={200}
                alt=""
                className="right-0 bottom-0 absolute"
              />
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
