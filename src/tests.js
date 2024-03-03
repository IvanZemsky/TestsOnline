import coverImg1 from "./assets/img/test-1.jpg";
import coverImg2 from "./assets/img/test-2.jpg";
import coverImg3 from "./assets/img/test-3.jpg";
import coverImg4 from "./assets/img/test-4.jpg";
import coverImg5 from "./assets/img/test-2.jpg";
import coverImg6 from "./assets/img/test-1.jpg";
import coverImg7 from "./assets/img/test-7.jpg";

const tests = [
   {
      id: 1,
      name: "Frontend-разработка",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
      category: "Программирование",
      cover: coverImg1,
      // https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
      questions: [
         {
            title: "Что такое замыкания в JavaScript?",
            answers: [
               "Возможность обратиться к переменной до её объявления",
               "Механизм работы цикла событий",
               "Способность функции запоминать окружение в котором она объявлена",
            ],
            correctAnswer: 2,
         },
         {
            title: "React - это...",
            answers: ["Фреймворк", "Библиотека", "Язык программирования"],
            correctAnswer: 1,
         },
         {
            title: "Хук useState в React.js - это...",
            answers: ["Хук для создания состояния", "Хук для создания ref"],
            correctAnswer: 0,
         },
         {
            title: "Какое правильное написание атрибута класса в JSX?",
            answers: ["class", "class_name", "className"],
            correctAnswer: 2,
         },
      ],
   },
   {
      id: 2,
      name: "Математика",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
      category: "Математика",
      cover: coverImg2,
      // https://images.unsplash.com/photo-1635372722656-389f87a941b7?q=80&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
      questions: [
         {
            title: "Какой объем у прямоугольного параллелепипеда с длиной 5 см, шириной 3 см и высотой 4 см?",
            answers: ["60 см³", "40 см³", "30 см³"],
            correctAnswer: 0,
         },
         {
            title: "Как называется операция умножения двух чисел?",
            answers: ["Сложение", "Деление", "Умножение"],
            correctAnswer: 2,
         },
         {
            title: "Решите уравнение: 2x + 5 = 15",
            answers: ["x = 5", "x = 7", "x = 8"],
            correctAnswer: 0,
         },
         {
            title: "Что такое десятичная система счисления?",
            answers: [
               "Система с основанием 8",
               "Система с основанием 10",
               "Система с основанием 16",
            ],
            correctAnswer: 1,
         },
         {
            title: "Как называется теорема, утверждающая, что квадрат гипотенузы прямоугольного треугольника равен сумме квадратов катетов?",
            answers: ["Теорема Пифагора", "Теорема Ферма", "Теорема Эйлера"],
            correctAnswer: 0,
         },
         {
            title: "Сколько градусов в одном круге?",
            answers: ["180°", "360°", "90°"],
            correctAnswer: 1,
         },
         {
            title: "Как называется множество всех действительных чисел?",
            answers: ["Целые числа", "Натуральные числа", "Вещественные числа"],
            correctAnswer: 2,
         },
         {
            title: "Сколько будет 3 в кубе?",
            answers: ["6", "9", "27"],
            correctAnswer: 2,
         },
         {
            title: "Как называется число, которое делится на себя и на единицу?",
            answers: ["Простое число", "Составное число", "Нулевое число"],
            correctAnswer: 0,
         },
         {
            title: "Решите систему уравнений: \n2x + y = 8\nx - y = 2",
            answers: ["x = 3, y = 2", "x = 4, y = 1", "x = 2, y = 3"],
            correctAnswer: 1,
         },
      ],
   },
   {
      id: 3,
      name: "Backend-разработка",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
      category: "Программирование",
      cover: coverImg3,
      // https://images.unsplash.com/photo-1561233835-f937539b95b9?q=80&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
      questions: [
         {
            title: "Что такое RESTful API?",
            answers: [
               "Программная библиотека для разработки интерфейсов",
               "Архитектурный стиль для построения веб-сервисов",
               "Язык программирования для бэкенда",
            ],
            correctAnswer: 1,
         },
         {
            title: "Что такое SQL-инъекция?",
            answers: [
               "Способ внедрения кода на языке SQL в запрос",
               "Метод аутентификации в базах данных",
               "Тип данных в SQL",
            ],
            correctAnswer: 0,
         },
         {
            title: "Какой HTTP-метод используется для отправки данных на сервер?",
            answers: ["GET", "POST", "PUT"],
            correctAnswer: 1,
         },
         {
            title: "Что такое NoSQL база данных?",
            answers: [
               "Реляционная база данных",
               "База данных без языка запросов",
               "База данных без использования SQL",
            ],
            correctAnswer: 2,
         },
         {
            title: "Что такое микросервисы в архитектуре приложений?",
            answers: [
               "Единый монолитный сервис",
               "Независимые сервисы, взаимодействующие по сети",
               "Сервисы, работающие только внутри браузера",
            ],
            correctAnswer: 1,
         },
         {
            title: "Что такое ORM в контексте бэкенд-разработки?",
            answers: [
               "Объектно-реляционное отображение",
               "Операционная система для бэкенда",
               "Методология разработки",
            ],
            correctAnswer: 0,
         },
         {
            title: "Что такое JWT?",
            answers: [
               "JavaScript Web Token",
               "JSON Web Token",
               "Java Web Token",
            ],
            correctAnswer: 1,
         },
         {
            title: "Что такое Docker?",
            answers: [
               "Облачный сервис",
               "Платформа для контейнеризации приложений",
               "Протокол обмена данными",
            ],
            correctAnswer: 1,
         },
         {
            title: "Как называется процесс разделения большого приложения на более мелкие, управляемые отдельно?",
            answers: ["Декомпозиция", "Композиция", "Абстракция"],
            correctAnswer: 0,
         },
         {
            title: "Что такое WebSockets?",
            answers: [
               "Технология для создания веб-страниц",
               "Протокол для обмена сообщениями между браузером и сервером",
               "Библиотека для создания анимаций",
            ],
            correctAnswer: 1,
         },
      ],
   },
   {
      id: 4,
      name: "Объектно-ориентированное программирование (ООП)",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Quisque et orci vel elit iaculis fermentum vel vel nulla. Vivamus ut nisl nec lectus.",
      category: "Программирование",
      cover: coverImg4,
      // 
      questions: [
         {
            title: "Что такое класс в программировании?",
            answers: [
               "Экземпляр объекта",
               "Шаблон для создания объектов",
               "Метод в объекте",
            ],
            correctAnswer: 1,
         },
         {
            title: "Что такое наследование в ООП?",
            answers: [
               "Процесс создания нового класса",
               "Передача свойств и методов одним классом другому",
               "Создание экземпляра класса",
            ],
            correctAnswer: 1,
         },
         {
            title: "Что такое инкапсуляция?",
            answers: [
               "Способность объекта объединять данные и методы, работающие с этими данными",
               "Способность объекта передавать данные другому объекту",
               "Способность объекта взаимодействовать с пользователем",
            ],
            correctAnswer: 0,
         },
         {
            title: "Что такое полиморфизм?",
            answers: [
               "Способность объекта принимать разные формы",
               "Способность объекта обращаться к данным другого объекта",
               "Способность объекта взаимодействовать с разными пользователями",
            ],
            correctAnswer: 0,
         },
         {
            title: "Что такое абстракция в ООП?",
            answers: [
               "Способность объекта предоставлять интерфейс для взаимодействия с ним",
               "Способность объекта скрывать детали реализации",
               "Способность объекта предоставлять доступ к своим данным",
            ],
            correctAnswer: 1,
         },
         {
            title: "Что такое интерфейс в ООП?",
            answers: [
               "Способность объекта предоставлять интерфейс для взаимодействия с ним",
               "Способность объекта обращаться к данным другого объекта",
               "Способность объекта взаимодействовать с пользователем",
            ],
            correctAnswer: 0,
         },
         {
            title: "Что такое конструктор в классе?",
            answers: [
               "Метод, который уничтожает объект",
               "Метод, который создает объект",
               "Метод, который изменяет объект",
            ],
            correctAnswer: 1,
         },
         {
            title: "Что такое абстрактный класс?",
            answers: [
               "Класс, который не содержит абстракций",
               "Класс, который нельзя использовать для создания объекта",
               "Класс, который содержит хотя бы один абстрактный метод",
            ],
            correctAnswer: 2,
         },
         {
            title: "Что такое статический метод в классе?",
            answers: [
               "Метод, который не требует создания объекта для вызова",
               "Метод, который изменяет объект",
               "Метод, который принимает статические данные",
            ],
            correctAnswer: 0,
         },
         {
            title: "Что такое перегрузка методов в ООП?",
            answers: [
               "Возможность создавать методы с одинаковыми именами, но разными параметрами",
               "Возможность изменять методы после их создания",
               "Возможность создавать методы с разными именами и параметрами",
            ],
            correctAnswer: 0,
         },
      ],
   },
   {
      id: 5,
      name: "Основы программирования",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod nunc et justo ultricies, id ultricies velit scelerisque. Aliquam id varius lacus. Ut commodo sem ac eros laoreet, ut ultrices purus scelerisque.",
      category: "Программирование",
      cover: coverImg5,
      questions: [
         {
            title: "Что такое переменная в программировании?",
            answers: [
               "Строка кода",
               "Значение, которое может изменяться",
               "Комментарий в коде",
            ],
            correctAnswer: 1,
         },
         {
            title: "Что такое условный оператор?",
            answers: [
               "Оператор для создания циклов",
               "Оператор для сравнения значений",
               "Оператор для выполнения кода при определенном условии",
            ],
            correctAnswer: 2,
         },
         {
            title: "Что представляет собой цикл в программировании?",
            answers: [
               "Метка в коде",
               "Структура данных",
               "Блок кода, выполняющийся многократно",
            ],
            correctAnswer: 2,
         },
         {
            title: "Что такое массив?",
            answers: [
               "Строка кода",
               "Структура данных для хранения элементов одного типа",
               "Переменная с числовым значением",
            ],
            correctAnswer: 1,
         },
         {
            title: "Что такое функция в программировании?",
            answers: [
               "Строка кода",
               "Комментарий в коде",
               "Блок кода, который можно вызывать многократно",
            ],
            correctAnswer: 2,
         },
         {
            title: "Что такое алгоритм?",
            answers: [
               "Программа на языке программирования",
               "Метод решения задачи, представленный последовательностью шагов",
               "Переменная в программе",
            ],
            correctAnswer: 1,
         },
         {
            title: "Что такое тип данных?",
            answers: [
               "Метка в коде",
               "Структура данных",
               "Способ организации данных в программе",
            ],
            correctAnswer: 2,
         },
         {
            title: "Что такое оператор в программировании?",
            answers: [
               "Функция для выполнения конкретной задачи",
               "Зарезервированное слово с определенным значением",
               "Строка кода",
            ],
            correctAnswer: 1,
         },
         {
            title: "Что такое комментарий в коде?",
            answers: [
               "Оператор для выполнения кода при определенном условии",
               "Определение переменной",
               "Текст, игнорируемый компилятором, предназначенный для пояснений кода",
            ],
            correctAnswer: 2,
         },
         {
            title: "Что такое IDE?",
            answers: [
               "Интегрированная среда разработки",
               "Инструкция по установке программы",
               "Инструмент для отладки кода",
            ],
            correctAnswer: 0,
         },
      ],
   },
   {
      id: 6,
      name: "HTML",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt cursus ligula, vitae luctus ex malesuada ac. Fusce vitae elit vel lectus bibendum feugiat. Nullam euismod fringilla augue, non efficitur ex vulputate nec.",
      category: "Программирование",
      cover: coverImg6,
      questions: [
         {
            title: "Что обозначает тег <html> в HTML?",
            answers: [
               "Определение заголовка документа",
               "Начало и конец HTML-документа",
               "Определение гиперссылок",
            ],
            correctAnswer: 1,
         },
         {
            title: "Какой тег используется для создания абзаца в HTML?",
            answers: ["<p>", "<a>", "<h1>"],
            correctAnswer: 0,
         },
         {
            title: "Как вставить изображение в HTML-документ?",
            answers: ["<image>", "<img>", "<picture>"],
            correctAnswer: 1,
         },
         {
            title: "Что означает атрибут href в теге <a>?",
            answers: [
               "Ссылка на изображение",
               "Адрес веб-страницы или ресурса",
               "Определение заголовка документа",
            ],
            correctAnswer: 1,
         },
         {
            title: "Какой тег используется для создания таблицы в HTML?",
            answers: ["<table>", "<tr>", "<td>"],
            correctAnswer: 0,
         },
         {
            title: "Как вставить перенос строки в HTML?",
            answers: ["<nl>", "<br>", "<newline>"],
            correctAnswer: 1,
         },
         {
            title: "Как создать неупорядоченный список в HTML?",
            answers: ["<ul>", "<ol>", "<li>"],
            correctAnswer: 0,
         },
         {
            title: "Какой тег используется для выделения жирным шрифтом в HTML?",
            answers: ["<bold>", "<strong>", "<b>"],
            correctAnswer: 2,
         },
         {
            title: "Что означает атрибут src в теге <img>?",
            answers: [
               "Ссылка на изображение",
               "Определение заголовка документа",
               "Адрес веб-страницы или ресурса",
            ],
            correctAnswer: 0,
         },
         {
            title: "Какой тег используется для создания ссылки в HTML?",
            answers: ["<link>", "<a>", "<href>"],
            correctAnswer: 1,
         },
         {
            title: "Как вставить горизонтальную линию в HTML?",
            answers: ["<line>", "<hr>", "<horizontal>"],
            correctAnswer: 1,
         },
      ],
   },
   {
      id: 7,
      name: "CSS",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et finibus quam. Sed nec enim vel mi tincidunt vestibulum sit amet a odio. Integer non odio id urna cursus lacinia eu ac dui.",
      category: "Программирование",
      cover: coverImg7,
      // https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?q=80&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
      questions: [
         {
            title: "Как задать цвет текста в CSS?",
            answers: ["text-color", "color", "font-color"],
            correctAnswer: 1,
         },
         {
            title: "Как установить фоновый цвет элемента в CSS?",
            answers: [
               "background-color",
               "element-background",
               "color-background",
            ],
            correctAnswer: 0,
         },
         {
            title: "Как задать отступы вокруг элемента в CSS?",
            answers: ["padding", "margin", "spacing"],
            correctAnswer: 1,
         },
         {
            title: "Как установить размер шрифта в CSS?",
            answers: ["font-size", "text-size", "size-font"],
            correctAnswer: 0,
         },
         {
            title: "Как установить жирное начертание шрифта в CSS?",
            answers: [
               "font-style: bold;",
               "font-weight: bold;",
               "text-bold: true;",
            ],
            correctAnswer: 1,
         },
         {
            title: "Как создать внутренние границы вокруг ячеек таблицы в CSS?",
            answers: ["table-border", "cell-spacing", "border-collapse"],
            correctAnswer: 2,
         },
         {
            title: "Как скрыть элемент на странице в CSS?",
            answers: ["visibility: hidden;", "display: none;", "opacity: 0;"],
            correctAnswer: 1,
         },
         {
            title: "Как изменить форму курсора при наведении на элемент в CSS?",
            answers: ["cursor-style", "cursor-type", "cursor"],
            correctAnswer: 2,
         },
         {
            title: "Как создать анимацию в CSS?",
            answers: ["animate", "animation", "keyframes"],
            correctAnswer: 2,
         },
         {
            title: "Как установить выравнивание текста по центру в CSS?",
            answers: [
               "text-align: center;",
               "align-text: center;",
               "center-text: true;",
            ],
            correctAnswer: 0,
         },
         {
            title: "Как изменить цвет границы элемента в CSS?",
            answers: ["border-color", "outline-color", "element-border-color"],
            correctAnswer: 0,
         },
      ],
   },
   {
      id: 8,
      name: "История древнего Рима",
      desc: "Древний Рим - одна из величайших цивилизаций древности, оставившая неизгладимый след в мировой истории. От создания Рима, до его величественной империи - вопросы этого теста погрузят вас в увлекательный мир древнеримского общества.",
      category: "История",
      cover: coverImg1,
      questions: [
         {
            title: "Кто были Ромул и Рем?",
            answers: [
               "Братья-близнецы, основатели Рима",
               "Римские императоры",
               "Завоеватели Рима",
            ],
            correctAnswer: 0,
         },
         {
            title: "Какая форма правления существовала в Древнем Риме на ранних этапах?",
            answers: ["Монархия", "Республика", "Империя"],
            correctAnswer: 0,
         },
         {
            title: "Кто был первым римским императором?",
            answers: ["Юлий Цезарь", "Август", "Тиберий"],
            correctAnswer: 1,
         },
         {
            title: "Какие пути расширения Римской империи были наиболее значительными?",
            answers: ["Восток", "Запад", "Оба направления"],
            correctAnswer: 2,
         },
         {
            title: "Какие пагубные события произошли в 476 году?",
            answers: [
               "Сражение при Гаугамеле",
               "Падение Рима",
               "Возникновение Римской империи",
            ],
            correctAnswer: 1,
         },
         {
            title: "Кто был известным римским философом и стоиком?",
            answers: ["Сенека", "Аристотель", "Платон"],
            correctAnswer: 0,
         },
         {
            title: "Какова роль Карфагена в истории древнего Рима?",
            answers: [
               "Главный враг Рима в Пунических войнах",
               "Древний союзник Рима",
               "Столица Римской империи",
            ],
            correctAnswer: 0,
         },
         {
            title: "Как называется период мира и стабильности в Римской империи?",
            answers: [
               "Эпоха Триумвирата",
               "Пакс Романа",
               "Время Гражданских войн",
            ],
            correctAnswer: 1,
         },
         {
            title: "Кто известен как реформатор Римской армии?",
            answers: ["Гай Марий", "Сулла", "Юлий Цезарь"],
            correctAnswer: 0,
         },
         {
            title: "Какая культура оказала влияние на древний Рим?",
            answers: ["Греческая", "Египетская", "Персидская"],
            correctAnswer: 0,
         },
         {
            title: "Какой термин обозначает древнеримскую верховную власть?",
            answers: ["Сенат", "Консул", "Император"],
            correctAnswer: 2,
         },
      ],
   },
   {
      id: 9,
      name: "Математика. Квадратные уравнения",
      desc: "Освежите свои знания о квадратных уравнениях! В этом вопросы, проверяющие ваши теоретические знания, а также практические задачи на нахождение корней квадратных уравнений.",
      category: "Математика",
      cover: coverImg2,
      questions: [
         {
            title: "Что такое квадратное уравнение?",
            answers: [
               "Уравнение второй степени",
               "Уравнение с двумя переменными",
               "Уравнение с тремя переменными",
            ],
            correctAnswer: 0,
         },
         {
            title: "Какие формулы используются для нахождения корней квадратного уравнения?",
            answers: [
               "Формула Виета",
               "Формула Герона",
               "Формула корней квадратного уравнения",
            ],
            correctAnswer: 2,
         },
         {
            title: "Когда квадратное уравнение имеет два действительных корня?",
            answers: [
               "Когда дискриминант положителен",
               "Когда дискриминант равен нулю",
               "Когда дискриминант отрицателен",
            ],
            correctAnswer: 0,
         },
         {
            title: "Найдите корни уравнения: x² - 4x + 4 = 0",
            answers: ["x = 2", "x = 4", "x = 1"],
            correctAnswer: 0,
         },
         {
            title: "Решите уравнение: 2x² + 3x - 5 = 0",
            answers: ["x = 1, x = -2.5", "x = 5, x = -1", "x = 2.5, x = -1"],
            correctAnswer: 0,
         },
         {
            title: "Найдите корни уравнения: x² - 6x + 9 = 0",
            answers: ["x = 3", "x = -3", "x = 2"],
            correctAnswer: 0,
         },
         {
            title: "Решите уравнение: 4x² - 16 = 0",
            answers: ["x = 2, x = -2", "x = 4, x = -4", "x = 3, x = -3"],
            correctAnswer: 0,
         },
         {
            title: "Найдите корни уравнения: 3x² + 5x + 2 = 0",
            answers: ["x = -1, x = -2/3", "x = 2, x = -1/3", "x = -2, x = 1/3"],
            correctAnswer: 0,
         },
         {
            title: "Решите уравнение: x² + 7x + 10 = 0",
            answers: ["x = -2, x = -5", "x = -3, x = -10", "x = 2, x = 5"],
            correctAnswer: 0,
         },
         {
            title: "Найдите корни уравнения: 2x² - x - 1 = 0",
            answers: ["x = 1, x = -0.5", "x = 2, x = -1", "x = -1, x = 0.5"],
            correctAnswer: 0,
         },
      ],
   },
];

export default tests;
