function checkCashRegister(price, cash, cid) {

  const UNIT_AMOUNT = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.10,
    "QUARTER": 0.25,
    "ONE": 1.00,
    "FIVE": 5.00,
    "TEN": 10.00,
    "TWENTY": 20.00,
    "ONE HUNDRED": 100.00
  };

  let changeToGive = cash - price;


  let totalCid = cid.reduce((acc, curr) => acc + curr[1], 0);
  totalCid = Math.round(totalCid * 100) / 100; 

  if (totalCid < changeToGive) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  if (totalCid === changeToGive) {
    return { status: "CLOSED", change: cid };
  }

  let changeArray = [];
  

  let reversedCid = [...cid].reverse();

  for (let elem of reversedCid) {
    let name = elem[0];
    let totalInDrawer = elem[1];
    let unitValue = UNIT_AMOUNT[name];
    let amountFromUnit = 0;

   
    while (changeToGive >= unitValue && totalInDrawer > 0) {
      changeToGive -= unitValue;
      changeToGive = Math.round(changeToGive * 100) / 100; 
      totalInDrawer -= unitValue;
      amountFromUnit += unitValue;
    }

    if (amountFromUnit > 0) {
      changeArray.push([name, amountFromUnit]);
    }
  }

  if (changeToGive > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  return { status: "OPEN", change: changeArray };
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);