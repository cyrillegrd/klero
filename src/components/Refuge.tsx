import Image from "next/image";

export default function Refuge() {
  return (
    <section id="refuge" className="relative z-10 mx-auto max-w-6xl px-6 py-24">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-purple-700">
            Le Refuge
          </span>

          <h2 className="mt-6 text-4xl font-bold">
            Un espace qui évolue avec toi
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Klero n'est pas un outil de productivité de plus. C'est un refuge
            numérique conçu pour t'aider à retrouver du calme, avancer à ton
            rythme et célébrer chaque petit pas.
          </p>

          <ul className="mt-8 space-y-4 text-slate-700">
            <li>🌿 Exercices de respiration</li>
            <li>📖 Journal personnel</li>
            <li>⭐ Routines douces</li>
            <li>🦕 Compagnons bienveillants</li>
          </ul>
        </div>

        <div className="overflow-hidden rounded-[32px] shadow-xl">
        <Image
            src="/images/refuge-world.png"
            alt="Le monde de Klero"
            width={1200}
            height={800}
            className="h-full w-full object-cover transition duration-700 hover:scale-105"
        />
        </div>
      </div>
    </section>
  );
}