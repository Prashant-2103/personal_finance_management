// Function to fetch expenses from local storage
function getExpenses() {
    return JSON.parse(localStorage.getItem('expenses')) || [];
}

// Function to prepare data for the chart
function prepareChartData(expenses) {
    const categories = {};
    expenses.forEach(expense => {
        if (!categories[expense.category]) {
            categories[expense.category] = 0;
        }
        categories[expense.category] += expense.amount;
    });

    return {
        labels: Object.keys(categories),
        datasets: [{
            label: 'Expenses by Category',
            data: Object.values(categories),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    };
}

// Function to render the chart
function renderChart() {
    const ctx = document.getElementById('expenseChart').getContext('2d');
    const expenses = getExpenses();
    const chartData = prepareChartData(expenses);

    new Chart(ctx, {
        type: 'bar', // You can change this to 'pie', 'line', etc.
        data: chartData,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Render the chart when the document is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    renderChart();
});
