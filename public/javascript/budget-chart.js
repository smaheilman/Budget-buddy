const ctx = document.getElementById('myChart').getContext('2d');

let totals = {
    bills: $('#bills-total').text().trim(),
    entertainment: $("#entertainment-total").text().trim(),
    shopping: $("#shopping-total").text().trim(),
    other: $("#other-total").text().trim()
}

if (totals.bills + totals.entertainment + totals.shopping + totals.other == 0) {
    totals.bills++; 
    totals.entertainment++; 
    totals.shopping++; 
    totals.other++;
}

let colors = {
    bills: 'rgb(54, 162, 235)',
    entertainment: 'rgb(255, 99, 132)',
    shopping: 'rgb(255, 159, 64)',
    other: 'rgb(61, 61, 61)'
}
const myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Bills and Utilities', 'Entertainment', 'Shopping', 'Other'],
        datasets: [{
            label: 'Amount Spent',
            data: [totals.bills, totals.entertainment, totals.shopping, totals.other],
            backgroundColor: [
                colors.bills,
                colors.entertainment,
                colors.shopping,
                colors.other
            ],
        }]
    }
});