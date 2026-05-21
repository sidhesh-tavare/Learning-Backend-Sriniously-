const min =1 ;
const max = 6 ;
let res;

const rollbtn = document.getElementById("roll")

rollbtn.onclick =function(){
    res = Math.floor(Math.random()*(max-min+1)) + min;
    showToast(`You rolled a ${res} !`);

}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}
