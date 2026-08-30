const leaders = [
  { name: "Carlos Henrique Silva", role: "Diretor técnico · CREA-PR" },
  { name: "Fernanda Riedi", role: "Arquitetura e urbanismo" },
  { name: "Lucas Benetti", role: "Obras industriais" },
  { name: "Patrícia Gomes", role: "Gestão de contratos" },
];

export function Investors() {
  return (
    <section className="container max-w-5xl py-12">
      <h2 className="text-foreground text-4xl font-medium tracking-wide">
        Liderança
      </h2>
      <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
        {leaders.map((person) => (
          <div key={person.name}>
            <h3 className="mt-3 font-semibold">{person.name}</h3>
            <p className="text-muted-foreground">{person.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
