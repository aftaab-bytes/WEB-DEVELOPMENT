// script.js

// Get weather forecast
document.querySelector('#weather button').addEventListener('click', () => {
    // API call to get weather forecast
    fetch('https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=YOUR_API_KEY')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
});

// Get irrigation management system
// document.querySelector('#irrigation button').addEventListener('click', () => {
//     // API call to get irrigation management system
//     fetch('https://api.example.com/irrigation-management')
//         .then(response => response.json