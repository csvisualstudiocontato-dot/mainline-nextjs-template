import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const categories = [
  {
    title: "Atendimento",
    questions: [
      {
        question: "Vocês atendem só Cascavel?",
        answer:
          "Nossa sede é na Av. Brasil, em Cascavel. Atendemos todo o oeste do Paraná, incluindo Toledo, Medianeira, Foz do Iguaçu e municípios rurais.",
      },
      {
        question: "Como agendar uma visita?",
        answer:
          "Pelo formulário, WhatsApp (45) 3220-1840 ou diretamente na recepção, de segunda a sexta das 8h às 18h e sábados até 12h.",
      },
    ],
  },
  {
    title: "Projetos",
    questions: [
      {
        question: "Emitem ART?",
        answer:
          "Sim. Todos os projetos e laudos saem com Anotação de Responsabilidade Técnica no CREA-PR.",
      },
      {
        question: "Qual o prazo médio de um projeto residencial?",
        answer:
          "Projetos residenciais levam de 30 a 60 dias, conforme complexidade e documentação do terreno.",
      },
    ],
  },
  {
    title: "Obras",
    questions: [
      {
        question: "Fazem gestão de obra de terceiros?",
        answer:
          "Sim. Fiscalizamos construtoras contratadas pelo cliente, com medições, qualidade e relatórios semanais.",
      },
    ],
  },
];

export const FAQ = ({
  headerTag = "h2",
  className,
  className2,
}: {
  headerTag?: "h1" | "h2";
  className?: string;
  className2?: string;
}) => {
  return (
    <section className={cn("py-28 lg:py-32", className)}>
      <div className="container max-w-5xl">
        <div className={cn("mx-auto grid gap-16 lg:grid-cols-2", className2)}>
          <div className="space-y-4">
            {headerTag === "h1" ? (
              <h1 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
                Perguntas frequentes
              </h1>
            ) : (
              <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
                Perguntas frequentes
              </h2>
            )}
            <p className="text-muted-foreground max-w-md leading-snug lg:mx-auto">
              Não encontrou o que precisa?{" "}
              <Link href="/contact" className="underline underline-offset-4">
                Fale conosco
              </Link>
              .
            </p>
          </div>

          <div className="grid gap-6 text-start">
            {categories.map((category, categoryIndex) => (
              <div key={category.title}>
                <h3 className="text-muted-foreground border-b py-4">
                  {category.title}
                </h3>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((item, i) => (
                    <AccordionItem key={i} value={`${categoryIndex}-${i}`}>
                      <AccordionTrigger>{item.question}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
