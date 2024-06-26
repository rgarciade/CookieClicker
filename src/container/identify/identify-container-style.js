import { css } from 'lit';

export const identifyStyle = css`
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 55vh;
		font-size: 56px;
		gap: 80px;
	}
	input {
		min-width: 7em;
	}
	.bests {
		min-height: 34vh;
	}
	.title {
		font-size: 110px;
		margin-bottom: 0px;
		padding-bottom: 0px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.title h2 {
		display: flex;
		align-items: center;
		margin-bottom: 0px;
	}

	.error-span {
		font-size: 40px;
		color: red;
		font-weight: 600;
	}
	ol {
		font-size: 70px;
		line-height: 1.5;
	}
	.play-button {
		--button-width: 5.7em;
	}
	.icon-start {
		--icon-color: red;
	}
	@media only screen and (max-width: 1080px) {
		.title {
			font-size: 50px;
		}
		ol {
			font-size: 49px;
			padding-top: 1em;
		}
	}
	@media only screen and (max-width: 550px) {
		.title {
			font-size: 30px;
			--icon-size: 50px;
		}
		ol {
			font-size: 30px;
			padding-top: 3em;
		}
		input {
			font-size: 26px !important;
			min-width: 11em;
		}
		.play-button {
			--button-width: 4.3em;
		}
		.bests p {
			font-size: 30px;
			padding-top: 2em;
		}
	}
`;
