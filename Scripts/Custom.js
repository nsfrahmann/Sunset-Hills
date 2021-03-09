//The Big function

function Sunset() {

//Grab the user inputs as numbers
    let val1 = Number($("#input1").val())
    let val2 = Number($("#input2").val())
    let val3 = Number($("#input3").val())
    let val4 = Number($("#input4").val())
    let val5 = Number($("#input5").val())

//Put them in our array
    let buildArray = [val1, val2, val3, val4, val5];

//Set the array to always include first value
    let currentBuild = buildArray[0];
    let outputArray = [currentBuild];

//Message format to swap with user inputs
    let outputNames = [` Building A at a height of ${buildArray[0]} units`,
        ` Building B at a height of ${buildArray[1]} units`,
        ` Building C at a height of ${buildArray[2]} units`,
        ` Building D at a height of ${buildArray[3]} units`,
        ` Building E at a height of ${buildArray[4]} units`];

//Missed input message
    if (val1 == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You missed some input!',
            confirmButtonText: 'Go Back',
        });

//Else success case swap values with messages and replace first input with first message
    } else {
        for (let i = 0; i < buildArray.length; i++) {
            if (buildArray[i] > currentBuild) {
                currentBuild = buildArray[i];
                outputArray.push(outputNames[i]);
                outputArray.forEach(function (item, i)
                { if (item == val1) outputArray[i] = ` Building A at a height of ${buildArray[0]} units` });
            };
        };

//If first building taller than all others
        stringArray = [`Only Building A at a height of ${buildArray[0]} units can see the Sun.`];

        if (outputArray.length == 1) {
            $("#output").html(`${stringArray[0]}`)

//Message format to output
        } else {
            $("#output").html(`There are ${outputArray.length} buildings that can see the Sun and those are as follows: ${outputArray}.`)
        };
//Open Modal on success case
        $("#exampleModal").modal()
    };
}

//Button to execute
document.getElementById("Sundial").addEventListener("click", function () {
    Sunset()
})

//Regex number only input restriction
$(".numOnly").keypress(function (e) {
    if (!(e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105)) {
        return false;
    };
});

//Fun phone animation
function shakeScreen() {
    document.getElementById("shake").setAttribute("class", "animate__animated animate__shakeY")
}
//Apply the animation functions
function reset() {
    document.getElementById("shake").setAttribute("class", "")
}
document.getElementById("phoneButton").addEventListener("dblclick", shakeScreen)
document.getElementById("thePhone").addEventListener("click", reset)