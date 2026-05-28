const trial = new Promise((resolve, reject) => {
    try {
        const data = "Hello";
        resolve(data);
    } catch (err) {
        reject(err);
    }
});

console.log(trial);

trial.then((data) => {
    console.log("Resolved Data:", data);
});

trial.catch((err) => {
    console.log("Error:", err);
});

// Chaining 
const promise = new Promise((resolve,reject)=>{
    try{
        const data = 3;
        resolve(data)
    }
    catch(err){
        reject(err)
    }
});

promise
.then((data)=>{
    console.log(data);
    return data*2;
})
.then((data)=>{
    console.log(data);
    return data*2
})
.then((data)=>{
    console.log(data);
    return data*2;
})

const prom = new Promise((resolve, reject) => {
    try {
        const data = JSON.parse("HI");
        resolve("Success");
    } catch (err) {
        reject(err);
    }
});

prom.catch(err => console.log(err.message));
//prom.then(resolve=>console.log(resolve));

function fetchUser() {

    return new Promise((resolve, reject) => {

        fetch("https://randomuser.me/api/")

            .then((response) => {

                // if request failed
                if (!response.ok) {
                    throw new Error("Failed to fetch user");
                }

                return response.json();
            })

            .then((data) => {

                resolve(data);

            })

            .catch((err) => {

                reject(err);

            });

    });

}


fetchUser()

    .then((data) => {

        console.log("Full Data:", data);

        const user = data.results[0];

        console.log("Name:", user.name.first, user.name.last);

        console.log("Email:", user.email);

        console.log("Country:", user.location.country);

    })

    .catch((err) => {

        console.log("Error:", err.message);

    });