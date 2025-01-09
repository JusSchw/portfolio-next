"use client";

import { motion } from "framer-motion";
import { LogoLink } from "./logos";
import { JSX, useState } from "react";

export default function Treadmill() {
  const logos = [
    "vscode",
    "git",
    "linux",
    "mongo",
    "rust",
    "javascript",
    "typescript",
    "node",
    "react",
    "next",
    "tailwind",
    "html",
    "css",
  ];

  return (
    <section className="relative w-full overflow-hidden h-20">
      <div className="treadmill-animation w-[200vw] min-w-[2000px] h-20 py-2 gap-4 flex flex-row justify-around items-center">
        {logos.map((logo, index) => (
          <LogoLink key={`${index}a`} name={logo} />
        ))}
        {logos.map((logo, index) => (
          <LogoLink key={`${index}b`} name={logo} />
        ))}
      </div>
    </section>
  );
}

export const HoverCard = ({ children = <></> }: { children?: JSX.Element }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: any) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateAmtX = ((y - centerY) / centerY) * -20;
    const rotateAmtY = ((x - centerX) / centerX) * 20;

    setRotateX(rotateAmtX);
    setRotateY(rotateAmtY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      className="bg-gray-300 min-h-40 min-w-96 grow relative rounded-md overflow-hidden "
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX, rotateY }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      style={{ transformStyle: "preserve-3d", transformOrigin: "center" }}
    >
      {children}
    </motion.div>
  );
};
