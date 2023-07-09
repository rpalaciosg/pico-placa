import { Plate } from './models/Plate.js';
import { PredictorService } from './Services/PredictorService.js';

console.clear();
console.log(`** PICO Y PLACA **`);
const placaSuzuki:Plate = new Plate("PTM-193");
const dateSearch:string = '10/08/2023';
const hourSearch:string = "16:30";

const hourNew = new Date();
const [hours, minutes] = hourSearch.split(':');
hourNew.setHours(Number(hours),Number(minutes),0,0);

const predictor = new PredictorService(placaSuzuki, dateSearch, hourNew );
console.log(predictor.predictCirculation());
