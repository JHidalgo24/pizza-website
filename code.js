$(document).ready(function () {
    $("#tabs a").on("click", showTab)
    $("#toasterButton").on("click",toaster)
    $("#laptopButton").on("click",laptop)
    $("#phoneButton").on("click",phone)
    $("#televisionButton").on("click",television)
});

function showTab(event){
    event.preventDefault();
    $(this).tab("show");
}

