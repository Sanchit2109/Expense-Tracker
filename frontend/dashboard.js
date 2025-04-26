const ctx = document.getElementById('expenseChart').getContext('2d');

new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Food', 'Transport', 'Utilities', 'Entertainment', 'Shopping'],
    datasets: [{
      label: 'Expenses',
      data: [12000, 5000, 8000, 4500, 6000],
      backgroundColor: [
        '#5a6ee7',
        '#ffb347',
        '#91e5f6',
        '#ff6f91',
        '#7ed6df'
      ],
      borderWidth: 2,
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          color: '#333',
          padding: 20,
        }
      }
    }
  }
});
