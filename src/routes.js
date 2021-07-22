import { NoMatch } from './components/NoMatch';
import { Drag } from './features/drag';
import { ReactSpring } from './features/react-spring';

export const routes = [
    {
        path: '/react-spring',
        component: ReactSpring,
    },
    {
        path: '/drag',
        component: Drag,
    },
    {
        component: NoMatch,
    },
];
