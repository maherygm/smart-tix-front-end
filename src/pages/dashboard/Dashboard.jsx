import Header from "./content/header/Header";
import Incoming from "./content/incomming/Incoming";
import Last from "./content/last/Last";

const Dashboard = () => {
  return (
    <div className="px-20">
      <Header />
      <Incoming />
      <Last />
    </div>
  );
};

export default Dashboard;
