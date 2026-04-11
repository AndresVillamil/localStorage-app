async function cargarUsuario() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');

        if (!response.ok) {
            console.error('Error fetching user data:', response.status);
            return;
        }

        const user = await response.json();

        console.log('User data:', user);
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.headers.get('Content-Type'));
        console.log(response.ok);
        console.log(response.url);
        console.log(response.type);
        console.log(response.redirected);
        console.log(response.bodyUsed);
        console.log(response.body);
       


        const output = document.getElementById('output');
        output.innerHTML = `
            <p><strong>Name:</strong> ${user.name}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Phone:</strong> ${user.phone}</p>
        `;
    } catch (error) {
        console.error('Error:', error);
    }
}

// Llamar la función
cargarUsuario();



// Promesas
const fetchData = new Promise((resolve, reject) => {
    let success = true; // Cambia a false para simular error

    setTimeout(() => {
        if (success) {
            resolve("Data fetched successfully!");
        } else {
            reject("Error fetching data.");
        }
    }, 2000); // simula 2 segundos de espera
});

fetchData
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    })
    .finally(() => {
        console.log("Fetch attempt completed.");
    });


async function getData() {
    try {
        const result = await fetchData;
        console.log(result);
    } catch (error) {
        console.error(error);
    } finally {
        console.log("Fetch attempt completed.");
    }
}

getData();