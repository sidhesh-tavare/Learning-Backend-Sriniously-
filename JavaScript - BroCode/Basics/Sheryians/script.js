async function abcd() {
    var response = await fetch('https://randomuser.me/api');
    var data = await response.json();
    console.log(data);
}
const label = document.getElementById("res")
async function GetData() {
    try {
        let res = await fetch('https://randomuser.me/api');
        let data = await res.json();
        let user = data.results[0]; 

        let htmlContent = "";

        // Object.entries breaks the object into pairs of [key, value] dynamically
        Object.entries(user).forEach(([key, value]) => {
            // Check if the value is another object (like name or location)
            if (typeof value === 'object' && value !== null) {
                // If it's a nested object, convert it to a string so it doesn't print [object Object]
                htmlContent += `<strong>${key}:</strong> ${JSON.stringify(value)}<br>`;
            } else {
                // Otherwise, print it normally
                htmlContent += `<strong>${key}:</strong> ${value}<br>`;
            }
        });

        // Inject the whole dynamic list into your label
        label.innerHTML = htmlContent;
        
    } catch(error) {
        console.log("Error:", error);
    } 
}

const button = document.getElementById("data");
button.onclick = GetData;