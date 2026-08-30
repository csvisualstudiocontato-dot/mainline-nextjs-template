import Image from "next/image";

import { ArrowRight, Building2, HardHat, MapPin, Ruler } from "lucide-react";

import { DashedLine } from "@/components/dashed-line";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Projetos civis e industriais",
    description: "Arquitetura, estrutural e instalações com ART no CREA-PR.",
    icon: Building2,
  },
  {
    title: "Obras e fiscalização",
    description: "Acompanhamento de obra, cronograma e controle de qualidade.",
    icon: HardHat,
  },
  {
    title: "Laudos e perícias",
    description: "Vistorias, regularização e relatórios técnicos para o oeste.",
    icon: Ruler,
  },
  {
    title: "Sede em Cascavel",
    description: "Av. Brasil, 5723 — atendimento presencial e no campo.",
    icon: MapPin,
  },
];

export const Hero = () => {
  return (
    <section className="py-28 lg:py-32 lg:pt-44">
      <div className="container flex flex-col justify-between gap-8 md:gap-14 lg:flex-row lg:gap-20">
        <div className="flex-1">
          <p className="text-primary mb-3 text-sm font-semibold tracking-[0.18em] uppercase">
            Cascavel · Paraná
          </p>
          <h1 className="text-foreground max-w-160 text-3xl tracking-tight md:text-4xl lg:text-5xl">
            Engenharia que sustenta o crescimento do Oeste
          </h1>

          <p className="text-muted-foreground mt-5 text-xl md:text-2xl">
            Projetos, obras e consultoria técnica para empresas, indústrias e
            produtores de Cascavel e região.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 lg:flex-nowrap">
            <Button asChild>
              <a href="/contact">Solicitar orçamento</a>
            </Button>
            <Button
              variant="outline"
              className="from-background h-auto gap-2 bg-linear-to-r to-transparent shadow-md"
              asChild
            >
              <a href="#local" className="text-start">
                Ver no mapa
                <ArrowRight className="stroke-3" />
              </a>
            </Button>
          </div>
        </div>

        <div className="relative flex flex-1 flex-col justify-center space-y-5 max-lg:pt-10 lg:pl-10">
          <DashedLine
            orientation="vertical"
            className="absolute top-0 left-0 max-lg:hidden"
          />
          <DashedLine
            orientation="horizontal"
            className="absolute top-0 lg:hidden"
          />
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="flex gap-2.5 lg:gap-5">
                <Icon className="text-foreground mt-1 size-4 shrink-0 lg:size-5" />
                <div>
                  <h2 className="font-text text-foreground font-semibold">
                    {feature.title}
                  </h2>
                  <p className="text-muted-foreground max-w-76 text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-12 max-lg:ml-6 max-lg:h-[420px] max-lg:overflow-hidden md:mt-20 lg:container lg:mt-24">
        <div className="relative h-[420px] w-full lg:h-[560px]">
          <Image
            src="/hero.jpg"
            alt="Cascavel, Paraná"
            fill
            priority
            className="rounded-2xl object-cover object-center shadow-lg max-lg:rounded-tr-none"
          />
        </div>
      </div>
    </section>
  );
};
