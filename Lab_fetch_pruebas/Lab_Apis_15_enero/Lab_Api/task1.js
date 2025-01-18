// Task 1: getServerURL()



// ^identificar Url del servidor ;   npx json-server --watch db.json --port 3000 
// ^(Comandos en consola →  npm install -g json-server 
// ^comando para ejecutar servidor, archivo db.json →  json-server --watch db.json )



export function getServerURL() {
   return "http://localhost:3000/users"
}

console.log(getServerURL())