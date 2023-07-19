

function calculateTotal() {
    const clothing = parseInt(document.getElementById('clothing').value) || 0;
    const transport = parseInt(document.getElementById('transport').value) || 0;
    const fuel = parseInt(document.getElementById('fuel').value) || 0;
    const food = parseInt(document.getElementById('food').value) || 0;
    const entertainment = parseInt(document.getElementById('entertainment').value) || 0;
    const airtime = parseInt(document.getElementById('airtime').value) || 0;
  
    const totalExpenses = clothing + transport + fuel + food + entertainment + airtime;
    const income = parseInt(document.getElementById('income').value) || 0;
  
    const totalLeftOver = income - totalExpenses;
    document.getElementById('total-display').innerText = `Total Left Over: ${totalLeftOver}`;
    document.getElementById('total-display').style.display = 'block'; // Display the total when calculated
  
    if (totalLeftOver < 100) {
      funnyMessage("Uh oh! You're in debt. Time to save up!");}
    // } else if (totalLeftOver < 100) {
    //   funnyMessage("Caution! You're cutting it close. Be thrifty!");
    // }
  
    calculate20Percent(totalLeftOver);
  }
  
  // Function to show funny messages
  function funnyMessage(message) {
    alert(message);
  }
  
  // Function to calculate 20% of the left-over amount and display it
  function calculate20Percent(totalLeftOver) {
    const twentyPercent = (totalLeftOver * 0.2).toFixed(2); // Calculate 20% of the left-over amount
  
    document.getElementById('twenty-percent-display').innerText = `20% of the Left Over: ${twentyPercent}`;
    document.getElementById('twenty-percent-display').style.display = 'block'; // Display the result
  }
  
  // Event listener for the calculate button
  document.getElementById('calculateButton').addEventListener('click', calculateTotal);
  
  // Optionally, you can add a function to hide the total display on page load
  function hideTotalDisplay() {
    document.getElementById('total-display').style.display = 'none';
  }
  
  // Call the hideTotalDisplay function to initially hide the total display
  hideTotalDisplay();
  
  ////////////////////////////
  // Code for login
  
  function login() {
    const username = document.getElementById('username').value;
    if (username.trim() === '') {
      alert('Please enter your username.');
    } else {
      displayWelcomeMessage(username);
    }
  }
  
  function displayWelcomeMessage(username) {
    const welcomeMessage = document.getElementById('welcomeMessage');
    welcomeMessage.innerHTML = `Welcome, ${username}!!`;
    welcomeMessage.classList.add('welcome-message-visible');
  
    // Reset the message after 3 seconds (optional)
    setTimeout(() => {
      welcomeMessage.innerHTML = 'Welcome, Guest!!';
      welcomeMessage.classList.remove('welcome-message-visible');
    }, 20000);
  }
  