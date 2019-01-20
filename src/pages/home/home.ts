export default class Home {
	constructor() {}

	afterViewInit(element: any) {}

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