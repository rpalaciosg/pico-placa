import { Date } from "../Interfaces/Date.js";

export class Holiday implements Date{
  public constructor(
    public idHoliday: number,
    public day: number,
    public month: number,
    public year: number,
    public description: string
    ){}

}