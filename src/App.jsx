/* eslint-disable no-unused-vars */

import { useEffect } from 'react';
import Portfolio from './Pages/Portfolio/Portfolio';


const App = () => {
  
  useEffect(()=>{
    window.scrollTo(0,0);
  }, []);

  return (
    <div>
     <Portfolio />
    </div>
  );
};

export default App;