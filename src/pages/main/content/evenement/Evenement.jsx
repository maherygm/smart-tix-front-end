import Slide from "../../../../components/ui/slider/Slide";
const Evenement = ({ data }) => {
  if (!data) {
    return <p>no data !!</p>
  }
  return (
    <div className="overflow-hidden bg-white pb-11 pt-2 ">
      <Slide data={data} />
    </div>
  );
};

export default Evenement;
