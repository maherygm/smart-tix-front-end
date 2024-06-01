function isDateInTheFuture(dateString) {
  const inputDate = new Date(dateString);
  const currentDate = new Date();

  // Comparaison
  return inputDate > currentDate;
}

function isDateInThePast(dateString) {
  const inputDate = new Date(dateString);
  const currentDate = new Date();

  // Comparaison
  return inputDate < currentDate;
}

export function dateIdentifiers(date) {
  if (isDateInTheFuture(date)) {
    return "incoming";
  } else if (isDateInThePast(date)) {
    return "past";
  } else {
    return "now";
  }
}
