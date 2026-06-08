export default function HowItWorks() {
  const steps = [
    {
      emoji: "🌬️",
      title: "Respire",
      description:
        "Retrouve ton calme grâce à des exercices simples et adaptés à ton état du moment.",
    },
    {
      emoji: "🌱",
      title: "Avance",
      description:
        "Choisis une petite action adaptée à ton énergie. Pas besoin d'être parfait.",
    },
    {
      emoji: "🏝️",
      title: "Fais grandir ton refuge",
      description:
        "Chaque petit pas aide ton univers à évoluer et te rapproche de tes objectifs.",
    },
  ];

  return (
    <section id="how" className="relative z-10 mx-auto max-w-6xl px-6 py-24">
      <div className="text-center">
        <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-purple-700">
          Comment ça fonctionne
        </span>

        <h2 className="mt-6 text-4xl font-bold">
          Trois étapes simples
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-slate-600">
          Klero n'essaie pas de te transformer. Il t'aide simplement à avancer à ton rythme.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {steps.map((step) => (
          <div
            key={step.title}
            className="rounded-3xl bg-white/70 p-8 text-center shadow-sm backdrop-blur-xl"
          >
            <div className="text-5xl">{step.emoji}</div>

            <h3 className="mt-5 text-2xl font-bold">
              {step.title}
            </h3>

            <p className="mt-4 text-slate-600">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}