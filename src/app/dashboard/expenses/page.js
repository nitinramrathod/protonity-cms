"use client"

import { delete_icon, edit_icon } from '@/components/assets/icons/dashboard';
import ArticleList from '@/components/Dashboard/article-list/ArticleList'
import { ActionTd } from '@/components/Dashboard/Users/UserList';
import { deleteExpense } from '@/utils/services';
import React from 'react'
import { useEffect, useState } from 'react';


let default_header = [
  { title: "Name" },
  { title: "Amount" },
  { title: "Mobile" },
  { title: "Duration" },
  { title: "Description" },
  { title: "Start Date" },
  { title: "Action" },
];

const default_button_props = {
  href: "/dashboard/expenses/add",
  title: "Add Expense",
};


const default_stat = [
  { title: "Total Expenses", count: 0 },
  { title: "Active Expenses", count: 0 },
];

const Articles = () => {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchExpenses = async () => {
    try {
      const response = await fetch('https://expense-api-jvlo.onrender.com/api/v1/expenses');

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();
      setExpenses(data);  // Set the fetched data to the state
    } catch (err) {
      setError(err.message);  // Handle errors
    } finally {
      setLoading(false);  // Set loading state to false
    }
  };


  useEffect(() => {
   

    fetchExpenses();
  }, []);

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);

    // Use toLocaleDateString to format the date
    return date.toLocaleDateString('en-US', {
      weekday: 'long',  // Full weekday name (e.g., "Monday")
      year: 'numeric',  // Full year (e.g., "2024")
      month: 'long',    // Full month name (e.g., "January")
      day: 'numeric'    // Numeric day (e.g., "10")
    });
  };



  const handleDeleteUser = (id) => {
    deleteExpense(id)
      .then((res) => {
        console.log("Success", res);
        fetchExpenses();
      })
      .catch((error) => {
        console.log("error", error);
      });
  };


  return (
    <ArticleList
      header={default_header}
      button_props={default_button_props}
      stat={default_stat}
      table_heading="Expenses"
    >
      {expenses?.data?.map(item => {
        return (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.amount}</td>
            <td>{item.mobile}</td>
            <td>{item.duration}</td>
            <td>{item.description}</td>
            <td>{formatDate(item.start_date)}</td>
            <ActionTd>
              <div>

                <button className="edit">{edit_icon}</button>
                <button
                  onClick={() => handleDeleteUser(item._id)}
                  className="delete"
                >
                  {delete_icon}
                </button>
              </div>
            </ActionTd>
          </tr>
        )
      })}

    </ArticleList>
  )
}

export default Articles