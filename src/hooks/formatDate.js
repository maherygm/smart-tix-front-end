import moment from "moment";
import "moment/locale/fr";
moment.locale("fr");
export function formatDate(date) {
  const dateString = date;
  const formattedDate = moment(dateString).format("DD MMMM YYYY [à] HH[h]");

  return formattedDate;
}
