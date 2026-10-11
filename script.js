function checkNumber() {
    let n = Number(document.getElementById("number").value);
    let result = document.getElementById("result");

    if (document.getElementById("number").value === "" || !Number.isInteger(n) || n < 0) {
        result.innerHTML = "Please enter a valid non-negative integer.";
        return;
    }

    // Sum of first n numbers
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    // Multiplication table
    let table = "";
    for (let i = 1; i <= 10; i++) {
        table += n + " x " + i + " = " + (n * i) + "<br>";
    }

    // Check prime number
    let prime = n >= 2;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            prime = false;
            break;
        }
    }

    // Find factors
    let factors = "";
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            factors += i + ", ";
        }
    }

    if (factors === "") {
        factors = "None";
    } else {
        factors = factors.slice(0, -2);
    }

    // Sum of digits
    let digitNum = n;
    let digitSum = 0;

    while (digitNum > 0) {
        digitSum += digitNum % 10;
        digitNum = Math.floor(digitNum / 10);
    }

    // Check Armstrong number
    let armNum = n;
    let armSum = 0;
    let digits = String(n).length;

    while (armNum > 0) {
        let digit = armNum % 10;
        armSum += Math.pow(digit, digits);
        armNum = Math.floor(armNum / 10);
    }

    let armstrong = armSum === n;

    // Display results
    result.innerHTML = `
        <h3>Results</h3>

        <b>Number:</b> ${n}<br>
        <b>Sum of first ${n} numbers:</b> ${sum}<br>

        <b>Multiplication Table:</b><br>
        ${table}

        <b>Is it a prime number?</b> ${prime ? "Yes" : "No"}<br>

        <b>Factors:</b> ${factors}<br>

        <b>Sum of its digits:</b> ${digitSum}<br>

        <b>Is it an Armstrong number?</b>
        ${armstrong ? "Yes" : "No"}<br>
    `;
}