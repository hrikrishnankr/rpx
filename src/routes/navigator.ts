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

	private addRouteChange(hashChnage: any, child: any) {
		hashChnage[child.path] = { component: child.component };
	}

	private addChildRoutes(hashChnage: any, childRoute: any) {
		if(childRoute && childRoute.children) {
			childRoute.children.forEach(child => {
				this.addRouteChange(hashChnage[childRoute.path], child);
				this.addChildRoutes(hashChnage[childRoute.path], child);
			})
		}
	}

	on(path: string, route: any|Children) {
		this.addRouteChange(this._events.hashChange, { path, component: route.component || route});
		this.addChildRoutes(this._events.hashChange, { path, ...route});
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
		let loadRoute = (path: any, wrap?: any) => {
			idx++;
			let component = path && path.component;
			if(component) {
				component().then(module => {
					let routeWrap = LoadView.load(module, wrap);
					allPtahs[idx] && loadRoute(path[allPtahs[idx]], routeWrap)
				})
			} else {
				// Redirect to deafult
			}
		}
		loadRoute(this._events.hashChange[allPtahs[idx]]);
	}
}