import { BicycleFactory } from './factories/bicycle-factory';
import { CarFactory } from './factories/car-factory';

const carFactory = new CarFactory();
const bicycleFactory = new BicycleFactory();

const fusca = carFactory.createVehicle('Fusca');
const bicycle = bicycleFactory.createVehicle('Blue bicycle');

fusca.pickUp('Lucas');
bicycle.pickUp('Gabriela');
