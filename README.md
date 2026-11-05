# Coffee Quiz — «Какая ты кофейня?»

Итоговая работа Модуля 2 (Vibe Coding): квиз из 7 вопросов, определяющий
тип кофе-личность, с адаптивным кофейным дизайном.

## Запуск

- `npm install`
- `npm run dev` — разработка
- `npm run build` && `npm run preview` — production

## Структура

- `src/data/questions.ts` — 7 вопросов, варианты ссылаются на типы кофе
- `src/data/coffeeTypes.ts` — 5 типов результата: описание и рекомендация
- `src/components/` — WelcomeScreen, QuestionCard, ResultScreen
- `src/App.tsx` — состояния welcome / quiz / result
- `PLAN.md` — план итераций; `AGENTS.md` — правила для AI-агента
