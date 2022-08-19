import React from 'react';
import '..//src/App.scss';

const questions = [
  {
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    variants: ['приложение', 'часть приложения или страницы', 'что-то сложное'],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
  {
    title: 'Основная философия React?',
    variants: [
      'С самого начала иметь какой то план',
      'Переиспользование компонентов',
      'Не убей',
    ],
    correct: 1,
  },
  {
    title: 'Какую React решает проблему?',
    variants: [
      'Любую',
      'Все, кроме личных',
      'Манипулирования DOM элементами',
    ],
    correct: 2,
  },
];

// 4.принимаем пропс question(объект с вопросом) в функцию 
// 9. Принимаем функцию пропсом
// 12. Принимаем пропс шаг в функцию 
// 13. Создаем переменную lineResult для линии прогресса

function Game({question, onClickVariant, step}) {
  const lineResult = Math.round(step / questions.length * 100) 
  // console.log(lineResult);

  return (
    <>
      <div className="progress">
        <div style={{ width: `${lineResult}%` }} className="progress__inner"></div>
      </div>
      {/* 5.получаем вопрос из объекта */}
      <h1>{question.title}</h1>
      <ul>
        {/* вариант через индекс массива
        <li>{question.variants[0]}</li>
        <li>{question.variants[1]}</li>
        <li>{question.variants[2]}</li> */}

        {/* 6.Разворачиваем объект с ответами */}
        {/* 10. Навешиваем функцию через стрелочную и передаем индекс лишки в качестве аргумента */}
        {
          question.variants.map((item, index )=> (
            <li onClick={() => onClickVariant(index)} key={item}>{item}</li>
          ))
        }

      </ul>
    </>
  );
}

// 17 принимаем количество правильных и вставляем в разметку
// 18 На кнопку попробовать сновать делаем перезагрузку страницы
function Result({correct}) {
  return (
    <div className="result">
      <img alt='icon' src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>Вы отгадали {correct} ответа из {questions.length}</h2>

      <a href="/">
        <button>Попробовать снова</button>
      </a>
    </div>
  );
}


function App() {
  // 1.Создаем хук с начальным состоянием ноль
  const [step,setStep] = React.useState(0)
  // 2.переменная вопрос получает первый объект из массива, потому что индекс ноль 
  const question = questions[step];
  // console.log(question);
  // 14 Создаем хук для подсчета правильных ответов
  const [correct,setCorrect] = React.useState(0)

  // 7 создаем функцию клика по варианту (увеличивает индекс массива вопросов)
  // 15 Добавляем функционал подсчета правильных вариантов
  const onClickVariant = (index) => {
    console.log(step,index)
    setStep(step +1)

    if (index === question.correct) {
      setCorrect(correct + 1)
    }
  }


  return (
    <div className="App">

      {/*3. передаем пропсом переменную вопрос с объектом */}
      {/* 8. передаем функцию пропсом */}
      {/* 11. передаем шаг пропсом  */}
      {/* 13.Создаем тернарник, с условным рендером: при достижении длины вопросов рендерим результат  */}
      {/* 16 В результат передаем число правильных в качестве пропса */}

      {
        step !== questions.length ? <Game question={question} onClickVariant={onClickVariant} step={step} /> : <Result correct={correct} />
      }
      
    </div>
  );
}

export default App;

