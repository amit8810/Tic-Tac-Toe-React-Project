import React from "react";
import TicTacToeImage from "../../public/tic-tac-toe.png";
import { NavLink } from "react-router-dom";

function LandingPage() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500 border-8 p-4 flex flex-col justify-center items-center">
        <h1 className="text-white font-bold text-4xl sm:text-5xl md:text-6xl text-center py-5">
          Tic Tac Toe
        </h1>
        <div className="flex flex-wrap justify-center items-center max-w-4xl mx-auto">
          <div className="w-full sm:w-1/2 p-4">
            <img
              src={TicTacToeImage}
              className="w-full h-auto rounded-lg shadow-lg"
              alt="Tic Tac Toe"
            />
          </div>
          <div className="w-full sm:w-1/2 p-4 text-white">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Rules to play the Game</h2>
            <p className="mb-2 text-lg">
              1. The game is played on a grid that's 3 squares by 3 squares.
            </p>
            <p className="mb-2 text-lg">
              2. You are X, your friend (or the computer in this case) is O. Players take turns putting their marks in empty squares.
            </p>
            <p className="mb-2 text-lg">
              3. The first player to get 3 of her marks in a row (up, down, across, or diagonally) is the winner.
            </p>
            <p className="text-lg">
              4. When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a tie.
            </p>
            <NavLink to="/game">
              <button className="px-4 py-2 bg-green-400 hover:bg-green-500 border-2 border-white rounded-md text-xl mt-4 transition duration-300 ease-in-out">
                Play Game
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
