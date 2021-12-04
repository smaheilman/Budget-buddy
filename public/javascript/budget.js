async function newFormHandler(event) {
    event.preventDefault();
    console.log(document.querySelector('select[name="transaction-category'))

    const monthly_income = document.querySelector('input[name="monthly_income"]')

    const memo = document.querySelector('input[name="transaction-memo"]').value;
    const amount = document.querySelector('input[name="transaction-amount"]').value;
    const category = document.querySelector('select[name="transaction-category').value;
    const date = document.querySelector('input[name="transaction-date').value;

    const response = await fetch(`/api/budget`, {
        method: 'POST',
        body: JSON.stringify({
            total, amount-monthly_income
            amountSpent,
            amountSaved,
            amountRemaining
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/profile');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.new-transaction-form').addEventListener('submit', newFormHandler);