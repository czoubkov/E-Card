function showContentTwo(){

    document.getElementById("contentOne").style.display="none";
    document.getElementById("contentTwo").style.display="block";

}
function showContentThree(){

    document.getElementById("contentTwo").style.display="none";
    document.getElementById("contentThree").style.display="block";

}
function showContentFour(){

    document.getElementById("contentTwo").style.display="none";
    document.getElementById("contentThree").style.display="none";
    document.getElementById("contentFour").style.display="block";

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