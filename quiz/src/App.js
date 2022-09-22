import { useState } from "react";
import Question from "./components/Questions";
import "./App.scss";
export default function App() {
  const url = "https://opentdb.com/api.php?amount=5&type=multiple";
  const [questions, setQuestions] = useState([]);
  const [loaded, setLoaded] = useState(true);
  const [showAnswer, setShowAnswer] = useState(false);
  const [count, setCount] = useState(0);

  const loadQuestions = async () => {
    let response = fetch(url)
      .then(response => response.json())
      .then(data => {
        setQuestions(data.results)
        setLoaded(false)
        console.log(response);
        console.log(data.results);
      })
  }


  function generateNewDie() {
    return {
      isHeld: true,
    }
  }

  const AnswerBtn = () => {
    setShowAnswer(prev => !prev)
    console.log("hi")
  }



  const triviaElements = questions.map((value, index) => (
    <Question
      key={index.id}
      TriviaQuestion={value.question}
      TriviaCorrAnswer={value.correct_answer}
      TriviaInCorrAnswer={value.incorrect_answers}
      isHeld={value.isHeld}
    />
  ));


  return loaded ? (
    <>
      <div>
        <main className="bg-[#F5F7FB] md:w-[30%] w-full mt-20  md:m-auto">
          <div className="text-center grid gap-4 py-40">
            <span>
              <h1 className="font-['karla'] font-bold text-2xl text-[#293264]">
                Quizzical
              </h1>
              <p className="font-['inter'] font-normal text-base text-[#293264]">
                Some description if needed
              </p>
            </span>
            <div className="flex items-center justify-center">
              <button
                onClick={loadQuestions}
                className="bg-[#4D5B9E] rounded-[15px] w-[193px]  h-[52px] text-white"
              >
                Start quiz
              </button>
            </div>
          </div>
          {/* <Question /> */}
        </main>
      </div>
    </>
  ) : (
    <>
      <div className="bg-[#F5F7FB]   md:p-10  mt-20  md:m-auto">
        <div className="item">{triviaElements} </div>

        <div className="flex items-center gap-4 pl-64 w-[60%] m-auto">
          {showAnswer && <p className="font-['inter'] font-bold  text-base text-[#293264]">You scored {count}/5 correct answers</p>}
          {showAnswer ?
            <button
              onClick={() => {
                setShowAnswer(prev => !prev)
                loadQuestions()
              }}
              className="bg-[#4D5B9E]  rounded-[15px] w-[130px]  h-[40px] text-white"
            >
              Play Again
            </button> :
            <button
              onClick={AnswerBtn}
              className="bg-[#4D5B9E]  rounded-[15px] w-[130px]  h-[40px] text-white"
            >
              Check Answer
            </button>
          }
        </div>

      </div>
    </>
  );
}
