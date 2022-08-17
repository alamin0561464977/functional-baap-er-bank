document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositFieldValue = getInputFieldValueById('deposit-field');
    const depositTotalValue = getTextElementValueById('deposit-total');
    const balanceTotalValue = getTextElementValueById('balance-total');
    const depositTotal = depositFieldValue + depositTotalValue;
    const balanceTotal = balanceTotalValue + depositFieldValue;
    setTextElementValueById("deposit-total", depositTotal);
    setTextElementValueById("balance-total", balanceTotal);
    console.log(depositTotalValue)
});
// withdraw-total
document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawFieldValue = getInputFieldValueById('withdraw-field');
    const withdrawTotalValue = getTextElementValueById('withdraw-total');
    const balanceTotalValue = getTextElementValueById('balance-total');
    const withdrawTotal = withdrawFieldValue + withdrawTotalValue;
    const balanceTotal = balanceTotalValue - withdrawFieldValue;
    setTextElementValueById("withdraw-total", withdrawTotal);
    setTextElementValueById("balance-total", balanceTotal);
});