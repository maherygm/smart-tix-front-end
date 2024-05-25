import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "../../components/ui/loader/Loader";
import {
  __AUTH__,
  __AUTH__LOGIN__,
  __AUTH__SIGNUP__,
  __DASHBOARD__,
  __DETAILS__,
  __EXPLORE__,
  __MAIN__,
  __PANORAMA__,
  __REDIRECT__,
  __REDIRECT__NOTFOUND__,
  __REDIRECT__SUCCESS__,
  __REDIRECT__UNAUTHORIZED__,
} from "./RouteConfig.jsx";

export const RouteConfig = () => {
  return (
    <Suspense fallback={<Loader />}>
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

        {/* explore */}
        <Route path="/explore" element={<__EXPLORE__ />} />

        {/* pannorama */}
        <Route path="/panorama" element={<__PANORAMA__ />} />

        {/* details */}
        <Route path="/details" element={<__DETAILS__ />} />

        {/* redirect route */}
        <Route path="/redirect" element={<__REDIRECT__ />}>
          <Route path="notfound" element={<__REDIRECT__NOTFOUND__ />} />
          <Route path="unauthorized" element={<__REDIRECT__UNAUTHORIZED__ />} />
          <Route path="success" element={<__REDIRECT__SUCCESS__ />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
