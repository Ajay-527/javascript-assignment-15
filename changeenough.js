function changeEnough(pocketMoneyArray, paymoney) {
  let totalpocketmoney = 0;
  for (let i = 0; i < pocketMoneyArray.length; i++) {
    if (i === 0) {
      totalpocketmoney = totalpocketmoney + (pocketMoneyArray[i] * 25) / 100;
    } else if (i === 1) {
      totalpocketmoney = totalpocketmoney + (pocketMoneyArray[i] * 10) / 100;
    } else if (i === 2) {
      totalpocketmoney = totalpocketmoney + (pocketMoneyArray[i] * 5) / 100;
    } else {
      totalpocketmoney = totalpocketmoney + (pocketMoneyArray[i] * 1) / 100;
    }
  }
  return totalpocketmoney > paymoney ? true : false;
}
console.log(changeEnough([2, 100, 0, 0], 14.11));
console.log(changeEnough([25, 20, 5, 0], 4.25));
console.log(changeEnough([0, 0, 20, 5], 0.75));
console.log(changeEnough([30, 40, 20, 5], 12.55));
