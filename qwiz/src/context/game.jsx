import { createContext, useEffect, useState } from "react";

export const GameContext = createContext(null);

const maxQuestions = 5;

export default function GameContextProvider({ children }) {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState(null);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [gameStatus, setGameStatus] = useState("playing");
  const [score, setScore] = useState(0);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        {
          setQuestions(data);
          getRandomQuestion(data);
        }
      });
  }, []);

  const getRandomQuestion = (questions) => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    if (answeredQuestions.find((question) => question.index === randomIndex)) {
      getRandomQuestion(questions);
      return;
    }
    setCurrentQuestion(randomIndex);
  };

  const handleAnswer = (answer) => {
    setAnswer(answer);
    const answeredQuestion = {
      index: currentQuestion,
    };
    if (answer === questions[currentQuestion].respuesta_correcta) {
      answeredQuestion.isCorrect = true;
    } else {
      answeredQuestion.isCorrect = false;
    }

    setAnsweredQuestions([...answeredQuestions, answeredQuestion]);
  };

  const nextQuestion = () => {
    if (answeredQuestions.length < maxQuestions) {
      getRandomQuestion(questions);
      setAnswer(null);
    } else {
      countScore(answeredQuestions);
      gameFinished();
    }
  };

  const countScore = (answeredQuestions) => {
    const score = answeredQuestions.reduce((acc, valActual) => {
      return acc + valActual.isCorrect;
    }, 0);
    setScore(score);
  };

  const gameFinished = () => {
    setGameStatus("finished");
  };

  const resetGame = () => {
    setAnsweredQuestions([]);
    setScore(0);
    setGameStatus("playing");
    setAnswer(null);
    setCurrentQuestion(0);
    getRandomQuestion(questions);
  };

  return (
    <GameContext.Provider
      value={{
        questions,
        currentQuestion,
        answer,
        answeredQuestions,
        handleAnswer,
        nextQuestion,
        gameStatus,
        gameFinished,
        score,
        maxQuestions,
        resetGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
