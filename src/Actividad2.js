export function Activ2ej1(){
let alumno =
[
    { "nombre": "Juan",
      "apellido": "Gomez",
      "liceo": "Provi",
      "clase": "5to"
    }
    ]

    
   
    let copiaAlumno = alumno.slice();

alumno[0].nombre = "Diego";
return console.log(alumno), console.log(copiaAlumno);
}

export function Activ2ej2(){
    const alumno =
    [
        { "nombre": "Juan",
          "apellido": "Gomez",
          "liceo": "Provi",
          "clase": "5to"
        }
        ]
        const copiaAlumno = [].concat(alumno)
    
    copiaAlumno[0].nombre = "Diego";
    return console.log(alumno), console.log(copiaAlumno);

}


export default Activ2ej2;

