import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Вайбкодинг — создание AI-продуктов" },
      {
        name: "description",
        content:
          "Создаю AI-продукты через вайбкодинг: от идеи до запуска за дни, а не месяцы.",
      },
      { property: "og:title", content: "Создаю AI-продукты через вайбкодинг" },
      {
        property: "og:description",
        content:
          "Превращаю идеи в работающие AI-продукты за дни. Прототипы, MVP и продакшн на базе AI.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* Aurora glow background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="aurora-blob absolute -top-32 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 animate-aurora-1"
          style={{
            background:
              "radial-gradient(circle, oklch(0.72 0.17 230 / 0.55), transparent 70%)",
          }}
        />
        <div
          className="aurora-blob absolute top-1/3 -right-24 h-[34rem] w-[34rem] animate-aurora-2"
          style={{
            background:
              "radial-gradient(circle, oklch(0.68 0.21 285 / 0.5), transparent 70%)",
          }}
        />
        <div
          className="aurora-blob absolute bottom-0 -left-24 h-[30rem] w-[30rem] animate-aurora-1"
          style={{
            background:
              "radial-gradient(circle, oklch(0.82 0.15 195 / 0.45), transparent 70%)",
          }}
        />
      </div>

      {/* Grid overlay */}
      <div className="hero-grid absolute inset-0 -z-10" />

      {/* Top navigation */}
      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-5 py-6 sm:px-8">
        <a href="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl btn-gradient text-lg font-bold">
            {"</>"}
          </span>
          <span className="font-display text-base font-semibold tracking-tight text-foreground">
            vibecode<span className="text-accent-cyan">.</span>ai
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground sm:flex">
          <a href="#projects" className="transition-colors hover:text-foreground">
            Проекты
          </a>
          <a href="#about" className="transition-colors hover:text-foreground">
            Обо мне
          </a>
          <a href="#contact" className="transition-colors hover:text-foreground">
            Контакты
          </a>
        </nav>
        <a
          href="#contact"
          className="btn-glass rounded-lg px-4 py-2 text-sm font-medium"
        >
          Связаться
        </a>
      </header>

      {/* Hero content */}
      <section className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-5 pb-24 pt-16 text-center sm:px-8 sm:pt-24">
        {/* Availability badge */}
        <div
          className="animate-fade-up mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-sm"
          style={{ animationDelay: "0ms" }}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-accent-cyan" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-cyan" />
          </span>
          Открыт для новых AI-проектов
        </div>

        {/* Headline */}
        <h1
          className="animate-fade-up font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
          style={{ animationDelay: "80ms" }}
        >
          Создаю AI-продукты
          <br className="hidden sm:block" /> через{" "}
          <span className="gradient-text whitespace-nowrap">вайбкодинг</span>
        </h1>

        {/* Subheadline */}
        <p
          className="animate-fade-up mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          style={{ animationDelay: "160ms" }}
        >
          Превращаю идеи в работающие продукты за дни, а не месяцы. От прототипа
          до продакшна — объединяю AI-инструменты, быструю итерацию и инженерный
          подход, чтобы вы получали результат, который реально запускается.
        </p>

        {/* CTA buttons */}
        <div
          className="animate-fade-up mt-10 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row sm:gap-4"
          style={{ animationDelay: "240ms" }}
        >
          <a
            href="#projects"
            className="btn-gradient inline-flex h-12 w-full items-center justify-center rounded-xl px-7 text-sm font-semibold sm:w-auto"
          >
            Посмотреть проекты
          </a>
          <a
            href="#contact"
            className="btn-glass inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl px-7 text-sm font-semibold sm:w-auto"
          >
            Связаться
          </a>
        </div>

        {/* Stats strip */}
        <div
          className="animate-fade-up mt-16 grid w-full max-w-2xl grid-cols-3 divide-x divide-border"
          style={{ animationDelay: "320ms" }}
        >
          {[
            { value: "20+", label: "AI-продуктов" },
            { value: "5 дней", label: "до MVP" },
            { value: "100%", label: "до запуска" },
          ].map((stat) => (
            <div key={stat.label} className="px-2 sm:px-6">
              <div className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 text-xs text-muted-foreground sm:text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom fade into canvas */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-background to-transparent" />
    </main>
  );
}
