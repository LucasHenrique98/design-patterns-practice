import { Address, SystemUserProtocol } from './system-user-protocol';

export class AdminUser implements SystemUserProtocol {
  public firstName: string;
  public userName: string;

  constructor(firstName: string, userName: string) {
    this.firstName = firstName;
    this.userName = userName;
  }

  async getAddresses(): Promise<Address[]> {
    return new Promise((resolve) => {
      return setTimeout(() => {
        return resolve([
          { street: 'Avenida x', number: 9877 },
          { street: 'Avenida y', number: 22 },
          { street: 'Avenida z', number: 33 },
        ]);
      }, 2000);
    });
  }
}
