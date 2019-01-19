export default class List {
	constructor() {
		console.log("Search Class");
	}

	afterViewInit(element: any) {
		console.log(element)
	}

	view() {
		return `
			<div>\
				This is List\
			</div>\
		`;
	}
}