import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Register from "../pages/register"
import Login from "../pages/login"

function GameList() {
  const [games, setGames] = useState([]);

  useEffect(function () {
    async function getGames() {
      try {
        const response = await axios.get("/api/games");
        setGames(response.data);
      } catch (error) {
        console.log("error", error);
      }
    }
    getGames();
  }, []);

  return (
<<<<<<< HEAD
    <div style={{ marginTop: "10px" }}>
=======
    <div>

>>>>>>> ed969f33ac28f8d38d58f884a6a08dfd0b662dd1
      <h2>
        Games
        <Link to="/games/new" className="btn btn-primary float-right">
          Build a team!
        </Link>
      </h2>
      <hr />
      {games.map((game) => {
        return (
          <div key={game._id}>
            <h4>
              <Link to={`/games/${game._id}`}>{game.gameName}</Link>
            </h4>
            <h6>{game.gameGovernorate}</h6>
            <h6>{game.gameType}</h6>
            <h6>{game.gameDate}</h6>
            <h6>{game.gameDuration}</h6>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default GameList;
