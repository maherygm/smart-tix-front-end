import { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import img from "../../assets/images/imageBanner/img-4-2.jpg";
import { formatDate } from "../../hooks/formatDate";
import { atempsToPayement } from "../../services/ticketServices";
const Details = () => {
  const [value, setValue] = useState(1);
  const [prixTotal, setPrixTotal] = useState(0);
  const [isLoading, setLoading] = useState(false);

  const { id } = useParams();

  const allEvent = useSelector((selector) => selector.eventReducers);

  const [event, setEvent] = useState([]);

  const navigate = useNavigate();

  function navigateTo(path) {
    navigate(path);
  }

  function handleSubmit() {
    setLoading(true);
    const urlStripe = atempsToPayement({
      priceId: event[0].price_id,
      quatity: value,
    });

    urlStripe
      .then((res) => {
        window.location.href = res;
      })
      .catch((e) => console.log(e));
  }

  useEffect(() => {
    const eventCopy = allEvent.filter((value) => value.id == id);

    setEvent(eventCopy);
    setPrixTotal(eventCopy[0].prix);
  }, [id]);

  if (event.length <= 0) {
    return null;
  }

  return (
    <div className="relative  h-screen w-full">
      <div className="relative">
        <div className="relative h-96 overflow-hidden">
          <img className="" src={img} />
          <div className="absolute left-0 top-0 flex size-full flex-col items-end gap-5 bg-black/20  px-10 pt-5  text-white">
            <p className="text-7xl text-red-500">{event[0].titre_event}</p>
            <p className="text-5xl">{event[0].description}</p>
            <p className="text-3xl">{event[0].lieu}</p>
            <p className="text-3xl">{formatDate(event[0].date)}</p>
            <p className="text-3xl">Paf :{event[0].prix} Ar</p>
          </div>
        </div>
        <div className="absolute left-20 top-20 w-96">
          <img className="w-full" src={event[0].image_path} />
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
                          setPrixTotal(event[0].prix * (value - 1));
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
                    setPrixTotal(event[0].prix * (value + 1));
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
              onClick={() => navigateTo(-1)}
              className=" cursor-pointer rounded-lg bg-blue-50 p-4 transition-colors duration-200 hover:bg-blue-100"
            >
              Retour
            </div>
            <div
              onClick={() => handleSubmit()}
              className=" cursor-pointer rounded-lg bg-blue-500 p-4 text-white transition-colors duration-200 hover:bg-blue-600"
            >
              {isLoading ? (
                <>
                  <div className="flex gap-2">
                    <AiOutlineLoading3Quarters className="animate-spin text-2xl" />
                    Loading...
                  </div>
                </>
              ) : (
                " Acheter"
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
