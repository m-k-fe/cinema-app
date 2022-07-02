import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import Header from "../Components/Header";

function UserList() {
  const [listData, setListData] = useState([]);
  useEffect(() => {
    let moviesId = window.localStorage.movies
      ? window.localStorage.movies.split(",")
      : [];
    for (let i = 0; i < moviesId.length; i++) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${moviesId[i]}?api_key=ed82f4c18f2964e75117c2dc65e2161d&language=fr-FR`
        )
        .then((res) => setListData((state) => [...state, res.data]));
    }
  }, []);
  return (
    <div className="user-list-page">
      <Header />
      <h2>Coup De Coeur</h2>
      <div className="result">
        {listData.length > 0 ? (
          listData.map((item) => <Card key={item.id} item={item} />)
        ) : (
          <h2>Aucun coup de coeur pour le moment</h2>
        )}
      </div>
    </div>
  );
}

export default UserList;
