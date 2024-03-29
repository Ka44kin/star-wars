import PeoplePage from '@containers/PeoplePage';
import PersonPage from '@containers/PersonPage';
import HomePage from '@containers/HomePage';
import NotFoundPage from '@containers/NotFoundPage';
import FavoritesPage from '@containers/FavoritesPage';


const routesConfig = [
    {
        path: '/',
        element : <HomePage/>
    },
    {
        path: '/people',
        element : <PeoplePage/>
    },
    {
        path: '/people/:id',
        element : <PersonPage/>
    },
    {
        path: '/favorites',
        element : <FavoritesPage/>
    },
    {
        path: '*',
        element : <NotFoundPage/>
    },
    
];
export default routesConfig;