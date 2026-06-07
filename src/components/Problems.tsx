"use client";

import { useState } from "react";

const problems = [
  {
    emoji: "💭",
    title: "Trop de pensées",
    text: "Quand ton esprit tourne en boucle.",
    help: [
      "Décharger ce qui prend trop de place.",
      "Respirer pour ralentir le flot mental.",
      "Revenir à une seule petite action.",
    ],
  },
  {
    emoji: "🌫️",
    title: "Difficile de commencer",
    text: "Quand même une petite tâche semble immense.",
    help: [
      "Transformer une tâche en premier pas minuscule.",
      "Réduire la pression du résultat.",
      "Être accompagné sans jugement.",
    ],
  },
  {
    emoji: "🔋",
    title: "Énergie fluctuante",
    text: "Quand certains jours tout paraît plus compliqué.",
    help: [
      "Adapter les actions à ton niveau d’énergie.",
      "Respecter les jours plus lents.",
      "Célébrer les petits progrès.",
    ],
  },
  {
    emoji: "🫶",
    title: "Culpabilité",
    text: "Quand tu te reproches de ne pas avancer assez vite.",
    help: [
      "Remplacer la pression par de la bienveillance.",
      "Voir ce que tu as déjà réussi.",
      "Recommencer sans repartir de zéro.",
    ],
  },
  {
    emoji: "🧭",
    title: "Manque de clarté",
    text: "Quand tu ne sais plus par où commencer.",
    help: [
      "Clarifier ce qui compte maintenant.",
      "Organiser les idées sans surcharge.",
      "Choisir une direction simple.",
    ],
  },
  {
    emoji: "🌿",
    title: "Besoin de calme",
    text: "Quand tu veux simplement respirer un peu.",
    help: [
      "Créer un espace doux et rassurant.",
      "Faire une pause guidée.",
      "Revenir à toi sans pression.",
    ],
  },
];

export default function Problems() {
  const [openCard, setOpenCard] = useState<string | null>(null);

  return (
    <section id="app" className="relative z-10 mx-auto max-w-6xl px-6 py-24">
      <div className="text-center">
        <h2 className="text-3xl font-bold md:text-5xl">
          Quand tout devient trop lourd
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-slate-600">
          Clique sur une carte pour découvrir comment Klero peut t'aider.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {problems.map((problem) => {
          const isOpen = openCard === problem.title;

          return (
            <div
              key={problem.title}
              className="rounded-3xl border border-white/70 bg-white/70 p-6 shadow-sm backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div
                onClick={() =>
                  setOpenCard(isOpen ? null : problem.title)
                }
                className="cursor-pointer"
              >
                <div className="text-4xl">{problem.emoji}</div>

                <h3 className="mt-4 text-xl font-bold">
                  {problem.title}
                </h3>

                <p className="mt-2 text-slate-600">
                  {problem.text}
                </p>

                <p className="mt-4 text-sm font-medium text-purple-600">
                  {isOpen
                    ? "Masquer les conseils ↑"
                    : "Voir comment Klero aide ↓"}
                </p>
              </div>

              {isOpen && (
                <div className="mt-6 border-t border-purple-100 pt-6">
                  <h4 className="font-semibold text-purple-700">
                    Comment Klero aide
                  </h4>

                  <ul className="mt-4 space-y-3 text-slate-600">
                    {problem.help.map((item) => (
                      <li key={item}>✨ {item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}