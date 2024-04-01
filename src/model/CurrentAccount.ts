import Account from "./Account.js";

export default class CurrentAccount extends Account {
  private _limit: number;

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
  }

  public get limit(): number {
    return this._limit;
  }

  public set limit(new_limit: number) {
    this._limit = new_limit;
  }
  public info(): void {
    super.info();
    console.log("Limit: ", this.limit);
  }
}
