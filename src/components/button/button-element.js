import { LitElement, html } from 'lit';
import { buttonStyle } from './button-style.js';

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
			type: { type: String },
			lengthType: { type: String },
		};
	}

	constructor() {
		super();
		this.buttonTypes = {
			primary: 'primary',
			secondary: 'secondary',
		};
		this.buttonLengthType = {
			long: 'long',
			short: 'short',
		};
	}

	buttonType = () => {
		const typeCss = this.buttonTypes[this.type] ?? this.buttonTypes['primary'];
		const buttonLength =
			this.buttonLengthType[this.lengthType] ?? this.buttonLengthType['long'];
		return `${typeCss} ${buttonLength}`;
	};

	render() {
		return html`
			<button
				class="${this.buttonType()}"
				?disabled="${this.disabled}"
				@click="${this._onClick}"
			>
				<slot></slot>
			</button>
		`;
	}
}

window.customElements.define('button-element', ButtonElement);
