import React, { useState } from "react";
import styles from "./CalculatingForm.module.css";
import InputGroup from "./Input/InputGroup";

function CalculatingForm(props) {
  const [curSavings, setCurSavings] = useState();
  const [yearlyContr, setYearlyContr] = useState();
  const [expReturn, setExpReturn] = useState();
  const [dur, setDur] = useState();

  const options = { style: "decimal", useGrouping: true, minimumFractionDigits: 2, maximumFractionDigits: 2 };

  let isResultAvialable = true;

  function calculateHandler() {
    const yearlyData = [];

    const inputData = {
      currentSavings: +curSavings,
      yearlyContribution: +yearlyContr,
      expectedReturn: +expReturn / 100,
      duration: +dur,
      totalInterest: 0,
      totalInvested: 0,
    };

    for (let i = 0; i < inputData.duration; i++) {
      const yearlyInterest =
        inputData.currentSavings * inputData.expectedReturn;
      inputData.currentSavings += yearlyInterest + inputData.yearlyContribution;
      inputData.totalInterest += yearlyInterest;
      inputData.totalInvested =
        inputData.currentSavings - inputData.totalInterest;

      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest.toLocaleString("en-US", options),
        savingsEndOfYear: inputData.currentSavings.toLocaleString("en-US", options),
        totalInterest: inputData.totalInterest.toLocaleString("en-US", options),
        yearlyContribution: inputData.yearlyContribution.toLocaleString("en-US", options),
        totalInvested: inputData.totalInvested.toLocaleString("en-US", options),
      });
    }

    if (yearlyData.length > 0) {
      isResultAvialable = true;
      props.calculatedData(yearlyData);
    } else isResultAvialable = false;
  }

  function submitHandler(event) {
    event.preventDefault();
    props.dataInfo(isResultAvialable);
  }

  function resetHanlder() {
    setCurSavings();
    setYearlyContr();
    setExpReturn();
    setDur();
    isResultAvialable = false;
    props.dataInfo(isResultAvialable);
  }

  return (
    <form onSubmit={submitHandler} className={styles["form"]}>
      <InputGroup
        setters={[setCurSavings, setYearlyContr, setExpReturn, setDur]}
      />
      <p className={styles["actions"]}>
        <button
          type="reset"
          onClick={resetHanlder}
          className={styles["buttonAlt"]}
        >
          Reset
        </button>
        <button
          type="submit"
          onClick={calculateHandler}
          className={styles["button"]}
        >
          Calculate
        </button>
      </p>
    </form>
  );
}

export default CalculatingForm;
