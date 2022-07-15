const urls = new Array; //Array para las urls de la api

//añado las urls
urls.push('https://random-data-api.com/api/computer/random_computer');
urls.push('https://random-data-api.com/api/crypto_coin/random_crypto_coin');

//función para llamar a la api de los ordenadores
const cargarOrdenadores = async() => {

    //variable que contiene el fetch (la llamada)
    const respuesta = await fetch(urls[0]);

    //pasamos la respuesta a json
    const datos = await respuesta.json();

    //rellenamos las celdas con los datos obtenidos
    let filas = document.getElementsByTagName("td");

    //recorro los datos de la api con un for-in y añado cada texto a su correspondiente celda
    for (prop in datos){

        if(prop == "id") filas[0].textContent = datos[prop];

        else if(prop == "uid") filas[1].textContent = datos[prop];

        else if(prop == "platform") filas[2].textContent = datos[prop];

        else if(prop == "type") filas[3].textContent = datos[prop];

        else if(prop == "os") filas[4].textContent = datos[prop];

        else filas[5].textContent = datos[prop];
        
    }
}

//llamamos a la función para que se ejecute al cargar la web
cargarOrdenadores();

//función para llamar a la api de las criptomonedas
const cargarCryptos = async() => {

    //variable que contiene el fetch (la llamada)
    const respuesta = await fetch(urls[1]);

    //pasamos la respuesta a json
    const datos = await respuesta.json();

    //rellenamos las celdas con los datos obtenidos
    let filas = document.getElementsByTagName("td");

    //recorro los datos de la api con un for-in y añado cada texto a su correspondiente celda
    for (prop in datos){

        if(prop == "id") filas[6].textContent = datos[prop];

        else if(prop == "uid") filas[7].textContent = datos[prop];

        else if(prop == "coin_name") filas[8].textContent = datos[prop];

        else if(prop == "acronym") filas[9].textContent = datos[prop];

        else filas[10].firstElementChild.src = datos[prop];
        
    }
    //desoculto la tabla de las criptomonedas para que solamente se vea si el usuario pulsa su respectivo botón
    document.getElementById('tablaCrypto').style.display = 'block';
}

//al ejecutarse la web, le agrego eventos a los botones
window.onload = () =>{

    //para cada vez que el usuario pulse se cargue un nuevo PC
    document.querySelector('.botonCargar').addEventListener('click', () => {

        cargarOrdenadores();
    })

    //para cada vez que el usuario pulse se cargue una nueva criptomoneda
    document.querySelector('.botonCrypto').addEventListener('click', () => {

        cargarCryptos();
    })

}