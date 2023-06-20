import { Plate } from "./Plate.js";
import { ScheduleNoCirculation } from "./ScheduleNoCirculation.js";

export class RuleSchedule {
  

  public constructor(
    public dayWeekNumber: ScheduleNoCirculation, 
    public ruleDescription: string
  ){}

  public isRuleActive(): boolean {
    if this.dayWeekNumber.dayWeek
  }
}