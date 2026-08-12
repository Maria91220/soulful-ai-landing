import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";


const TELEGRAM_URL = "https://t.me/vibecoding";
const EMAIL_ADDRESS = "hello@vibecode.ai";

const projects = [
  {
    name: "ОнлайнШкола",
    description:
      "AI-платформа для персонализированного обучения. Адаптирует контент, темп и сложность под каждого ученика.",
    tags: ["React", "OpenAI", "Node.js", "Supabase"],
    icon: "school",
  },
  {
    name: "Маникюрный салон",
    description:
      "AI-сервис записи на маникюр. Автоматически подбирает мастера, услугу и удобное время для клиента.",
    tags: ["Telegram Bot", "AI-ассистент", "Booking API"],
    icon: "nail",
  },
  {
    name: "Моя Игрушка",
    description:
      "Лендинг для продукта. Яркая презентация товара с формой заявки, аналитикой и быстрой загрузкой.",
    tags: ["Landing", "Next.js", "Tailwind", "Analytics"],
    icon: "toy",
  },
];

const steps = [
  {
    number: "01",
    title: "Собираю требования",
    description: "Обсуждаем цели, аудиторию и пожелания от заказчика.",
  },
  {
    number: "02",
    title: "Готовлю проект",
    description: "Создаю первую версию продукта с фокусом на скорость и качество.",
  },
  {
    number: "03",
    title: "Обсуждаем и дорабатываем",
    description: "Собираем обратную связь, исправляем замечания и внедряем предложения.",
  },
  {
    number: "04",
    title: "Повторная отправка",
    description: "Предоставляю финальную версию проекта, готовую к запуску.",
  },
];

const projectIcons: Record<string, ReactNode> = {
  school: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-12 w-12 text-accent-sky"
      aria-hidden="true"
    >
      <rect width="20" height="14" x="2" y="3" rx="2" />
      <line x1="8" x2="16" y1="21" y2="21" />
      <line x1="12" x2="12" y1="17" y2="21" />
    </svg>
  ),
  nail: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-12 w-12 text-accent-sky"
      aria-hidden="true"
    >
      <path d="M12 3v18" />
      <path d="M3 12h18" />
      <path d="m5 5 14 14" />
      <path d="m19 5-14 14" />
    </svg>
  ),
  toy: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-12 w-12 text-accent-sky"
      aria-hidden="true"
    >
      <path d="m21 8-9 4-9-4" />
      <path d="M3 8v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8" />
      <path d="M12 12v8" />
    </svg>
  ),
};

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

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className || "h-4 w-4 fill-current"}
    >
      <path d="M21.9 4.3 18.9 19c-.2 1-.8 1.3-1.7.8l-4.6-3.4-2.2 2.1c-.3.3-.5.5-1 .5l.4-4.8 8.7-7.9c.4-.3-.1-.5-.6-.2L6.2 12.9l-4.6-1.4c-1-.3-1-1 .2-1.5l18-6.9c.8-.3 1.5.2 1.1 1.2z" />
    </svg>
  );
}

function EmailIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className || "h-4 w-4 fill-current"}
    >
      <path d="M2 5.5A1.5 1.5 0 0 1 3.5 4h17A1.5 1.5 0 0 1 22 5.5v.3l-10 5.8L2 5.8v-.3zm0 2.6 9.5 5.5c.3.2.7.2 1 0L22 8.1V18.5a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 2 18.5V8.1z" />
    </svg>
  );
}

function ContactButtons({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <div
      className={`flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row sm:gap-4 ${className}`}
      style={style}
    >
      <a
        href={TELEGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-gradient inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl px-7 text-sm font-semibold sm:w-auto"
      >
        <TelegramIcon />
        Написать в Telegram
      </a>
      <a
        href={`mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent("Заявка на AI-продукт")}`}
        className="btn-glass inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl px-7 text-sm font-semibold sm:w-auto"
      >
        <EmailIcon />
        Написать на Email
      </a>
    </div>
  );
}


function SectionHeader({ eyebrow, title, description }: { eyebrow?: string; title: string; description: string }) {
  return (
    <div className="mb-8 text-center sm:mb-10">
      {eyebrow && (
        <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-accent-sky">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
        {description}
      </p>
    </div>
  );
}

function Index() {
  return (
    <main className="relative overflow-hidden bg-background">
      {/* Hero wrapper */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Sunlit glow background */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div
            className="aurora-blob absolute -top-40 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 animate-aurora-1"
            style={{
              background:
                "radial-gradient(circle, oklch(0.76 0.19 50 / 0.4), transparent 70%)",
            }}
          />
          <div
            className="aurora-blob absolute top-1/3 -right-24 h-[34rem] w-[34rem] animate-aurora-2"
            style={{
              background:
                "radial-gradient(circle, oklch(0.66 0.19 295 / 0.4), transparent 70%)",
            }}
          />
          <div
            className="aurora-blob absolute bottom-0 -left-24 h-[30rem] w-[30rem] animate-aurora-1"
            style={{
              background:
                "radial-gradient(circle, oklch(0.8 0.14 205 / 0.32), transparent 70%)",
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
              Как я работаю
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
            <span className="font-semibold text-foreground">Оставь заявку уже сегодня.</span>
          </p>

          {/* CTA buttons */}
          <ContactButtons
            className="animate-fade-up mt-10"
            style={{ animationDelay: "240ms" }}
          />


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
      </section>

      {/* Projects */}
      <section id="projects" className="relative z-10 mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionHeader
          eyebrow="Портфолио"
          title="Реализованные проекты"
          description="Примеры AI-решений, которые уже работают у клиентов и помогают бизнесу расти."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.name}
              className="card-glass flex flex-col overflow-hidden"
            >
              {/* Preview placeholder */}
              <div className="relative aspect-video bg-gradient-to-br from-accent-teal/15 via-accent-cyan/15 to-accent-sky/15 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0.8_0.14_205/0.08)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.8_0.14_205/0.08)_1px,transparent_1px)] bg-[size:24px_24px]" />
                <div className="relative rounded-2xl bg-background/60 p-4 shadow-sm backdrop-blur-sm">
                  {projectIcons[project.icon]}
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {project.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* How I work */}
      <section id="about" className="relative z-10 mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionHeader
          eyebrow="Процесс"
          title="Как я работаю"
          description="Прозрачный путь от идеи до запуска — всего за несколько шагов."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="card-glass p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent-teal to-accent-sky text-lg font-bold text-primary-foreground shadow-md">
                {step.number}
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 mx-auto max-w-4xl px-5 py-24 text-center sm:px-8 sm:py-32">
        <div className="card-glass mx-auto max-w-3xl px-6 py-12 sm:px-12 sm:py-16">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Оставь заявку уже сегодня
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
            Расскажите о задаче — и я свяжусь с вами в ближайшее время, чтобы обсудить детали.
          </p>
          <div className="mt-10 flex justify-center">
            <ContactButtons />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border py-8">
        <div className="mx-auto max-w-6xl px-5 text-center sm:px-8">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} vibecode.ai — AI-продукты через вайбкодинг.
          </p>
        </div>
      </footer>
    </main>
  );
}
