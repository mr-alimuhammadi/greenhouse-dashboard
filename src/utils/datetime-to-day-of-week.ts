import { getDay } from "date-fns";

export default function datetimeToDayOfWeek(date: Date) {
  switch (getDay(date)) {
    case 0:
      return "Su";
    case 1:
      return "Mo";
    case 2:
      return "Tu";
    case 3:
      return "We";
    case 4:
      return "Th";
    case 5:
      return "Fr";
    case 6:
      return "Sa";
  }
}
