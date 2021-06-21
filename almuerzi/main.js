// Función que permite combertir texto en etiquetas html
const stringToHtml = (string) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(string, 'text/html');
    return doc.body.firstChild
}

//Función que permite renderizar las etiqutas html
const renderItem = (item) => {
    const element = stringToHtml(`<li data-id="${item._id}">${item.name}</li>`)

    element.addEventListener('click', () => {
        /* console.log(`Click en ${item.name}`);
        console.log(item); */
        const mealsList = document.getElementById('meals-list');
        Array.from(mealsList.children).forEach(x => x.classList.remove('selected'));
        element.classList.add('selected');
        /* element.classList.remove('selected'); */

        const mealIdInput = document.getElementById('meals-id');
        mealIdInput.value = item._id
    })

    return element;
}

window.onload = () => {

    const orderForm = document.getElementById('order');
    orderForm.onsubmit =(e) => {
        e.preventDefault();

        const mealId = document.getElementById('meals-id');
        const mealIdValue = mealId.value;
        if(!mealIdValue){
            alert('Debe seleccionar un plato')
            return
        }

        const order ={
            meal_id: mealIdValue,
            user_id:'César',
        }
    }

    fetch('http://localhost:3000/api/meals')
        .then(response => response.json())
        .then(data => {
            const mealsList = document.getElementById('meals-list');
            const submit = document.getElementById('submit');
            // Cargas las etiquetas HTML
            const listItems = data.map(renderItem)
            // Removiendo el elemento parrafo que mostraba el mensae de cargndo
            mealsList.removeChild(mealsList.firstElementChild);
            // Crgndo en la vista los elementos(meals) que vinen de la base de datos
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
