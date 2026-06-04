export default function Beta() {
  return (
    <section id="beta" className="relative z-10 mx-auto max-w-5xl px-6 py-24">
        <div className="rounded-[32px] bg-gradient-to-r from-purple-600 to-indigo-600 p-8 text-center text-white shadow-xl md:rounded-[40px] md:p-12">        <h2 className="text-3xl font-bold md:text-4xl">
        Rejoins les premiers explorateurs de Klero
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-purple-100">
          Inscris-toi pour être informé du lancement et accéder aux premières versions.
        </p>

        <form
        action="https://formspree.io/f/mojzqzqw"
        method="POST"
        className="mx-auto mt-8 flex max-w-xl flex-col gap-4 md:flex-row"
        >
          <input
            name="email"
            type="email"
            required
            placeholder="Votre adresse email"
            className="flex-1 rounded-2xl px-6 py-4 text-slate-900 outline-none"
            />
          <button className="rounded-2xl bg-white px-8 py-4 font-semibold text-purple-700">
            Rejoindre
          </button>
        </form>
      </div>
    </section>
  );
}