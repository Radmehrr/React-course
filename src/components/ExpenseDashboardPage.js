import React from 'react';
import { NavLink } from 'react-router-dom';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashboardPage = () => (
    <div>
        <div className="page-header">
            <div className="content-container"> 
                <button className="button">
                    <NavLink className="header-link" to="/create" activeClassName="is-active">
                        Create Expense
                    </NavLink>
                </button>
            </div>
        </div>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;