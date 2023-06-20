import { time } from 'console';
import { Plate } from './models/Plate.js';
import { ScheduleNoCirculation } from './models/ScheduleNoCirculation.js';
import { PredictorService } from './Services/PredictorService.js';

console.clear();
const placaSusuki = new Plate("PTM-193");
const dateNueva = new Date();
const [hours, minutes] = "15:30".split(':');
dateNueva.setHours(Number(hours),Number(minutes),0,0);

const predictor = new PredictorService(placaSusuki, '19/06/2023', dateNueva );
console.log(predictor.predictCirculation());
