export default class Home {
	constructor() {
		
	}

	afterViewInit(element: any) {
		console.log(element)
	}

	view() {
		return `
			<div>\
				This is Home\
				<button id='button'>\
					Click Me\
				</button>\
			</div>\
		`;
	}
}