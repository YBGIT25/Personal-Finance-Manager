import React from 'react';
import { Progress } from 'antd';

const Analytics = ({ allTransaction }) => {
  const totalTransaction = allTransaction.length;
  const totalIncomeTransactions = allTransaction.filter(transaction => transaction.type === 'income');
  const totalExpenseTransactions = allTransaction.filter(transaction => transaction.type === 'expense');
  const totalIncomePercent = (totalIncomeTransactions.length / totalTransaction) * 100;
  const totalExpensePercent = (totalExpenseTransactions.length / totalTransaction) * 100;

  // Total turnover
  const totalTurnover = allTransaction.reduce((acc, transaction) => acc + transaction.amount, 0);
  const totalIncomeTurnover = allTransaction.filter(transaction => transaction.type === 'income')
    .reduce((acc, transaction) => acc + transaction.amount, 0);
  const totalExpenseTurnover = allTransaction.filter(transaction => transaction.type === 'expense')
    .reduce((acc, transaction) => acc + transaction.amount, 0);
  const totalIncomePercentTurnover = (totalIncomeTurnover / totalTurnover) * 100;
  const totalExpensePercentTurnover = (totalExpenseTurnover / totalTurnover) * 100;

  return (
    <div className="analytics-container">
      <div className="analytics-card">
        <div className="analytics-card-header">
          Total Transactions: {totalTransaction}
        </div>
        <div className="analytics-card-body">
          <div>
            <h5 style={{ color: 'green' }}>Income: {totalIncomeTransactions.length}</h5>
            <h5 style={{ color: 'red' }}>Expense: {totalExpenseTransactions.length}</h5>
          </div>
          <div className="analytics-progress">
            <Progress type='circle' strokeColor={'green'} percent={totalIncomePercent.toFixed(0)} />
            <Progress type='circle' strokeColor={'red'} percent={totalExpensePercent.toFixed(0)} />
          </div>
        </div>
      </div>
      <div className="analytics-card">
        <div className="analytics-card-header">
          Total Turnover: {totalTurnover}
        </div>
        <div className="analytics-card-body">
          <div>
            <h5 style={{ color: 'green' }}>Income: {totalIncomeTurnover}</h5>
            <h5 style={{ color: 'red' }}>Expense: {totalExpenseTurnover}</h5>
          </div>
          <div className="analytics-progress">
            <Progress type='circle' strokeColor={'green'} percent={totalIncomePercentTurnover.toFixed(0)} />
            <Progress type='circle' strokeColor={'red'} percent={totalExpensePercentTurnover.toFixed(0)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
