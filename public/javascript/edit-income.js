async function editFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="income"]').value.trim();
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/profile-page/');
    } else {
        alert(response.statusText);
    }
}