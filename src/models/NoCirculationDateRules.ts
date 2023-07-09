import { Rule } from "../Interfaces/Rule.js";

 export class NoCirculationDateRules implements Rule{

  public constructor(
    public id: number,
    public dayWeek: number,
    public dayWeekDescription: string,
    public rangeLastDigitsPlate: number[],
  ){}

 }