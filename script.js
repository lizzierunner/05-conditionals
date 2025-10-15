// Get references to form elements
const weatherForm = document.getElementById('weatherForm');
const suggestionSection = document.getElementById('suggestion');

// Add event listener for form submission
weatherForm.addEventListener('submit', function(event) {
  // Prevent the form from refreshing the page
  event.preventDefault();
  
  // Get the user's input values
  const weather = document.getElementById('weather').value;
  const temperature = document.getElementById('temperature').value;
  
  // Check if both weather and temperature are provided
  if (!weather || !temperature) {
    suggestionSection.innerHTML = `<p>⚠️ Please select weather and enter temperature!</p>`;
    return;
  }
  
  // Generate weather suggestion based on input
  const suggestion = getWeatherSuggestion(weather, temperature);
  
  // Display the suggestion
  suggestionSection.innerHTML = `<p>${suggestion}</p>`;
});

// Function to generate weather-appropriate suggestions
function getWeatherSuggestion(weather, temp) {
  const temperature = parseInt(temp);
  let message = "";
  
  // Check if weather is cloudy or rainy and suggest a light jacket
  if (weather === "cloudy" || weather === "rainy") {
    message = `It's ${weather}! A light jacket might be a good idea. 🧥`;
    
    // Additionally check if temperature is below 50°F
    if (temperature < 50) {
      message += " Also, since it's below 50°F, wear a warm jacket! 🧥❄️";
    }
    
    return message;
  }
  
  // Check if temperature is below 50°F for other weather conditions
  if (temperature < 50) {
    message = "🥶 It's below 50°F! Wear a warm jacket! 🧥❄️ ";
  }
  
  // Check weather conditions and provide appropriate suggestions
  if (weather === "sunny") {
    if (temperature >= 80) {
      message += "☀️ It's hot and sunny! Bring sunglasses 🕶️, sunscreen 🧴, and stay hydrated with water 💧";
    } else if (temperature >= 60) {
      message += "🌞 Perfect sunny weather! Don't forget your sunglasses 🕶️ and maybe a light jacket 🧥";
    } else {
      message += "☀️ Sunny but cool! Bring sunglasses 🕶️ and enjoy the sunshine!";
    }
  } else if (weather === "snowy") {
    message += "❄️ Snow day! Bundle up with a heavy coat 🧥, warm hat 🧢, gloves 🧤, and waterproof boots 👢";
  } else if (weather === "windy") {
    if (temperature >= 65) {
      message += "💨 Windy weather! Secure loose items, wear layers 👕, and maybe bring a windbreaker 🧥";
    } else {
      message += "💨 Cold and windy! Wear a wind-resistant jacket 🧥, hat 🧢, and secure any loose clothing!";
    }
  }
  
  return message;
}