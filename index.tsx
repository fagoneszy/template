import React from "react";

import "./styles.css";

// ---------- Dados fictícios de feedbacks ----------
const feedbacks = [
  {
    nome: "Mariana Costa",
    cargo: "Product Manager · TechNova",
    iniciais: "MC",
    cor: "bg-indigo-100 text-indigo-700",
    nota: 5,
    texto:
      "A plataforma reduziu em 40% o tempo das nossas sprints de onboarding. A curva de aprendizado praticamente não existe — o time adotou em uma semana.",
  },
  {
    nome: "Rafael Almeida",
    cargo: "Engenheiro de Software · CloudPeak",
    iniciais: "RA",
    cor: "bg-emerald-100 text-emerald-700",
    nota: 5,
    texto:
      "Integração impecável com o nosso stack. A API é bem documentada e o suporte responde em minutos, não em dias. Raridade no mercado.",
  },
  {
    nome: "Juliana Ferreira",
    cargo: "Head de Design · PixelWorks",
    iniciais: "JF",
    cor: "bg-amber-100 text-amber-700",
    nota: 4,
    texto:
      "O design system é o mais consistente que já usei. Conseguimos entregar a reformulação do nosso produto dois meses antes do prazo.",
  },
  {
    nome: "Diego Martins",
    cargo: "CTO · DataFlow Systems",
    iniciais: "DM",
    cor: "bg-rose-100 text-rose-700",
    nota: 5,
    texto:
      "Migramos 12 serviços legados sem downtime. A observabilidade que a ferramenta oferece nos deu confiança total durante todo o processo.",
  },
  {
    nome: "Camila Rocha",
    cargo: "Tech Lead · Orbital Labs",
    iniciais: "CR",
    cor: "bg-sky-100 text-sky-700",
    nota: 5,
    texto:
      "O que mais me impressiona é a estabilidade. Rodamos em produção há 14 meses e nunca tivemos um incidente causado pela plataforma.",
  },
  {
    nome: "Thiago Nunes",
    cargo: "Founder · Startuply",
    iniciais: "TN",
    cor: "bg-violet-100 text-violet-700",
    nota: 4,
    texto:
      "Como startup early-stage, precisávamos de escala sem time grande. Fechamos o ano com 30 mil usuários e apenas 3 pessoas no time de engenharia.",
  },
];

// ---------- Logos (wordmarks estilizados) ----------
const logos = [
  { nome: "Google", estilo: "font-semibold tracking-tight text-[26px]" },
  { nome: "Microsoft", estilo: "font-semibold tracking-tight text-[26px]" },
  { nome: "Amazon", estilo: "font-bold tracking-tight lowercase text-[27px]" },
  { nome: "Apple", estilo: "font-medium tracking-tight text-[26px]" },
  { nome: "Meta", estilo: "font-bold tracking-tight text-[26px]" },
  { nome: "Netflix", estilo: "font-bold tracking-tight uppercase text-[24px]" },
  { nome: "Spotify", estilo: "font-bold tracking-tight text-[26px]" },
  { nome: "Nvidia", estilo: "font-bold tracking-tight uppercase text-[25px]" },
  { nome: "Intel", estilo: "font-semibold tracking-tight lowercase text-[26px]" },
  { nome: "IBM", estilo: "font-bold tracking-[0.2em] text-[24px]" },
];

