const response = fetch(`/api/user`, {
    method: 'GET',
    body: JSON.stringify({
        username,
        email,
        monthly_income
    }),
    headers: {
        'Content-Type': 'application/json'
    }
});