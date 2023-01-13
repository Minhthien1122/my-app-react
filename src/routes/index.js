// Layouts
import { HeaderOnly } from '~/components/Layout';

// Pages
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Detail from '~/pages/Detail';

// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/detail', component: Detail },
    { path: '/profile', component: Profile, layout: null},
    { path: '/upload', component: Upload, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };