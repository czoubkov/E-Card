
var balance = 10.50;
var amountInput;
var oneRidePrice = 2.75;
var tenRidesPrice = oneRidePrice*10;
var weeklyPrice = 33.00;
var monthlyPrice = 127.00;
var totalPrice;
var typeOfOrder;

function oneride(){
  typeOfOrder = "Cash Amount";
  totalPrice = oneRidePrice;
  document.getElementById("totalPrice").innerHTML = "$" + totalPrice;
}
function tenrides(){
  typeOfOrder = "Cash Amount"
  totalPrice = tenRidesPrice;
  document.getElementById("totalPrice").innerHTML = "$" + totalPrice.toFixed(2);
}
function fiveAmount(){
  typeOfOrder = "Cash Amount"
  totalPrice = 5.00;
  document.getElementById("totalPrice").innerHTML = "$" + totalPrice.toFixed(2);
}
function twentyAmount(){
  typeOfOrder = "Cash Amount"
  totalPrice = 20.00;
  document.getElementById("totalPrice").innerHTML = "$" + totalPrice.toFixed(2);
}
function weekrides(){
  typeOfOrder = "Time"
  totalPrice = weeklyPrice;
  document.getElementById("totalPrice").innerHTML = "$" + totalPrice.toFixed(2);
}
function monthrides(){
  typeOfOrder = "Time"
  totalPrice = monthlyPrice;
  document.getElementById("totalPrice").innerHTML = "$" + totalPrice.toFixed(2);
}
function otherride(){
  typeOfOrder = "Cash Amount"
  totalPrice = document.getElementById("input1").value;
  console.log(totalPrice)
  document.getElementById("totalPrice").innerHTML = "$" + totalPrice;
  if (document.getElementById("totalPrice").innerHTML === "$")
  document.getElementById("totalPrice").innerHTML = "$0.00";
}


function showContentTwo(){
  document.getElementById("contentOne").style.display="none";
  document.getElementById("contentTwo").style.display="flex";
  var metroNums = document.getElementById("metrocardNum").value;
  document.getElementById("metroNum").innerHTML = metroNums;
  document.getElementById("balance").innerHTML = balance.toFixed(2);
}

function showContentThree(){
  document.getElementById("contentTwo").style.display="none";
  document.getElementById("contentThree").style.display="flex";
  var metroNums = document.getElementById("metrocardNum").value;
  document.getElementById("metroNum2").innerHTML = metroNums;
  document.getElementById("balance2").innerHTML = balance.toFixed(2);
  document.getElementById("totalPrice").innerHTML = "$0.00";
}

function showContentFour(){
  document.getElementById("contentThree").style.display="none";
  document.getElementById("contentFour").style.display="flex";
  var metroNums = document.getElementById("metrocardNum").value;
  document.getElementById("metroNum3").innerHTML = metroNums;
  document.getElementById("balance3").innerHTML = balance.toFixed(2);


  if (typeOfOrder == "Cash Amount"){
    document.getElementById("orderType").innerHTML = "Cash Amount";
    amountInput = document.getElementById("totalPrice").innerHTML;
    document.getElementById("amounts").innerHTML = amountInput;
    var total = +balance + +totalPrice;
    document.getElementById("total2").innerHTML = total.toFixed(2);
    document.getElementById("amounts2").innerHTML = amountInput;
  }
  else if (typeOfOrder == "Time"){
    document.getElementById("orderType").innerHTML = "Time";

    amountInput = document.getElementById("totalPrice").innerHTML;
    console.log(amountInput);
    var unlimitedType;
    if (amountInput == "$33.00"){
      unlimitedType = "7 Day Unlimited MetroCard";
    }
    else if(amountInput == "$127.00"){
      unlimitedType = "30 Day Unlimited MetroCard";
    }
    document.getElementById("amounts").innerHTML = unlimitedType;
    var total = +balance + unlimitedType;
    document.getElementById("total2").innerHTML = balance.toFixed(2) +" and " + unlimitedType;
    document.getElementById("amounts2").innerHTML = amountInput;
  }

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

function notNullNumber(){
  element = document.getElementById("metrocardNum");
  if (element.value.match(/[0-9]/g)) {
    element.setCustomValidity('');
    showContentTwo();
    return true;
  }
  else {
    element.setCustomValidity('MetroCard Number cannot be blank!');
    document.querySelectorAll( ":invalid" )[0].focus();
    return false;
  }
}

function checkSubmit() {
  console.log(document.querySelectorAll( ".billinginfo:invalid"));
  var numInvalid = document.querySelectorAll( ".billinginfo:invalid").length;
  console.log(numInvalid);

  if (numInvalid > 0) {
    document.querySelectorAll( ".billinginfo:invalid")[0].focus();
  }
  else {
  alert("Success!");
  }
}

function checkAdd() {
  price = document.getElementById("totalPrice");
  if (price.innerHTML.includes('$0.00')) {
    return false;
  }
  else {
    showContentFour();
    return true;
  }
}

function contactSupport(){
  element = document.getElementById("supportInput");
  if (element.value != "") {
    element.setCustomValidity('');
    alert("Submitted to our Support Team!")
    return true;
  }
  else {
    element.setCustomValidity('Message cannot be blank!');
    document.querySelectorAll( ":invalid" )[0].focus();
    return false;
  }
}

