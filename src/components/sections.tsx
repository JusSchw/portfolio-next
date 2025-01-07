import { GithubLogo } from "./logos";
import Threadmill from "./treadmill";

export default function HeroSection() {
  return (
    <>
      <section className="h-[calc(100vh-5rem)] w-full flex flex-col sm:flex-row justify-center items-center gap-4">
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
