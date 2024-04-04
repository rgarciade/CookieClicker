import { html, fixture } from '@open-wc/testing';
import '../button-element.js';
import { getAllElementsAndShadowRoots } from 'shadow-dom-testing-library';
import { expect } from '@jest/globals';

describe('button-element', () => {
	it('matches the snapshot', async () => {
		const el = await fixture(html`<button-element></button-element>`);
		const data = getAllElementsAndShadowRoots(el, '*');
		expect(data).toMatchSnapshot();
	});
	it('matches the snapshot slot', async () => {
		const el = await fixture(
			html`<button-element><p>example-p</p></button-element>`
		);
		const data = getAllElementsAndShadowRoots(el, '*');
		expect(data).toMatchSnapshot();
	});
});
