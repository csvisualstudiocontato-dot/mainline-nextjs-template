"use client";

import Link from "next/link";

import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Consultoria",
    price: "Sob consulta",
    description: "Diagnóstico técnico e laudos",
    features: [
      "Vistoria em Cascavel e região",
      "Laudo com ART",
      "Relatório fotográfico",
      "Reunião de alinhamento",
    ],
  },
  {
    name: "Projeto",
    price: "Pacotes a partir de R$ 8.900",
    description: "Projeto executivo completo",
    features: [
      "Arquitetura e estrutural",
      "Instalações prediais",
      "Memorial descritivo",
      "Aprovação junto aos órgãos",
      "Revisões incluídas",
    ],
  },
  {
    name: "Obra",
    price: "Gestão dedicada",
    description: "Fiscalização e execução",
    features: [
      "Gerente de obra exclusivo",
      "Cronograma e medições",
      "Controle de qualidade",
      "Relatórios semanais",
      "Entrega com as built",
    ],
  },
];

export const Pricing = ({ className }: { className?: string }) => {
  return (
    <section className={cn("py-28 lg:py-32", className)}>
      <div className="container max-w-5xl">
        <div className="space-y-4 text-center">
          <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
            Serviços
          </h2>
          <p className="text-muted-foreground mx-auto max-w-xl leading-snug text-balance">
            Orçamentos transparentes, prazos realistas e equipe residente em
            Cascavel.
          </p>
        </div>

        <div className="mt-8 grid items-start gap-5 text-start md:mt-12 md:grid-cols-3 lg:mt-20">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={plan.name === "Projeto" ? "outline-primary origin-top outline-4" : ""}
            >
              <CardContent className="flex flex-col gap-7 px-6 py-5">
                <div className="space-y-2">
                  <h3 className="text-foreground font-semibold">{plan.name}</h3>
                  <p className="text-muted-foreground text-lg font-medium">
                    {plan.price}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {plan.description}
                  </p>
                </div>

                <div className="space-y-3">
                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="text-muted-foreground flex items-center gap-1.5"
                    >
                      <Check className="size-5 shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  className="w-fit"
                  variant={plan.name === "Projeto" ? "default" : "outline"}
                  asChild
                >
                  <Link href="/contact">Falar com a equipe</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
