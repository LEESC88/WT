from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('Resident.html')

@app.route('/calculate', methods=['POST'])
def calculate():
    try:
        data = request.json
        loan = float(data['loanAmount'])
        rate = float(data['interestRate']) / 100 / 12
        tenure = int(data['loanTenure']) * 12
        down_payment = float(data.get('downPayment', 0))
        extra_payment = float(data.get('extraPayment', 0))
        
        principal = loan - down_payment
        monthly_payment = (principal * rate) / (1 - (1 + rate) ** -tenure)
        monthly_payment += extra_payment
        
        total_payment = 0
        total_interest = 0
        remaining_balance = principal
        months = 0
        
        while remaining_balance > 0:
            interest = remaining_balance * rate
            principal_paid = monthly_payment - interest
            total_interest += interest
            total_payment += monthly_payment
            remaining_balance -= principal_paid
            months += 1
        
        payoff_years = months // 12
        payoff_months = months % 12
        
        return jsonify({
            "monthlyPayment": round(monthly_payment, 2),
            "totalInterest": round(total_interest, 2),
            "totalPayment": round(total_payment, 2),
            "payoffTime": f"{payoff_years} years and {payoff_months} months"
        })
    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == '__main__':
    app.run(debug=True)
