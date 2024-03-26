import figlet from "figlet";
import gradient from "gradient-string";
import sleep from "./sleep.js";

export default async function logo(ms = 1000) {
  figlet("The Bank of Banks", (err, data) => {
    console.log(
      gradient.pastel.multiline(`
**************************************************************************************
*                                            *                                       *
     ${data}
*                                            *                                       *
**************************************************************************************
    `)
    );
  });
  await sleep(ms);
}
