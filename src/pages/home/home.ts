import './home.scss';
import InputComponent from '../../core/input';

export default class Home {
	constructor() {
		
	}

	afterViewInit(element: any) {
		console.log(element);
		InputComponent();
	}

	view() {
		return `
			<div>\
				This is Home\
				<input-component></input-component>
				<button id='button'>\
					Click Me\
				</button>\
			</div>\
		`;
	}
}