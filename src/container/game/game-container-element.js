import { LitElement, html } from 'lit';
import '../../components/button/button-element.js';
import { gameStyle } from './game-container-style.js';
import { commonStyle } from '../../styles/common.js';
import ClickerService from '../../services/clicker/clicker-service.js';
import clickerTypes from '../../services/clicker/clicker-types.js';
import '../../components/nav/nav-element.js';
import '../../components/gameTitle/game-title-element.js';
import { ScoresState } from '../../status/index.js';
import { navigate } from '../../services/navigate/navigate-service.js';

export class GameContainerElement extends ScoresState(LitElement) {
	static get styles() {
		return [gameStyle, commonStyle];
	}
	/**
	 * @property {String} name - The name of the gamer.
	 */
	static get properties() {
		return {
			name: { type: String },
		};
	}
	_initPlayerData() {
		if (this.name == '') return;
		let playerData = this._scores_getScoreByName(this.name);
		this.clicker.initialize({
			initialValue: playerData.value,
			initialNumberOfClickers: playerData.numberOfClickers,
		});
	}
	_updateClickerActualValue() {
		const oldVal = this.counterValue;
		this.counterValue = this.clicker.actualValue;
		this.requestUpdate('counterValue', oldVal);
		if (oldVal !== this.counterValue) {
			this._scores_updateScore(this.name, {
				value: this.clicker.actualValue,
				numberOfClickers: this.clicker.numberOfClickers,
			});
		}
	}
	_updateClickerActualClickerPrice() {
		const oldVal = this.actualClickerPrice;
		this.actualClickerPrice = this.clicker.nextClickerPrice(
			clickerTypes.BasicAutoClicker
		);
		this.requestUpdate('actualClickerPrice', oldVal);
	}
	_updateClickerBasicAutoClickerEnabled() {
		const oldVal = this.basicAutoClickerEnabled;
		this.basicAutoClickerEnabled = this.clicker.checkClickerEnabled(
			clickerTypes.BasicAutoClicker
		);
		this.requestUpdate('basicAutoClickerEnabled', oldVal);
	}

	_updateClickerMegaClickersActualClickerPrice() {
		const oldVal = this.megaClickersActualClickerPrice;
		this.megaClickersActualClickerPrice = this.clicker.nextClickerPrice(
			clickerTypes.MegaClickers
		);
		this.requestUpdate('megaClickersActualClickerPrice', oldVal);
	}
	_updateClickerMegaClickersEnabled() {
		const oldVal = this.megaClickersEnabled;
		this.megaClickersEnabled = this.clicker.checkClickerEnabled(
			clickerTypes.MegaClickers
		);
		this.requestUpdate('megaClickersEnabled', oldVal);
	}
	_updateNumberOfClickers() {
		const oldVal = this.clicker.numberOfClickers;
		this.numberOfClickers = this.clicker.numberOfClickers;
		this.requestUpdate('numberOfClickers', oldVal);
	}

	constructor() {
		super();
		this.actualClickerPrice = 0;
		this.counterValue = 0;
		this.numberOfClickers = 0;
		this.basicAutoClickerEnabled = false;

		this.megaClickersActualClickerPrice = 0;
		this.megaClickersEnabled = false;

		this.clicker = new ClickerService({
			updateStatusFunction: () => {
				this._updateClickerActualValue();
				this._updateClickerActualClickerPrice();
				this._updateClickerBasicAutoClickerEnabled();
				this._updateClickerMegaClickersActualClickerPrice();
				this._updateClickerMegaClickersEnabled();
				this._updateNumberOfClickers();
			},
		});
	}
	disconnectedCallback() {
		// es importante destruir el servicio clicker
		//  para que no siga con el setInterval
		this.clicker.dismount();
		super.disconnectedCallback();
	}
	update(changedProperties) {
		super.update(changedProperties);
		if (!changedProperties.has('name')) return;
		this._initPlayerData();
	}

	addOne() {
		this.clicker.buyClicker(clickerTypes.SimpleClicker);
	}
	buyClicker() {
		this.clicker.buyClicker(clickerTypes.BasicAutoClicker);
	}
	buyMegaClicker() {
		this.clicker.buyClicker(clickerTypes.MegaClickers);
	}
	navegate(path) {
		// en identify-container e usado otra forma de navegar, para probar varios conceptos
		navigate(this, path);
	}
	render() {
		return html`
			<game-title-element backgroundColor="#262626">
				<icon-element icon="person" color="white" size="60px"></icon-element>
				<p>${this.name}</p>
				<icon-element
					class="go-identify"
					icon="logout"
					color="white"
					size="80px"
					@click="${() => this.navegate('/identify')}"
				></icon-element>
			</game-title-element>
			<div class="container">
				<div class="game-text">
					<p>Merge Pull Request: <span>${this.counterValue}</span></p>
					<p>Auto mergers: ${this.numberOfClickers}</p>
				</div>

				<button-element @click="${this.addOne}" width="10em">
					<icon-element icon="merge_type" size="70px"></icon-element>
					Add 1
				</button-element>
				<div class="auto-clicker-group">
					<button-element
						?disabled="${!this.basicAutoClickerEnabled}"
						@click="${this.buyClicker}"
						fontSize="1em"
					>
						<icon-element icon="merge_type" size="70px"></icon-element>
						Add clicker: ${this.actualClickerPrice}
					</button-element>
					<button-element
						?disabled="${!this.megaClickersEnabled}"
						@click="${this.buyMegaClicker}"
						fontSize="1em"
					>
						<icon-element icon="merge_type" size="70px"></icon-element>
						Add Mega clicker: ${this.megaClickersActualClickerPrice}
					</button-element>
				</div>
			</div>
		`;
	}
}

customElements.define('game-container-element', GameContainerElement);