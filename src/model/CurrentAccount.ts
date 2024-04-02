import Account from "./Account.js";

export default class CurrentAccount extends Account {
  private _limit: number;
  private _limit_register: number;

  constructor(
    id: number,
    agency: number,
    type: number,
    cardHolder: string,
    balance: number,
    limit: number
  ) {
    super(id, agency, type, cardHolder, balance);

    this._limit = limit;
    this._limit_register = limit;
  }

  public withdraw(amount: number): boolean {
    if (amount > super.balance + this.limit) {
      console.log("Insufficient funds. ❌");
      return false;
    }
    if (amount > super.balance) {
      this.limit = amount - super.balance;
      super.balance = 0;
      return true;
    }
    super.balance -= amount;
    return true;
  }

  public deposit(amount: number): void {
    let money = amount;
    if (this._limit < this._limit_register) {
      for (let i = amount; this._limit < this._limit_register; i--) {
        if (money == 0) {
          break;
        }
        money--;
        this._limit++;
      }
    }

    super.balance = money;
  }

  public get limit(): number {
    return this._limit;
  }

  public set limit(new_limit: number) {
    if (this._limit_register - this._limit != 0) {
      console.log("You can't edit your limit before you pay it.");
      return;
    }
    this._limit = new_limit;
  }
  public info(): void {
    super.info();
    console.log("Limit: ", this.limit);
  }
}
