export default class Header {
	constructor() {}

	afterViewInit(element: any) {}

	view() {
		return `
			<header>\
				<div class="logo">RPX<div>\
				<div class="profile"></div>\
			</header>\
		`;
	}
}