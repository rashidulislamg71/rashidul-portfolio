

import { useEffect, useLocation, useNavigate, useState } from "react";

const PrevLocation = () => {
  const [prevLocation, setPrevLocation] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (prevLocation === null) {
      setPrevLocation(location);
    }
  }, [location, prevLocation]);

  const goBack = () => {
    if (prevLocation) {
      // navigate(prevLocation.pathname);
      console.log(navigate(prevLocation));
    }
  };

  return goBack;
};

export default PrevLocation;