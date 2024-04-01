import Account from "./Account.js";

export default class SaveAccount extends Account {
  private _birthday: number;

  constructor(
    id: number,
    agency: number,
    type: number,
    cardHolder: string,
    balance: number,
    birthday: number
  ) {
    super(id, agency, type, cardHolder, balance);

    this._birthday = birthday;
  }

  public get birthday(): number {
    return this._birthday;
  }

  public set birthday(new_day: number) {
    this._birthday = new_day;
  }

  public info(): void {
    super.info();
    console.log("Birthday: ", this.birthday);
  }
}
