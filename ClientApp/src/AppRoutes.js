import ApiAuthorzationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { ReportWhales } from "./components/ReportWhales";
import { WhalesNearMe } from "./components/WhalesNearMe";
import { Home } from "./components/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/report-whales',
    element: <ReportWhales />
  },
  ,
  {
    path: '/whales-nearme',
    element: <WhalesNearMe />
  },
  {
    path: '/fetch-data',
    requireAuth: true,
    element: <FetchData />
  },
  ...ApiAuthorzationRoutes
];

export default AppRoutes;
