const ctx = document.getElementById('myChart').getContext('2d');

let colors = {
    bills: 'rgb(54, 162, 235)',
    entertainment: 'rgb(255, 99, 132)',
    shopping: 'rgb(255, 159, 64)'
}
const myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3],
            backgroundColor: [
                colors.entertainment,
                colors.bills,
                colors.shopping,
            ],
        }]
    }
});