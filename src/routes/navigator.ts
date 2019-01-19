import LoadView from './loadView';

interface Child {
	path: string,
	component: any
}

interface Children {
	children : Array<Child>
}

export default class Nagvigant {
	private _events: any;

	constructor(args?: any) {
		this._events = {
			'hashChange': {}
		};
		this.register('hashchange',this.onHashChange.bind(this));
		this.register('load',() => this.onHashChange({ newURL: location.href }));
	}

	private addRouteChange(path: string, component: any) {
		this._events.hashChange[path] = component;
	}

	private addChildRoutes(route: any) {
		if(route.children) {
			route.children.forEach(child => {
				this.addRouteChange(child.path, child.component);
				this.addChildRoutes(child);
			})
		}
	}

	on(path: string, route: any|Children) {
		this.addRouteChange(path, route.component || route);
		this.addChildRoutes(route);
		return this;
	}

	private register(event: string, callback: any) {
		window.addEventListener(event, (e) => callback(e));
	}

	private getAllPath(url: string) {
		let hashSplit = (url.split('#')[1] && url.split('#')[1].split('/')) || [];
		return hashSplit.filter(path => path);
	}

	private onHashChange(event: any) {
		let allPtahs = this.getAllPath(event.newURL), idx = 0;
		let loadRoute = (path: string, wrap?: any) => {
			idx++;
			let component = this._events.hashChange[path];
			if(component) {
				component().then(module => {
					let routeWrap = LoadView.load(module, wrap);
					allPtahs[idx] && loadRoute(
						allPtahs[idx],
						routeWrap
					)
				})
			} else {
				// Redirect to deafult
			}
		}
		loadRoute(allPtahs[idx]);
	}
}