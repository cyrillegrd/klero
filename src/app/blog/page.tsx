export default function Blog() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-blue-50 px-6 py-24 text-slate-900">
      <section className="mx-auto max-w-5xl text-center">
        <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-purple-700">
          Blog Klero
        </span>

        <h1 className="mt-6 text-5xl font-bold">
          Ressources pour avancer avec douceur
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
          Bientôt des articles sur la surcharge mentale, le TDAH, les routines douces,
          l’énergie fluctuante et la bienveillance envers soi-même.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            "Pourquoi mon cerveau pense-t-il tout le temps ?",
            "Pourquoi est-il si difficile de commencer une tâche ?",
            "Comment créer une routine douce qui tient dans le temps ?",
          ].map((title) => (
            <div key={title} className="rounded-3xl bg-white/70 p-6 text-left shadow-sm">
              <p className="text-sm font-medium text-purple-600">Bientôt</p>
              <h2 className="mt-3 text-xl font-bold">{title}</h2>
              <p className="mt-3 text-slate-600">
                Un article en préparation pour mieux comprendre ton fonctionnement.
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}