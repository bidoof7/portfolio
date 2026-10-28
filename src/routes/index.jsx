import config from '~/config';
import Home from '~/pages/Home';
import Projects from '~/pages/Projects';

const publicRoutes = [
      { path: config.routes.home, component: Home },
      { path: config.routes.projects, component: Projects },
];

export { publicRoutes };
