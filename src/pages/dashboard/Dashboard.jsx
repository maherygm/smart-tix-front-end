import React from "react";
import QrReadDialog from "./component/QrReadDialog";

const Dashboard = () => {
  return (
    <>
      <div>Dashboard</div>
      <div className="flex items-center justify-center">
        <div className="size-96">
          <QrReadDialog />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
