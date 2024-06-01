import axios from "axios";
import { baseUrl } from "../../utils/baseUrls/baseUrls";



const api = "/api/stripe/payement";
export async function atempsToPayement(parameters) {
  return await axios
    .post(baseUrl.url + api, parameters)
    .then((res) => {
      return res.data;
    })
    .catch((err) =>
      console.error("erreur lor de la pvalidation du payement " + err)
    );
}
