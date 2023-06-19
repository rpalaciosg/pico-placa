export class Plate {
  public constructor(
    public numberPlate: string
  ){}

  public lastDigitPlate():string{
    return this.numberPlate.slice(-1);
  }
}