import React, { useState, useEffect } from "react";
import Board from "./Board";
import gameOverSound from "../../public/game-over-sound.mp3";

const Game = () => {
  // State to manage the game board squares
  const [squares, setSquares] = useState(Array(9).fill(null));

  // State to manage the next player (true for Blue, false for Red)
  const [xIsNext, setXIsNext] = useState(true);

  // State to manage the scores for Blue and Red players
  const [blueScore, setBlueScore] = useState(0);
  const [redScore, setRedScore] = useState(0);

  // Function to play a sound
  const playSound = (soundFile) => {
    const audio = new Audio(soundFile);
    audio.play();
  };

  // Effect to load scores from local storage when the component mounts
  useEffect(() => {
    const blueScoreFromStorage =
      parseInt(localStorage.getItem("blueScore")) || 0;
    const redScoreFromStorage = parseInt(localStorage.getItem("redScore")) || 0;
    setBlueScore(blueScoreFromStorage);
    setRedScore(redScoreFromStorage);
  }, []);

  // Function to handle a square click
  const handleClick = (index) => {
    const newSquares = [...squares];
    if (calculateWinner(newSquares) || newSquares[index]) {
      return;
    }
    newSquares[index] = xIsNext ? "X" : "O";
    setSquares(newSquares);
    setXIsNext(!xIsNext);

    const winner = calculateWinner(newSquares);
    if (winner) {
      if (winner === "X") {
        playSound(gameOverSound); // Play the game-over sound
        const newBlueScore = blueScore + 1;
        setBlueScore(newBlueScore);
        localStorage.setItem("blueScore", newBlueScore);
      } else {
        playSound(gameOverSound); // Play the game-over sound
        const newRedScore = redScore + 1;
        setRedScore(newRedScore);
        localStorage.setItem("redScore", newRedScore);
      }
    }
  };

  // Function to calculate the winner of the game
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  // Function to reset the game board
  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  // Function to reset the scores for both players
  const resetScores = () => {
    setBlueScore(0);
    setRedScore(0);
    localStorage.setItem("blueScore", 0);
    localStorage.setItem("redScore", 0);
  };

  // Determine the current status of the game
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = `Winner: ${winner === "X" ? "Blue" : "Red"}`;
  } else {
    status = `Next player: ${xIsNext ? "Blue" : "Red"}`;
  }

  // Render the game component
  return (
    <div className="text-center mt-8">
      <div className="text-xl mb-4">
        <p className="inline-block px-4 py-2 bg-blue-200 text-blue-800 mr-2">
          Blue: {blueScore}
        </p>
        <p className="inline-block px-4 py-2 bg-red-200 text-red-800">
          Red: {redScore}
        </p>
      </div>
      <div className="text-2xl font-bold mb-4">{status}</div>
      <Board squares={squares} onClick={handleClick} />
      <button
        className="mt-4 px-4 py-2 bg-gray-200 hover:bg-gray-300"
        onClick={resetGame}
      >
        Reset Game
      </button>
      <button
        className="mt-4 ml-4 px-4 py-2 bg-gray-200 hover:bg-gray-300"
        onClick={resetScores}
      >
        Reset Scores
      </button>
    </div>
  );
};

export default Game;
