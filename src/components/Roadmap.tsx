const roadmap = [
  {
    title: "Disponible aujourd'hui",
    emoji: "✅",
    items: ["Landing page", "Refuge", "Compagnons", "Blog", "Inscription bêta"],
  },
  {
    title: "En développement",
    emoji: "🚧",
    items: ["Journal personnel", "Routines douces", "Exercices de respiration"],
  },
  {
    title: "À venir",
    emoji: "🔜",
    items: [
      "Application mobile",
      "Personnalisation du refuge",
      "Compagnons interactifs",
      "Communauté Klero",
    ],
  },
];

export default function Roadmap() {
  return (
    <section className="relative z-10 mx-auto max-w-6xl px-6 py-24">
      <div className="text-center">
        <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-purple-700">
          Roadmap
        </span>

        <h2 className="mt-6 text-4xl font-bold">
          Ce qui arrive dans Klero
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-slate-600">
          Klero se construit étape par étape, avec l’objectif de créer un espace
          plus doux, plus utile et plus humain.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {roadmap.map((column) => (
          <div
            key={column.title}
            className="rounded-3xl bg-white/70 p-6 shadow-sm backdrop-blur-xl"
          >
            <div className="text-4xl">{column.emoji}</div>

            <h3 className="mt-4 text-xl font-bold">{column.title}</h3>

            <ul className="mt-6 space-y-3 text-slate-600">
              {column.items.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}