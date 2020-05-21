import { format } from 'date-fns';

const getDateByFormat = (date) => {
  const DATE_FORMAT = 'MM/dd/yyyy hh:mm'
  return format(new Date(date), DATE_FORMAT)
}

export default getDateByFormat