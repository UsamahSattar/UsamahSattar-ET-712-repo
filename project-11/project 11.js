function codeA() {
    var arr = [2, 8, 32, 128, 512, 2048];
    var arr1 = [];
    for (let i = 0; i < arr.length - 1; i++) {
		arr1[i] = arr[i];
    }
    arr1.reverse();
    console.log(arr1);
}

 codeA();
function codeB() {
    var bills = [24, 36, 204, 80, 182, 440, 100, 10, 1008, 48];
    var tips = [];
    var totals = [];
    for (let i = 0; i < 10; i++) {
        tips[i] = calculateTips(bills[i]);
        totals[i] = bills[i] + tips[i];
    }
    calculateAvgBill(totals);
}
function calculateAvgBill(...totals) {
    var billTotals = totals[0];
    var sum = 0;
    for (let i = 0; i < billTotals.length; i++) {
        sum += billTotals[i];
    }

console.log(`Bonus: Average of all total bils is ${(sum / billTotals.length).toFixed(2)}`);
}
function calculateTips(bill) {
    var tip = (bill * 5) / 100;
    return tip;
}

codeB();
function codeC() {
    for (let i = 0; i < 10; i++) {
        var x = document.createElement("BUTTON");
        var br = document.createElement("br");
        var t = document.createTextNode(`Show modal ${i+1}`);
        x.style.border = '1px solid black';
        x.style.borderRadius = '25px';
        x.style.marginLeft = '45%';
        x.style.padding = '15px';
        x.style.width = '140px';
        x.style.marginTop = '20px';
        x.appendChild(t);
        document.body.style.backgroundColor = '#F6D6ED';
        document.body.appendChild(x);
        document.body.appendChild(br);
    }
}