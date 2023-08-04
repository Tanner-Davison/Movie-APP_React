import MovieCard from "./MovieCard";
import styled from "styled-components";

const WatchList = ({ list, removeMovie, uniqueID }) => {
	const movieDisplay = list.map((movie, index) => {
		return (
			<MovieCard
				movie={movie}
				list={list}
				removeMovie={removeMovie}
				key={index}
			/>
		);
	});
	const newMovieDisplay = movieDisplay.splice(1);
	return (
		<>
			{newMovieDisplay.length < 1 ? (
				<NoAddedMovie>
					<HeaderForWatchList>My Watchlist</HeaderForWatchList>
					<p> *Add Movies to See Them Here!</p>
				</NoAddedMovie>
			) : (
				<>
					<div>
						<HeaderForWatchList>My Watchlist</HeaderForWatchList>
					</div>
					<WatchListWrapper>
						<div className={"movie-container"}>{newMovieDisplay}</div>
					</WatchListWrapper>
					<div className={"space"}>nothing</div>
				</>
			)}
		</>
	);
};
export default WatchList;

const NoAddedMovie = styled.div`
	color: white;
	font-size: 50px;
	padding-bottom: 100px;
`;
const HeaderForWatchList = styled.h1`
	position: relative;

	font-family: "Anton", sans-serif;
	margin-top: 200px;
	color: white;
	text-align: center;
	padding-bottom: 35px;
	font-size: 50px;
	letter-spacing: 2px;
`;
const WatchListWrapper = styled.div`
	display: flex;
	width: fit-content;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border: 10px solid white;
	box-shadow: 3px 3px 100px cyan;
	border-radius: 50px;
	margin-bottom: 500px;
    padding:30px;

	img {
		width: 200px;
		height: 300px;
	}
	.movie-container {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
	}
	.space {
		display: flex;
		height: 300px;
		width: 100%;
		background-color: black;
	}
`;
