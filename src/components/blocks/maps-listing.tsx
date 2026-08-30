import Link from "next/link";
import {
  Accessibility,
  Car,
  Clock,
  Copy,
  CreditCard,
  Globe,
  MapPin,
  Navigation,
  ParkingCircle,
  Phone,
  Share2,
  Star,
  Wifi,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const PLACE = {
  name: "Oeste Engenharia",
  category: "Empresa de engenharia civil",
  rating: 4.8,
  reviews: 186,
  address: "Av. Brasil, 5723 — Centro, Cascavel — PR, 85812-001",
  plusCode: "2G8X+2R Cascavel, Paraná",
  phone: "(45) 3220-1840",
  phoneHref: "tel:+554532201840",
  website: "https://oesteengenharia.com.br",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Av.+Brasil+5723+Cascavel+PR",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Av.+Brasil+5723,+Cascavel+-+PR",
  streetViewUrl:
    "https://www.google.com/maps/@?-24.9558,-53.4552,3a,75y,90t/data=!3m6!1e1",
  hours: [
    { day: "Segunda", time: "08:00–18:00" },
    { day: "Terça", time: "08:00–18:00" },
    { day: "Quarta", time: "08:00–18:00" },
    { day: "Quinta", time: "08:00–18:00" },
    { day: "Sexta", time: "08:00–18:00" },
    { day: "Sábado", time: "08:00–12:00" },
    { day: "Domingo", time: "Fechado" },
  ],
  attributes: [
    { icon: ParkingCircle, label: "Estacionamento no local" },
    { icon: Accessibility, label: "Acesso para cadeirantes" },
    { icon: Wifi, label: "Wi-Fi para visitantes" },
    { icon: CreditCard, label: "Cartão, PIX e boleto" },
    { icon: Car, label: "Fácil acesso pela Av. Brasil" },
  ],
  reviewsList: [
    {
      author: "Mariana Lopes",
      rating: 5,
      date: "há 2 semanas",
      text: "Projeto executivo impecável e acompanhamento de obra pontual. Equipe muito profissional.",
    },
    {
      author: "Ricardo Benetti",
      rating: 5,
      date: "há 1 mês",
      text: "Fizeram o laudo estrutural da nossa unidade rural em tempo recorde. Recomendo.",
    },
    {
      author: "Ana Paula Stein",
      rating: 4,
      date: "há 2 meses",
      text: "Atendimento excelente. Só a burocracia de alvará que demorou, mas isso é da prefeitura.",
    },
  ],
  qa: [
    {
      q: "Atendem projetos industriais no interior?",
      a: "Sim. Atuamos em Cascavel e em todo o oeste do Paraná, inclusive unidades rurais e silos.",
    },
    {
      q: "Fazem vistoria e ART?",
      a: "Sim. Emitimos ART no CREA-PR e realizamos vistorias técnicas agendadas.",
    },
  ],
};

export function MapsListing() {
  return (
    <section id="local" className="py-16 lg:py-24">
      <div className="container">
        <div className="mb-8 max-w-2xl">
          <p className="text-primary mb-2 text-sm font-semibold tracking-wide uppercase">
            Google Maps
          </p>
          <h2 className="text-2xl tracking-tight md:text-4xl">
            Encontre-nos em Cascavel
          </h2>
          <p className="text-muted-foreground mt-3">
            Todos os recursos de uma ficha do Google Maps: mapa, rotas, Street
            View, horários, avaliações, fotos, atributos e perguntas.
          </p>
        </div>

        <div className="grid overflow-hidden rounded-2xl border shadow-sm lg:grid-cols-[380px_1fr]">
          <div className="bg-card order-2 flex flex-col gap-6 p-6 lg:order-1">
            <div>
              <h3 className="text-xl font-semibold">{PLACE.name}</h3>
              <p className="text-muted-foreground text-sm">{PLACE.category}</p>
              <div className="mt-2 flex items-center gap-2 text-sm">
                <span className="font-semibold">{PLACE.rating}</span>
                <div className="flex text-amber-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="size-4 fill-current"
                      strokeWidth={0}
                    />
                  ))}
                </div>
                <span className="text-muted-foreground">
                  ({PLACE.reviews} avaliações)
                </span>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-2">
              <Action
                href={PLACE.directionsUrl}
                icon={Navigation}
                label="Rotas"
              />
              <Action href={PLACE.phoneHref} icon={Phone} label="Ligar" />
              <Action href="/contact" icon={Globe} label="Site" internal />
              <Action href={PLACE.mapsUrl} icon={Share2} label="Compartilhar" />
            </div>

            <ul className="space-y-3 text-sm">
              <li className="flex gap-3">
                <MapPin className="text-primary mt-0.5 size-4 shrink-0" />
                <div>
                  <p>{PLACE.address}</p>
                  <p className="text-muted-foreground mt-1 flex items-center gap-1">
                    Plus Code {PLACE.plusCode}
                    <Copy className="size-3" />
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <Clock className="text-primary mt-0.5 size-4 shrink-0" />
                <div className="w-full">
                  <p className="font-medium text-emerald-700 dark:text-emerald-400">
                    Aberto agora · Fecha às 18:00
                  </p>
                  <dl className="mt-2 space-y-1">
                    {PLACE.hours.map((h) => (
                      <div
                        key={h.day}
                        className="flex justify-between gap-4"
                      >
                        <dt>{h.day}</dt>
                        <dd className="text-muted-foreground">{h.time}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </li>
              <li className="flex gap-3">
                <Phone className="text-primary mt-0.5 size-4 shrink-0" />
                <a href={PLACE.phoneHref} className="hover:underline">
                  {PLACE.phone}
                </a>
              </li>
            </ul>

            <div>
              <p className="mb-2 text-sm font-medium">Sobre o local</p>
              <div className="flex flex-wrap gap-2">
                {PLACE.attributes.map((a) => (
                  <span
                    key={a.label}
                    className="bg-muted inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs"
                  >
                    <a.icon className="size-3.5" />
                    {a.label}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-2 text-sm font-medium">Movimento (popular times)</p>
              <div className="flex h-16 items-end gap-1">
                {[20, 35, 55, 80, 95, 70, 40, 25, 15].map((h, i) => (
                  <div
                    key={i}
                    className="bg-primary/70 w-full rounded-t"
                    style={{ height: `${h}%` }}
                    title={`${8 + i}h`}
                  />
                ))}
              </div>
              <p className="text-muted-foreground mt-1 text-xs">
                Pico entre 11h e 15h em dias úteis
              </p>
            </div>
          </div>

          <div className="order-1 min-h-[320px] lg:order-2 lg:min-h-[640px]">
            <iframe
              title="Mapa Oeste Engenharia Cascavel"
              className="h-full min-h-[320px] w-full border-0 lg:min-h-[640px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?q=Av.+Brasil,+5723,+Cascavel+-+PR&t=&z=16&ie=UTF8&iwloc=&output=embed"
            />
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-3">
          <Button asChild variant="outline">
            <a href={PLACE.streetViewUrl} target="_blank" rel="noreferrer">
              Abrir Street View
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href={PLACE.mapsUrl} target="_blank" rel="noreferrer">
              Abrir no Google Maps
            </a>
          </Button>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="mb-4 text-xl font-semibold">Avaliações</h3>
            <div className="space-y-4">
              {PLACE.reviewsList.map((r) => (
                <article key={r.author} className="rounded-xl border p-4">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">{r.author}</p>
                    <span className="text-muted-foreground text-xs">
                      {r.date}
                    </span>
                  </div>
                  <div className="mt-1 flex text-amber-500">
                    {Array.from({ length: r.rating }).map((_, i) => (
                      <Star key={i} className="size-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mt-2 text-sm">{r.text}</p>
                </article>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold">Perguntas e respostas</h3>
            <div className="space-y-4">
              {PLACE.qa.map((item) => (
                <article key={item.q} className="rounded-xl border p-4">
                  <p className="font-medium">{item.q}</p>
                  <p className="text-muted-foreground mt-2 text-sm">{item.a}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Action({
  href,
  icon: Icon,
  label,
  internal,
}: {
  href: string;
  icon: typeof Phone;
  label: string;
  internal?: boolean;
}) {
  const className =
    "flex flex-col items-center gap-1 rounded-lg border py-3 text-xs font-medium hover:bg-muted";
  if (internal) {
    return (
      <Link href={href} className={className}>
        <Icon className="text-primary size-4" />
        {label}
      </Link>
    );
  }
  return (
    <a href={href} target="_blank" rel="noreferrer" className={className}>
      <Icon className="text-primary size-4" />
      {label}
    </a>
  );
}
