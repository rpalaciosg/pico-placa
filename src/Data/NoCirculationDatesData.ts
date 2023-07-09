import { NoCirculationDateRules } from "../models/NoCirculationDateRules.js";

 export const collectionNoCirculationDates: NoCirculationDateRules[] = [
  { id:1, dayWeek:1, dayWeekDescription:'Monday', rangeLastDigitsPlate:[1,2]},
  { id:2, dayWeek:2, dayWeekDescription:"Tuesday", rangeLastDigitsPlate:[3,4]},
  { id:3, dayWeek:3, dayWeekDescription:"Wednesday", rangeLastDigitsPlate:[5,6] },
  { id:4, dayWeek:4, dayWeekDescription:"Thursday", rangeLastDigitsPlate:[7,8] },
  { id:5, dayWeek:5, dayWeekDescription:"Friday", rangeLastDigitsPlate:[9,0] },
  { id:6, dayWeek:6, dayWeekDescription:"Saturday", rangeLastDigitsPlate:[] },
  { id:7, dayWeek:7, dayWeekDescription:"Sunday", rangeLastDigitsPlate:[] },
 ];