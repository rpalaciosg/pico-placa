import { time } from 'console';
import { Plate } from './models/Plate.js';
import { ScheduleNoCirculation } from './models/ScheduleNoCirculation.js';
 const rulesMap = new Map<, ScheduleNoCirculation>();
const ruleSchedule = {
  "Monday": [1,2],
  "Tuesday": [3,4],
  "Wednesday": [5,6],
  "Thursday": [7,8],
  "Friday": [9,0],
  "Saturday":[],
  "Sunday":[]
};
const placaSusuki = new Plate("PTM-193");
console.clear();
/**
 * Hora
 */
  const time1 = new Date();
  const timeTest =  "14:12";
  const [hours, minutes] = timeTest.split(':');
  time1.setHours(parseInt(hours), parseInt(minutes));
/**
 * Fecha
 */
const dateTest = "19/06/2023";
 function getDayName(date: string): string{
   const [day, month, year] = date.split("/");
   const date1 = new Date(parseInt(year), parseInt(month)-1, parseInt(day));
   const numberDay = date1.getDay();
   return ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][numberDay];
 }


  /**
   * 
   * @param plate 
   * @param date 
   * @param time 
   */

  public function predictor(plate:Plate, date: string, time: Date):string {
    const lastDigitPlate = plate.lastDigitPlate();
    const nameDay = getDayName(date);
    


}

predictor(placaSusuki,dateTest , time1)