$(document).ready(function () {
    $("#tabs a").on("click", showTab)
    $("form#pizzaInfo").on("submit", pizzaMaker)
    $("form#contactInfo ").on("submit", contactInfo)
});

function showTab(event){
    event.preventDefault();
    $(this).tab("show");
}

function pizzaMaker(event) {
    event.preventDefault();

    //gets size picked and price
    let sizePrice = parseFloat( $("input[name=size]:checked").val());
    let sizedPicked = $("input[name=size]:checked").data("size");
    //gets crust type
    let crustPicked =$("input[name=crustType]:checked").val();
    //get veggies selected and store in a string
    let veggieCheckedBoxes = $("input[name=veggies]:checked");
    // Declare a variable to hold the subtotal of veggies
    let veggieSubtotal = 0;
    // Declare a variable to hold the veggie names
    let veggiesPicked = "";

    // For each checked box...
    veggieCheckedBoxes.each(function () {

        veggieSubtotal += $(this).data("vprice");
        veggiesPicked += $(this).val();
        veggiesPicked += ", ";
    });

    //get meats selected and store in a string
    let meatCheckedBoxes = $("input[name=meat]:checked");
    // Declare a variable to hold the subtotal of meats
    let meatSubtotal = 0;
    // Declare a variable to hold the meats names
    let meatsPicked = "";

    // For each checked box...
    meatCheckedBoxes.each(function () {

        meatSubtotal += $(this).data("mprice");
        meatsPicked += $(this).val();
        meatsPicked += ", ";
    });

    //find subtotal
    let subTotal = sizePrice + veggieSubtotal + meatSubtotal;
    let tax = subTotal * .056;
    let deliveryFee = 4.99;
    let grandTotal = subTotal + tax + deliveryFee;

    //pizza size output
    $("#pizzaSizeOutput").text(sizedPicked);

    //crust picked output
    $("#crustOutput").text(crustPicked);
    //veggies picked output
    $("#veggieOutput").text(veggiesPicked);
    //meats picked output
    $("#meatOutput").text(meatsPicked);
    //output Subtotal
    $("#subtotalOutput").text(subTotal);
    //output tax
    $("#taxOutput").text(tax);
    //output delivery fee
    $("#deliveryOutput").text(deliveryFee);
    //output grandTotal
    $("#grandTotalOutput").text(grandTotal.toFixed(2));

}
function contactInfo(event) {
    event.preventDefault();
    //get first name
    let fName = $("input#fName").val();
    //get last name
    let lName = $("input#lName").val();
    //get number
    let phoneNumber = $("input#phoneNumber").val();
    //get address
    let address =  $("input#address").val();
    //apt number
    let aptNumber = $("input#apt").val();
    //get city
    let city = $("input#city").val();
    //get state
    let state = $("input#state").val();
    //get zipCode
    let zipCode = $("input#zipCode").val();
    //concat names and output to p#nameOutput
    $("span#nameOutput").text(`${fName} ${lName}`);
    //concat address info and output to addressOutput
    $("span#addressOutput").text(`${address} ${aptNumber} ${city} ${state} ${zipCode}`);
    //output phoneNumber
    $("span#phoneOutput").text(`${phoneNumber}`);

}
