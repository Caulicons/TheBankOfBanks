import inquirer from "inquirer";
import menu_options from "../data/menuOptions.js";
import exit from "./exit.js";
import keyPress from "./keyPress.js";
import AccountController from "../controller/AccountController.js";
import SaveAccount from "../model/SaveAccount.js";
import CurrentAccount from "../model/CurrentAccount.js";

const Account = new AccountController();
const c1 = new SaveAccount(
  Account.generate_new_account_id(),
  1234,
  2,
  "Vítor Oliveira",
  1000,
  10
);
const c2 = new CurrentAccount(
  Account.generate_new_account_id(),
  5678,
  1,
  "Banana",
  5000,
  50
);
const c3 = new SaveAccount(
  Account.generate_new_account_id(),
  9999,
  2,
  "Menino maluquinho",
  2,
  15
);

Account.register(c1);
Account.register(c2);
Account.register(c3);

export default async function menu() {
  const response = await inquirer.prompt({
    type: "rawlist",
    name: "question",
    prefix: "\n🏦",
    message: "What do you want to do?\n",
    choices: menu_options,
  });

  await handleMenuResponse(response.question);
}

async function handleMenuResponse(response: number) {
  if (response === 9) exit();

  switch (response) {
    case 1:
      const new_account: {
        cardHolder: string;
        agency: number;
        type: number;
        balance: number;
      } = await inquirer.prompt([
        {
          type: "prompt",
          name: "cardHolder",
          prefix: "\n😺 ",
          message: "Card holder ?\n",
        },
        {
          type: "number",
          name: "agency",
          prefix: "\n🏦 ",
          message: "Agency ?\n",
        },
        {
          type: "number",
          name: "balance",
          prefix: "\n💵 ",
          message: "Balance ?\n",
        },
        {
          type: "list",
          name: "type",
          prefix: "\n🦕 ",
          message: "What is the account type ?\n",
          choices: [
            {
              name: "Current Account",
              value: 1,
            },
            {
              name: "Save Account",
              value: 2,
            },
          ],
        },
      ]);

      if (new_account.type == 1) {
        const magicNumber = await inquirer.prompt({
          type: "number",
          name: "limit",
          prefix: "\n🍐 ",
          message: "What is the limit ?\n",
        });

        const new_current_account = new CurrentAccount(
          Account.generate_new_account_id(),
          new_account.agency,
          new_account.type,
          new_account.cardHolder,
          new_account.balance,
          magicNumber.limit
        );

        Account.register(new_current_account);
      } else {
        const magicNumber = await inquirer.prompt({
          type: "number",
          name: "birthday",
          prefix: "\n🐣 ",
          message: "What is your birthday ?\n",
        });

        const new_save_account = new SaveAccount(
          Account.generate_new_account_id(),
          new_account.agency,
          new_account.type,
          new_account.cardHolder,
          new_account.balance,
          magicNumber.birthday
        );

        Account.register(new_save_account);
      }
      break;
    case 2:
      Account.listAll();

      break;
    case 3:
      const question = await inquirer.prompt([
        {
          type: "number",
          name: "id",
          prefix: "\n❓",
          message: "What is the Account ID ?\n",
        },
      ]);
      Account.findById(question.id);

      break;
    case 4:
      const questionToUpdate = await inquirer.prompt([
        {
          type: "number",
          name: "id",
          prefix: "\n❓",
          message: "What is the Account ID ?\n",
        },
      ]);

      const account_to_update = Account.findAccount(questionToUpdate.id);

      if (!account_to_update) {
        return;
      }
      const new_datas_update: {
        cardHolder: string;
        agency: number;
        balance: number;
      } = await inquirer.prompt([
        {
          type: "prompt",
          name: "cardHolder",
          prefix: "\n😺 ",
          message: "Card holder ?\n",
        },
        {
          type: "number",
          name: "agency",
          prefix: "\n🏦 ",
          message: "Agency ?\n",
        },
        {
          type: "number",
          name: "balance",
          prefix: "\n💵 ",
          message: "Balance ?\n",
        },
      ]);

      if (account_to_update.type == 1) {
        const magicNumber = await inquirer.prompt({
          type: "number",
          name: "limit",
          prefix: "\n🍐 ",
          message: "What is the limit ?\n",
        });

        const new_updated_account = new CurrentAccount(
          questionToUpdate.id,
          new_datas_update.agency || account_to_update.agency,
          account_to_update.type,
          new_datas_update.cardHolder || account_to_update.cardHolder,
          new_datas_update.balance || account_to_update.balance,
          magicNumber.limit
        );

        Account.update(new_updated_account);
      } else {
        const magicNumber = await inquirer.prompt({
          type: "number",
          name: "birthday",
          prefix: "\n🐣 ",
          message: "What is your birthday ?\n",
        });

        const new_updated_account = new SaveAccount(
          questionToUpdate.id,
          new_datas_update.agency || account_to_update.agency,
          account_to_update.type,
          new_datas_update.cardHolder || account_to_update.cardHolder,
          new_datas_update.balance || account_to_update.balance,
          magicNumber.birthday
        );

        Account.update(new_updated_account);
      }

      break;
    case 5:
      const question_to_delete = await inquirer.prompt([
        {
          type: "number",
          name: "id",
          prefix: "\n❓",
          message: "What is the Account ID that you want delete?\n",
        },
      ]);
      Account.delete(question_to_delete.id);

      break;
    case 6:
      const question_to_withdraw = await inquirer.prompt([
        {
          type: "number",
          name: "id",
          prefix: "\n❓ ",
          message: "What is the Account ID that you want withdraw?\n",
        },
        {
          type: "number",
          name: "amount",
          prefix: "\n💸 ",
          message: "What is the amount?\n",
        },
      ]);

      Account.withdraw(question_to_withdraw.id, question_to_withdraw.amount);
      break;
    case 7:
      const question_to_deposit = await inquirer.prompt([
        {
          type: "number",
          name: "id",
          prefix: "\n❓ ",
          message: "What is the Account ID that you want deposit?\n",
        },
        {
          type: "number",
          name: "amount",
          prefix: "\n💸 ",
          message: "What is the amount?\n",
        },
      ]);

      Account.deposit(question_to_deposit.id, question_to_deposit.amount);
      break;
    case 8:
      const question_to_transfer = await inquirer.prompt([
        {
          type: "number",
          name: "origin_id",
          prefix: "\n❓ ",
          message: "What is your Account ID?\n",
        },
        {
          type: "number",
          name: "destination_id",
          prefix: "\n❓ ",
          message: "What is the Account ID that you want transfer?\n",
        },
        {
          type: "number",
          name: "amount",
          prefix: "\n💸 ",
          message: "What is the amount?\n",
        },
      ]);

      Account.transfer(
        question_to_transfer.origin_id,
        question_to_transfer.destination_id,
        question_to_transfer.amount
      );
      break;
  }

  await keyPress();
}
