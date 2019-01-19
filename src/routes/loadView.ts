class LoadViewHelper {
	constructor(args?: any) {}

	load(module:any, wraper?: any) {
		let component: any = new module.default();
		let view: string = component.view();
		let router: any = wraper ? wraper.querySelector('router'): document.querySelector('router');
		router.innerHTML = view;
		component.afterViewInit(router);
		return router;
	}
}

const LoadView = new LoadViewHelper();
export default LoadView;