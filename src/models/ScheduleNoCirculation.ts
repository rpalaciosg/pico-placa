import { Rule } from "./Rule.js";

 export class ScheduleNoCirculation implements Rule{

  // ruleSchedule = {
  //   "Monday": [1,2],
  //   "Tuesday": [3,4],
  //   "Wednesday": [5,6],
  //   "Thursday": [7,8],
  //   "Friday": [9,0],
  //   "Saturday":[],
  //   "Sunday":[]
  // };

  public constructor(
    public id: number,
    public dayWeek: number,
    public dayWeekDescription: string,
    public rangeLastDigitsPlate: number[]
  ){}

  // public matchDayWithLastDigitPlate(dayDescriptionSearch: string,
  //                                   scheduleCollection: ScheduleNoCirculation[]): number[] | null {
  // for (const itemSchedule of scheduleCollection){
  //   if (itemSchedule.dayWeekDescription === dayDescriptionSearch) {
  //     return itemSchedule.rangeLastDigitsPlate;
  //   }
  // }
  // return null;
  // }
 }