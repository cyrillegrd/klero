export default function Hero() {
  return (
    <section className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 pt-24 text-center">
      <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-purple-700">
        Un refuge pour les cerveaux qui vont trop vite
      </span>

        <h1 className="mt-8 text-5xl font-extrabold tracking-tight sm:text-6xl md:text-8xl">        Respire.
        <br />
        Avance.
        <br />
        Recommence.
        </h1>

      <p className="mt-8 max-w-2xl text-xl leading-relaxed text-slate-600">
        Un refuge numérique conçu pour les personnes confrontées à la surcharge
        mentale, aux difficultés d'organisation et aux fluctuations d'énergie.
        </p>

      <a
        href="#beta"
        className="mt-10 rounded-2xl bg-purple-600 px-8 py-4 font-semibold text-white transition hover:scale-105"
      >
        Rejoindre la bêta
      </a>
    </section>
  );
}