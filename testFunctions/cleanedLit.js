// eslint-disable-next-line no-undef
const { prettyDOM } = require('@testing-library/dom');

export const cleanedLit = (htmlElement) => {
	const domHTML = prettyDOM(htmlElement, Infinity);
	const cleaned = domHTML.replace(/"<!--\?lit\$.*?-->"/g, '""');
	return cleaned;
};
export const cleanedLitElements = (htmlElements) => {
	const cleaned = htmlElements.map((htmlElement) => {
		return cleanedLit(htmlElement);
	});
	return cleaned;
};
