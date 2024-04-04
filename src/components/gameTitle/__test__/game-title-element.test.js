import { html, fixture } from '@open-wc/testing';
import '../game-title-element.js';
import { getAllElementsAndShadowRoots } from 'shadow-dom-testing-library';
import { expect } from '@jest/globals';

describe('game-title-element', () => {
	it('matches the snapshot', async () => {
		const el = await fixture(html`<game-title-element></game-title-element>`);
		const data = getAllElementsAndShadowRoots(el, '*');
		expect(data).toMatchSnapshot();
	});
});
