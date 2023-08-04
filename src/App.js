import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import MovieScreen from "./components/MovieScreen";
import WatchList from "./components/WatchList";

function App() {
	const [list, setList] = useState([""]);
	const [movieList, setMovieList] = useState([""]);
	const [page, setPage] = useState(1);
	
	const uniqueID = (num) => {
		return Math.floor(Math.random()* num)
	} 

const addMovie = (movie) => {
	setList([...list, movie]);
};
const removeMovie = (movie) => {
	const newState = list.filter((mov) => {
		return mov !== movie;
	});
	setList(newState);
};
	const getData = () => {
		axios
			.get(
				`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`
			)
			.then((res) => {
				console.log(res.data.results);
				setMovieList(res.data.results);
			});
	};
	
	useEffect(() => {
		getData();
	}, [page]);
	return (
		<div className={"App"}>
			<h4>Created By: Tanner Davison</h4>
			<Header />
			<main>
				<MovieScreen
					list={list}
					page={page}
					setPage={setPage}
					movieList={movieList}
					addMovie={addMovie}
					removeMovie={removeMovie}
					uniqueID={uniqueID}
				/>
				<WatchList list={list} removeMovie={removeMovie} uniqueID={uniqueID} />
			</main>
		</div>
	);
}

export default App;

