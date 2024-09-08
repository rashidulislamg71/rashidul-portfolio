/* eslint-disable no-unused-vars */


import { Outlet, ScrollRestoration } from 'react-router-dom';
import Portfolio from './Pages/Portfolio/Portfolio';
import PrevLocation from './Components/PreviousLocation/PrevLocation';

const App = () => {
  return (
    <div>
      {/* <Portfolio /> */}
      <ScrollRestoration />
       <Outlet />
    </div>
  );
};

export default App;