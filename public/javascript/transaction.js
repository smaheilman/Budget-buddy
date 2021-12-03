async function newFormHandler(event) {
    event.preventDefault();
    console.log(document.querySelector('select[name="transaction-category'))

    const memo = document.querySelector('input[name="transaction-memo"]').value;
    const amount = document.querySelector('input[name="transaction-amount"]').value;
    const category = document.querySelector('select[name="transaction-category').value;
    const date = document.querySelector('input[name="transaction-date').value;

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
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.new-transaction-form').addEventListener('submit', newFormHandler);