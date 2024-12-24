async function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
  
    if (!amount) {
      alert('Please enter an amount to convert.');
      return;
    }
  
    const apiUrl = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;
  
    try {
      // Fetch exchange rates
      const response = await fetch(apiUrl);
      const data = await response.json();
  
      // Get the exchange rate
      const rate = data.rates[toCurrency];
      const convertedAmount = (amount * rate).toFixed(2);
  
      // Display the result
      document.getElementById('result').textContent = 
        `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
    } catch (error) {
      console.error('Error fetching exchange rates:', error);
      document.getElementById('result').textContent = 'Error converting currency.';
    }
  }
  