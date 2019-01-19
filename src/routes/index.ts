import Nagvigant from "./navigator";
import HomePage from '../pages/home';
import { SearchPage, SearchList } from '../pages/search';

let navigate = new Nagvigant();

navigate
	.on('home', HomePage)
	.on('search', {
		component: SearchPage,
		children: [{
			path: 'list',
			component: SearchList
		}]
	});