function convertCurrency() {
    const amount = parseFloat(document.getElementById("amount").value);
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;

    // Add your currency conversion logic here or use a third-party API
    // For simplicity, let's assume 1 USD = 0.85 EUR and 1 USD = 0.75 GBP
    const conversionRates = {
        USD: 1,
        EUR: 0.94,
        GBP: 0.82,
        ISD: 83.2
    };

    const convertedAmount = amount * (conversionRates[toCurrency] / conversionRates[fromCurrency]);
    document.getElementById("convertedAmount").textContent = convertedAmount.toFixed(2);
}
