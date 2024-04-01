import inquirer from "inquirer";
import menu_options from "../data/menuOptions.js";
import exit from "./exit.js";
import keyPress from "./keyPress.js";
import AccountController from "../controller/AccountController.js";

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

  const account = new AccountController();
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

  await keyPress();
}
