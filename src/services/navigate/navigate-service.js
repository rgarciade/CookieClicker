/**
 *
 * @param that - this ref to the element that dispatches the event.
 * @param href - The link to navigate.
 */
export const navigate = (elementRef, href) => {
	elementRef.dispatchEvent(
		new CustomEvent('router-navigate', {
			detail: href,
			bubbles: true,
			composed: true,
		})
	);
};
