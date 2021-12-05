async function editFormHandler(event) {
    event.preventDefault();

    const memo = document.querySelector('input[name="transaction-memo"]').value.trim();
    const amount = document.querySelector('input[name="transaction-amount"]').value.trim();
    const date = document.querySelector('input[name="transactoin-date"]').value;
    const category = document.querySelector('input[name="transactoin-category"]').value;
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/transaction/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            memo,
            amount,
            date,
            category
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/profile/');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.edit-transaction-form').addEventListener('submit', editFormHandler);