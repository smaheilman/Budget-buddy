// async function getTransactions() {
//     let Id = document.querySelector(".incomeId").innerHTML;
//     let total = 0;

//     const reponse = await fetch(`/api/transaction`, {
//         method: 'GET',
//         where: {id: Id},
//         body: JSON.stringify({
//             monthly_income
//         }),
//         hearders: {
//             'Content-Type': 'application/json'
//         }
//     });

//     if (response.ok) {
//         for(var i = 0; i < response.length; i++){
//             let total = total + transactions[i].amount;
//         }
//     } else {
//         alert(response.statusText);
//     }
// };

// const getStats = (function(){
//     $('<div>').addClass('stats');
// });

// getTransactions();

// //BROKEN
