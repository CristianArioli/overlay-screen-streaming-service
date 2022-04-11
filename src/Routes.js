import React, {lazy, Suspense} from 'react';
import LoadingSpin from "react-loading-spin";
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import history from './utils/history';
const Overlay = lazy(() => import('./Pages/Overlay/overlay'));

const routes = () => (
  <BrowserRouter history={history}>
    <Suspense fallback={<LoadingSpin primaryColor="black" />}>   
      <Routes>
        <Route path="/" element={<Overlay/>}/>
        <Route
        path="*"
        element={<Navigate to="/" />}
        />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default routes;