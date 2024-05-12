import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const __AUTH__ = lazy(() => import("../../pages/auth/Auth"));
const __AUTH__LOGIN__ = lazy(() => import("../../pages/auth/login/Login"));
const __AUTH__SIGNUP__ = lazy(() => import("../../pages/auth/signup/SIgnUp"));

const __MAIN__ = lazy(() => import("../../pages/main/Main"));

const __DASHBOARD__ = lazy(() => import("../../pages/dashboard/Dashboard"));

const __REDIRECT__ = lazy(() => import("../../pages/redirect/Redirect"));
const __REDIRECT__NOTFOUND__ = lazy(
  () => import("../../pages/redirect/notFound/NotFound")
);
const __REDIRECT__UNAUTHORIZED__ = lazy(
  () => import("../../pages/redirect/unhautorized/Unhautorized")
);
const RouteConfig = () => {
  return (
    <Suspense fallback={null}>
      <Routes>
        {/* authentification Route  */}
        <Route path="/auth" element={<__AUTH__ />}>
          <Route path="login" element={<__AUTH__LOGIN__ />} />
          <Route path="signUp" element={<__AUTH__SIGNUP__ />} />
          <Route />
        </Route>

        {/* main  Route  */}
        <Route path="/" element={<__MAIN__ />} />

        {/* dashboard Route  */}
        <Route path="/dashboard" element={<__DASHBOARD__ />} />

        {/* redirect route */}
        <Route path="/redirect" element={<__REDIRECT__ />}>
          <Route path="notfound" element={<__REDIRECT__NOTFOUND__ />} />
          <Route path="unauthorized" element={<__REDIRECT__UNAUTHORIZED__ />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default RouteConfig;
