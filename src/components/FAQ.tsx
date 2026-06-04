const faqs = [
  ["Klero est-il une application médicale ?", "Non. Klero est un outil de bien-être et d'accompagnement. Il ne remplace pas un professionnel de santé."],
  ["Faut-il avoir un TDAH pour utiliser Klero ?", "Non. Klero est conçu pour toute personne qui se sent submergée, stressée ou désorganisée."],
  ["Quand sera disponible l'application ?", "La première version est en préparation. Les inscrits à la bêta seront informés en priorité."],
];

export default function FAQ() {
  return (
    <section className="relative z-10 mx-auto max-w-4xl px-6 py-24">
      <h2 className="text-center text-4xl font-bold">Questions fréquentes</h2>

      <div className="mt-12 space-y-4">
        {faqs.map(([question, answer]) => (
          <div key={question} className="rounded-3xl bg-white/70 p-6 shadow-sm backdrop-blur-xl">
            <h3 className="font-semibold">{question}</h3>
            <p className="mt-2 text-slate-600">{answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}