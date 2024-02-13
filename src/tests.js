import coverImg1 from './assets/img/test-1.jpg'

const tests = [
   {
      id: 1,
      name: 'Тест по frontend-разработке',
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
      cover: coverImg1,
      questions: [
         {
            title: "React - это...",
            answers: ["Фреймворк", "Библиотека", "Язык программирования"],
            correctAnswer: 1
         },
         {
            title: "Хук useState в React.js - это...",
            answers: ["Хук для создания состояния", "Хук для создания ref"],
            correctAnswer: 0
         },
         {
            title: "Какое правильное написание атрибута класса в JSX?",
            answers: ["class", "class_name", "className"],
            correctAnswer: 2
         }
      ]
   }
];

export default tests