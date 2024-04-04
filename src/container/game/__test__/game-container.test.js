import { html, fixture } from '@open-wc/testing';
import '../game-container-element.js';
import { expect } from '@jest/globals';
import { cleanedLitElements } from '../../../../testFunctions/cleanedLit.js';
import { getAllElementsAndShadowRoots } from 'shadow-dom-testing-library';

describe('game-container-element', () => {
	it('game-container matches the snapshot', async () => {
		const el = await fixture(
			html`<game-container-element name="nombre test"></game-container-element>`
		);
		const data = getAllElementsAndShadowRoots(el, '*');
		const dataCleaned = cleanedLitElements(data);
		expect(dataCleaned).toMatchSnapshot();
	});
});
