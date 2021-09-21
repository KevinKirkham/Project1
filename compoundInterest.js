function calculate() {
    let principle = document.getElementById("principleBox").value;
    let interestRate = document.getElementById("interestBox").value;
    let periods = document.getElementById("periodBox").value;
    let overallTime = document.getElementById("overallTimeBox").value;

    let amount = principle * Math.pow((1 + (interestRate / periods)), (periods * overallTime));

    displayAnswer(amount);
}

function displayAnswer(amount) {
    document.getElementById("calculatedCI").innerHTML = "Calculated Compound Interest";
    document.getElementById("CIValue").innerHTML = amount;
}