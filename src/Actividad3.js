export function Activ3ej1(){
    const peliculas = [
        {
            "Titulo": "Peli1",
            "Id": 1,
            "Duracion": 101,
        },
    
        {
            "Titulo": "Peli2",
            "Id": 2,
            "Duracion": 112,
        },
    
        {
            "Titulo": "Peli3",
            "Id": 3,
            "Duracion": 152,
        },
    
        {
            "Titulo": "Peli4",
            "Id": 4,
            "Duracion": 136,
        },
    
        {
            "Titulo": "Peli5",
            "Id": 5,
            "Duracion": 128,
        },
    
        {
            "Titulo": "Peli6",
            "Id": 6,
            "Duracion": 150,
        }
    
    ]
    const buscarporid = peliculas.find(element => element.Id===2);
    return console.log(buscarporid);
}
export function Activ3ej2(){
        const peliculas = [
            {
                "Titulo": "Peli1",
                "Id": 1,
                "Duracion": 101,
            },
        
            {
                "Titulo": "Peli2",
                "Id": 2,
                "Duracion": 112,
            },
        
            {
                "Titulo": "Peli3",
                "Id": 3,
                "Duracion": 152,
            },
        
            {
                "Titulo": "Peli4",
                "Id": 4,
                "Duracion": 136,
            },
        
            {
                "Titulo": "Peli5",
                "Id": 5,
                "Duracion": 128,
            },
        
            {
                "Titulo": "Peli6",
                "Id": 6,
                "Duracion": 150,
            }
         ]
        const filtroporduracion = peliculas.filter(element => element.Duracion <= 120);
        return console.log(filtroporduracion);
    
    }
    export function Activ3ej4(){
        const peliculas = [
            {
                "Titulo": "Peli1",
                "Id": 1,
                "Duracion": 101,
            },
        
            {
                "Titulo": "Peli2",
                "Id": 2,
                "Duracion": 112,
            },
        
            {
                "Titulo": "Peli3",
                "Id": 3,
                "Duracion": 152,
            },
        
            {
                "Titulo": "Peli4",
                "Id": 4,
                "Duracion": 136,
            },
        
            {
                "Titulo": "Peli5",
                "Id": 5,
                "Duracion": 128,
            },
        
            {
                "Titulo": "Peli6",
                "Id": 6,
                "Duracion": 150,
            }
         ]
     const Duracion =  peliculas.forEach(element => peliculas.Duracion);
    return console.log(Duracion);
    }


export default Activ3ej4;