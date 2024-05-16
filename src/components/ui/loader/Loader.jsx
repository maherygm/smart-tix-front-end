import React from "react";
import { InfinitySpin } from "react-loader-spinner";
const Loader = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="flex items-center justify-center rounded-md  bg-white py-10 shadow-lg">
        <InfinitySpin
          visible={true}
          width="200"
          color="#0159FD"
          ariaLabel="infinity-spin-loading"
        />
      </div>
    </div>
  );
};

export default Loader;
