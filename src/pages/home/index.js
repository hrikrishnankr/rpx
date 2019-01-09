import LoadView from '../../routes/loadView';

const HomePage = () => import('./home').then(module => LoadView.load(module));
export default HomePage;