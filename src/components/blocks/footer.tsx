import Link from "next/link";

import { Button } from "@/components/ui/button";

export function Footer() {
  const navigation = [
    { name: "Serviços", href: "/#servicos" },
    { name: "Sobre", href: "/about" },
    { name: "Valores", href: "/pricing" },
    { name: "FAQ", href: "/faq" },
    { name: "Contato", href: "/contact" },
  ];

  const legal = [{ name: "Privacidade", href: "/privacy" }];

  return (
    <footer className="flex flex-col items-center gap-14 pt-28 lg:pt-32">
      <div className="container space-y-3 text-center">
        <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
          Vamos construir o próximo projeto
        </h2>
        <p className="text-muted-foreground mx-auto max-w-xl leading-snug text-balance">
          Escritório na Av. Brasil, Cascavel — PR. Visitas técnicas em todo o
          oeste paranaense.
        </p>
        <div>
          <Button size="lg" className="mt-4" asChild>
            <Link href="/contact">Agendar reunião</Link>
          </Button>
        </div>
      </div>

      <nav className="container flex flex-col items-center gap-4">
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="font-medium transition-opacity hover:opacity-75"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {legal.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="text-muted-foreground text-sm transition-opacity hover:opacity-75"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <p className="text-muted-foreground pb-10 text-center text-sm">
          Oeste Engenharia Ltda. · Cascavel, Paraná · CREA-PR
        </p>
      </nav>
    </footer>
  );
}
