
var gcd = function (m,n) {
    var r = m % n;

    while (r != 0) {
        m = n;
        n = r;

        r = m % n;
    }

    return n;
};

function printGCD(m,n) {
    document.writeln("gcd(", m, ",", n, ") = ", gcd(m,n), "<br />");
};

function GCD() {
    var m = prompt("Please enter value for m: ");
    var n = prompt("Please enter value for n: ");

    printGCD(m,n);
}

GCD();