import React, { useState } from "react";

import "../css/drk-login.css";

export default function EmiForm() {
  const [name, setName] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [pan, setPan] = useState("");
  const [income, setIncome] = useState("");
  const [loan, setLoan] = useState("");

  const getName = (e: any) => {
    setName(e.target.value);
  };

  const getAadhar = (e: any) => {
    setAadhar(e.target.value);
  };

  const getPan = (e: any) => {
    setPan(e.target.value);
  };

  const getIncome = (e: any) => {
    setIncome(e.target.value);
  };

  const getLoan = (e: any) => {
    setLoan(e.target.value);
  };

  const sendData = (e: FormDataEvent) => {
    e.preventDefault();
    console.log("hello");
    console.log("name--->" + name);
  };
  return (
    <div className="logincenter">
      <form>
        <div className="mb-3">
          <label className="mylable info">Customer Name</label>
          <input onChange={getName} type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="mylable info">Customer Aadhar</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label className="mylable info">Pan Number</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label className="mylable info">Income</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label className="mylable info">Loan Amount</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <button onClick={sendData} type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
