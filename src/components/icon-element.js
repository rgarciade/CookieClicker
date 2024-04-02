import { LitElement, html } from 'lit';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import { iconStyle } from './styles/icon-style.js';
export class IconElement extends LitElement {
	/**
	 * @property {String} icon - Icon name from material design.
	 */
	static get properties() {
		return {
			icon: { type: String },
			size: { type: String },
			color: { type: String },
		};
	}
	static get styles() {
		return [iconStyle];
	}
	get sizeCss() {
		return this.size ? `--icon-size: ${this.size};` : '';
	}
	get colorCss() {
		return this.color ? `--icon-color: ${this.color};` : '';
	}

	constructor() {
		super();
	}
	render() {
		return html`
			<style>
				:host {
				    ${this.colorCss};
				    ${this.sizeCss}
				}
			</style>
			<i class="material-icons">${this.icon}</i>
		`;
	}
}
window.customElements.define('icon-element', IconElement);
