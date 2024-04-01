import Account from "../model/Account.js";

export default interface IAccount {
  // CRUD Account
  findById(id: number): void;
  listAll(): void;
  register(account: Account): void;
  update(account: Account): void;
  delete(id: number): void;

  // banking methods
  withdraw(id: number, amount: number): void;
  deposit(id: number, amount: number): void;
  transfer(origin_id: number, destination_id: number, amount: number): void;
}
