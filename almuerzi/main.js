


window.onload = () => {
    fetch('http://localhost:3000/api/meals')
        .then(response => response.json())
        .then(data => {
            const mealsList = document.getElementById('meals-list');
            const submit = document.getElementById('submit');
            const template = data.map(x => '<li>' + x.name + '</li>').join('')

            mealsList.innerHTML = template
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
