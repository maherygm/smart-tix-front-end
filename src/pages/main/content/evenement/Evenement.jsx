import Slide from "../../../../components/ui/slider/Slide";
import { image } from "../../../../utils/imageImport/ImageImport";
const Evenement = () => {
  return (
    <div className=" overflow-hidden bg-white pb-11  pt-2">
      <Slide data={image} />
    </div>
  );
};

export default Evenement;
