import './main.scss';
import './routes';
import AppHeader from './shared/header';
import LoadView from './routes/loadView';

const DEPENDECY_ARRAY: Array<any> = [AppHeader];

const loadAllDependency = () => {
	DEPENDECY_ARRAY.forEach((module: any) => {
		module().then(component => {
			LoadView.load(component, document, true)
		})
	});
};

const Main = () => {
	loadAllDependency();
}
Main();