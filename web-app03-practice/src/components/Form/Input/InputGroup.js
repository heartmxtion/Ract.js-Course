import styles from "./InputGroup.module.css";

function InputGroup(props) {
  const [setCurSavings, setYearlyContr, setExpReturn, setDur] = props.setters;

  function inputsHandler(identifier, value) {
    if (identifier === "currentSavings") {
      setCurSavings(value);
    } else if (identifier === "yearlyContibution") {
      setYearlyContr(value);
    } else if (identifier === "expectedReturn") {
      setExpReturn(value);
    } else if (identifier === "duration") {
      setDur(value);
    }
  }

  return (
    <div>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            onInput={(event) =>
              inputsHandler("currentSavings", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            onInput={(event) =>
              inputsHandler("yearlyContibution", event.target.value)
            }
          />
        </p>
      </div>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            onInput={(event) =>
              inputsHandler("expectedReturn", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            onInput={(event) => inputsHandler("duration", event.target.value)}
          />
        </p>
      </div>
    </div>
  );
}

export default InputGroup;
