export const getFormattedDate = (date) => {
  return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
}

export const getDateMinusDays = (date, days) => {
  return Date(date.getFullYear(), date.getMonth(), date.getDate() - days)
}