import React from 'react';
import Home from '../pages/Home.jsx';
import EcoThreads from '../pages/EcoThreads';
import { Routes, Route } from 'react-router-dom';

const AnimRoutes = () => {
    return <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ecothreads' element={<EcoThreads />} />
    </Routes>;
};

export default AnimRoutes;