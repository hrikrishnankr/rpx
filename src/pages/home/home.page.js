const HomePage = () => import('./home').then(module => new module.default())

export default HomePage;