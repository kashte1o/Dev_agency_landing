# Dev Agency Landing — Контекстный документ для синхронизации

**Пометка:** Это **текущая (актуальная) версия** сайта по состоянию на 2026-05-31.
Коммит: `fd4443c` — "Fill in real metric values (5 weeks, 200%, 7 days, 98%)".
Ветка: `claude/wonderful-sagan-0s6S5` (синхронизирована с `main`).

---

## 1. Ссылка

**Боевой деплой (Cloudflare Workers):**
https://dev-agency-landing.aleksandrkashtelo.workers.dev/

Auto-deploy: Cloudflare Workers Builds подключён к GitHub-репозиторию
`kashte1o/dev_agency_landing`. Push в `main` → автоматический деплой.

Репозиторий: https://github.com/kashte1o/dev_agency_landing

---

## 2. Что это за сайт

Лендинг для студии разработки кастомного ПО (Dev Agency).
Студия делает софт под заказ для малого и среднего бизнеса (SMB),
не продаёт шаблоны/подписки/SaaS — каждый проект собирается под
конкретный бизнес-процесс клиента.

**Главное сообщение:** "Software that makes your business easier to run."
(в текущей версии H1 переформулирован — см. ниже).

**Целевая аудитория:** нетехнические владельцы и операционные руководители
SMB, 27–60 лет. Они понимают свой бизнес, не понимают софт, и скептичны
к агентствам, потому что агентства говорят про технологии, а не про
результат.

**Что сайт должен делать:**
1. Квалифицировать посетителя (правильный клиент узнаёт себя сразу).
2. Строить доверие без фейковых пруфов (нет отзывов, нет логотипов,
   нет придуманных метрик — в текущей версии метрики реальные плейсхолдеры).
3. Получить заявку через форму.

**Тон:** тёплый, но прямой. Короткие предложения. Никакого жаргона
("full-stack", "agile sprints" — запрещено). Уверенный, без пафоса.

---

## 3. Пересказ сайта секция за секцией

(Порядок секций соответствует текущему `app/page.tsx` — это и есть
актуальный нарратив страницы.)

### Hero (HeroSection)
- **H1:** "Custom software built to improve business performance"
- **Подзаголовок (2 абзаца):**
  - "We build custom software for the systems your team uses internally
    and the digital products your customers interact with."
  - "We help companies replace manual workflows, reduce operational
    friction, and improve business performance within 6–12 weeks of
    deployment."
