export function Header() {
  return (
    <header className="w-full h-20 bg-red-500 sticky top-0 flex flex-row gap-16 px-8 items-center justify-end">
      <a href="#hero" className="mr-auto">
        <img
          src="/avatar_placeholder.jpg"
          className="rounded-full h-14 w-14"
        ></img>
      </a>
      <a href="#about" className="text-xl font-bold">
        ÜBER MICH
      </a>
    </header>
  );
}

export function Footer() {
  return <footer></footer>;
}
