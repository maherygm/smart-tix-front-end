import { useState } from "react";
import { useNavigate } from "react-router-dom";
import img from "../../assets/images/imageBanner/img-4-2.jpg";
import imgaffice from "../../assets/images/op/img_11.jpg";
const Details = () => {
 
    
  const [value, setValue] = useState(1);
  const [prixTotal, setPrixTotal] = useState(5000);
  return (
    <div className="relative  h-screen w-full">
      <div className="relative">
        <div className="relative h-96 overflow-hidden">
          <img className="" src={img} />
          <div className="absolute left-0 top-0 flex size-full flex-col items-end gap-5 bg-black/20  px-10 pt-5  text-white">
            <p className="text-7xl text-red-500">AMBONDRONA</p>
            <p className="text-5xl">CONCERT</p>
            <p className="text-3xl">ROYAL ESPACE BATERAVOLA</p>
            <p className="text-3xl">13 AOUT 2023 a 15h</p>
            <p className="text-3xl">Paf : 5000 ariary</p>
          </div>
        </div>
        <div className="absolute left-20 top-20 w-96">
          <img className="w-full" src={imgaffice} />
        </div>
      </div>
      <div className="flex  flex-col items-end gap-6 p-9 px-36">
        <div className="flex w-fit flex-col gap-6">
          <div>
            <h1 className="m-5 text-center text-4xl">Achats billets</h1>

            <div className="flex items-center gap-5">
              <p>Prix Unitaire : 5000 ar |</p>
              <p>Nombre de billet |</p>
              <div className="flex gap-5">
                <div
                  onClick={
                    value !== 0
                      ? () => {
                          setValue((val) => val - 1);
                          setPrixTotal(5000 * (value - 1));
                        }
                      : null
                  }
                  className="cursor-pointer rounded-lg bg-blue-50 px-2 py-1 text-2xl transition-colors duration-200 hover:bg-blue-100"
                >
                  -
                </div>
                <input
                  className="w-20 rounded-lg border-2 border-blue-600 p-1 pl-4 text-black outline-none"
                  type="number"
                  min={1}
                  value={value}
                />
                <div
                  onClick={() => {
                    setValue(value + 1);
                    setPrixTotal(5000 * (value + 1));
                  }}
                  className="cursor-pointer rounded-lg bg-blue-50 px-2 py-1 text-2xl transition-colors duration-200 hover:bg-blue-100"
                >
                  +
                </div>
              </div>
              <p>| Prix Total : {prixTotal} ar </p>
            </div>
          </div>
          <div className="flex items-end justify-end  gap-4">
            <div
              onClick={() => goBack()}
              className="cursor-pointer rounded-lg bg-blue-50 px-2 py-1 text-2xl transition-colors duration-200 hover:bg-blue-100"
            >
              Retour
            </div>
            <div className="cursor-pointer rounded-lg bg-blue-500 px-2 py-1 text-2xl text-white transition-colors duration-200 hover:bg-blue-600">
              Acheter
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
