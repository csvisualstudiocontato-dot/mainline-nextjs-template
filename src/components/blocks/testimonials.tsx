import { DashedLine } from "../dashed-line";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const items = [
  {
    quote:
      "Entregaram o galpão industrial no prazo, com documentação em dia na prefeitura.",
    author: "Eduardo Klein",
    role: "Diretor industrial",
    company: "Cascavel",
  },
  {
    quote:
      "O laudo da sede rural foi claro e evitou retrabalho na regularização.",
    author: "Helena Weber",
    role: "Produtora rural",
    company: "Santa Tereza do Oeste",
  },
  {
    quote:
      "Fiscalização de obra séria. Relatórios semanais que a diretoria realmente lê.",
    author: "Paulo Mendes",
    role: "Gerente de facilities",
    company: "Toledo",
  },
  {
    quote: "Projeto estrutural preciso e equipe acessível no escritório da Av. Brasil.",
    author: "Camila Duarte",
    role: "Arquiteta parceira",
    company: "Cascavel",
  },
];

export const Testimonials = ({
  className,
  dashedLineClassName,
}: {
  className?: string;
  dashedLineClassName?: string;
}) => {
  return (
    <>
      <section className={cn("overflow-hidden py-28 lg:py-32", className)}>
        <div className="container">
          <div className="space-y-4">
            <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
              Clientes do Oeste
            </h2>
            <p className="text-muted-foreground max-w-md leading-snug">
              4,8 de média no Google · 186 avaliações públicas.
            </p>
          </div>

          <div className="relative mt-8 md:mt-12 lg:mt-20">
            <Carousel opts={{ align: "start", loop: true }} className="w-full">
              <CarouselContent>
                {items.map((testimonial, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <Card className="bg-muted h-full border-none">
                      <CardContent className="flex h-full flex-col justify-between gap-10 p-6">
                        <blockquote className="font-display text-lg font-medium md:text-xl">
                          {testimonial.quote}
                        </blockquote>
                        <div className="space-y-0.5">
                          <div className="text-primary font-semibold">
                            {testimonial.author}
                          </div>
                          <div className="text-muted-foreground text-sm">
                            {testimonial.role} · {testimonial.company}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="mt-8 flex gap-3">
                <CarouselPrevious className="bg-muted hover:bg-muted/80 static size-14.5 translate-x-0 translate-y-0 [&>svg]:size-6" />
                <CarouselNext className="bg-muted hover:bg-muted/80 static size-14.5 translate-x-0 translate-y-0 [&>svg]:size-6" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>
      <DashedLine
        orientation="horizontal"
        className={cn("mx-auto max-w-[80%]", dashedLineClassName)}
      />
    </>
  );
};
