import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const About = () => {
  return (
    <section className="container mt-10 flex max-w-5xl flex-col-reverse gap-8 md:mt-14 md:gap-14 lg:mt-20 lg:flex-row lg:items-end">
      <div className="flex flex-col gap-8 lg:gap-16 xl:gap-20">
        <ImageSection
          images={[
            { src: "/about/team.jpg", alt: "Equipe Oeste Engenharia" },
            { src: "/about/office.jpg", alt: "Escritório em Cascavel" },
          ]}
          className="xl:-translate-x-10"
        />
        <TextSection
          title="A equipe"
          paragraphs={[
            "Engenheiros civis, arquitetos e técnicos de obras com experiência em projetos urbanos e rurais.",
            "Trabalhamos com cooperativas, indústrias e construtoras do oeste do Paraná.",
          ]}
          ctaButton={{ href: "/contact", text: "Falar com a equipe" }}
        />
      </div>
      <div className="flex flex-col gap-8 lg:gap-16 xl:gap-20">
        <TextSection
          paragraphs={[
            "Nossa missão é entregar projetos e obras com clareza de prazo, custo e responsabilidade técnica.",
            "Atendemos presencialmente na Av. Brasil e fazemos vistorias em propriedades rurais da região.",
          ]}
        />
        <ImageSection
          images={[
            { src: "/about/construction.jpg", alt: "Obra em Cascavel" },
            { src: "/about/soy.jpg", alt: "Campo no oeste do Paraná" },
          ]}
          className="hidden lg:flex xl:translate-x-10"
        />
      </div>
    </section>
  );
};

export default About;

interface ImageSectionProps {
  images: { src: string; alt: string }[];
  className?: string;
}

export function ImageSection({ images, className }: ImageSectionProps) {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      {images.map((image, index) => (
        <div
          key={index}
          className="relative aspect-[2/1.5] overflow-hidden rounded-2xl"
        >
          <Image src={image.src} alt={image.alt} fill className="object-cover" />
        </div>
      ))}
    </div>
  );
}

interface TextSectionProps {
  title?: string;
  paragraphs: string[];
  ctaButton?: { href: string; text: string };
}

export function TextSection({ title, paragraphs, ctaButton }: TextSectionProps) {
  return (
    <section className="flex-1 space-y-4 text-lg md:space-y-6">
      {title && <h2 className="text-foreground text-4xl">{title}</h2>}
      <div className="text-muted-foreground max-w-xl space-y-6">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      {ctaButton && (
        <div className="mt-8">
          <Link href={ctaButton.href}>
            <Button size="lg">{ctaButton.text}</Button>
          </Link>
        </div>
      )}
    </section>
  );
}
