export default class Nagvigant {
	private _events: any;
	constructor(args?: any) {
		this._events = {
			'hashChange': {}
		};
		this.register('hashchange',this.onHashChange.bind(this));
		this.register('load',() => this.onHashChange({ newURL: location.href }));
	}

	on(path: string, component: any) {
		this._events.hashChange[path] || (this._events.hashChange[path] = []);
		this._events.hashChange[path].push(component);
		return this;
	}

	register(event: string, callback: any) {
		window.addEventListener(event, (e)=>{
			callback(e);
		});
	}

	getAllPath(url: string) {
		let hashSplit = (url.split('#')[1] && url.split('#')[1].split('/')) || [];
		return hashSplit.filter(path => path);
	}

	onHashChange(event: any) {
		let allPtahs = this.getAllPath(event.newURL);
		allPtahs.forEach(path => {
			this._events.hashChange[path].forEach(component => {
				component();
			});
		});
	}
}