import questions from './Questions.js'

import React from 'react'

export default function Result({ correct }) {
  return (
    <div className="result">
      <img
        alt="icon"
        src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"
      />
      <h2>
        Вы отгадали {correct} ответа из {questions.length}
      </h2>

      <a href="/">
        <button>Попробовать снова</button>
      </a>
    </div>
  )
}





