import { Plate } from "../models/Plate.js";
import { DateController } from "../models/DateController.js";
import { NoCirculationDateRules } from '../models/NoCirculationDateRules.js';
import { collectionNoCirculationDates } from "../Data/NoCirculationDatesData.js";
import { collectionNoCirculationHours } from "../Data/NoCirculationHoursData.js";
import { holidaysCollection } from "../Data/HolidaysCollectionData.js";
import { DateRuleChecker } from "./DateRuleChecker.js";
import { HourRuleChecker } from './HourRuleChecker.js';

export class PredictorService {

  public constructor(public plate: Plate, public date:string, public time: Date){}

  private dateController:DateController = new DateController(this.date);
  private dateRuleCheckerService:DateRuleChecker = new DateRuleChecker();
  private HourRuleCheckerService:HourRuleChecker = new HourRuleChecker();

  public predictCirculation(): string {
    const lastDigitPlate = this.plate.lastDigitPlate();
    const nameDay =  this.dateController.getDayName();
    const hour = this.time.getHours();
    const minutes = this.time.getMinutes();
    const isHoliday:boolean = this.dateController.isHoliday(this.date, holidaysCollection) !== null;
    const existMatchs: number[] = this.dateRuleCheckerService
                                  .matchDayWithLastDigitPlate(nameDay, collectionNoCirculationDates);
    const isRestrictedDate: boolean = existMatchs
                                    !== null
                                    && existMatchs.includes(parseInt(lastDigitPlate));
    const isRestrictedHour: boolean = this.HourRuleCheckerService
                                      .isRestrictedHour(hour, minutes, collectionNoCirculationHours);

    if (isHoliday || !isRestrictedDate && !isRestrictedHour) {
      return `
      ✅ The Plate [${this.plate.numberPlate}],
          >>>CAN CIRCULATE<<<
      📅 on day ${this.date}
      ⌚ at ${hour}:${minutes}.
      `
    }
    return `
    🚫 The Plate [${this.plate.numberPlate}],
        >>>CANNOT CIRCULATE<<<
    📅 on day ${this.date}
    ⌚ at ${hour}:${minutes}.
    `
  }

}