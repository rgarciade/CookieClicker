import { LitElement, html } from 'lit';
import '../icon/icon-element.js';
import { gameTitleStyle } from './game-title-style.js';

export class GameTitleElement extends LitElement {
	static get styles() {
		return [gameTitleStyle];
	}

	render() {
		return html` <slot></slot> `;
	}
}

window.customElements.define('game-title-element', GameTitleElement);
