// Task 2: listUsers()


export function listUsers() {
    const serverURL = "http://localhost:3000";
    fetch(serverURL + "/users")
    .then(response => response.json())
    .then(response => console.log(response));
}
listUsers();