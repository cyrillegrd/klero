const problems = [
  ["💭", "Trop de pensées", "Quand ton esprit tourne en boucle."],
  ["🌫️", "Difficile de commencer", "Quand même une petite tâche semble immense."],
  ["🔋", "Énergie fluctuante", "Quand certains jours tout paraît plus compliqué."],
  ["🫶", "Culpabilité", "Quand tu te reproches de ne pas avancer assez vite."],
  ["🧭", "Manque de clarté", "Quand tu ne sais plus par où commencer."],
  ["🌿", "Besoin de calme", "Quand tu veux simplement respirer un peu."],
];

export default function Problems() {
  return (
    <section id="app" className="relative z-10 mx-auto max-w-6xl px-6 py-24">
      <div className="text-center">
        <h2 className="text-3xl font-bold md:text-5xl">
          Quand tout devient trop lourd
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-slate-600">
          Klero est pensé pour les moments où ton cerveau va trop vite, où
          commencer semble difficile, et où tu as besoin d’un espace plus doux.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {problems.map(([emoji, title, text]) => (
          <div
            key={title}
            className="rounded-3xl border border-white/70 bg-white/70 p-6 shadow-sm backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="text-4xl">{emoji}</div>
            <h3 className="mt-4 text-xl font-bold">{title}</h3>
            <p className="mt-2 text-slate-600">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}