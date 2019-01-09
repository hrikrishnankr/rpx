import Nagvigant from "./navigator";
import HomePage from '../pages/home';
import SearchPage from '../pages/search';

let navigate = new Nagvigant();

navigate
	.on('home', HomePage)
	.on('search', SearchPage);