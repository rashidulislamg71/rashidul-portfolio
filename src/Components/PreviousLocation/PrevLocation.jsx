

import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PrevLocation = () => {
    const location = useLocation();
    useEffect(()=>{
        window.scrollTo();
    },[location])
    return null;
};


export default PrevLocation;