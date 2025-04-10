document.addEventListener('DOMContentLoaded', () => {
  const jokeText = document.getElementById('joke-text');
  const getJokeBtn = document.getElementById('get-joke-btn');

  // Function to fetch a dad joke from the API
  async function fetchDadJoke() {
    try {
      jokeText.textContent = 'Loading...';
      
      const response = await fetch('https://icanhazdadjoke.com/', {
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      
      const data = await response.json();
      jokeText.textContent = data.joke;
    } catch (error) {
      jokeText.textContent = 'Failed to fetch a joke. Please try again later.';
      console.error('Error fetching dad joke:', error);
    }
  }

  // Event listener for the button
  getJokeBtn.addEventListener('click', fetchDadJoke);

  // Fetch a joke when the page loads
  fetchDadJoke();
});