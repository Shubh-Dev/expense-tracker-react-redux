import React from 'react';
import './ExpenseItem.css';

const ExpenseItem = () => {
  const objOfItems = [
    {
      date: '2022-05-10',
      title: 'buy washing machine',
      amount: 90.3,
    },
  ];
  return (
    <div className="expense-item">
      <h2>{objOfItems[0].date}</h2>
      <div className="expense-item__description">
        <h2>{objOfItems[0].title}</h2>
        <div className="expense-item__price">{objOfItems[0].amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
