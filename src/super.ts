function cargarProductos(prod: string[]): void {
  for (let i: number = 0; i < prod.length; i++) {
    prod[i] = String(prompt("ingrese producto"));
  }
}
function cargarPrecios(arreglo: number[]): void {
  for (let i: number = 0; i < arreglo.length; i++) {
    let precio: number;
    arreglo[i] = Number(prompt("ingrese el precio de " + productos[i]));
  }
}
function stockDeProductos(vector: number[]): void {
  for (let i: number = 0; i < vector.length; i++) {
    let cant: number;
    vector[i] = Number(prompt("ingrese la cantidad de " + productos[i]));
  }
}
function subTotal(precioUnit: number[], stockD: number[]): number {}
let cantDeProductos: number = Number(prompt("ingrese cantidad"));
let productos: string[] = new Array(cantDeProductos);
let precioUnit: number[] = new Array(cantDeProductos);
let stockD: number[] = new Array(cantDeProductos);
let subtotal: number = 0;
let total: number = 0;
let descuento: number = 0.1;
cargarProductos(productos);
cargarPrecios(precioUnit);
stockDeProductos(stockD);
