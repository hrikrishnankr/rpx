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

	private addRouteChange(hashChange: any, child: any) {
		if(child.path == '**') {
			hashChange['**'] = { redirectTo: child.redirectTo }
		} else {
			hashChange[child.path] = { component: child.component };
		}
	}

	private addChildRoutes(hashChange: any, childRoute: any) {
		if(childRoute && childRoute.children) {
			childRoute.children.forEach(child => {
				this.addRouteChange(hashChange[childRoute.path], child);
				this.addChildRoutes(hashChange[childRoute.path], child);
			})
		}
	}

	on(path: string, route: any|Children) {
		this.addRouteChange(this._events.hashChange, { path, ...route, component: route.component || route});
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
		let allPtahs = this.getAllPath(event.newURL), idx = 0, url = '#';
		let loadRoute = (path: any, oldRoute: string, wrap?: any) => {
			idx++;
			let component = path && path[oldRoute] && path[oldRoute].component;
			if(component) {
				component().then(module => {
					url += '/' + oldRoute;
					let routeWrap = LoadView.load(module, wrap);
					allPtahs[idx] && loadRoute(path[oldRoute], allPtahs[idx], routeWrap)
				})
			} else {
				location.hash = url + '/' + path['**'].redirectTo
			}
		}
		loadRoute(this._events.hashChange,allPtahs[idx]);
	}
}