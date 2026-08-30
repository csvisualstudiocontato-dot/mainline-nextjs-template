export const Logos = () => {
  const names = [
    "Cooperativa Copacol",
    "C.Vale",
    "Lar Cooperativa",
    "Prefeitura de Cascavel",
    "CREA-PR",
    "Sinduscon Oeste",
    "FIEP Paraná",
    "UTFPR Cascavel",
  ];

  return (
    <section className="overflow-hidden pb-28 lg:pb-32">
      <div className="container space-y-10">
        <div className="text-center">
          <h2 className="mb-4 text-xl text-balance md:text-2xl lg:text-3xl">
            Parceiros e clientes do Oeste do Paraná.
            <br className="max-md:hidden" />
            <span className="text-muted-foreground">
              Cooperativas, indústria, comércio e poder público.
            </span>
          </h2>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {names.map((name) => (
            <span
              key={name}
              className="rounded-full border px-4 py-2 text-sm font-medium opacity-70"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
