function obtenerListaDioses(){
    let aDioses;
    if (aDioses == null){
        aDioses = ['Zeus', 'Hera', 'Poseidón', 'Dionisio', 'Apolo', 'Artemisa', 'Hermes', 'Atenea', 'Ares'];
    }
    return aDioses;
}

function obtenerListaHijos(){
    let aHijos;
    if (aHijos == null){
        aHijos = [26, 28, 16, 34, 14, 26, 38, 12, 9];
    }
    return aHijos;
}
function determinarDiosMasHijos(){
    let listaDioses = obtenerListaDioses();
    let listaHijos = obtenerListaHijos();
    let nMayor = 0;
    let sDiosMasHijos = '';
    let nTamanno = listaDioses.length; // como ambos arreglos miden lo mismo se puede usar el tamaño de cualquiera de los dos

    for(let i = 0; i < nTamanno; i++){
        if(listaHijos[i] > nMayor){
            nMayor = listaHijos[i]; // actualiza el mayor con la cantidad de hijos que tiene ese dios
            sDiosMasHijos = listaDioses[i]; // actualiza el nombre del dios con más hijos, tomándolo del arreglo de dioses en la posición donde se encontró el mayor
        }
    }
    return sDiosMasHijos;
}

function determinarDiosMenosHijos(){
    let listaDioses = obtenerListaDioses();
    let listaHijos = obtenerListaHijos();
    let nMenor = 9999;
    let sDiosMenosHijos = '';
    let nTamanno = listaDioses.length; // como ambos arreglos miden lo mismo se puede usar el tamaño de cualquiera de los dos

    for(let i = 0; i < nTamanno; i++){
        if(listaHijos[i] < nMenor){
            nMenor = listaHijos[i]; // actualiza el mayor con la cantidad de hijos que tiene ese dios
            sDiosMenosHijos = listaDioses[i]; // actualiza el nombre del dios con más hijos, tomándolo del arreglo de dioses en la posición donde se encontró el mayor
        }
    }
    return sDiosMenosHijos;
}

function determinarSumatoriaHijos(){
    let listaHijos = obtenerListaHijos();
    let nSumatoria = 0;
    let nTamanno = listaHijos.length;
    for(let i = 0; i < nTamanno; i++){
        nSumatoria += listaHijos[i];
    }
    return nSumatoria;
}

function determinarPromedioHijos(){
    let listaHijos = obtenerListaHijos();
    let nSumatoria = determinarSumatoriaHijos(); //Es otra forma de hacerlo diferente a lo visto en la clase anterior, donde se recibía la sumatoria por parámetro
    let nPromedio = 0; 
    let nTamanno = listaHijos.length;
    
    nPromedio = nSumatoria / nTamanno;
    return nPromedio.toFixed(2); // para que muestre solo 2 decimales
}

function existeDios(pNombreDios){
    let posicionEncontrada = -1; // se inicializa en -1 xq es un valor inválido para el índice de un arreglo ya que siempre inician en 0
    let listaDioses = obtenerListaDioses();
    let nTamanno = listaDioses.length; 
    for(let i = 0; i < nTamanno; i++){
        if(pNombreDios === listaDioses[i]){
            posicionEncontrada = i;
        }
    }
    return posicionEncontrada;
}