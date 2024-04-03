import { LitElement, html } from 'lit';
import { navStyle } from './nav-element-style.js';

export class NavElement extends LitElement {
	/**
	 * @property {String} href - Link to navigate.
	 */
	static get properties() {
		return {
			href: { type: String },
		};
	}
	static get styles() {
		return [navStyle];
	}

	constructor() {
		super();
	}
	_navigate(e) {
		e.preventDefault();
		const value =
			e.target.getAttribute('href') ??
			e.target.parentElement.getAttribute('href');
		this.dispatchEvent(
			new CustomEvent('router-navigate', {
				detail: value,
				bubbles: true,
				composed: true,
			})
		);
	}
	render() {
		return html`
			<a href="${this.href}" @click="${this._navigate}"> <slot></slot></a>
		`;
	}
}

window.customElements.define('nav-element', NavElement);
