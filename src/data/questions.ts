import type { CoffeeTypeId } from './coffeeTypes'

export type QuizOption = {
  text: string
  coffee: CoffeeTypeId
}

export type QuizQuestion = {
  question: string
  options: QuizOption[]
}

export const questions: QuizQuestion[] = [
  {
    question: 'Воскресное утро. Где тебя искать?',
    options: [
      { text: 'Уже на пробежке, мир не ждёт', coffee: 'espresso' },
      { text: 'За окном плед и книга', coffee: 'flat-white' },
      { text: 'Тёплая постель и ленивый плейлист', coffee: 'raf' },
      { text: 'Планирую неделю с чашкой чёрного', coffee: 'americano' },
    ],
  },
  {
    question: 'Друзья зовут встретиться. Что отвечаешь?',
    options: [
      { text: '«Давай в новое место — погуглил, там сэндвичи с матча»', coffee: 'matcha' },
      { text: '«Только если быстро, дел ещё куча»', coffee: 'espresso' },
      { text: '«Приду, но после восьми — у меня планы на тишину»', coffee: 'americano' },
      { text: '«Уже несу термос и плед, куда едем?»', coffee: 'raf' },
    ],
  },
  {
    question: 'Твой идеальный рабочий плейлист?',
    options: [
      { text: 'Lo-fi и звуки дождя', coffee: 'raf' },
      { text: 'Драм-н-бейс на полную', coffee: 'espresso' },
      { text: 'Тишина, только клавиатура', coffee: 'americano' },
      { text: 'Джаз-плейлист «для вкуса жизни»', coffee: 'flat-white' },
    ],
  },
  {
    question: 'Ты стоишь у меню кофейни. Что делаешь?',
    options: [
      { text: 'Эспрессо. Двойной. Всё.', coffee: 'espresso' },
      { text: 'Спрашиваю у бариста, что сегодня необычного', coffee: 'matcha' },
      { text: 'Долго сравниваю, выбираю самое сбалансированное', coffee: 'flat-white' },
      { text: '«Обычный кофе, пожалуйста»', coffee: 'americano' },
    ],
  },
  {
    question: 'Дедлайн через три часа. Твоя реакция?',
    options: [
      { text: 'План Б уже готов ещё вчера', coffee: 'americano' },
      { text: 'Включаю режим ракеты, успею в два счёта', coffee: 'espresso' },
      { text: 'Завариваю чай, дышу, делаю по шагам', coffee: 'matcha' },
      { text: 'Обустраиваю рабочее место красиво — так продуктивнее', coffee: 'flat-white' },
    ],
  },
  {
    question: 'Идеальные выходные — это…',
    options: [
      { text: 'Поездка в место, где я ещё не был', coffee: 'matcha' },
      { text: 'Дом, плед, сериал и никого лишнего', coffee: 'raf' },
      { text: 'Насыщенный список дел и всё выполнено', coffee: 'espresso' },
      { text: 'Выставка, бруль-шарль, красивая кофейня', coffee: 'flat-white' },
    ],
  },
  {
    question: 'Жизнь удалась, и ты угощаешь себя кофе. Что заказываешь?',
    options: [
      { text: 'Самый крепкий и гордый', coffee: 'espresso' },
      { text: 'Раф, как награду за всё хорошее', coffee: 'raf' },
      { text: 'Что-то новое из seasonal-меню', coffee: 'matcha' },
      { text: 'Американо — хороший вкус не меняют', coffee: 'americano' },
    ],
  },
]
