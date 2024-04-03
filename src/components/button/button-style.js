import { css } from 'lit';

export const buttonStyle = css`
	button {
		border-radius: 12px;
		background-color: var(--color-primario);
		border: none;
		color: white;
		padding: 15px 32px;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		font-size: var(--button-font-size, 76px);
		margin: 4px 2px;
		cursor: pointer;
		width: var(--button-width, '2px');
		height: var(--button-height, '2px');
	}
	button:disabled {
		background-color: grey;
	}
`;