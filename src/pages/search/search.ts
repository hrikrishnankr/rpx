import InputComponent from '../../core/input';

export default class Search {
	constructor() {
		console.log("Search Class");
	}

	afterViewInit(element: any) {
		InputComponent();
	}

	view() {
		return `
			<div>\
				This is Search\
				<input-component></input-component>
				<button id='button'>\
					Search\
				</button>\
			</div>\
		`;
	}
}