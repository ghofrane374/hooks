import React, { useState } from "react";
import "./MovieList.css";
import MovieCard from "../movieCard/MovieCard";
import AddMovie from "../addMovie/AddMovie";
import FilterMovie from "../filtermovie/FilterMovie";
export default function MovieList() {
  const [movies, setmovies] = useState([
    {
      title: "movie1",
      description: "description1",
      rating: "8.5",
      url: "FdbuZRByYOk",
    },
    {
      title: "movie2",
      description: "description2",
      rating: "7.5",
      url: "3yjO6yfHLcU",
    },
    {
      title: "movie3",
      description: "description3",
      rating: "6.5",
      url: "cxRGVdO0m1w",
    },
  ]);
  let [filtredMovies, setfiltredMovies] = useState([...movies]);

  function addmovie(movie) {
    setmovies((oldlist) => [movie, ...oldlist]);
  }
  function filter(filter, val) {
    console.log(movies);
    filtredMovies = [...movies];
    console.log(filtredMovies);
    let listmovies = [...filtredMovies];
    if (filter == "Title") {
      console.log(val);
      if (val == "") {
        console.log("wejkdshkj");
        setfiltredMovies([...movies]);
        return;
      }
      listmovies = listmovies.filter((elt) => elt.title == val);
      setfiltredMovies(listmovies);
    } else {
      if (val == "") {
        setfiltredMovies([...movies]);
        return;
      }
      listmovies = listmovies.filter((elt) => elt.rating == val);
      setfiltredMovies(listmovies);
    }
  }

  const [modalShow, setModalShow] = useState(false);
  return (
    <div className="movieContainer">
      <div className="buttonsCont">
        <AddMovie addmovie={addmovie}></AddMovie>
        <FilterMovie filter={filter}></FilterMovie>
      </div>
      <div className="movies">
        {filtredMovies.map((elt, ind) => (
          <MovieCard
            title={elt.title}
            descrip={elt.description}
            rating={elt.rating}
            key={ind}
            url={elt.url}
          ></MovieCard>
        ))}
      </div>
    </div>
  );
}
