function calculate() {

    if (checkInput() == true) {

        let principle = Number.parseFloat(document.getElementById("principleBox").value);
        let interestRate = Number.parseFloat(document.getElementById("interestBox").value);
        let periods = Number.parseFloat(document.getElementById("periodBox").value);
        let overallTime = Number.parseFloat(document.getElementById("overallTimeBox").value);

        let amount = principle * Math.pow((1 + (interestRate / periods)), (periods * overallTime));

        displayAnswer(amount);
    }
}

function checkInput() {
    if (document.getElementById("principleBox").value == "" && document.getElementById("interestBox").value == "" &&
        document.getElementById("periodBox").value == "" && document.getElementById("overallTimeBox").value == "") {
            alert("You can't calculate anything if every field is blank. Put in some information!");
            return false;
    }
    if (isNaN(document.getElementById("principleBox").value) == true || document.getElementById("principleBox").value == "") {
        badInput("principle")
        return false;
    }
    if (isNaN(document.getElementById("interestBox").value) == true  || document.getElementById("interestBox").value == "") {
        badInput("interest")
        return false;
    }
    if (isNaN(document.getElementById("periodBox").value) == true  || document.getElementById("periodBox").value == "") {
        badInput("period");
        return false;
    }
    if (isNaN(document.getElementById("overallTimeBox").value) == true || document.getElementById("overallTimeBox").value == "") {
        badInput("overall time  ");
        return false;   
    }
    return true;
}

function displayAnswer(amount) {
    document.getElementById("calculatedCI").innerHTML = "Calculated Compound Interest";
    document.getElementById("CIValue").innerHTML = amount;
}

function badInput(badField) {
    alert("Invalid input in the " + badField + " field");
}