async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="transaction-title"]').value;
    const amount = document.querySelector('input[name="transaction-amount"]').value;
    const category = document.querySelector('input[name="transaction-category').value;
  
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        amount,
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