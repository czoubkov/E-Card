
var balance = 10.50;
var amountInput;
var oneRidePrice = 2.75;
var tenRidesPrice = oneRidePrice*10;
var weeklyPrice = 33.00;
var monthlyPrice = 127.00;
var totalPrice;

function oneride(){
    totalPrice = oneRidePrice;    
    document.getElementById("totalPrice").innerHTML = "$" + totalPrice;
}
function tenrides(){
    totalPrice = tenRidesPrice;    
    document.getElementById("totalPrice").innerHTML = "$" + totalPrice.toFixed(2);
}
function fiveAmount(){
    totalPrice = 5.00;    
    document.getElementById("totalPrice").innerHTML = "$" + totalPrice.toFixed(2);
}
function twentyAmount(){
    totalPrice = 20.00;    
    document.getElementById("totalPrice").innerHTML = "$" + totalPrice.toFixed(2);
}
function weekrides(){
    totalPrice = weeklyPrice;
    document.getElementById("totalPrice").innerHTML = "$" + totalPrice.toFixed(2);
}
function monthrides(){
    totalPrice = monthlyPrice;
    document.getElementById("totalPrice").innerHTML = "$" + totalPrice.toFixed(2);
}
function otherride(){
    totalprice = document.getElementById("input1 sel").value;
    document.getElementById("totalPrice").innerHTML = "$" + totalPrice.toFixed(2);
}


function showContentTwo(){
    document.getElementById("contentOne").style.display="none";
    document.getElementById("contentTwo").style.display="flex";
    var metroNums = document.getElementById("metrocardNum").value;
    document.getElementById("metroNum").innerHTML = metroNums;
    document.getElementById("balance").innerHTML = balance.toFixed(2);
}

//Didnt complete input section
function showContentThree(){
    document.getElementById("contentTwo").style.display="none";
    document.getElementById("contentThree").style.display="flex";
    var metroNums = document.getElementById("metrocardNum").value;
    document.getElementById("metroNum2").innerHTML = metroNums;
    document.getElementById("balance2").innerHTML = balance.toFixed(2);
}

//Didnt do implement any of the js into section 4
function showContentFour(){
    document.getElementById("contentThree").style.display="none";
    document.getElementById("contentFour").style.display="flex";
    var metroNums = document.getElementById("metrocardNum").value;
    document.getElementById("metroNum3").innerHTML = metroNums;
    document.getElementById("balance3").innerHTML = balance.toFixed(2);
    
    amountInput = document.getElementById("totalPrice").innerHTML;
    document.getElementById("amounts").innerHTML = amountInput;
    var total = +balance + +amountInput;
    document.getElementById("total2").innerHTML = total.toFixed(2);
}

function onlyNumber(key) {
    key = (key) ? key : window.event;
    var charCode = (key.which) ? key.which : key.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        document.getElementById("error").style.display="block";
        return false;
    }
    document.getElementById("error").style.display="none";
    return true;
}
function onlyMoneyValues(key) {
    key = (key) ? key : window.event;
    var charCode = (key.which) ? key.which : key.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        document.getElementById("error").style.display="block";
        return false;
    }
    document.getElementById("error").style.display="none";
    return true;
}

function alertSuccess() {
    alert("Success!");
  }
