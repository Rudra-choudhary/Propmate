// MortgageCalculator.js
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './MortgageCalculator.css';

function MortgageCalculator() {
  const { state } = useLocation();
  const [price, setPrice] = useState(state?.price || '');
  const [downPayment, setDownPayment] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  const calculateMortgage = () => {
    const loanAmount = price - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numPayments = loanTerm * 12;

    const payment =
      (loanAmount * monthlyRate) /
      (1 - Math.pow(1 + monthlyRate, -numPayments));

    setMonthlyPayment(payment.toFixed(2));
  };

  return (
    <div className="calculator">
      <h2>Mortgage Calculator</h2>

      <label>Property Price</label>
      <input type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} />

      <label>Down Payment</label>
      <input type="number" value={downPayment} onChange={(e) => setDownPayment(Number(e.target.value))} />

      <label>Interest Rate (%)</label>
      <input type="number" value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))} />

      <label>Loan Term (Years)</label>
      <input type="number" value={loanTerm} onChange={(e) => setLoanTerm(Number(e.target.value))} />

      <button onClick={calculateMortgage}>Calculate</button>

      {monthlyPayment && (
        <div className="calculator-result">
          Estimated Monthly Payment: ${monthlyPayment}
        </div>
      )}
    </div>
  );
}

export default MortgageCalculator;
