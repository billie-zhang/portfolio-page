import React from 'react';
import Home from '../pages/Home.jsx';
import AboutMe from '../pages/AboutMe.jsx';
import FindEase from '../pages/FindEase.jsx';
import { Routes, Route } from 'react-router-dom';
import NoPage from '../pages/NoPage.jsx';

const AnimRoutes = () => {
    return <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutMe />} />
        <Route path='/findease' element={<FindEase />} />
        <Route path='*' element={<NoPage />} />
    </Routes>;
};

export default AnimRoutes;