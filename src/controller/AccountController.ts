import IAccount from "../interfaces/IAccount.js";
import Account from "../model/Account.js";

export default class AccountController implements IAccount {
  private accountList: Account[] = new Array<Account>();
  accountNumber = 0;

  findById(id: number): void {
    throw new Error("Method not implemented.");
  }
  listAll(): void {
    throw new Error("Method not implemented.");
  }
  register(account: Account): void {
    throw new Error("Method not implemented.");
  }
  update(account: Account): void {
    throw new Error("Method not implemented.");
  }
  delete(id: number): void {
    throw new Error("Method not implemented.");
  }
  withdraw(id: number, amount: number): void {
    throw new Error("Method not implemented.");
  }
  deposit(id: number, amount: number): void {
    throw new Error("Method not implemented.");
  }
  transfer(origin_id: number, destination_id: number, amount: number): void {
    throw new Error("Method not implemented.");
  }
}
