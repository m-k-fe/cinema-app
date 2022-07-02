import React from "react";

function Card({ item }) {
  const dateFormater = (date) => {
    let [yy, mm, dd] = date.split("-");
    return [dd, mm, yy].join("/");
  };
  const genreFinder = () => {
    let genreArray = [];
    for (let i = 0; i < item.genre_ids.length; i++) {
      switch (item.genre_ids[i]) {
        case 28:
          genreArray.push(`Action`);
          break;
        case 12:
          genreArray.push(`Aventure`);
          break;
        case 16:
          genreArray.push(`Animation`);
          break;
        case 35:
          genreArray.push(`Comédie`);
          break;
        case 80:
          genreArray.push(`Policier`);
          break;
        case 99:
          genreArray.push(`Documentaire`);
          break;
        case 18:
          genreArray.push(`Drame`);
          break;
        case 10751:
          genreArray.push(`Famille`);
          break;
        case 14:
          genreArray.push(`Fantasy`);
          break;
        case 36:
          genreArray.push(`Histoire`);
          break;
        case 27:
          genreArray.push(`Horreur`);
          break;
        case 10402:
          genreArray.push(`Musique`);
          break;
        case 9648:
          genreArray.push(`Mystère`);
          break;
        case 10749:
          genreArray.push(`Romance`);
          break;
        case 878:
          genreArray.push(`Science-fiction`);
          break;
        case 10770:
          genreArray.push(`Téléfilm`);
          break;
        case 53:
          genreArray.push(`Thriller`);
          break;
        case 10752:
          genreArray.push(`Guerre`);
          break;
        case 37:
          genreArray.push(`Western`);
          break;
        default:
          break;
      }
    }
    return genreArray.map((item) => <li key={item}>{item}</li>);
  };
  const addStorage = () => {
    let storedData = window.localStorage.movies
      ? window.localStorage.movies.split(",")
      : [];
    if (storedData.indexOf(item.id.toString()) == -1) {
      storedData.push(item.id);
      window.localStorage.movies = storedData;
      
    }
  };
  const deleteStorage = () => {
    let storedData = window.localStorage.movies.split(",");
    let newData = storedData.filter(id => id != item.id);
    window.localStorage.movies = newData;
  };
  return (
    <div className="card">
      <img
        src={
          item.poster_path
            ? "https://image.tmdb.org/t/p/w500" + item.poster_path
            : "./images/poster.jpg"
        }
      />
      <h3>{item.title}</h3>
      {item.release_date ? (
        <h5>Sortit le: {dateFormater(item.release_date)}</h5>
      ) : (
        ""
      )}
      <h4>
        {item.vote_average}/10 <i className="fa fa-star"></i>
      </h4>
      <ul>
        {item.genre_ids
          ? genreFinder()
          : item.genres.map((item, index) => <li key={index}>{item.name}</li>)}
      </ul>
      {item.overview ? <h3>Synopsis</h3> : ""}
      <p>{item.overview}</p>
      {item.genre_ids ? (
        <div className="btn" onClick={() => addStorage()}>
          Ajouter à favorite
        </div>
      ) : (
        <div className="btn" onClick={() => {
            deleteStorage();
            window.location.reload();
          }}>
          Supprimer de favorite
        </div>
      )}
    </div>
  );
}

export default Card;
