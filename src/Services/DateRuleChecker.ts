import { NoCirculationDateRules } from "../models/NoCirculationDateRules.js";

export class DateRuleChecker {

  public matchDayWithLastDigitPlate(dayDescriptionSearch: string,
                                    scheduleCollection: NoCirculationDateRules[]): number[] {
  for (const itemSchedule of scheduleCollection){
    if (itemSchedule.dayWeekDescription === dayDescriptionSearch) {
      return itemSchedule.rangeLastDigitsPlate;
    }
  }
  return [];
  }
}