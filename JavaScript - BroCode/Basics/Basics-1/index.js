const PI = 3.14159;

document.getElementById("submitBTN").onclick = function(){
    // Create them exactly when and where you need them!
    const r = document.getElementById("radius").value;
    const circum = 2 * PI * r;
    
    window.alert(`The circumference is ${circum}`);
}