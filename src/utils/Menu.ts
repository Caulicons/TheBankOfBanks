import inquirer from "inquirer";
import logo from "./logo.js";
import menu_options from "../data/menuOptions.js";
import exit from "./exit.js";
import Account from "../model/Account.js";

export default async function menu() {
  await logo();

  const c1 = new Account(1, 1, 1, "John shimbinha", 1000);
  /* const c2 = new Account(2, 2, 2, "Mary", 200);
  const c3 = new Account(3, 3, 3, "Jane", 300); */

  c1.info();
  c1.withdraw(500);
  c1.info();
  c1.deposit(1000);
  c1.info();

  const response = await inquirer.prompt({
    type: "list",
    name: "question",
    message: "What do you want to do?",
    choices: menu_options,
  });

  handleMenuResponse(response.question);

  console.log(response.question);
}

function handleMenuResponse(response: number) {
  if (response === 9) exit();

  switch (response) {
    case 1:
      console.log("\n\nCriar Conta\n\n");

      break;
    case 2:
      console.log("\n\nListar todas as Contas\n\n");

      break;
    case 3:
      console.log("\n\nConsultar dados da Conta - por número\n\n");

      break;
    case 4:
      console.log("\n\nAtualizar dados da Conta\n\n");

      break;
    case 5:
      console.log("\n\nApagar uma Conta\n\n");

      break;
    case 6:
      console.log("\n\nSaque\n\n");

      break;
    case 7:
      console.log("\n\nDepósito\n\n");

      break;
    case 8:
      console.log("\n\nTransferência entre Contas\n\n");

      break;
  }
}
