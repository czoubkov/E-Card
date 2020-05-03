var balance = 10.50;
var amountInput;
var oneRidePrice = 2.75;
var tenRidesPrice = oneRidePrice*10;
var weeklyPrice = 33.00;
var monthlyPrice = 127.00;
var totalPrice;

function oneride(){
    totalPrice = oneRidePrice;    
    document.getElementById("totalPrice").innerHTML = totalPrice;
}
function tenrides(){
    totalPrice = tenRidesPrice;    
    document.getElementById("totalPrice").innerHTML = totalPrice;
}
function weekrides(){
    totalPrice = weeklyPrice;
    document.getElementById("totalPrice").innerHTML = totalPrice;
}
function monthrides(){
    totalPrice = monthlyPrice;
    document.getElementById("totalPrice").innerHTML = totalPrice;
}
function otherride(){
    document.getElementById("amount").style.display="inline"
}
function otherride2(){
    totalPrice = document.getElementById("amount").value;
    document.getElementById("totalPrice").innerHTML = totalPrice;
}


function showContentTwo(){
    document.getElementById("contentOne").style.display="none";
    document.getElementById("contentTwo").style.display="block";
    var metroNums = document.getElementById("metrocardNum").value;
    document.getElementById("metroNum").innerHTML = metroNums;
    document.getElementById("balance").innerHTML = balance.toFixed(2);
}

function showContentThree(){
    document.getElementById("contentTwo").style.display="none";
    document.getElementById("contentThree").style.display="block";
    var metroNums = document.getElementById("metrocardNum").value;
    document.getElementById("metroNum2").innerHTML = metroNums;
    document.getElementById("balance2").innerHTML = balance.toFixed(2);
}

function showContentFour(){
    document.getElementById("contentTwo").style.display="none";
    document.getElementById("contentThree").style.display="none";
    document.getElementById("contentFour").style.display="block";
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

function alertSuccess() {
    alert("Success!");
  }

  