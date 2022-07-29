function incressDecressNumber(product, isIncress, price) {
    const inputValue = document.getElementById(product + '-value');
    const inputValueText = inputValue.value;
    if (isIncress == true) {
        const inputValueNumber = parseInt(inputValueText) + 1;
        inputValue.value = inputValueNumber;

        const iphonePrice = document.getElementById(product + '-price');
        const totalIphonePriceAmount = price * inputValueNumber;
        iphonePrice.innerText = totalIphonePriceAmount;
    } else if (inputValueText > 0) {
        const inputValueNumber = parseInt(inputValueText) - 1;
        inputValue.value = inputValueNumber;

        const iphonePrice = document.getElementById(product + '-price');
        const totalIphonePriceAmount = price * inputValueNumber;
        iphonePrice.innerText = totalIphonePriceAmount;
    }
    subtotal()

}
// iphone incress btn 
const iphoneIncressBtn = document.getElementById('iphone-incress');
iphoneIncressBtn.addEventListener('click', function () {

    incressDecressNumber('iphone', true, 1219);

});
// iphone decress btn
const iphoneDecressBtn = document.getElementById('iphone-decress');
iphoneDecressBtn.addEventListener('click', function () {

    incressDecressNumber('iphone', false, 1219)


});
// case incress btn
const caseIncressBtn = document.getElementById('case-incress');
caseIncressBtn.addEventListener('click', function () {

    incressDecressNumber('case', true, 59);

});
// case decress btn
const caseDecressBtn = document.getElementById('case-decress');
caseDecressBtn.addEventListener('click', function () {

    incressDecressNumber('case', false, 59);

});

// subtotal
function subtotal() {
    const subtotal = document.getElementById('sub-total');
    const iphonePriceTotal = document.getElementById('iphone-price');
    const casePriceTotal = document.getElementById('case-price');
    const subtotalAmount = parseFloat(iphonePriceTotal.innerText) + parseFloat(casePriceTotal.innerText);
    subtotal.innerText = subtotalAmount;
    const tax = document.getElementById('tax');
    const taxAmount = subtotalAmount / 10;
    tax.innerText = taxAmount;
    const total = document.getElementById('total');
    total.innerText = taxAmount + subtotalAmount
}




