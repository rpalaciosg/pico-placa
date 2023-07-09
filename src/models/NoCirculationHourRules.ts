import { HourRule } from "../Interfaces/HourRule.js";

 export class NoCirculationHourRules implements HourRule{

  public constructor(
    public id: number,
    public startHour: string,
    public endHour: string,
  ){}

 }