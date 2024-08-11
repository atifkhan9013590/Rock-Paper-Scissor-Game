import React, { useState } from "react";
import Rock from "../Images/fist.png";
import Paper from "../Images/hand-paper.png";
import Scissors from "../Images/scissors.png";
import Rule from "../Images/rock-paper-scissors-game-rules.png";
import "./syle.css";

function RockPaperScissors() {
  const choices = ["Rock", "Paper", "Scissors"];
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState("");
  const [score, setScore] = useState(0);
  const [playGame, setPlayGame] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const getRandomChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  };

  const handleUserChoice = (choice) => {
    const randomComputerChoice = getRandomChoice();
    setUserChoice(choice);
    setComputerChoice(randomComputerChoice);

    if (choice === randomComputerChoice) {
      setResult("TIE");
    } else if (
      (choice === "Rock" && randomComputerChoice === "Scissors") ||
      (choice === "Paper" && randomComputerChoice === "Rock") ||
      (choice === "Scissors" && randomComputerChoice === "Paper")
    ) {
      setResult("You Win!");
      setScore(score + 1);
    } else {
      setResult("Computer Wins!");
    }
    setPlayGame(false);
  };

  const getChoiceImage = (choice) => {
    switch (choice) {
      case "Rock":
        return Rock;
      case "Paper":
        return Paper;
      case "Scissors":
        return Scissors;
      default:
        return null;
    }
  };

  const playAgain = () => {
    setPlayGame(true);
    setComputerChoice("");
    setUserChoice("");
    setResult("");
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="game">
      <div className="header-game">
        <div className="game-name">
          <div>ROCK</div>
          <div>PAPER</div>
          <div>SCISSORS</div>
        </div>

        <button onClick={toggleModal}>RULES</button>
        <div className="score-card">
          <div>Score</div>
          <div>{score}</div>
        </div>
      </div>

      <div className="choices-container">
        <div className="user-choice">
          {userChoice && (
            <div className="game-users">
              <p>YOU</p>
              <img
                className="img"
                src={getChoiceImage(userChoice)}
                alt={userChoice}
              />
            </div>
          )}
          {computerChoice && (
            <div className="game-users">
              <p>OPPONENT</p>
              <img
                className="img"
                src={getChoiceImage(computerChoice)}
                alt={computerChoice}
              />
            </div>
          )}
        </div>
      </div>

      {playGame && (
        <div className="buttons-container">
          <div>
            <img
              className="img"
              src={Rock}
              alt="Rock"
              onClick={() => handleUserChoice("Rock")}
            />
            <img
              className="img"
              src={Paper}
              alt="Paper"
              onClick={() => handleUserChoice("Paper")}
            />
          </div>
          <div>
            <img
              className="img"
              src={Scissors}
              alt="Scissors"
              onClick={() => handleUserChoice("Scissors")}
            />
          </div>
        </div>
      )}

      <h5>{result}</h5>
      {!playGame && <button onClick={playAgain}>PLAY AGAIN</button>}

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>
              &times;
            </span>
            <img src={Rule} alt="Game Rules" className="rule-image" />
          </div>
        </div>
      )}
    </div>
  );
}

export default RockPaperScissors;
