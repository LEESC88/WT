async function calculateMortgage() {
    let loanAmount = document.getElementById('loanAmount').value;
    let interestRate = document.getElementById('interestRate').value;
    let loanTenure = document.getElementById('loanTenure').value;
    let downPayment = document.getElementById('downPayment').value || 0;
    let extraPayment = document.getElementById('extraPayment').value || 0;
    
    let requestData = {
        loanAmount: parseFloat(loanAmount),
        interestRate: parseFloat(interestRate),
        loanTenure: parseInt(loanTenure),
        downPayment: parseFloat(downPayment),
        extraPayment: parseFloat(extraPayment)
    };

    try {
        let response = await fetch('/calculate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestData)
        });

        let result = await response.json();
        
        if (result.error) {
            document.getElementById('result').innerText = `Error: ${result.error}`;
        } else {
            document.getElementById('result').innerText = `Monthly Payment: RM ${result.monthlyPayment}`;
            document.getElementById('totalInterest').innerText = `Total Interest Paid: RM ${result.totalInterest}`;
            document.getElementById('totalPayment').innerText = `Total Payment Over Loan Term: RM ${result.totalPayment}`;
            document.getElementById('payoffTime').innerText = `Loan Payoff Time: ${result.payoffTime}`;
        }
    } catch (error) {
        document.getElementById('result').innerText = `Error fetching data: ${error.message}`;
    }
}
