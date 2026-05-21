// COUNTER 

const decrease = document.getElementById("decreaseBTN");
const increase = document.getElementById("increaseBTN");
const reset = document.getElementById("resetBTN");
const label = document.getElementById("label");
const history = document.getElementById("logs")
let count = 0 
let historylist = [];

increase.onclick = function(){
    count++;
    label.textContent=count; 
}

decrease.onclick = function(){
    count--;
    label.textContent=count;
}

reset.onclick = function(){
    historylist.push(count)
    count = 0;
    label.textContent=count;
    history.innerText = historylist.join("\n");

}
