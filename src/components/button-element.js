import { LitElement, html } from 'lit';
import { buttonStyle } from './styles/button-style.js';

export class ButtonElement extends LitElement {
	static get styles() {
		return [buttonStyle];
	}
	/**
	 * @property {Number} width - Width of the button.
	 */
	static get properties() {
		return {
			width: { type: String },
			height: { type: String },
			fontSize: { type: String },
			disabled: { type: Boolean },
		};
	}

	get buttonWidth() {
		return this.width ? `--button-width: ${this.width};` : '';
	}
	get buttonHeight() {
		return this.height ? `--button-height: ${this.height};` : '';
	}
	get buttonFontSize() {
		return this.fontSize ? `--button-font-size: ${this.fontSize};` : '';
	}

	render() {
		return html`
			<style>
				:host {
				   ${this.buttonWidth}
				   ${this.buttonHeight}
				   ${this.buttonFontSize}
				}
			</style>
			<button ?disabled="${this.disabled}" @click="${this._onClick}">
				<slot></slot>
			</button>
		`;
	}
}

window.customElements.define('button-element', ButtonElement);
