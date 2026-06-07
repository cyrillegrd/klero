"use client";

import { useState } from "react";

const companions = [
  {
    emoji: "🦕",
    name: "Bronto",
    role: "Le calme",
    description:
      "Quand ton cerveau va trop vite et que les pensées s'accumulent.",
    skills: [
      "🌬️ Exercices de respiration",
      "🌿 Retour au calme",
      "🧘 Ancrage dans le présent",
    ],
  },
  {
    emoji: "🌙",
    name: "Céra",
    role: "La bienveillance",
    description:
      "Quand la culpabilité prend trop de place.",
    skills: [
      "💜 Messages bienveillants",
      "🌸 Auto-compassion",
      "✨ Encouragements quotidiens",
    ],
  },
  {
    emoji: "⭐",
    name: "Tyna",
    role: "L'organisation",
    description:
      "Quand tu ne sais plus par où commencer.",
    skills: [
      "🧭 Clarifier les priorités",
      "📋 Organiser les idées",
      "🎯 Découper les tâches",
    ],
  },
  {
    emoji: "⚡",
    name: "Ptéra",
    role: "L'énergie",
    description:
      "Quand tu as besoin d'un coup de pouce pour avancer.",
    skills: [
      "🔋 Motivation douce",
      "🎉 Célébration des progrès",
      "🚀 Mise en mouvement",
    ],
  },
];

export default function CompanionsDetails() {
  const [selected, setSelected] = useState(companions[0]);

  return (
    <section className="relative z-10 mx-auto max-w-6xl px-6 py-24">
      <div className="text-center">
        <h2 className="text-4xl font-bold">
          Fais connaissance avec les compagnons
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-slate-600">
          Chaque compagnon possède sa personnalité et sa manière de t'accompagner.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-4">
        {companions.map((companion) => (
          <button
            key={companion.name}
            onClick={() => setSelected(companion)}
            className={`rounded-3xl p-6 text-center transition ${
              selected.name === companion.name
                ? "bg-purple-600 text-white shadow-xl"
                : "bg-white/70 shadow-sm backdrop-blur-xl"
            }`}
          >
            <div className="text-5xl">{companion.emoji}</div>

            <h3 className="mt-4 text-xl font-bold">
              {companion.name}
            </h3>

            <p className="mt-1 text-sm">
              {companion.role}
            </p>
          </button>
        ))}
      </div>

      <div className="mt-10 rounded-[32px] bg-white/80 p-8 shadow-lg backdrop-blur-xl">
        <div className="flex items-center gap-4">
          <div className="text-6xl">{selected.emoji}</div>

          <div>
            <h3 className="text-3xl font-bold">
              {selected.name}
            </h3>

            <p className="text-purple-600">
              {selected.role}
            </p>
          </div>
        </div>

        <p className="mt-6 text-lg text-slate-600">
          {selected.description}
        </p>

        <div className="mt-8">
          <h4 className="font-semibold text-purple-700">
            Comment il t'aide
          </h4>

          <ul className="mt-4 space-y-3">
            {selected.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}