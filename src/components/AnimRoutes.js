import React from 'react';
import Home from '../pages/Home.jsx';
import FindEase from '../pages/FindEase.jsx';
import { Routes, Route } from 'react-router-dom';

const AnimRoutes = () => {
    return <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/findease' element={<FindEase />} />
    </Routes>;
};

export default AnimRoutes;