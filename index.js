document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-field');
    const depositValue = depositField.value;
    const depositNum = parseFloat(depositValue);
    depositField.value = '';
    // deposit-total
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalValue = depositTotal.innerText;
    const depositTotalNum = parseFloat(depositTotalValue);
    const depositTotalMoony = depositNum + depositTotalNum;
    depositTotal.innerText = depositTotalMoony;
    // balance-total
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalValue = balanceTotal.innerText;
    const balanceTotalNum = parseFloat(balanceTotalValue);
    const balanceTotalMoony = balanceTotalNum + depositNum;
    balanceTotal.innerText = balanceTotalMoony;
})
// ===================================================

document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawValue = withdrawField.value;
    withdrawField.value = "";
    const withdrawNum = parseFloat(withdrawValue);
    // withdraw-total
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalValue = withdrawTotal.innerText;
    const withdrawTotalNum = parseFloat(withdrawTotalValue);
    const withdrawTotalMoony = withdrawTotalNum + withdrawNum;
    withdrawTotal.innerText = withdrawTotalMoony;
    // balance-total
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalValue = balanceTotal.innerText;
    const balanceTotalNum = parseFloat(balanceTotalValue);
    const balanceTotalMoony = balanceTotalNum - withdrawNum;
    balanceTotal.innerText = balanceTotalMoony;

});

