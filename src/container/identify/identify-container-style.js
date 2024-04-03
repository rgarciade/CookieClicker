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
`;
