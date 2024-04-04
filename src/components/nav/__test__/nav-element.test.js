import { html, fixture } from '@open-wc/testing';
import '../nav-element.js';

import { expect } from '@jest/globals';
import { axe, toHaveNoViolations } from 'jest-axe';
import { cleanedLit } from '../../../../testFunctions/cleanedLit.js';
expect.extend(toHaveNoViolations);

describe('nav-element', () => {
	it('nav matches the snapshot', async () => {
		const el = await fixture(
			html`<navelement icon="person"
				><p>1</p>
				<p>2</p>
				<p>3</p></navelement
			>`
		);
		const dataCleaned = cleanedLit(el);
		expect(dataCleaned).toMatchSnapshot();
	});
	it('accessibility test', async () => {
		const el = await fixture(html`<nav-element icon="person"></nav-element>`);
		const results = await axe(el);
		expect(results).toHaveNoViolations();
	});
});
