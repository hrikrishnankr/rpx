export default class Search {
	constructor() {
		console.log("Search Class");
	}

	afterViewInit(element) {
		console.log(element)
	}

	view() {
		return `
			<div>\
				This is Search\
				<input placeholder='search' name='search'>\
				<button id='button'>\
					Search\
				</button>\
			</div>\
		`;
	}
}