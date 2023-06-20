import { Plate } from "../models/Plate.js";
import { DateTimeService } from "./DateTimeService.js";
import { Holiday } from "../models/Holiday.js";
import { ScheduleNoCirculation } from "../models/ScheduleNoCirculation.js";

export class PredictorService {

  public constructor(public plate: Plate, public date:string, public time: Date){}
  dateService = new DateTimeService(this.date);

  holidaysCollection: Holiday[] = [
   { idHoliday:1, day: 10, month: 8, year: 2023, description: 'Batalla del Pichincha'},
   { idHoliday:2, day: 1, month:5, year:2023, description: 'Dia del trabajo'},
 ];

 scheduleCollectionNoCirculation: ScheduleNoCirculation[] = [
  { id:1, dayWeek:1, dayWeekDescription:'Monday', rangeLastDigitsPlate:[1,2]},
  { id:2, dayWeek:2, dayWeekDescription:"Tuesday", rangeLastDigitsPlate:[3,4]},
  { id:3, dayWeek:3, dayWeekDescription:"Wednesday", rangeLastDigitsPlate:[5,6] },
  { id:4, dayWeek:4, dayWeekDescription:"Thursday", rangeLastDigitsPlate:[7,8] },
  { id:5, dayWeek:5, dayWeekDescription:"Friday", rangeLastDigitsPlate:[9,0] },
  { id:6, dayWeek:6, dayWeekDescription:"Saturday", rangeLastDigitsPlate:[] },
  { id:7, dayWeek:7, dayWeekDescription:"Sunday", rangeLastDigitsPlate:[] },
 ];

 hourRules = [
  {id:1, startHour:6, startMinute:0, endHour:9, endMinute:30},
  {id:2, startHour:16, startMinute:0, endHour:21, endMinute:0},
 ];

 hourRules1 = [
  {id:1, startHour:'6:00', endHour:'9:30'},
  {id:2, startHour:'16:00', endHour:'21:00'}
 ];
  public matchDayWithLastDigitPlate(dayDescriptionSearch: string,
                                    scheduleCollection: ScheduleNoCirculation[]): number[] {
  for (const itemSchedule of scheduleCollection){
    if (itemSchedule.dayWeekDescription === dayDescriptionSearch) {
      return itemSchedule.rangeLastDigitsPlate;
    }
  }
  return [];
  }

  public isHourPicoPlaca(hour: number, minutes: number, hourRulesCollection:any): boolean {
    const hourSearch: string = hour.toString().padStart(2,'0') + minutes.toString().padStart(2,'0');
    const searchHourParsedToMile: number = parseInt(hourSearch);
    for(const itemHour of hourRulesCollection) {
      const [hourStart, minutesStart] = itemHour.startHour.split(':'); 
      const [hourEnd, minutesEnd] = itemHour.endHour.split(':'); 
      const startHourParsedToMiles: number =  parseInt(hourStart + minutesStart);
      const endHourParsedToMiles: number =  parseInt(hourEnd + minutesEnd);
      if(searchHourParsedToMile >= startHourParsedToMiles && searchHourParsedToMile <= endHourParsedToMiles) {
        return true;
      }
    }
    return false;
  }

  public predictCirculation(): string {
    const lastDigitPlate = this.plate.lastDigitPlate();
    const nameDay =  this.dateService.getDayName();
    const hour = this.time.getHours();
    const minutes = this.time.getMinutes();

    if (this.dateService.isHoliday(this.date, this.holidaysCollection) !== null) {
      return `The Plate ${this.plate.numberPlate}, if it Can circulate on day ${this.date} at ${this.time}.`
    }
    const digitsMatch: number[] = this.matchDayWithLastDigitPlate(nameDay, this.scheduleCollectionNoCirculation);
      if ( digitsMatch === null || !digitsMatch.includes(parseInt(lastDigitPlate)) ) {
        return `The Plate ${this.plate.numberPlate}, if it Can circulate on day ${this.date} at ${this.time}.`
      }
      if (!this.isHourPicoPlaca(hour, minutes, this.hourRules1)){
        return `The Plate ${this.plate.numberPlate}, if it Can circulate on day ${this.date} at ${this.time}.`
      }
    return `The Plate ${this.plate.numberPlate}, Can not circulate on day ${this.date} at ${this.time}.`
  }



}