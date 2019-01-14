import './input.scss';
import Selector from '../../routes/selector.decorator';

export default class Input {
	constructor() {
		
	}

	afterViewInit(element: any) {
		console.log(element)
	}

	view() {
		return `
			<div class="group">\     
				<input type="text" required>\
				<label>Email</label>\
			</div>\
		`;
	}
}