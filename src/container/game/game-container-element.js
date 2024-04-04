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

//ScoresState es un mixin que nos permite acceder a los scores del juego y modificarlos
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
		//para que el clicker funcione necesita inicializarse cuando se tiene el nombre del jugador
		this.clicker.initialize({
			initialValue: playerData.value,
			initialNumberOfClickers: playerData.numberOfClickers,
		});
	}
	_updateClickerActualValue() {
		//usamos requestUpdate para que se actualice el valor en el html
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

		//definimos el servicio clicker sin inicializarlo, ya que no tenemos el nombre del jugador
		this.clicker = new ClickerService({
			updateStatusFunction: () => {
				//actualizamos todos los valores modificables del componente
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
		// no e visto necesario dividir en más componentes la vista, si creciera y viera que se pueden reutilizar partes, crearía más componentes
		return html`
			<game-title-element class="game-title">
				<icon-element icon="person" class="person"></icon-element>
				<p>${this.name}</p>
				<icon-element
					class="go-identify"
					icon="logout"
					@click="${() => this.navegate('/identify')}"
				></icon-element>
			</game-title-element>
			<div class="container">
				<div class="game-text">
					<p>Merge Pull Request: <span>${this.counterValue}</span></p>
					<p>Auto mergers: ${this.numberOfClickers}</p>
				</div>

				<button-element @click="${this.addOne}" class="individual-clicker">
					<icon-element icon="merge_type"></icon-element>
					Add 1
				</button-element>
				<div class="auto-clicker-group">
					<button-element
						class="small-clicker"
						?hidden="${!this.basicAutoClickerEnabled}"
						@click="${this.buyClicker}"
					>
						<icon-element icon="merge_type"></icon-element>
						Add clicker: ${this.actualClickerPrice}
					</button-element>
					<button-element
						class="big-clicker"
						?hidden="${!this.megaClickersEnabled}"
						@click="${this.buyMegaClicker}"
					>
						<icon-element icon="merge_type"></icon-element>
						Add Mega clicker: ${this.megaClickersActualClickerPrice}
					</button-element>
				</div>
			</div>
		`;
	}
}

customElements.define('game-container-element', GameContainerElement);
