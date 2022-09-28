import { useState } from "react";
import IntroPage from "./components/IntroPage";
import Question from "./components/Questions";
export default function App() {
  const url = "https://opentdb.com/api.php?amount=5&type=multiple";
  const [questions, setQuestions] = useState([]);
  const [loaded, setLoaded] = useState(true);
  const [showAnswer, setShowAnswer] = useState(false);


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

  function refreshPage() {
    window.location.reload(false);
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
<IntroPage loadQuestions={loadQuestions}/>
    </>
  ) : (
    <>
      <div className="bg-[#F5F7FB]   md:p-10  mt-20  md:m-auto">
        <div className="item">{triviaElements} </div>

        <div className="flex items-center gap-4 pl-64 w-[60%] m-auto">
          {showAnswer && <p className="font-['inter'] font-bold  text-base text-[#293264]">You scored 0/5 correct answers</p>}
          {showAnswer ?
            <button
              onClick={() => {
                setShowAnswer(prev => !prev)
                loadQuestions()
                refreshPage()
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
