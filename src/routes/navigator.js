export default class Nagvigant {
	constructor(args) {
		this._events = {
			'hashChange': {}
		};
		this.register('hashchange',this.onHashChange.bind(this));
		this.register('load',() => this.onHashChange({ newURL: location.href }));
	}

	on(path, component) {
		this._events.hashChange[path] || (this._events.hashChange[path] = []);
		this._events.hashChange[path].push(component);
		return this;
	}

	register(event, callback) {
		window.addEventListener(event, (e)=>{
			callback(e);
		});
	}

	getAllPath(url) {
		let hashSplit = (url.split('#')[1] && url.split('#')[1].split('/')) || [];
		return hashSplit.filter(path => path);
	}

	onHashChange(event) {
		let allPtahs = this.getAllPath(event.newURL);
		allPtahs.forEach(path => {
			this._events.hashChange[path].forEach(component => {
				component();
			});
		});
	}
}