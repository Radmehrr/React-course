import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { AddExpense } from "../actions/expenses";

const AddExpensePage = (props) => (
  <div>
    <div className="page-header">
      <div className="content-container">
        <h1 className="">Add Expense</h1>
      </div>
    </div>
    <div className="content-container">
      <ExpenseForm
        onSubmit={(expense) => {
          props.dispatch(AddExpense(expense));
          props.history.push("/");
        }}
      />
    </div>
  </div>
);

export default connect()(AddExpensePage);
