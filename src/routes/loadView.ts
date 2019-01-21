class LoadViewHelper {
	constructor(args?: any) {}

	load(module:any, wraper?: any, hasSelector?: boolean) {
		let component: any = new module.default();
		let selector: string = hasSelector ? component.selector : 'router';
		let view: string = component.view();
		let router: any = wraper ? wraper.querySelector(selector): document.querySelector(selector);
		router.innerHTML = view;
		component.afterViewInit(router);
		return router;
	}
}

const LoadView = new LoadViewHelper();
export default LoadView;