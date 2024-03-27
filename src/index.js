if (!globalThis.URLPattern) {
    await import("urlpattern-polyfill");
}
import(`./router.js`);
