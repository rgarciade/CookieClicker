import { html, fixture } from '@open-wc/testing';
import '../icon-element.js';

import { expect } from '@jest/globals';
import { axe, toHaveNoViolations } from 'jest-axe';
import { cleanedLit } from '../../../../testFunctions/cleanedLit.js';
expect.extend(toHaveNoViolations);

describe('icon-element', () => {
	it('icon matches the snapshot', async () => {
		const el = await fixture(html`<icon-element icon="person"></icon-element>`);
		const dataCleaned = cleanedLit(el);
		expect(dataCleaned).toMatchSnapshot();
	});
	it('accessibility test', async () => {
		const el = await fixture(
			html`<main><icon-element icon="person"></icon-element></main>`
		);
		const results = await axe(el);
		expect(results).toHaveNoViolations();
	});
});
