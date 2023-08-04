import styled from "styled-components";

const Header = () => {
	return (
		<Headers>
			<h2>The Movie App</h2>
		</Headers>
	);
};
export default Header;

const Headers = styled.form`
	position: relative;
	font-family: "Anton", sans-serif;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 40px;
	color: white;
	padding-bottom: 100px;

	h2 {
		word-spacing: 20px;
		border: 10px solid white;
		padding: 10px;
		border-radius: 35px;
		box-shadow: 10px 10px 70px red;
	}
`;
