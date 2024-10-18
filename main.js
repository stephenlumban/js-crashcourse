const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const form = document.querySelector(".form")
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

form.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if(nameInput.value == "" && emailInput.value == "") {
        //alert("Fill out all fields")
        msg.classList.add('error');
        msg.innerHTML = 'Fill out all fields'

        setTimeout(() => msg.remove(), 3000)
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));
        userList.appendChild(li);

        // Clear fields
        nameInput.value = '';
        emailInput.value = '';
    }


}