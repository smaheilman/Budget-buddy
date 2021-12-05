const response = fetch('/api/transaction/remaining', {
    method: 'PUT',
    body: JSON.stringify({
        user_id: id
    }),
    headers: {
        'Content-Type': 'application/json'
    }
});

if (response.ok) {
    
} else {
    alert(response.statusText);
}