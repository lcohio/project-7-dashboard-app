const traffic = document.getElementById('traffic-widget').getContext('2d');
const dailyTraffic = document.getElementById('daily-traffic-widget').getContext('2d');
const mobileUsers = document.getElementById('mobile-users-widget').getContext('2d');
const alertNotify = document.querySelector('.alert-demo');
const alertButton = document.querySelector('#closealert');
const sendButton = document.querySelector('#submit-form');
const textField = document.querySelector('#message-form textarea');
const searchUser = document.getElementById('user-search');





const chart = new Chart(traffic, {
    // The type of chart we want to create
    type: 'line',

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

const chart2 = new Chart(dailyTraffic, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            label: "Monthly Traffic",
            backgroundColor: '#7B72D8',
            borderColor: 'rgb(255, 99, 132)',
            data: [2, 5, 9, 13, 20, 30, 45],
        }]
    },

    // Configuration options go here
    options: {}
});

const chart3 = new Chart(mobileUsers, {
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

// Hide alert bar when user clicks the close button

alertButton.addEventListener('click', (e) => {
    alertNotify.style.display = 'none';
    e.preventDefault();
});

// Handle user messaging. If either "search" or "message" field is blank, display a warning. Otherwise, notify user the message was sent

sendButton.addEventListener('click', (e) => {
    if (textField.value === "" || searchUser.value === "") {
        e.preventDefault();
        alert('Please complete both fields.')
    } else {
        alert('Your message has been successfully sent!')
    }
});