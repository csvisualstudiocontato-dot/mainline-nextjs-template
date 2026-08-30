import { DashedLine } from "@/components/dashed-line";

const stats = [
  { value: "18 anos", label: "Em Cascavel" },
  { value: "420+", label: "Projetos entregues" },
  { value: "4,8", label: "Avaliação no Google" },
  { value: "12 mun.", label: "Atendidos no Oeste" },
];

export function AboutHero() {
  return (
    <section>
      <div className="container flex max-w-5xl flex-col justify-between gap-8 md:gap-20 lg:flex-row lg:items-center lg:gap-24">
        <div className="flex-[1.5]">
          <h1 className="text-3xl tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Engenharia do Oeste, para o Oeste
          </h1>
          <p className="text-muted-foreground mt-5 text-2xl md:text-3xl">
            Escritório técnico em Cascavel, com raízes no agronegócio e na
            indústria paranaense.
          </p>
          <p className="text-muted-foreground mt-8 hidden max-w-lg space-y-6 text-lg text-balance md:block lg:mt-12">
            Fundada em 2008, a Oeste Engenharia nasceu para dar suporte técnico
            a quem constrói galpões, sedes rurais, condomínios e indústrias na
            região. Mantemos equipe enxuta, registro no CREA-PR e presença
            constante em campo.
          </p>
        </div>

        <div className="relative flex flex-1 flex-col justify-center gap-3 pt-10 lg:pt-0 lg:pl-10">
          <DashedLine
            orientation="vertical"
            className="absolute top-0 left-0 max-lg:hidden"
          />
          <DashedLine
            orientation="horizontal"
            className="absolute top-0 lg:hidden"
          />
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <div className="font-display text-4xl tracking-wide md:text-5xl">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
