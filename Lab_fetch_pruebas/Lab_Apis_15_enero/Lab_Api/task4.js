// Task 4: delUser(number)


export function delUser(id) {
    const serverURL = "http://localhost:3000";
    
    fetch( serverURL + "/users/" + id, {
        method: "DELETE"
    })
    .then(response => {
        if (response.ok) {
            console.log( "Usuario con ID" + id + "eliminado exitosamente.");
        } else {
            console.error("Error al eliminar el usuario con ID" + id);
        }
    })
    .catch(error => console.error("Error:", error));
}

