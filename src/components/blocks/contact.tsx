import Link from "next/link";

import { Facebook, Instagram, Linkedin } from "lucide-react";

import { ContactForm } from "@/components/blocks/contact-form";
import { DashedLine } from "@/components/dashed-line";

const contactInfo = [
  {
    title: "Escritório",
    content: (
      <p className="text-muted-foreground mt-3">
        Av. Brasil, 5723 — Centro
        <br />
        Cascavel — PR, 85812-001
      </p>
    ),
  },
  {
    title: "Contato",
    content: (
      <div className="mt-3">
        <Link
          href="mailto:contato@oesteengenharia.com.br"
          className="text-muted-foreground hover:text-foreground"
        >
          contato@oesteengenharia.com.br
        </Link>
        <p className="text-muted-foreground mt-1">
          <a href="tel:+554532201840">(45) 3220-1840</a>
        </p>
      </div>
    ),
  },
  {
    title: "Redes",
    content: (
      <div className="mt-3 flex gap-6">
        <Link href="#" className="text-muted-foreground hover:text-foreground">
          <Facebook className="size-5" />
        </Link>
        <Link href="#" className="text-muted-foreground hover:text-foreground">
          <Instagram className="size-5" />
        </Link>
        <Link href="#" className="text-muted-foreground hover:text-foreground">
          <Linkedin className="size-5" />
        </Link>
      </div>
    ),
  },
];

export default function Contact() {
  return (
    <section className="py-28 lg:py-32 lg:pt-44">
      <div className="container max-w-2xl">
        <h1 className="text-center text-2xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
          Contato
        </h1>
        <p className="text-muted-foreground mt-4 text-center leading-snug font-medium">
          Conte o desafio do projeto. Retornamos em até um dia útil.
        </p>

        <div className="mt-10 flex justify-between gap-8 max-sm:flex-col md:mt-14">
          {contactInfo.map((info, index) => (
            <div key={index}>
              <h2 className="font-medium">{info.title}</h2>
              {info.content}
            </div>
          ))}
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border">
          <iframe
            title="Mapa Cascavel"
            className="h-64 w-full border-0"
            loading="lazy"
            src="https://maps.google.com/maps?q=Av.+Brasil,+5723,+Cascavel+-+PR&output=embed"
          />
        </div>

        <DashedLine className="my-12" />

        <div className="mx-auto">
          <h2 className="mb-4 text-lg font-semibold">Solicitar orçamento</h2>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
