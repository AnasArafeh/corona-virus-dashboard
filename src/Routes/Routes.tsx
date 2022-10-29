import React from 'react';
import { Route, Routes } from 'react-router-dom';

const DashboardComponents = React.lazy(() => import('../Screens/Dashboard/index'));

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<DashboardComponents component="base" />}></Route>
        </Routes >
    )
}

export default AppRoutes;