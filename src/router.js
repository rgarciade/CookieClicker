import { LitElement,html } from 'lit';
import {Routes} from '@lit-labs/router'
import  './container/game-container-element.js';
import  './container/identify-container-element.js';

const appRoutes = [
    {path: '/identify', render: () => html`  <identify-container-element />`},
    {path: '/game*', render: () => {
            const urlParams = new URLSearchParams(window.location.search);
            const gamerName = urlParams.get('name');
            return html`<game-container-element name=${gamerName}></game-container-element>`;
        }},
    {path: '/*', render: () => html`<identify-container-element />`},
]

export class RouterElement extends LitElement {
    _navegateUrl(url){
        const pathName = new URL(url).pathname;
        this._routes.goto(pathName);
        history.pushState({},"URL Rewrite by router: ",pathName)
    }
    _navegatePath(path){
        this._routes.goto(path);
        history.pushState({},"URL Rewrite by router: ",path)
    }
    constructor() {
        super();
        this._routes = new Routes(this, appRoutes );
        this._routes.goto(window.location.pathname);

        this.addEventListener('router-navigate', (e) => {
            console.log('navegate to---',e.detail)
            this._navegatePath(e.detail);
        })
    }
    connectedCallback() {
        super.connectedCallback();
        window.addEventListener('popstate', async () => {
            console.log('navegate to---',window.location.href)
            await this._routes.goto(window.location.pathname);
        });
    }

    render() {
        return html`
          <main>
              ${this._routes.outlet()}
          </main>
    `;
    }
}

customElements.define('router-element', RouterElement);
