import React from "react";
import MovieCard from "./MovieCard";
import styled from "styled-components";

const MovieScreen = ({
	list,
	page,
	setPage,
	movieList,
	addMovie,
	removeMovie,
	uniqueID,
}) => {
	const movieDisplay = movieList.map((movie, index) => {
		return (
			<MovieCard
				addMovie={addMovie}
				movie={movie}
				list={list}
				removeMovie={removeMovie}
				key={uniqueID(10000)}
			/>
		);
	});
	const decrement = () => {
		setPage((page -= 1));
	};
	const increment = () => {
		setPage((page += 1));
	};
	return (
		<div>
			<BtnContainer>
				<h2>Page: {page}</h2>
				<div className={"btnWrapper"}>
					<button
						className={"button"}
						onClick={page <= 1 ? null : decrement}>
						Prev
					</button>
					<button
						className={"button"}
						onClick={increment}>
						Next
					</button>
				</div>
			</BtnContainer>
			<MovieContainer>{movieDisplay}</MovieContainer>
		</div>
	);
};
export default MovieScreen;

const BtnContainer = styled.div`
	display: flex;
	color: white;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	transition: width 5s;
	border: 5 px solid black;
	h2 {
		position: absolute;
		display: flex;
		left:20%;
		padding-bottom: 30px;
		font-family: "Anton", sans-serif;
	}
	.btnWrapper {
		position: absolute;
		display: flex;
		align-items: center;
		
		justify-content: center;
		padding-bottom: 75px;
		gap: 50px;
		
		width: 15%;
		border-radius: 25px;
		
	}
	.button {
		position: absolute;
		display: inline-block;
		padding: 0.75rem 1.25rem;
		border-radius: 10rem;
		color: #fff;
		text-transform: uppercase;
		font-size: 1rem;
		letter-spacing: 0.15rem;
		transition: all 0.3s;
		position: relative;
		overflow: hidden;
		transition: width 5s;
		z-index: 1;
		&:after {
			content: "";
			position: absolute;
			bottom: 0;
			left: 0;
			width: 150%;
			height: 100%;
			background-color: #0cf;
			border-radius: 10rem;
			z-index: -2;
		}
		&:before {
			content: "";
			position: absolute;
			bottom: 0;
			left: 0;
			width: 0%;
			height: 100%;
			background-color: darken(#0cf, 100%);
			transition: width 5s;
			border-radius: 20rem;
			z-index: -1;
		}
		&:hover {
			
			transition: width 5s;
			color: black;
			position: relative;
			font-size: larger;
			background-color: teal;
			box-shadow: 2px 2px 50px teal, 2px 2px 50px teal;
		}
	}
`;
const MovieContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	flex-wrap: wrap;
	margin-top:30px;
	top: 1;
	left: 1;
`;


