import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/60 bg-white/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Klero"
            width={180}
            height={60}
            className="h-10 w-auto"
          /> 
</a>

        <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          <a href="#how">Comment ça marche</a>
          <a href="#app">Les défis</a>
          <a href="#refuge">Le refuge</a>
          <a href="#compagnons">Les compagnons</a>
          <a href="/blog">Blog</a>
          <a href="/about">À propos</a>
        </div>

        <a
          href="#beta"
          className="rounded-full bg-purple-600 px-4 py-2 text-xs font-semibold text-white md:px-5 md:py-2.5 md:text-sm"
        >
          Bêta
        </a>
      </div>
    </nav>
  );
}