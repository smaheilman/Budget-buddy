
const transContext = document.getElementById('trans-chart').getContext('2d');
const billContext = document.getElementById('bill-chart').getContext('2d');

const transactionEls = $('.transaction-row');


let transactionObject = {
    bills: {
        trx: [],
        total: 0
    },
    entertainment: {
        trx: [],
        total: 0
    },
    shopping: {
        trx: [],
        total: 0
    },
    other: {
        trx: [],
        total: 0
    },
};

transactionEls.each(function () {
    let id = $(this).attr('id').split('-')[0]
    console.log(id)
    let trxObj = {
        name: $(`#${id}-name`).text().trim(),
        amount: parseFloat($(`#${id}-amount`).text().trim().replace('$', '')),
        date: $(`#${id}-date`).text().trim()
    }
    if ($(`#${id}-category`).text().trim() === 'Bills/Utilities') {
        transactionObject.bills.trx.push(trxObj);
        transactionObject.bills.total += trxObj.amount;
    }
    if ($(`#${id}-category`).text().trim() === 'Entertainment') {
        transactionObject.entertainment.trx.push(trxObj);
        transactionObject.entertainment.total += trxObj.amount;
    }
    if ($(`#${id}-category`).text().trim() === 'Shopping') {
        transactionObject.shopping.trx.push(trxObj);
        transactionObject.shopping.total += trxObj.amount;
    }
    if ($(`#${id}-category`).text().trim() === 'Other') {
        transactionObject.other.trx.push(trxObj);
        transactionObject.other.total += trxObj.amount;
    }
})
console.log(transactionObject)
let totals = {
    bills: transactionObject.bills.total,
    entertainment: transactionObject.entertainment.total,
    shopping: transactionObject.shopping.total,
    other: transactionObject.other.total
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
let transData = {
    labels: [],
    data: [],
    backgroundColor: [

    ]
}
transactionObject.bills.trx.forEach(trx => {
    transData.labels.push(trx.name);
    transData.data.push(trx.amount);
    transData.backgroundColor.push(colors.bills)
});
transactionObject.entertainment.trx.forEach(trx => {
    transData.labels.push(trx.name);
    transData.data.push(trx.amount);
    transData.backgroundColor.push(colors.entertainment)
})
transactionObject.shopping.trx.forEach(trx => {
    transData.labels.push(trx.name);
    transData.data.push(trx.amount);
    transData.backgroundColor.push(colors.shopping)
})
transactionObject.other.trx.forEach(trx => {
    transData.labels.push(trx.name);
    transData.data.push(trx.amount);
    transData.backgroundColor.push(colors.other)
})
console.log(transData)

const transChart = new Chart(transContext, {
    type: 'pie',
    data: {
        labels: transData.labels,
        datasets: [{
            label: 'Transactions',
            data: transData.data,
            backgroundColor: transData.backgroundColor
        }]

    }
})
const billChart = new Chart(billContext, {
    type: 'pie',
    data: {
        labels: ['Bills and Utilities', 'Entertainment', 'Shopping', 'Other'],
        datasets: [{
            label: 'Categories',
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