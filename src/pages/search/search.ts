export default class Search {
	constructor() {}

	afterViewInit(element: any) {}

	view() {
		return `
			<div>\
				This is Search\
				<input placeholder='search' name='search'>\
				<button id='button'>\
					Search\
				</button>\
				<router></router>\
			</div>\
		`;
	}
}