// Mock JSON data
const json1 = { "statisticA": 45, "statisticB": 30, "statisticC": 60 };
const json2 = { "statisticA": 50, "statisticB": 35, "statisticC": 55 };
const json3 = { "statisticA": 55, "statisticB": 40, "statisticC": 50 };

// Extracting data for chart
const statistics = Object.keys(json1);
const dataset1 = statistics.map(stat => json1[stat]);
const dataset2 = statistics.map(stat => json2[stat]);
const dataset3 = statistics.map(stat => json3[stat]);

// Create Chart
const ctx = document.getElementById('myChart').getContext('2d');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: statistics,
    datasets: [
      { label: 'File 1', data: dataset1, backgroundColor: 'rgba(75, 192, 192, 0.6)' },
      { label: 'File 2', data: dataset2, backgroundColor: 'rgba(255, 159, 64, 0.6)' },
      { label: 'File 3', data: dataset3, backgroundColor: 'rgba(153, 102, 255, 0.6)' }
    ]
  },
  options: {
    scales: {
      y: { beginAtZero: true }
    }
  }
});