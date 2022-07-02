import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";
function Form() {
  const [moviesData, setMoviesData] = useState([]);
  const [search, setSearch] = useState("code");
  const [sortGoodBad, setSortGoodBad] = useState("goodToBad");
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=${search}&language=fr-FR`
      )
      .then((res) => setMoviesData(res.data.results));
  }, [search]);
  return (
    <div className="form-component">
      <div className="form-container">
        <form>
          <input
            type="text"
            placeholder="Entrez Le Titre D'un Film"
            id="search-input"
            onChange={(e) => setSearch(e.target.value)}
          />
          <input type="submit" value="Rechercher" />
        </form>
        <div className="btns-sort-container">
          <div
            className="btn-sort"
            id="goodToBad"
            onClick={() => setSortGoodBad("goodToBad")}
          >
            Top
          </div>
          <div
            className="btn-sort"
            id="badToGood"
            onClick={() => setSortGoodBad("badToGood")}
          >
            Flop
          </div>
        </div>
      </div>
      <div className="result">
        {moviesData
          .sort((a, b) => {
            if (sortGoodBad === "goodToBad") {
              return b.vote_average - a.vote_average;
            } else if (sortGoodBad === "badToGood") {
              return a.vote_average - b.vote_average;
            }
          })
          .slice(0, 12)
          .map((item) => (
            <Card key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
}

export default Form;
