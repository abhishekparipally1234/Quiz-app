import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./styles.css";


const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/quiz")
      .then((response) => {
        console.log("Quiz Data:", response.data);

        if (response.data && Array.isArray(response.data.questions)) {
          setQuestions(response.data.questions);
        } else {
          console.warn("Invalid questions structure:", response.data);
        }
      })
      .catch((error) => console.error("Error fetching quiz data:", error))
      .finally(() => setIsLoading(false));
  }, []);

  const handleAnswer = (selectedAnswer) => {
    if (questions.length === 0) return;

    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      navigate("/result", { state: { score, total: questions.length } });
    }
  };

  if (isLoading) {
    return <p className="text-center mt-5">Loading quiz data...</p>;
  }

  if (questions.length === 0) {
    return <p className="text-center mt-5">No questions available. Try again later.</p>;
  }

  const currentQ = questions[currentQuestion];

  return (
    <div className="quiz-container text-center mt-5">
      <h2>Question {currentQuestion + 1}/{questions.length}</h2>
      <p>{currentQ.description || "No question text available"}</p>
      <div>
        {Array.isArray(currentQ.options) ? (
          currentQ.options.map((option, index) => (
            <button key={index} onClick={() => handleAnswer(option.description)} className="btn btn-outline-primary m-2">
              {option.description}
            </button>
          ))
        ) : (
          <p>No options available</p>
        )}
      </div>
    </div>
  );
};

export default Quiz;