- **Primary CTA:** "Let's scope your project" → `/#start-project`
- **Secondary CTA:** "See client results" → `/#what-we-build` (ghost)
- **Фон:** тёмный (`--bg-dark` #0B1020) с тонким радиальным градиентом
  в акцентном синем.
- **Интерактив:** логотип студии (top-left в NavBar) при движении курсора
  по hero "отрывается" и следует за курсором как мягкое синее glow-пятно;
  при простое 5–7 сек возвращается в навбар. Мобайл — статика.
- **Status dot:** маленькая пульсирующая зелёная точка + текст
  "Currently taking new projects" (управляется `isAvailable` в siteCopy).

### LogoStrip
- Лента/полоса под hero (контекстно — раздел доверия/клиентов или
  технологический стек). В текущей версии — компонент-полоса,
  отделяющая hero от следующего блока.

### WhyDifferent (WhyDifferentSection)
- **Заголовок:** "What makes us different"
- Три карточки (тёмная секция, тексты крупные — `text-2xl/3xl`):
  1. **Product-minded** — "Our senior teams focus on your business
     outcomes. We think about the 'why' not just the 'how,' and that
     ultimately leads to a better product."
  2. **1 Project — 1 Team** — "Once we assign a team to you, their focus
     is only on your project. That means faster development and no
     context switching."
  3. **Assembled for you** — "We draw from a broad network of specialists
     and technologies, selecting the exact combination your project
     requires — not a fixed template, but a setup built around your
     needs."

### Metrics (MetricsSection)
- Четыре метрики в одну строку на desktop / 2×2 на мобайле.
  Значения — крупным акцентным синим, подпись — тонким серым.
  - **5 weeks** — Average time from brief to launch
  - **200%** — Average return on development investment within the first year
  - **7 days** — Average team onboarding time to a new system
  - **98%** — Projects delivered on time and on budget
- Это реальные плейсхолдер-значения (по последнему коммиту), не "lorem".

### Proof (ProofSection)
- Секция социального доказательства / витрины примеров работ.
  В исходной спеке этот блок был помечен как "удалить" (placeholder,
  вредящий доверию), однако в текущем `page.tsx` он рендерится.
  Содержание — стандартный proof-блок (заглушки до появления реальных
  кейсов).

### Pillars — "What we build" (PillarsSection)
- **Заголовок:** "What we build."
- Три равные колонки — три типа продуктов:
  1. **⊞ Internal tools & dashboards** → `/internal-tools`
     - "One place for your team to run the business."
     - "Job tracking, approval workflows, operational dashboards —
       built around how your team actually works, not around a generic
       SaaS template."
  2. **⚡ Workflow automation** → `/workflow-automation`
     - "Cut the manual work out of your operations."
     - "Connect your tools, automate repetitive steps, and free your
       team from copy-paste tasks, status updates, and manual handoffs."
  3. **◎ Client portals & web apps** → `/client-portals`
     - "A better way for clients to interact with you."
     - "Self-serve portals, order systems, and customer-facing apps that
       reduce support load and give clients the visibility they keep
       asking for."

### Process (ProcessSection)
- 4 шага с большими номерами в Geist Mono на фоне:
  1. **Understand** — We learn your workflow before writing a line of code.
  2. **Define** — We scope exactly what to build and why.
  3. **Build** — We build it. Transparently, with you in the loop.
  4. **Ship** — We deliver working software, then stay available.
- Анимация: на скролле рисуется SVG-линия через 4 узла; каждый узел
  "загорается" по мере прихода линии. На последнем шаге (Ship) —
  одноразовый завершающий pulse.

### CtaTransition
- Переходный CTA-блок (промежуточный призыв к действию между Process
  и FAQ) — крупный текст + кнопка, ведущая в форму заявки.

### FAQ (FAQSection)
- Аккордеон с типичными вопросами клиентов (контент в `content/faq.ts`).
  Открытие через `<details>/<summary>` паттерн, доступно с клавиатуры.

### Contact (ContactSection) — `#start-project`
- **Заголовок:** "Ready to scope your project?"
- **Подзаголовок:** "Tell us a bit about what you're building. We'll
  review and get back with a clear plan and next steps."
- **Трастовые сигналы (слева):**
  - ✓ No commitment — "This is just the first step."
  - ✓ Clear reply — "We'll respond with questions, ideas, and next steps."
  - ✓ Human response — "You'll hear from a real person, not an automated reply."
- **Форма (справа):** имя, email, тип бизнеса (select), описание проблемы
  (textarea), пробовали ли решить (radio), бюджет (опциональный select).
  Бэкенда нет — UI-only с TODO-комментом.

### Footer
- Логотип, ссылки на сервисные страницы, копирайт. Тёмная секция.

---

## 4. Визуальная система (кратко)

**Цвета:**
- `--bg-base` #F7F8FA — основной светлый фон
- `--bg-surface` #FFFFFF — карточки, инпуты
- `--bg-subtle` #F3F1EC — тёплый кремовый, для секционных разрывов
- `--bg-dark` #0B1020 — hero, footer, тёмные секции
- `--text-primary` #111827 / `--text-secondary` #6B7280
- `--accent` #3B82F6 — основной синий (CTA, ссылки, фокус)
- `--accent-green` #A3E635 — только status dot и бейджи "available"

**Типографика:** Geist Sans (body) + Geist Mono (номера процесса,
моноширинные акценты).

**Радиусы:** карточки 12px, кнопки 8px, инпуты 6px, бейджи 4px.

**Тени:** минимальные. Без драматичных box-shadow.

**Ритм:** чередование светлых и тёплых секций, тёмные "буквари"
(hero, footer). Максимум 2 тёмные секции на странице.

**Анимации:** каждая объясняет смысл, а не украшает. Никаких
WebGL/canvas 3D — только CSS + Framer Motion. Всё уважает
`prefers-reduced-motion`.

---

## 5. Технический контекст

- **Стек:** Next.js 16.2.6 (App Router) · React 19 · TypeScript ·
  Tailwind CSS v4 · Framer Motion · animejs · Lucide React.
- **Хостинг:** Cloudflare Workers через `@opennextjs/cloudflare`.
  Конфиг в `wrangler.jsonc`, worker называется `dev-agency-landing`.
- **Деплой:** Cloudflare Workers Builds, автодеплой с `main`.
- **Также упоминается:** Vercel preview
  (`https://dev-agency-landing.vercel.app`), но боевая ссылка —
  Cloudflare Workers (см. секцию 1).
- **Контент-система:** ВСЕ тексты вынесены в `/content/*.ts`
  (`home.ts`, `faq.ts`, `process.ts`, `navigation.ts`, `siteCopy.ts`,
  `forms.ts`). Компоненты не хардкодят строки — принимают данные
  пропсами. Это позволяет редактировать копирайт без правки компонентов.
- **Структура файлов:**
  ```
  app/          — layout.tsx, page.tsx (App Router)
  sections/     — секции главной (Hero, Pillars, Process и т.д.)
  components/   — ui/, layout/, forms/
  content/      — все тексты (.ts)
  lib/          — утилиты, SEO helpers
  public/       — статика
  ```

---

## 6. Важные правила и ограничения

**Что НЕ показываем:**
- Фото команды, стоки "люди с ноутбуками".
- Абстрактные tech-иллюстрации (схемы сетей, чипы).
- Hero-картинку, background-видео.
- Логотипы клиентов (пока нет реального разрешения).
- Отзывы/testimonials (пока нет реальных).
- Раздел цен.

**Что показываем:**
- Процесс — линейно, понятно.
- Проблемы — в языке клиента, конкретно.
- Результат — в бизнес-терминах, не в технических.
- Форма — без трения.

**Out of scope для v1:** блог, страница цен, "о команде" с фото,
портал клиента/логин, платежи, live chat, аналитика глубже базовой,
backend формы, реальные кейсы (роуты есть, контент noindex-заглушки),
i18n.

**Pending (нерешённые вопросы):**
- Окончательное название студии (плейсхолдер `STUDIO_NAME` в siteCopy).
- Финальная копирайт-формулировка credibility-секции.
- Финальный домен (нужен для `NEXT_PUBLIC_SITE_URL`).
- Backend формы — не запланирован в v1.

---

## 7. История последних коммитов (что сделано недавно)

```
fd4443c  Fill in real metric values (5 weeks, 200%, 7 days, 98%)
b4d60e4  Increase WhyDifferent card title size (text-2xl/3xl)
36b2e35  Fix page order and scale WhyDifferent card text to hero body size
4c46ed3  Remove ProofSection (placeholder content harmful to trust)
d90237d  Add MetricsSection, rework Pillars, update page order
```

⚠ Примечание: коммит `4c46ed3` помечен как удаление ProofSection,
однако в текущем `app/page.tsx` секция `<ProofSection />` присутствует —
возможно, она была возвращена позже или удаление было откачено.
Проверить при следующей итерации.

---

## 8. Что ещё полезно знать

- Полная "проектная библия" — в `PROJECT.md` (большой документ:
  позиционирование, тон, архитектура, SEO, компоненты, моушн-система).
- Инструкции для AI-агентов — в `AGENTS.md` / `CLAUDE.md`:
  "Это не та Next.js, что в твоих training data — читай документы перед
  написанием кода".
- Студия работает с 8 типами сервисов (отдельные SEO-страницы):
  Internal tools, Workflow automation, Client portals, Customer-facing
  software, Booking/request systems, Dashboards, AI workflows,
  Product rescue.
