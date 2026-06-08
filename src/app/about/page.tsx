export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-blue-50 px-6 py-24 text-slate-900">
      <section className="mx-auto max-w-4xl">
        <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-purple-700">
          À propos
        </span>

        <h1 className="mt-6 text-5xl font-bold">
          Klero est né d’une idée simple
        </h1>

        <p className="mt-8 text-xl leading-relaxed text-slate-600">
          Avancer ne devrait pas ressembler à une lutte permanente.
        </p>

        <div className="mt-10 space-y-6 text-lg leading-relaxed text-slate-700">
          <p>
            Certaines personnes vivent avec un cerveau qui ne s’arrête jamais.
            Les pensées s’enchaînent, les tâches s’accumulent, l’énergie fluctue
            et la culpabilité peut vite s’installer.
          </p>

          <p>
            Klero a été imaginé comme un refuge numérique : un espace plus doux,
            plus rassurant, qui accompagne sans mettre de pression.
          </p>

          <p>
            L’objectif n’est pas de devenir plus productif à tout prix.
            L’objectif est de respirer, avancer, recommencer, à son rythme.
          </p>
        </div>
      </section>
    </main>
  );
}