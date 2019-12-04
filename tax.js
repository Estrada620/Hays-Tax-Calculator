function haysTax() {
 
var userAmt = document.getElementById("userAmt").value; 
var taxH = document.getElementById("taxH").value;
var taxT = document.getElementById("taxT").value;
var totalT = document.getElementById("totalT").value;
 
var taxTotal = userAmt * taxH;         
var grandTotal = parseFloat(userAmt) + parseFloat(taxTotal);
 
document.getElementById("taxT").innerHTML = taxTotal.toFixed(3);
document.getElementById("totalT").innerHTML = grandTotal.toFixed(2);
 
}

document.getElementById("calculate").onclick = function()

{
 
haysTax();
 
};
