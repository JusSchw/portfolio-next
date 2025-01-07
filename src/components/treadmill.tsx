import { LogoLink } from "./logos";

export default function Treadmill() {
  const logos = [
    "vscode",
    "git",
    "linux",
    "rust",
    "typescript",
    "react",
    "next",
    "tailwind",
    "html",
  ];
  return (
    <section className="relative w-full overflow-hidden h-20">
      <div className="treadmill-animation w-[200vw] min-w-[1500px] h-20 py-2 flex flex-row justify-around items-center">
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
