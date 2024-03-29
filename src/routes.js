import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Login from './pages/Login';
import Register from './pages/Register';
import DashboardApp from './pages/DashboardApp';
import Products from './pages/Products';
import Blog from './pages/Blog';
import User from './pages/User';
import NotFound from './pages/Page404';
import Dashboard from './pages/Dashboard';
import Main from './pages/Main';
import AduanCreate from './pages/AduanCreate';
import Pelapor from './pages/Pelapor';
import Roles from './pages/Roles';

// ----------------------------------------------------------------------

// dasboard.aduan.com
// aduan.com/login
// dasboard.aduan.com/aduan
// dasboard.aduan.com/pelapor
// dasboard.aduan.com/roles

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        // { element: <Navigate to="/dashboard/app" replace /> },
        { path: '/', element: <Main /> },
        { path: 'dashboard', element: <Dashboard /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: 'aduan/create', element: <AduanCreate /> },
        { path: 'pelapor', element: <Pelapor /> },
        { path: 'roles', element: <Roles /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> },

        { path: 'app', element: <DashboardApp /> },
        { path: 'user', element: <User /> },
        { path: 'products', element: <Products /> },
        { path: 'blog', element: <Blog /> }
      ]
    },
    {
      path: '/logo',
      element: <LogoOnlyLayout />,
      children: [
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: 'dashboard', element: <Dashboard /> }
      ]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
