let mealsList = [];
let mealsState = [];
let ruta = 'login'; //login , registrer, orders

// Función que permite combertir texto en etiquetas html
const stringToHtml = (string) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(string, 'text/html');
    return doc.body.firstChild
}

//Función que permite renderizar las etiqutas html de lo splatillo
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

const renderOrder = (order, meals) => {
    const meal = meals.find(meal => meal._id === order.meal_id)
    const element = stringToHtml(`<li data-id="${order._id}">${meal.name}  - ${order.user_id}</li> `)
    return element;
}

const inicializaFormulario = () => {
    const orderForm = document.getElementById('order');
    orderForm.onsubmit = (e) => {
        e.preventDefault();

        const submit = document.getElementById('submit')
        submit.setAttribute('disabled', true)
        const mealId = document.getElementById('meals-id');
        const mealIdValue = mealId.value;
        if (!mealIdValue) {
            alert('Debe seleccionar un plato')
            return
        }

        const order = {
            meal_id: mealIdValue,
            user_id: 'Aurelio',
        }

        fetch('http://localhost:3000/api/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(x => x.json(x))
            .then(respuesta => {
                const renderedOrder = renderOrder(respuesta, mealsState)
                const ordersList = document.getElementById('orders-list')
                ordersList.appendChild(renderedOrder)
                submit.removeAttribute('disabled');
            })
    }
}


const inicializaDatos = () => {


    fetch('http://localhost:3000/api/meals')
        .then(response => response.json())
        .then(data => {
            mealsState = data;
            const mealsList = document.getElementById('meals-list');
            const submit = document.getElementById('submit');
            // Cargas las etiquetas HTML
            const listItems = data.map(renderItem)
            // Removiendo el elemento parrafo que mostraba el mensae de cargndo
            mealsList.removeChild(mealsList.firstElementChild);
            // Crgndo en la vista los elementos(meals) que vinen de la base de datos
            listItems.forEach(element => mealsList.appendChild(element));
            submit.removeAttribute('disabled');
            fetch('http://localhost:3000/api/orders')
                .then(response => response.json())
                .then(ordersData => {
                    const ordersList = document.getElementById('orders-list')
                    const listOrders = ordersData.map(orderData => renderOrder(orderData, data))
                    ordersList.removeChild(ordersList.firstElementChild)
                    listOrders.forEach(element => ordersList.appendChild(element))
                    /* console.log(ordersData); */
                })
        })

}

window.onload = () => {

    const loginForm = document.getElementById('login-form')
    loginForm.onsubmit = (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        fetch('http://localhost:3000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            /* body: JSON.stringify({ email: email, password: password }) */
            body: JSON.stringify({ email: email, password: password })
        })
    }


    /* inicializaFormulario()
    inicializaDatos() */

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
