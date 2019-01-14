import LoadView from '../../routes/loadView';

const InputComponent = () => import('./input').then(module => LoadView.load(module, 'input-component'));
export default InputComponent;