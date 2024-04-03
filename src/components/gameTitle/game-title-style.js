import { css } from 'lit';

export const gameTitleStyle = css`
	:host {
		font-size: 70px;
		color: var(--text-color, black);
		display: flex;
		gap: 40px;
		justify-content: flex-start;

		background-color: var(--background-color, white);
	}
	.game-title :last-child {
		margin-left: auto;
		padding-right: 20px;
	}
	.game-title :first-child {
		padding-left: 20px;
	}

	:host ::slotted(*) {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		line-height: 0.2;
	}

	:host ::slotted(*:last-child) {
		margin-left: auto;
		padding-right: 40px;
	}
	:host ::slotted(*:first-child) {
		padding-left: 40px;
	}
`;