import IAccount from "../interfaces/IAccount.js";
import Account from "../model/Account.js";
import CurrentAccount from "../model/CurrentAccount.js";
import SaveAccount from "../model/SaveAccount.js";

export default class AccountController implements IAccount {
  private accountList: Account[] = new Array<Account>();
  accountNumber = 0;

  findById(id: number): void {
    const account = this.findAccount(id);
    if (account) account.info();
  }
  listAll(): void {
    this.accountList.forEach((account) => account.info());
  }
  register(account: Account): void {
    this.accountList.push(account);
    console.log("Account create successfully");
  }
  update(account: Account): void {
    let index = 0;
    this.accountList.forEach((accountInArray, i) => {
      if (account.id === accountInArray.id) {
        index = i;
        return;
      }
    });

    this.accountList.splice(index, 1, account);
    console.log("Account update successfully");
  }
  delete(id: number): void {
    const account = this.findAccount(id);
    if (account) {
      let index = 0;
      this.accountList.forEach((accountInArray, i) => {
        if (account.id === accountInArray.id) {
          index = i;
          return;
        }
      });

      this.accountList.splice(index, 1);
      console.log("Account deleted successfully");
    }
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

  // Utils
  generate_new_account_id(): number {
    return ++this.accountNumber;
  }

  findAccount(id: number): null | Account | CurrentAccount | SaveAccount {
    for (const account of this.accountList) {
      if (account.id === id) {
        return account;
      }
    }

    console.log("Account not found !");
    return null;
  }
}
