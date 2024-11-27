// إظهار الآلة الحاسبة
document.getElementById("calculator-btn").addEventListener("click", function() {
    document.getElementById("calculator").style.display = "block";
});

// إغلاق الآلة الحاسبة
document.getElementById("close-calculator").addEventListener("click", function() {
    document.getElementById("calculator").style.display = "none";
});

// حساب الوتر
document.getElementById("calculate-btn").addEventListener("click", function() {
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    if (!isNaN(a) && !isNaN(b)) {
        let c = Math.sqrt(a * a + b * b);
        document.getElementById("result").textContent = "طول الوتر هو: " + c.toFixed(2);
    } else {
        document.getElementById("result").textContent = "يرجى إدخال قيم صحيحة.";
    }
});