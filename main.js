
function calc() {
    var a = parseInt(document.querySelector("#value1").value);
    var b = parseInt(document.querySelector("#value2").value);
    var mySaver = 2.6
    var bonusSaver = 2.55 + 0.15
    var pensionSaver = 2.2
    var childSaver = 3.9
    var op = document.querySelector("#operator").value;
    var calculate;

    if (op == "add") {
    calculate = a + b;
    } else if (op == "min") {
    calculate = a - b;
    } else if (op == "div") {
    calculate = a / b;
    } else if (op == "mul") {
    calculate = a * b;
    }

    document.querySelector("#result").innerHTML = calculate;
}