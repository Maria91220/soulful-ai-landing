import { createFileRoute } from "@tanstack/react-router";

const TELEGRAM_URL = "https://t.me/vibecoding";
const EMAIL_ADDRESS = "hello@vibecode.ai";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AI-продукты через вайбкодинг за сутки" },
      {
        name: "description",
        content:
          "Создам AI-продукт через вайбкодинг за сутки. 30 проектов для онлайн-школ, магазинов и маникюрных салонов. Оставьте заявку сегодня.",
      },
      { property: "og:title", content: "Создам AI-продукты через вайбкодинг за сутки!" },
      {
        property: "og:description",
        content:
          "30 проектов для онлайн-школ, магазинов и салонов. Запуск за сутки — напишите в Telegram или на Email.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* Sunlit glow background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="aurora-blob absolute -top-40 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 animate-aurora-1"
          style={{
            background:
              "radial-gradient(circle, oklch(0.78 0.13 200 / 0.55), transparent 70%)",
          }}
        />
        <div
          className="aurora-blob absolute top-1/3 -right-24 h-[34rem] w-[34rem] animate-aurora-2"
          style={{
            background:
              "radial-gradient(circle, oklch(0.66 0.16 235 / 0.42), transparent 70%)",
          }}
        />
        <div
          className="aurora-blob absolute bottom-0 -left-24 h-[30rem] w-[30rem] animate-aurora-1"
          style={{
            background:
              "radial-gradient(circle, oklch(0.72 0.12 180 / 0.4), transparent 70%)",
          }}
        />
      </div>

      {/* Grid overlay */}
      <div className="hero-grid absolute inset-0 -z-10" />

      {/* Top navigation */}
      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-5 py-6 sm:px-8">
        <a href="/" className="flex items-center gap-2">
          <span className="btn-gradient grid h-9 w-9 place-items-center rounded-xl text-sm font-bold">
            {"</>"}
          </span>
          <span className="font-display text-base font-semibold tracking-tight text-foreground">
            vibecode<span className="text-accent-sky">.</span>ai
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
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-glass rounded-lg px-4 py-2 text-sm font-medium"
        >
          Связаться
        </a>
      </header>

      {/* Hero content */}
      <section
        id="contact"
        className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-5 pb-24 pt-12 text-center sm:px-8 sm:pt-20"
      >
        {/* Availability badge */}
        <div
          className="animate-fade-up mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-sm"
          style={{ animationDelay: "0ms" }}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-accent-sky" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-sky" />
          </span>
          Беру проекты на этой неделе
        </div>

        {/* Headline */}
        <h1
          className="animate-fade-up font-display text-[2.1rem] font-bold leading-[1.08] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
          style={{ animationDelay: "80ms" }}
        >
          Создам AI-продукты через{" "}
          <span className="gradient-text whitespace-nowrap">вайбкодинг</span> за
          сутки!
        </h1>

        {/* Subheadline */}
        <p
          className="animate-fade-up mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          style={{ animationDelay: "160ms" }}
        >
          Опыт на рынке более 3 месяцев. Создано 30 проектов для онлайн-школ,
          магазинов, маникюрных салонов. Вы получаете работающий продукт — сайт,
          бота или AI-сервис — уже на следующий день, без долгих согласований и
          лишних затрат.{" "}
          <span className="font-semibold text-foreground">
            Оставь заявку уже сегодня.
          </span>
        </p>

        {/* CTA buttons */}
        <div
          className="animate-fade-up mt-10 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row sm:gap-4"
          style={{ animationDelay: "240ms" }}
        >
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gradient inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl px-7 text-sm font-semibold sm:w-auto"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-4 w-4 fill-current"
            >
              <path d="M21.9 4.3 18.9 19c-.2 1-.8 1.3-1.7.8l-4.6-3.4-2.2 2.1c-.3.3-.5.5-1 .5l.4-4.8 8.7-7.9c.4-.3-.1-.5-.6-.2L6.2 12.9l-4.6-1.4c-1-.3-1-1 .2-1.5l18-6.9c.8-.3 1.5.2 1.1 1.2z" />
            </svg>
            Написать в Telegram
          </a>
          <a
            href={`mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent("Заявка на AI-продукт")}`}
            className="btn-glass inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl px-7 text-sm font-semibold sm:w-auto"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-4 w-4 fill-current"
            >
              <path d="M2 5.5A1.5 1.5 0 0 1 3.5 4h17A1.5 1.5 0 0 1 22 5.5v.3l-10 5.8L2 5.8v-.3zm0 2.6 9.5 5.5c.3.2.7.2 1 0L22 8.1V18.5a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 2 18.5V8.1z" />
            </svg>
            Написать на Email
          </a>
        </div>

        {/* Stats strip */}
        <div
          className="animate-fade-up mt-16 grid w-full max-w-2xl grid-cols-3 divide-x divide-border"
          style={{ animationDelay: "320ms" }}
        >
          {[
            { value: "30", label: "проектов" },
            { value: "24 часа", label: "до запуска" },
            { value: "3+ мес", label: "на рынке" },
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

      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-background to-transparent" />
    </main>
  );
}
