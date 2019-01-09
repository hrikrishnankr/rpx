import LoadView from '../../routes/loadView';

const SearchPage = () => import('./search').then(module => LoadView.load(module))
export default SearchPage;