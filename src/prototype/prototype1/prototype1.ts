export interface Prototype {
  clone(): Prototype;
}

export class Address {
  constructor(public street: string, public number: number) {}
}

export class Person implements Prototype {
  constructor(public name: string, public age: number) {}

  public addresses: Address[] = [];

  addAddress(address: Address): void {
    this.addresses.push(address);
  }

  clone(): this {
    const newObj = Object.create(this);
    return newObj;
  }
}
