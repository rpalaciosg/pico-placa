
export class HourRuleChecker {

  public isRestrictedHour(hour: number, minutes: number, hourRulesCollection:any): boolean {
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
}