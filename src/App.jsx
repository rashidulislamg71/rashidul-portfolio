

import { Outlet, ScrollRestoration } from 'react-router-dom';


const App = () => {
  return (
    <div>
      <ScrollRestoration />
       <Outlet />
    </div>
  );
};

export default App;