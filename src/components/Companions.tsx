import Image from "next/image";

export default function Companions() {
  return (
    <section
      id="compagnons"
      className="relative z-10 mx-auto max-w-6xl px-6 py-24"
    >
      <div className="text-center">
        <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-purple-700">
          Les compagnons
        </span>

        <h2 className="mt-6 text-4xl font-bold">
          Des compagnons pour chaque aventure
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-slate-600">
          Ils t'accompagnent, t'encouragent et t'aident à avancer à ton rythme.
        </p>
      </div>

      <div className="mt-12 overflow-hidden rounded-[32px] shadow-xl">
        <Image
          src="/images/companions.png"
          alt="Les compagnons Klero"
          width={1600}
          height={900}
          className="w-full object-cover"
        />
      </div>
    </section>
  );
}