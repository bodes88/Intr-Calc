function calculate() {
    var x, text;
    x = document.getElementById("numb").value;

    if (isNaN(x) || x < 0 || x > 30) {
        text = 'Please enter a valid interest rate';
    } else {
        text = 'Valid interest rate';
    }
    document.getElementById("test").innerHTML = text;
}

function button() {
<button type="button" onclick="calculate()">Calculate</button>
    }