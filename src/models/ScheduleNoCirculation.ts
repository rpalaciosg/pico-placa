  
 export class ScheduleNoCirculation {

  ruleSchedule = {
    "Monday": [06:00,09:30],
    "Tuesday": [3,4],
    "Wednesday": [5,6],
    "Thursday": [7,8],
    "Friday": [9,0],
    "Saturday":[],
    "Sunday":[]
  };

  public constructor(
   public id: number,
   public dayWeek: number,
   public dayDescription: string,
   public startHour: number,   
   public startMinutes: number,
   public endHour: number,
   public endMinutes: number
  ){}
 }