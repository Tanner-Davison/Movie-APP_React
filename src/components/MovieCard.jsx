import styled from "styled-components";
import { useState, useEffect } from "react";

const MovieCard = ({ list, movie, addMovie, removeMovie }) => {
	const inWatchList = list.filter((mov) => {
		return mov.id === movie.id;
	});

	const [Title, setTitle] = useState('');
	const [isValid,setIsValid] = useState(false)
	useEffect(() => {
		  
			if (movie.original_title) {
				 setTitle(movie.original_title.substring(0, 25));
			}
			if (Title === movie.original_title) {
			 setTitle(movie.original_title.substring(0,58))
			}

		
		}, [movie,Title, isValid]);

	const changeTitle = () => {
		setTitle(movie.original_title);
		setIsValid(true)
	};
	const mouseLeave = () => {
		setTitle('');
		setIsValid(false)
	};
	
	const button =
		inWatchList.length === 0 ? (
			<StyledButton>
				<button
					className={"button"}
					onClick={() => addMovie(movie)}>
					Add to List
				</button>
			</StyledButton>
		) : (
			<StyledButton id={"remove"}>
				<button
					className={"button"}
					onClick={() => removeMovie(movie)}>
					Remove
				</button>
			</StyledButton>
		);

	return (
		<MovieCardStyle onMouseOver={changeTitle} onMouseLeave={mouseLeave} valid={isValid}>
			{movie?.poster_path && (
				<div className={"movieCardInner"}>
					<img
						src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
						alt={movie.original_title}
						width={400}
						height={500}
					/>
					<h3>{Title}</h3>
					{button}
				</div>
			)}
		</MovieCardStyle>
	);
};
export default MovieCard;

const MovieCardStyle = styled.div`
	display: flex;
	flex-direction: column;
	border: ${(props) =>
		props.valid ? "14px solid #FF003F" : "14px solid #111111"};
	border-radius: 25px;
	color: white;
	background-color: black;
	font-size: 25px;
	justify-content: center;
	align-items: center;
	margin-left: 20px;
	margin-right: 20px;
	.movieCardInner {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;

const StyledButton = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 44px;

	.button {
		display: flex;
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
		margin-bottom: 15px;
		&:after {
			content: "";
			position: absolute;
			bottom: 0;
			left: 0;
			width: 150%;
			height: 100%;
			background-color: ${(props) => (props.id === "remove" ? "red" : "#0cf")};
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
			color: ${(props) => (props.id === "remove" ? "hotpink" : "black")};
		}
	}
`;
