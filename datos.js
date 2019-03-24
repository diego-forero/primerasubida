const opciones={
    nombre:{
        alias:'n',
        demand:true
    },
    matematicas:{
        alias:'m',
        demand:true
    },
    ingles:{
        demand:true,
        alias:'i'
    },
    programacion:{
        demand:true,
        alias:'p'
    }
}

let obtenerPromedio=(nota_uno,nota_dos,nota_tres)=>(nota_uno+nota_dos+nota_tres)/3;


const argv=require('yargs').command('promedio','Calcular el primediodsasd',opciones).argv

module.exports={
    obtenerPromedio,
    argv
}