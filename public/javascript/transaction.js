async function newFormHandler(event) {
    event.preventDefault();

    const monthly_income = document.querySelector('input[name="monthly_income"]')
    const memo = document.querySelector('input[name="transaction-memo"]').value;
    const amount = document.querySelector('input[name="transaction-amount"]').value;
    const category = document.querySelector('select[name="transaction-category').value;
    const date = document.querySelector('input[name="transaction-date').value;
    //const user_id = window.location.toString().split('/')[
    //  window.location.toString().split('/').length - 1
    //];

    const response = await fetch(`/api/transaction`, {
        method: 'POST',
        body: JSON.stringify({
            amount,
            date,
            memo,
            category
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/profile');
        console.log(user_id);
    } else {
        alert(response.statusText);
    }

}

document.querySelector('.new-transaction-form').addEventListener('submit', newFormHandler);