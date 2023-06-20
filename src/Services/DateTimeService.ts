import { Holiday } from '../models/Holiday.js';
export class DateTimeService {
  public date: string;

  constructor(date:string){
    this.date = date;
  }

  public getDay(): number {
     const [day, month, year] = this.date.split("/");
     return parseInt(day);
  }

  public getMonth(): number {
    const [day, month, year] = this.date.split("/");
    return parseInt(month);
  }

  public getYear(): number {
    const [day, month, year] = this.date.split("/");
    return parseInt(year);
  }

   public getDayName(): string{
     const [day, month, year] = this.date.split("/");
     const dateParsed = new Date(parseInt(year), parseInt(month)-1, parseInt(day));
     const numberDay = dateParsed.getDay();
     return ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][numberDay];
   }

   public isHoliday(dateSearch: string, Holidays: Holiday[]): Holiday | null{
     const [day, month, year] = dateSearch.split("/");
    const dateParsed = new Date(parseInt(year), parseInt(month)-1, parseInt(day));
    for(const itemDate of Holidays){
      const dateInHolidays = new Date(itemDate.year, itemDate.month-1, itemDate.day);
      if (dateInHolidays.getTime() === dateParsed.getTime()){
        return itemDate;
      }
    }
    return null;
   }

}
