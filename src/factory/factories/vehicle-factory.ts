import { Vehicle } from '../vehicle/vehicle';

export abstract class VehicleFactory {
  abstract createVehicle(vehicleName: string): Vehicle;

  pickUp(customerName: string, vehicleName: string): Vehicle {
    const car = this.createVehicle(vehicleName);
    car.pickUp(customerName);

    return car;
  }
}
