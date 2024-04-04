if (!globalThis.URLPattern) {
	// necesario para el funcionamiento del router en ios
	await import('urlpattern-polyfill');
}
import(`./router.js`);
//prevenimos que se habilite el doble click y se amplie la pantalla en iphone
document.addEventListener('dblclick', function (event) {
	event.preventDefault();
});
