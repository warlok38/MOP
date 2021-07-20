import { NoMatch } from './components/NoMatch';
import { ReactSpring } from './features/react-spring';

export const routes = [
    {
        path: '/react-spring',
        component: ReactSpring,
    },
    {
        component: NoMatch,
    },
];
