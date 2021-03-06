let inputs = document.querySelectorAll("input");
inputs.forEach((input) => (input.value = ""));

async function loginFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (username && password) {
        const response = await fetch('/api/user/login', {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            //console.log({response});
            //console.log
            redirectAnimation('/profile');
            
        } else {
            alert(response.statusText);
        }
    }
}

async function signupFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const monthly_income = document.querySelector('#monthly_income').value.trim();

    if (username && email && password && monthly_income) {
        const response = await fetch('/api/user', {
            method: 'post',
            body: JSON.stringify({
                username,
                email,
                password,
                monthly_income
            
            }),
            headers: { 'Content-Type': 'application/json' }
        })
        console.log(response)

        if (response.ok) {
            redirectAnimation('/profile');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
