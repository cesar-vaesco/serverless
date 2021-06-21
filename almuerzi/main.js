// Función que permite combertir texto en etiquetas html
const stringToHtml = (string) =>{
    const parser = new DOMParser();
    const doc = parser.parseFromString(string, 'text/html');
    return doc.body.firstChild
}

//Función que permite renderizar las etiqutas html
const renderItem = (item) => {
    const element = stringToHtml(`<li data-id="${item._id}">${item.name}</li>`)
    console.log(element);
    return element;
}

window.onload = () => {
    fetch('http://localhost:3000/api/meals')
        .then(response => response.json())
        .then(data => {
            const mealsList = document.getElementById('meals-list');
            const submit = document.getElementById('submit');
            // Cargas las etiquetas HTML
            const listItems= data.map(renderItem)
            // Removiendo el elemento parrafo que mostraba el mensae de cargndo
            mealsList.removeChild(mealsList.firstElementChild)
            listItems.forEach(element => mealsList.appendChild(element));
            submit.removeAttribute('disabled');
        })
}

/*
    Ejemplos de cabeceras que pueden acompañar a una petición fetch
    fetch('http://localhost:3000/api/meals'),{
        method: 'GET',
        mode:"cors",
        cache: "no-cache",
        credentials:"same-origin",
        headers:{
            'Content-Type': 'application/json'
        },
        redirect:'follow',
        body: JSON.stringify({user:'lala', password:'chanchito'})
    }*/
