import './header.scss';
const APP_SELECTOR: string = 'app-header';
class Header {
	constructor() {}

	get selector() {
		return APP_SELECTOR;
	}

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

export default Header;