async function getter(){
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let data = await response.json();
    console.log(data.title);
}

getter();

const header = new Headers();
header.append("Content-Type","application/json");