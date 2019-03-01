const ctx = document.getElementById('traffic-widget').getContext('2d');
const ctx2 = document.getElementById('daily-traffic-widget').getContext('2d');
const ctx3 = document.getElementById('mobile-users-widget').getContext('2d');

const chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            label: "Monthly Traffic",
            backgroundColor: '#aef2e0',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45],
        }]
    },

    // Configuration options go here
    options: {}
});

const chart2 = new Chart(ctx2, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            label: "Monthly Traffic",
            backgroundColor: '#7B72D8',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45],
        }]
    },

    // Configuration options go here
    options: {}
});

const chart3 = new Chart(ctx3, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ["Phones", "Tablets", "Desktop"],
        datasets: [{
            label: "My First dataset",
            backgroundColor: ['#7B72D8', '#F27171', '#339BEA'],
            borderColor: 'rgb(255, 99, 132)',
            data: [20, 30, 45],
        }]
    },

    // Configuration options go here
    options: {}
});


const alertNotify = document.querySelector('.alert-demo');
const alertButton = document.querySelector('#closealert');

alertButton.addEventListener('click', () => {
    alertNotify.style.display = 'none';
});