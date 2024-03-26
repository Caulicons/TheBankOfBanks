export default class Account {
  private _id: number;
  private _agency: number;
  private _type: number;
  private _cardHolder: string;
  private _balance: number;

  constructor(
    id: number,
    agency: number,
    type: number,
    cardHolder: string,
    balance: number
  ) {
    this._id = id;
    this._agency = agency;
    this._type = type;
    this._cardHolder = cardHolder;
    this._balance = balance;
  }

  // Getters --------------------------------------------------
  public get id(): number {
    return this._id;
  }

  public get agency(): number {
    return this._agency;
  }

  public get type(): number {
    return this._type;
  }

  public get cardHolder(): string {
    return this._cardHolder;
  }
  public get balance(): number {
    return this._balance;
  }

  // Setters --------------------------------------------------

  public set id(value: number) {
    this._id = value;
  }

  public set type(value: number) {
    this._type = value;
  }

  public set cardHolder(value: string) {
    this._cardHolder = value;
  }

  public set balance(value: number) {
    this._balance = value;
  }

  public set agency(value: number) {
    this._agency = value;
  }

  // Methods --------------------------------------------------

  public deposit(amount: number): void {
    this._balance += amount;
  }

  public withdraw(amount: number): boolean {
    if (amount > this._balance) {
      console.log("Insufficient funds");
      return false;
    }
    this._balance -= amount;
    return true;
  }

  public info(): void {
    console.log(`
    *****************************************************
         Account infos 
    *****************************************************
    ID: ${this._id}
    Agency: ${this._agency}
    Type: ${this._type}
    Card Holder: ${this._cardHolder}
    Balance: R$${this._balance}
    `);
  }
}
