const fs = require('fs');
var arregloAns = [];
var datosJson = fs.readFile("datos/products-ecommerce.json")
var elementos = JSON.parse(datosJson);
for (let i = 0; i < elementos.items.lenght; i++){
  let element = elementos.items[i];
  if (element.price.amount < 10000)
    arregloAns.push(element);
}
var respuesta = "";
arregloAns.forEach(element => { let newstring = JSON.stringify(element, null, 2);
    respuesta += newstring + ",\n";})
try {
  fs.writeFileSync("datos/output.json", respuesta);
  console.log("Archivo creado correctamente\n");
} catch(err) {
  console.log(err);
}

