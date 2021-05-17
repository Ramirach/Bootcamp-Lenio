const peliculas = [
    {
        'nombre' : 'spiderman',
        'duración' : 130,
        'genero' : 'acción',
    },

    {
        'nombre' : 'batman',
        'duración' : 120,
        'genero' : 'acción',
    },

    {
        'nombre' : 'shrek',
        'duración' : 110,
        'genero' : 'comedia',
    },

    {
        'nombre' : 'frozen',
        'duración' : 120,
        'genero' : 'infantil',
    }
    
]

const genero = [
    
        "infantil",
        "acción",
        "comedia"
    
];

let filtro = genero.map(function (genero){
    return (peliculas.filter(function(peliculas){
        return (peliculas.genero === genero);
    }))
});

console.log(filtro);