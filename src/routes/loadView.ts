class LoadViewHelper {
	constructor(args?: any) {}

	load(module:any, selector?: string) {
		let component: any = new module.default();
		let view: string = component.view();
		let router: any = document.querySelector(selector || 'router');
		router.innerHTML = view;
		component.afterViewInit(router);
	}
}

const LoadView = new LoadViewHelper();
export default LoadView;