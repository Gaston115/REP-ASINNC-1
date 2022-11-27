export function Activ4(){
    let cadena = "hola";
    let vocales = ["a", "e", "i","o","u"];
    let arreglo = [];
    for (let i = 0; i < cadena.length; ++i) {
        if (cadena[i].toLowerCase() === vocales) arreglo.push(i)
        
        
    }
    return console.log(arreglo.length);

  
}
export default Activ4;