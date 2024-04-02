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
    const account = this.findAccount(id);
    if (account) {
      if (account.withdraw(amount)) {
        console.log(
          `The amount R$ ${amount.toFixed(2)} was deposit successfully.`
        );
        console.log(`New Balance is R$ ${account.balance.toFixed(2)}`);
      }
    }
  }
  deposit(id: number, amount: number): void {
    const account = this.findAccount(id);
    if (account) {
      account.deposit(amount);
      console.log(
        `The amount R$ ${amount.toFixed(2)} was deposit successfully.`
      );
      console.log(`New Balance is R$ ${account.balance.toFixed(2)}.`);
    }
  }
  transfer(origin_id: number, destination_id: number, amount: number): void {
    const origin_account = this.findAccount(origin_id);
    const destination_account = this.findAccount(destination_id);

    if (!origin_account || !destination_account) {
      console.log("We can't make the transference.");
      return;
    }

    const origin_withdraw = origin_account.withdraw(amount);
    if (!origin_withdraw) {
      console.log(
        "We can't make the transference. The origin account not have funds."
      );
      return;
    }

    destination_account.deposit(amount);

    console.log(`Success transfer.✅`);
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
