import { css } from 'lit';

export const gameStyle = css`
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 55vh;
		font-size: 40px;
		gap: 20px;
	}
	.auto-clicker-group {
		display: flex;
		gap: 20px;
		max-width: 19em;
	}
	.game-text {
		font-size: 60px;
		margin: 100px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.game-text p {
		margin-bottom: 5px;
		margin-top: 5px;
	}
	.go-identify {
		cursor: pointer;
	}
	.small-clicker {
		--button-height: 5.6em;
		--button-font-size: 40px;
		--icon-size: 70px;
	}
	.big-clicker {
		--button-height: 5.6em;
		--button-font-size: 40px;
		--icon-size: 70px;
	}
	.game-title {
		--background-color: #262626;
	}
`;
