let balance = 500;
let price = 100;
let codeBase = "A001DFX0";
let postomate = [null, null, null, "1432HGF", null];
let shipmentId = "1432HGF"

let smsCode = "A001DFX0";

function giveShipment(smsCode, codeBase, balance, price, postomate) {
  if (smsCode === codeBase &&balance>=price) {
    balance -=price
    console.log(`Заберите посылку ${shipmentId} из Ячейки №${postomate.indexOf(shipmentId)+1}.
    Ваш счет составлЯет: ${balance}ед.`);
  } else{ 
    console.log("Невозможно получить посылку")
  }
  }


giveShipment(smsCode, codeBase, balance,price, postomate)