function Estrelas({ nota }: { nota: number }) {
  return (
    <div className="flex items-center gap-0.5" role="img" aria-label={`${nota} de 5 estrelas`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          aria-hidden="true"
          className={`h-4 w-4 ${i <= nota ? "fill-amber-400" : "fill-slate-200"}`}
        >
          <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.8-5.2 2.8 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

function CardFeedback({ f }: { f: (typeof feedbacks)[number] }) {
  return (
    <figure className="flex flex-col rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/60">
      <div className="mb-4 flex items-center justify-between">
        <Estrelas nota={f.nota} />
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-slate-100">
          <path d="M9.6 4C6 5.4 4 8.2 4 12v8h6.4v-8H7.2c0-2.2 1-3.6 3-4.4L9.6 4zm10 0C16 5.4 14 8.2 14 12v8h6.4v-8h-3.2c0-2.2 1-3.6 3-4.4L19.6 4z" />
        </svg>
      </div>
      <blockquote className="flex-1 text-[15px] leading-relaxed text-slate-600">
        “{f.texto}”
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${f.cor}`}
        >
          {f.iniciais}
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-800">{f.nome}</p>
          <p className="text-xs text-slate-500">{f.cargo}</p>
        </div>
      </figcaption>
    </figure>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAFAF8] font-sans text-slate-800 antialiased">

      {/* ===== Navbar ===== */}
      <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-[#FAFAF8]/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#" aria-label="Lumina - Página inicial" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 text-white">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-white">
                <path d="M12 2l2.4 7.2H22l-6 4.4 2.3 7.2-6.3-4.5L5.7 20.8 8 13.6l-6-4.4h7.6L12 2z" />
              </svg>
            </div>
            <span className="text-lg font-bold tracking-tight text-slate-900">Lumina</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <a href="#feedbacks" className="transition hover:text-indigo-600">Feedbacks</a>
            <a href="#" className="transition hover:text-indigo-600">Produto</a>
            <a href="#" className="transition hover:text-indigo-600">Preços</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#" className="hidden text-sm font-medium text-slate-600 transition hover:text-indigo-600 sm:block">
              Entrar
            </a>
            <a
              href="#feedbacks"
              className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700"
            >
              Começar grátis
            </a>
          </div>
        </div>
      </header>

      {/* ===== Hero ===== */}
      <section className="relative overflow-hidden">
        {/* blobs suaves de fundo */}
        <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-indigo-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -top-20 right-0 h-80 w-80 rounded-full bg-emerald-200/40 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-violet-200/30 blur-3xl" />

        <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 pb-20 pt-24 text-center sm:pt-32">
          <div className="fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-200/70 bg-white/80 px-4 py-1.5 text-xs font-medium text-indigo-700 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400" />
            Novo · v3.0 disponível para todos os planos
          </div>

          <h1 className="fade-up text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-6xl">
            Construa produtos que{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
              as pessoas amam
            </span>{" "}
            usar
          </h1>

          <p className="fade-up mt-6 max-w-xl text-lg leading-relaxed text-slate-500">
            A plataforma que une desempenho, design e simplicidade em um só lugar.
            Transforme ideias em experiências em tempo recorde — sem complicação.
          </p>

          <div className="fade-up mt-9 flex flex-col items-center gap-3 sm:flex-row">
            <a
              href="#feedbacks"
              className="rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:shadow-xl hover:shadow-indigo-300"
            >
              Criar conta gratuita
            </a>
            <a
              href="#feedbacks"
              className="rounded-full border border-slate-200 bg-white px-8 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
            >
              Ver demonstração
            </a>
          </div>

          <div className="fade-up mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm text-slate-500">
            <span className="flex items-center gap-2">
              <svg viewBox="0 0 20 20" aria-hidden="true" className="h-4 w-4 fill-emerald-500"><path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.8-5.2 2.8 1-5.8L1.5 7.7l5.9-.9L10 1.5z"/></svg>
              4.9/5 de satisfação
            </span>
            <span className="flex items-center gap-2">
              <svg viewBox="0 0 20 20" aria-hidden="true" className="h-4 w-4 fill-emerald-500"><path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.8-5.2 2.8 1-5.8L1.5 7.7l5.9-.9L10 1.5z"/></svg>
              +10 mil equipes ativas
            </span>
            <span className="flex items-center gap-2">
              <svg viewBox="0 0 20 20" aria-hidden="true" className="h-4 w-4 fill-emerald-500"><path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.8-5.2 2.8 1-5.8L1.5 7.7l5.9-.9L10 1.5z"/></svg>
              99,98% de uptime
            </span>
          </div>
        </div>
      </section>

      {/* ===== Faixa de logos (marquee para a esquerda) ===== */}
      <section aria-label="Empresas que confiam" className="border-y border-slate-200/70 bg-white py-10">
        <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          Empresas que confiam em nós
        </p>
        <div className="relative overflow-hidden" aria-hidden="true">
          {/* gradientes de borda para suavizar a entrada/saída */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />
          <div className="marquee-track flex w-max items-center gap-20 px-10">
            {[...logos, ...logos].map((logo, i) => (
              <span
                key={`${logo.nome}-${i}`}
                className={`whitespace-nowrap text-slate-400 transition-colors hover:text-slate-600 ${logo.estilo}`}
              >
                {logo.nome}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Feedbacks ===== */}
      <section id="feedbacks" className="mx-auto max-w-6xl px-6 py-24">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="mb-4 inline-block rounded-full bg-indigo-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-600">
            Depoimentos
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            O que nossos clientes dizem
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            Histórias de equipes que aceleraram seus resultados com a Lumina.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {feedbacks.map((f) => (
            <CardFeedback key={f.nome} f={f} />
          ))}
        </div>
      </section>

      {/* ===== CTA final ===== */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-violet-600 to-indigo-700 px-8 py-16 text-center text-white shadow-xl shadow-indigo-200">
          <div className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
          <h2 className="relative text-3xl font-extrabold tracking-tight sm:text-4xl">
            Pronto para começar?
          </h2>
          <p className="relative mx-auto mt-4 max-w-md text-indigo-100">
            Junte-se a mais de 10 mil equipes que já transformaram sua forma de
            construir produtos. Grátis por 14 dias, sem cartão.
          </p>
          <a
            href="#"
            className="relative mt-8 inline-block rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-indigo-700 shadow-lg transition hover:bg-indigo-50"
          >
            Criar conta gratuita
          </a>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="border-t border-slate-200/70 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-slate-500 sm:flex-row">
          <p>© 2026 Lumina. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="transition hover:text-indigo-600">Termos</a>
            <a href="#" className="transition hover:text-indigo-600">Privacidade</a>
            <a href="#" className="transition hover:text-indigo-600">Contato</a>
          </div>
        </div>
      </footer>
    </div>
  );
}