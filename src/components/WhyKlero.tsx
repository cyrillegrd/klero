export default function WhyKlero() {
  const points = [
    [
      "❌",
      "Toujours plus de productivité",
      "✅",
      "Plus de douceur et de bienveillance",
    ],
    [
      "❌",
      "Des objectifs irréalistes",
      "✅",
      "Des petits pas adaptés à ton énergie",
    ],
    [
      "❌",
      "La culpabilité quand on échoue",
      "✅",
      "Chaque progrès compte",
    ],
  ];

  return (
    <section className="relative z-10 mx-auto max-w-6xl px-6 py-24">
      <div className="text-center">
        <h2 className="text-4xl font-bold">
          Pourquoi Klero ?
        </h2>
      </div>

      <div id="why" className="mt-12 space-y-6">
        {points.map(([badIcon, bad, goodIcon, good]) => (
          <div
            key={bad}
            className="grid gap-4 rounded-3xl bg-white/70 p-6 shadow-sm backdrop-blur-xl md:grid-cols-2"
          >
            <div className="flex items-center gap-3 text-slate-500">
              <span>{badIcon}</span>
              <span>{bad}</span>
            </div>

            <div className="flex items-center gap-3 font-medium text-purple-700">
              <span>{goodIcon}</span>
              <span>{good}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}