 // Task 3: addUser(first_name, last_name, email)


export function addUser(firstName, lastName, email) {
    const serverURL = "http://localhost:3000";

    fetch(serverURL + "/users" )
        .then(response => response.json())
        .then(users => {
            
            let maxId = 0;
            for (let i = 0; i < users.length; i++) {
                if (users[i].id > maxId) {
                    maxId = users[i].id;
                }
            }
            const nuevoId = users.length > 0 ? maxId + 1 : 1;
            
            const nuevoUser = {
                id: nuevoId,
                first_name: firstName,
                last_name: lastName,
                email: email
            };

            
            return fetch(serverURL + "/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8"
                },
                body: JSON.stringify(nuevoUser)
            });
        })
        .then(response => {
            if (response.ok) {
                console.log("Usuario agregado exitosamente.");
            } else {
                console.error("Error al agregar el usuario.");
            }
        })
        .catch(error => console.error("Error:", error));
}

addUser("6", "Kai", "Nathaniel", "kai.n@example.org");

