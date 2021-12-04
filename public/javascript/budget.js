//async function signupFormHandler(event) {
//    event.preventDefault();
//
//    const monthly_income = document.querySelector('#monthly_income').value.trim();
//
//    if (monthly_income) {
//        const response = await fetch('/api/user', {
//            method: 'post',
//            body: JSON.stringify({
//                monthly_income
//            }),
//            headers: { 'Content-Type': 'application/json' }
//        })
//        console.log(response)
//
//        if (response.ok) {
//            console.log(monthly_income);
//        } else {
//            alert(response.statusText);
//        }
//    }
//}