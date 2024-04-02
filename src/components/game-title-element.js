import { LitElement, html } from 'lit';
import './icon-element.js';
import { gameTitleStyle } from './styles/game-title-style.js';

export class GameTitleElement extends LitElement {
	static get styles() {
		return [gameTitleStyle];
	}
	/**
	 * @property {backgroundColor} width - Background color of the button.
	 */
	static get properties() {
		return {
			backgroundColor: { type: String },
		};
	}

	get GameTitleBackgroundColor() {
		return this.backgroundColor
			? `--background-color: ${this.backgroundColor};`
			: '';
	}

	render() {
		return html`
			<style>
				:host {
				   ${this.GameTitleBackgroundColor}
				}
			</style>
			<slot></slot>
		`;
	}
}

window.customElements.define('game-title-element', GameTitleElement);
