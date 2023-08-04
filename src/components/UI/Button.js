import styled from 'styled-components';

const Button = (props) => {
    return(
   <BtnContainer>
			<div className={"btnWrapper"}>
                <button className={"button"}>{props.children}</button>
			</div>
        </BtnContainer>
    )
}
export default Button;

const BtnContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	transition: width 5s;
	.btnWrapper {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 75px;
		gap: 50px;
		background-color: black;
		width: 12%;
		height: 11%;
		border-radius: 25px;
		transition: width 5s;
	}
	.button {
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
			color: black;

			width: 150%;
		}
	}
`;