async function deleteFormHandler(event) {
    event.preventDefault();

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/transaction/${id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        document.location.replace('/profile/');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.delete-transaction-btn').addEventListener('click', deleteFormHandler);