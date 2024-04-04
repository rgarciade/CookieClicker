import { html, fixture } from '@open-wc/testing';
import '../identify-container-element.js';
import { expect } from '@jest/globals';
import { cleanedLitElements } from '../../../../testFunctions/cleanedLit.js';
import { getAllElementsAndShadowRoots } from 'shadow-dom-testing-library';

describe('identify-container-element', () => {
	it('identify-container matches the snapshot', async () => {
		const el = await fixture(
			html`<identify-container-element></identify-container-element>`
		);
		const data = getAllElementsAndShadowRoots(el, '*');
		const dataCleaned = cleanedLitElements(data);
		expect(dataCleaned).toMatchSnapshot();
	});
});
