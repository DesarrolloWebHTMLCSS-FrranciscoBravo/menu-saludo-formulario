function toggleMenu() {
    const menu = document.querySelector('.menu');
    const menuToggle = document.querySelector('.menu-toggle');
    const content = document.querySelector('.content');

    if (menu.style.width === '200px') {
        menu.style.width = '0';
        menuToggle.style.left = '20px';
        content.style.marginLeft = '0';
    } else {
        menu.style.width = '200px';
        menuToggle.style.left = '220px';
        content.style.marginLeft = '200px';
    }
}
function showWelcomeButton() {
    const welcomeButton = document.getElementById('welcome-button');
    const form = document.getElementById('form');
    welcomeButton.style.display = 'block';
    form.style.display = 'none';
}
function showForm() {
    const welcomeButton = document.getElementById('welcome-button');
    const form = document.getElementById('form');
    welcomeButton.style.display = 'none';
    form.style.display = 'block';
}
function showWelcomeMessage() {
    const welcomeButton = document.getElementById('welcome-button');
    const welcomeMessage = document.getElementById('welcome-message');
    const saludarButton = document.querySelector('.saludar-button');
    const form = document.getElementById('form');
    welcomeButton.style.display = 'none';
    welcomeMessage.style.display = 'block';
    saludarButton.style.display = 'none';
    form.style.display = 'none';

    showWelcomeButton();
}
function closeWelcomeMessage() {
    const welcomeMessage = document.getElementById('welcome-message');
    const saludarButton = document.querySelector('.saludar-button');
    const form = document.getElementById('form');

    welcomeMessage.style.display = 'none';
    saludarButton.style.display = 'block';
    form.style.display = 'none';
}
function saveFormData() {
    const form = document.getElementById('form');
    const saludarButton = document.querySelector('.saludar-button');
    const welcomeButton = document.getElementById('welcome-button');

    form.style.display = 'none';
    saludarButton.style.display = 'block';
    welcomeButton.style.display = 'none';

    showWelcomeButton();

    function isEmailValid(email) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    }
    
    function validateEmail() {
        const emailInput = document.getElementById('email-input');
        const emailError = document.getElementById('email-error');
    
        if (!isEmailValid(emailInput.value)) {
            emailError.textContent = 'Correo inválido';
            emailError.style.color = 'red';
            return false;
        } else {
            emailError.textContent = '';
            return true;
        }
    }
}
const data = [];
function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}
function saveFormData() {
    const nombreInput = document.getElementById('nombre-input').value;
    const apellidoInput = document.getElementById('apellido-input').value;
    const emailInput = document.getElementById('email-input').value;

    if (nombreInput && apellidoInput && validateEmail(emailInput)) {
        const formData = { nombre: nombreInput, apellido: apellidoInput, correo: emailInput };
        data.push(formData);

        document.getElementById('nombre-input').value = '';
        document.getElementById('apellido-input').value = '';
        document.getElementById('email-input').value = '';

        displayData();
    }
}
function displayData() {
    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML = '';

    data.forEach((item, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.nombre}</td>
            <td>${item.apellido}</td>
            <td>${item.correo}</td>
            <td><button onclick="deleteData(${index})">Borrar</button></td>
        `;
        tableBody.appendChild(row);
    });
}
function deleteData(index) {
    data.splice(index, 1);
    displayData();
}
function showTable() {
    const table = document.getElementById('table');
    table.style.display = 'table';
}
function hideTable() {
    const table = document.getElementById('table');
    table.style.display = 'none';
}