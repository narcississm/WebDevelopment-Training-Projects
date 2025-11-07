const rates = {
    USD: { USD: 1, EUR: 0.9, TRY: 27 },
    EUR: { USD: 1.1, EUR: 1, TRY: 30 },
    TRY: { USD: 0.037, EUR: 0.033, TRY: 1 }
};

const amountInput = document.getElementById('amount');
const fromSelect = document.getElementById('from-currency');
const toSelect = document.getElementById('to-currency');
const convertBtn = document.getElementById('convert-btn');
const resultDiv = document.getElementById('result');

convertBtn.addEventListener('click', () => {
    const amount = parseFloat(amountInput.value);
    const fromCurrency = fromSelect.value;
    const toCurrency = toSelect.value;

    if (isNaN(amount) || amount <= 0) {
        resultDiv.textContent = "Lütfen geçerli bir miktar giriniz.";
        return;
    }

    const rate = rates[fromCurrency][toCurrency];
    const converted = (amount * rate).toFixed(2);

    resultDiv.textContent = `${amount} ${fromCurrency} = ${converted} ${toCurrency}`;
});