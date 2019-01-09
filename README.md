# Project RPX - An SPA without framework

## App setup

```
npm run init
npm start (start development)
npm run build (Production build)

```

## Project Architecture

- __Pages__ has the page components
- __routes__ contains the routing

```
import Nagvigant from "./navigator";
import HomePage from '../pages/home';
import SearchPage from '../pages/search';

let navigate = new Nagvigant();

navigate
	.on('home', HomePage)
	.on('search', SearchPage);
```