var bill=[3,10,2,9]
k=1
b=12
var totalBill=0
bill.map((e)=>totalBill+=e)
// reducing the bill of the items that they not had 
var billFinal= totalBill-bill[k]
var halfbill=billFinal/2

if (halfbill===b) {
    console.log("correct bill");
}
else console.log(b-halfbill);