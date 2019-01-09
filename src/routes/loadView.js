class LoadViewHelper {
	constructor(args) {}

	load(module) {
		let component = new module.default();
		let view = component.view();
		let router = document.querySelector('router');
		router.innerHTML = view;
		component.afterViewInit(router);
	}
}

const LoadView = new LoadViewHelper();
export default LoadView;